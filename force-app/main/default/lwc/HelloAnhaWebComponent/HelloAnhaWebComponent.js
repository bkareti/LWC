import { LightningElement, track, api } from 'lwc';

export default class HelloAnhaWebComponent extends LightningElement {
    @track greeting ='Anha';
    @api recordId;
    @api objectApiName;
}