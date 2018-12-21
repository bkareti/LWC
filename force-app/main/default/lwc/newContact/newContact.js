import { LightningElement } from 'lwc';

export default class NewContact extends LightningElement {
    getRecordId(event){
        event.preventDefault();
        const params = event.detail;
        /* eslint-disable no-console */
        console.log(' Selected Record Id ', params);
    }
}