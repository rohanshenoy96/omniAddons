import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getOSComparision from '@salesforce/apex/vlc_IndCompareOSVersion.getOSComparision';
export default class OmniVersionComparator extends LightningElement {
    loadedData = { primary: false, secondary: false };
    osVersions = { primary: null, secondary: null };
    
    @track comparisonData;

    handleDataLoad(event) {
        console.log('RS event', JSON.stringify(event.detail));
        this.loadedData[event.detail.version] = event.detail.loaded;
        this.osVersions[event.detail.version] = event.detail.contextId;
        console.log('RS event 1', this.loadedData, this.osVersions);
        if (this.loadedData.primary && this.loadedData.secondary) {
            getOSComparision({ contextId1: this.osVersions.primary, contextId2: this.osVersions.secondary })
                .then(comparisonData => {
                    // console.log('RS event data', data)
                    this.comparisonData = comparisonData;
                })
                .catch(error => this.showToast('Server Error', 'Comparison data was not loaded, please try again after sometine', 'error'));
        }
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title, message, variant
        });
        this.dispatchEvent(event);
    }
}