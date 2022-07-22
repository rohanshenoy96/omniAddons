import { LightningElement, wire, track } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getOmniscriptList from '@salesforce/apex/vlc_IndSearchResults.getOmniscriptList';
import getOmniscriptByType from '@salesforce/apex/vlc_IndSearchResults.getOmniscriptByType';
import getSearchResults from '@salesforce/apex/vlc_IndSearchResults.getSearchResults';
import UPDATE_OMNISCRIPT_CHANNEL from '@salesforce/messageChannel/UpdateOmniscriptChannel__c';
import SEARCH_UPDATE_CHANNEL from '@salesforce/messageChannel/SearchUpdateChannel__c';

export default class OmniFinderHeader extends LightningElement {
    selectedOmniscript;
    selectedOmniscriptData = { recordId: null, name: null, type: null, subType: null, language: null };
    omniscripts;
    search = '';
    version = '';
    globalSearchText = 'Search Omniscript for any text globally. This includes any condition, set values, IP or any other element.'
    showOmniscriptListFlag = false;
    isVersionDisabled = true;
    isModalOpen = false;
    searchExecutionTime = 0;

    @track searchedOmniscripts = [];
    @track versionOptions = [];

    @wire(MessageContext)
    messageContext;

    get searchExecutedTimeString() {
        return `${parseInt(this.searchExecutionTime)}`;
    }

    get isSearchExecuted() {
        return this.searchExecutionTime > 0;
    }

    connectedCallback() {
        getOmniscriptList()
            .then((data) => {
                this.omniscripts = JSON.parse(data);
                console.log('RS data', data);
                this.searchedOmniscripts = JSON.parse(JSON.stringify(this.omniscripts)); // This will create a deep clone
                this.iconFlag = false;
                this.clearIconFlag = true
            })
            .catch(error => this.showToast('Error', error.message, 'error'));
    }

    // handleExpandAll() {
    //     console.log('RS reached here');
    //     const payload = { expandAll: true };
    //     publish(this.messageContext, SEARCH_UPDATE_CHANNEL, payload);
    // }

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
            return omniscript.name.toLowerCase().includes(searchKey.toLowerCase()) || 
                omniscript.osType.toLowerCase().includes(searchKey.toLowerCase()) || 
                omniscript.osSubtype.toLowerCase().includes(searchKey.toLowerCase()) || 
                omniscript.language.toLowerCase().includes(searchKey.toLowerCase())
        });
    }

    handleOSChange(event) {
        this.selectedOmniscript = event.currentTarget.dataset.name;
        this.selectedOmniscriptData.recordId = null;
        this.selectedOmniscriptData.name = event.currentTarget.dataset.name;
        this.selectedOmniscriptData.type = event.currentTarget.dataset.type;
        this.selectedOmniscriptData.subType = event.currentTarget.dataset.subType;
        this.selectedOmniscriptData.language = event.currentTarget.dataset.language;

        const payload = { type: this.selectedOmniscriptData.type, subType: this.selectedOmniscriptData.subType, language: this.selectedOmniscriptData.language };

        getOmniscriptByType(payload)
            .then(versionData => {
                versionData = JSON.parse(versionData);
                this.versionOptions = versionData.map(data => ({ label: `Version - ${data.vlocity_ins__Version__c}`, value: `${data.Id}` }));
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

    handleOptionSelect() {
        const payload = { recordId: this.selectedOmniscriptData.recordId, name: this.selectedOmniscriptData.name };
        publish(this.messageContext, UPDATE_OMNISCRIPT_CHANNEL, payload);

        const refreshPayload = { data: [] };
        publish(this.messageContext, SEARCH_UPDATE_CHANNEL, refreshPayload);
    }

    handleVersionChange(event) {
        const versionId = event.target.value;
        this.selectedOmniscriptData.recordId = versionId;
    }
    
    handleRemoveSelectedOption() {
        this.version = '';
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

    handleSearchModal() {
        this.isModalOpen = true;
    }

    handleModalClose() {
        this.isModalOpen = false;
    }

    handleModalSubmit(event) {
        let searchText = event.detail.searchText;
        let initialTime = performance.now(), finalTime;
        getSearchResults({searchKey: searchText, contextId: this.selectedOmniscriptData.recordId})
            .then(data => {
                finalTime = performance.now();
                this.searchExecutionTime = finalTime - initialTime
                console.log('RS search result', data);
                this.handleModalClose();
                const payload = { data: JSON.parse(data) };
                publish(this.messageContext, SEARCH_UPDATE_CHANNEL, payload);
            })
            .catch(error => this.showToast('Error', error.message, 'error'));
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title, message, variant
        });
        this.dispatchEvent(event);
    }
}