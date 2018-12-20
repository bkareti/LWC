import { LightningElement, api } from 'lwc';

export default class RecordViewForm extends LightningElement {
    @api recordId;
    @api objectApiName;
    fields = ['Name', 'Title', 'Phone', 'Email'];
}