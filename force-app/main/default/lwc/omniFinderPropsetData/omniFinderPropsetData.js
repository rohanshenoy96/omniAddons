import { LightningElement, wire } from 'lwc';
import { subscribe, unsubscribe, APPLICATION_SCOPE, MessageContext } from "lightning/messageService";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import PROPSET_MAP_UPDATE_CHANNEL from '@salesforce/messageChannel/PropsetMapUpdateChannel__c';
import getPropSetData from '@salesforce/apex/vlc_IndSearchResults.getPropSetData';

export default class OmniFinderPropsetData extends LightningElement {
    subscription = null;
    isLoading = false;
    propsetMapData;
    searchedTerm;

    @wire(MessageContext)
    messageContext;

    get isPropsetMapDataAvailable() {
        return !!this.propsetMapData;
    }

    connectedCallback() {
        this.searchedTerm = localStorage.getItem('searchedTerm');
        this.subscription = subscribe(
            this.messageContext,
            PROPSET_MAP_UPDATE_CHANNEL,
            message => this.handleUpdatePropsetEvent(message),
            { scope: APPLICATION_SCOPE }
        );
    }
    
    handleUpdatePropsetEvent(propsetData) {
        // console.log('RS propsetData', propsetData);
        this.isLoading = true;
        getPropSetData({ elementId: propsetData.recordId})
            .then(propsetMapData => {
                console.log('RS data', propsetMapData);
                propsetMapData = JSON.parse(propsetMapData);
                this.propsetMapData = JSON.stringify(propsetMapData, undefined, 4);
                this.searchedTerm = localStorage.getItem('searchedTerm');
                if (this.searchedTerm && this.searchedTerm !== '') {
                    let regex = new RegExp(this.searchedTerm, 'ig');
                    this.propsetMapData = this.propsetMapData.replace(regex, `<mark>${this.searchedTerm}</mark>`);
                }
                setTimeout(() => {
                    this.template.querySelector('.json-viewer').innerHTML = this.propsetMapData;
                }, 0);
            })
            .catch(error => {
                // console.log('RS error propsetMao', error)
                this.showToast('Error', error.body.message, 'error')
            })
            .finally(() => this.isLoading = false);
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