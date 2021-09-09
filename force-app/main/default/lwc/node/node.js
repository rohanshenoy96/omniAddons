import { LightningElement, api, wire, track } from 'lwc';
import { publish, subscribe, unsubscribe, APPLICATION_SCOPE, MessageContext } from "lightning/messageService";
import SEARCH_UPDATE_CHANNEL from '@salesforce/messageChannel/SearchUpdateChannel__c';
import BOOLEAN_FLAG_CHANNEL from '@salesforce/messageChannel/BooleanFlagChannel__c';
import PROPSET_MAP_UPDATE_CHANNEL from '@salesforce/messageChannel/PropsetMapUpdateChannel__c';

export default class Node extends LightningElement {
    searchSubscription = null;
    expandAllSubscription = null;
    expanded = false;
    isMatchFound = false;
    @track searchResults = [];

    @api nodeData;
    @wire(MessageContext)
    messageContext;

    get isTreeStructure() {
        return this.nodeData && this.nodeData.items && this.nodeData.items.length > 0;
    }

    get expandedClass() {
        return this.expanded ? '' : 'slds-hide';
    }

    get matchedClass() {
        return this.isMatchFound ? 'slds-p-around_small slds-m-vertical_small tree-node node-matched' : 'slds-p-around_small slds-m-vertical_small tree-node node-notmatched' 
    }

    connectedCallback() {
        // Search Subscription
        this.searchSubscription = subscribe(
            this.messageContext,
            SEARCH_UPDATE_CHANNEL,
            message => this.handleUpdateSearchEvent(message),
            { scope: APPLICATION_SCOPE }
        );

        // Expansion Subscription
        this.expandAllSubscription = subscribe(
            this.messageContext,
            BOOLEAN_FLAG_CHANNEL,
            message => this.handleExpandAllEvent(message),
            { scope: APPLICATION_SCOPE }
        );
    }

    handleExpandAllEvent(expansionData) {
        // console.log('RS expand data', data);
        this.expanded = expansionData.expandAll;
    }

    handleUpdateSearchEvent(searchData) {
        this.searchResults = searchData.data;
        this.isMatchFound = searchData.data.includes(this.nodeData.label);
    }

    updatedExpandedView() {
        this.expanded = !this.expanded;
    }

    updatePropsetMap() {
        console.log('RS recordId', this.nodeData.name);
        const payload = { recordId: this.nodeData.name };
        publish(this.messageContext, PROPSET_MAP_UPDATE_CHANNEL, payload);
    }

    disconnectedCallback() {
        unsubscribe(this.searchSubscription);
        this.searchSubscription = null;

        unsubscribe(this.expandAllSubscription);
        this.expandAllSubscription = null;
    }

}