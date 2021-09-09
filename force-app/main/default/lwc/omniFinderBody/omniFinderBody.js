import { LightningElement, wire } from 'lwc';
import { publish, subscribe, unsubscribe, APPLICATION_SCOPE, MessageContext } from "lightning/messageService";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import UPDATE_OMNISCRIPT_CHANNEL from '@salesforce/messageChannel/UpdateOmniscriptChannel__c';
import EXPAND_ALL_CHANNEL from '@salesforce/messageChannel/BooleanFlagChannel__c';
import getOSHierarchy from '@salesforce/apex/vlc_IndSearchResults.getOSHierarchy';


export default class OmniFinderBody extends LightningElement {
    
    subscription = null;
    viewOsData = false;
    osData;

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        // pubsub.register('update-omniscript', this.handleUpdateOSSelectionEvent.bind(this));
        this.subscription = subscribe(
            this.messageContext,
            UPDATE_OMNISCRIPT_CHANNEL,
            message => {
                this.handleUpdateOSSelectionEvent(message);
            },
            { scope: APPLICATION_SCOPE }
        );
    }

    handleExpandAll() {
        const payload = { expandAll: true };
        publish(this.messageContext, EXPAND_ALL_CHANNEL, payload);
    }

    handleCollapseAll() {
        const payload = { expandAll: false };
        publish(this.messageContext, EXPAND_ALL_CHANNEL, payload);
    }

    handleUpdateOSSelectionEvent(selectedOmniscript) {
        localStorage.setItem('searchedTerm', '');
        if (selectedOmniscript && selectedOmniscript.recordId) {
            getOSHierarchy({contextId: selectedOmniscript.recordId})
                .then(osData => {
                    console.log(JSON.stringify(osData));
                    this.viewOsData = true;
                    this.osData = JSON.parse(osData);
                })
                .catch(error => {
                    this.showToast('Error', error.message, 'error');
                });
        }
    }

    disconnectedCallback() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title, message, variant
        });
        this.dispatchEvent(event);
    }
}