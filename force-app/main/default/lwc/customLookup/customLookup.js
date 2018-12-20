import { LightningElement, track, api } from 'lwc';
import findRecords from '@salesforce/apex/CustomLookupController.findRecords';
export default class CustomLookup extends LightningElement {
    @track records;
    @track error;
    @track selectedRecord;
    @api iconname = "standard:account";;
    @api objectName = 'Account';;
    @api searchfield = 'Name';

    /*constructor(){
        super();
        this.iconname = "standard:account";
        this.objectName = 'Account';
        this.searchField = 'Name';
    }*/

    handleOnchange(event){
        //event.preventDefault();
        const searchKey = event.detail.value;
        //this.records = null;
        /* eslint-disable no-console */
        console.log(searchKey);

        /* Call the Salesforce Apex class method to find the Records */
        findRecords({
            searchKey : searchKey, 
            objectName : this.objectName, 
            searchField : this.searchfield
        })
        .then(result => {
            this.records = result;
            this.error = undefined;
            //console.log(' Record List Updated ', this.records);
        })
        .catch(error => {
            this.error = error;
            this.records = undefined;
        });
    }
    handleSelect(event){
        const selectedRecordId = event.detail;
        /* eslint-disable no-console*/
        //console.log(' Event Handled on Parent Component ',selectedRecordId);
        console.log(' Record List ', this.records);
        this.selectedRecord = this.records.find( record => record.Id === selectedRecordId);
        console.log(' Value for Selected Field  ', this.selectedRecord.Name);
    }

    handleRemove(){
        //event.preventDefault();
        this.selectedRecord = '';
        this.records = undefined;
        this.error = undefined;
    }
}