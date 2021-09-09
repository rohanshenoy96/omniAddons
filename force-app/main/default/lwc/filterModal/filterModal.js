import { LightningElement, api } from 'lwc';

export default class FilterModal extends LightningElement {
    value = '';
    @api searchText;

    handleSearch(event) {
        this.value = event.target.value;
    }

    closeModal() {
        const closeEvent = new CustomEvent('close');
        this.dispatchEvent(closeEvent);
    }

    submitDetails() {
        localStorage.setItem('searchedTerm', this.value);
        const submitEvent = new CustomEvent('submit', { detail: { searchText: this.value }});
        this.dispatchEvent(submitEvent);
    }
}