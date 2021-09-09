import { LightningElement, track, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getOmniscriptList from '@salesforce/apex/vlc_IndSearchResults.getOmniscriptList';
import getOmniscriptByType from '@salesforce/apex/vlc_IndSearchResults.getOmniscriptByType';
import GET_DIFFERENCE_CHANNEL from '@salesforce/messageChannel/GetDifferenceChannel__c';

export default class OmniVersionComparatorHeader extends LightningElement {
    search = '';
    omniscripts;
    showConfig = true;
    primaryVersion;
    secondaryVersion;
    selectedOmniscript;
    showOmniscriptListFlag = false;
    selectedOmniscriptData = { recordId: null, name: null, type: null, subType: null, language: null };
    primaryVersionOptions = [];
    secondaryVersionOptions = [];

    @track searchedOmniscripts = [];

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        getOmniscriptList()
            .then((data) => {
                this.omniscripts = JSON.parse(data);
                console.log('RS data', this.omniscripts);
                this.searchedOmniscripts = JSON.parse(JSON.stringify(this.omniscripts)); // This will create a deep clone
                // this.iconFlag = false;
                // this.clearIconFlag = true
            })
            .catch(error => this.showToast('Error', error.message, 'error'));
    }

    handleShow() {
        this.showConfig = !this.showConfig;
    }

    handleFocus() {
        if (!this.showOmniscriptListFlag) {
            this.showOmniscriptListFlag = true;
            this.template
                .querySelector('.accounts_list')
                .classList.remove('slds-hide');
        }
    }

    handleKeyUp(event) {
        if (!this.showOmniscriptListFlag) {
            this.showOmniscriptListFlag = true;
            this.template
                .querySelector('.accounts_list')
                .classList.remove('slds-hide');
        }

        const searchKey = event.target.value;
        this.search = searchKey;

        this.searchedOmniscripts = this.omniscripts.filter(omniscript => {
            return omniscript.Name.toLowerCase().includes(searchKey.toLowerCase()) || 
                omniscript.vlocity_ins__Type__c.toLowerCase().includes(searchKey.toLowerCase()) || 
                omniscript.vlocity_ins__SubType__c.toLowerCase().includes(searchKey.toLowerCase()) || 
                omniscript.vlocity_ins__Language__c.toLowerCase().includes(searchKey.toLowerCase())
        });
    }

    handleRemoveSelectedOption() {
        // this.version = '';
        this.selectedOmniscriptData.recordId = null;
        this.versionOptions = [];

        this.template
            .querySelector('.selectedOption')
            .classList.add('slds-hide');
        this.template
            .querySelector('.slds-combobox__form-element')
            .classList.remove('slds-input-has-border_padding');

        this.showOmniscriptListFlag = false;
    }

    handleOSChange(event) {
        this.selectedOmniscript = event.currentTarget.dataset.name;
        this.selectedOmniscriptData.recordId = null;
        this.selectedOmniscriptData.name = event.currentTarget.dataset.name;
        this.selectedOmniscriptData.type = event.currentTarget.dataset.type;
        this.selectedOmniscriptData.subType = event.currentTarget.dataset.subType;
        this.selectedOmniscriptData.language = event.currentTarget.dataset.language;

        // Add code related to fetching different version fo an omniscript
        const payload = { type: this.selectedOmniscriptData.type, subType: this.selectedOmniscriptData.subType, language: this.selectedOmniscriptData.language };

        getOmniscriptByType(payload)
            .then(versionData => {
                versionData = JSON.parse(versionData);
                console.log('RS primaryVersionOptions', versionData);
                this.primaryVersionOptions = versionData.map(data => ({ label: `Version - ${data.vlocity_ins__Version__c}`, value: `${data.Id}` }));
                this.secondaryVersionOptions = versionData.map(data => ({ label: `Version - ${data.vlocity_ins__Version__c}`, value: `${data.Id}` }));
            })
            .catch(error => this.showToast('Error', error.message, 'error'));

        this.template
            .querySelector('.selectedOption')
            .classList.remove('slds-hide');
        this.template
            .querySelector('.accounts_list')
            .classList.add('slds-hide');
        this.template
            .querySelector('.slds-combobox__form-element')
            .classList.add('slds-input-has-border_padding');
    }

    handlePrimaryVersionChange(event) {
        const versionId = event.target.value;
        this.primaryVersion = versionId;
        console.log('RS versionId', versionId, this.primaryVersion);
    }

    handleSecondaryVersionChange(event) {
        const versionId = event.target.value;
        this.secondaryVersion = versionId;
        console.log('RS versionId', versionId, this.secondaryVersion);
    }

    getDifference() {
        console.log('RS versionId', this.primaryVersion, this.secondaryVersion);
        let secondaryVersion = this.template.querySelector('.secondaryVersion');
        if (this.primaryVersion === this.secondaryVersion) {
            secondaryVersion.setCustomValidity('Primary and secondary versions cannot be the same');
            secondaryVersion.reportValidity();
            return;
        }

        secondaryVersion.setCustomValidity('');
        secondaryVersion.reportValidity();

        // Publish hit difference event
        const payload = { primaryVersion: this.primaryVersion, secondaryVersion: this.secondaryVersion.name };
        publish(this.messageContext, GET_DIFFERENCE_CHANNEL, payload);
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title, message, variant
        });
        this.dispatchEvent(event);
    }
}