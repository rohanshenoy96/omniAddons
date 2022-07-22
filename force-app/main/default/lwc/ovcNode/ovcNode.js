import { LightningElement, api } from 'lwc';

export default class OvcNode extends LightningElement {
    expanded = false;

    @api nodeData;

    get isTreeStructure() {
        return this.nodeData && this.nodeData.items && this.nodeData.items.length > 0;
    }

    get expandedClass() {
        return this.expanded ? '' : 'slds-hide';
    }

    updatedExpandedView() {
        this.expanded = !this.expanded;
    }

}