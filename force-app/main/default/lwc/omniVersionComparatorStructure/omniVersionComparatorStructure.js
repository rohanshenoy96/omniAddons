import { LightningElement, api, wire, track } from 'lwc';
import { subscribe, unsubscribe, APPLICATION_SCOPE, MessageContext } from 'lightning/messageService';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import GET_DIFFERENCE_CHANNEL from '@salesforce/messageChannel/GetDifferenceChannel__c';
import getOSHierarchy from '@salesforce/apex/vlc_IndSearchResults.getOSHierarchy';

export default class OmniVersionComparatorStructure extends LightningElement {
    subscription = null;
    viewOsData = false;

    @track osData;
    @api version;

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        console.log('RS version', this.version);

        this.subscription = subscribe(
            this.messageContext,
            GET_DIFFERENCE_CHANNEL,
            message => {
                this.handleUpdateOSSelectionEvent(message);
            },
            { scope: APPLICATION_SCOPE }
        );
    }

    handleUpdateOSSelectionEvent(osData) {
        let contextId;
        
        if (osData && osData.primaryVersion && this.version === 'primary') {
            contextId = osData.primaryVersion;
        } else if (osData && osData.secondaryVersion && this.version === 'secondary') {
            contextId = osData.secondaryVersion;
        }

        if (contextId) {
            this.viewOsData = false;
            getOSHierarchy({ contextId })
                .then(osData => {
                    console.log('RS osData 1980', osData);
                    this.osData = JSON.parse(osData);
                    this.viewOsData = true;
                    let dataLoadedEvent = new CustomEvent('treedataloaded', { detail: { version: this.version, loaded: true, contextId } });
                    this.dispatchEvent(dataLoadedEvent);
                })
                .catch(error => {
                    this.showToast('Error', error.message, 'error');
                });
        }
    }



    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title, message, variant
        });
        this.dispatchEvent(event);
    }

    disconnectedCallback() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
}