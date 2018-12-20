
import { LightningElement, track, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
import contactList from '@salesforce/apex/ContactController.contactList';
export default class HelloWorld extends LightningElement {

    @track greeting = 'Amit';
    @track name = 'World!';
    @track con;
    @track error;
    @wire(getContactList) contacts;

    changeHandler(event) {
        this.greeting = event.target.value;
    }
    handleLoad() {
        contactList()
        .then(result=>{
            this.con = result;
        })
        .catch(error=>{
            this.error = error;
        });
    }
}