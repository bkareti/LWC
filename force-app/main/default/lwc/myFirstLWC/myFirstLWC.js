import { LightningElement, api, track } from 'lwc';
import Id from '@salesforce/user/Id';
export default class MyFirstLWC extends LightningElement {
    @api name = 'Amit Singh';
    @track title =' CRM Consultant ';
    phone = '7607329000';
    email = 'sfdcpanther@gmail.com';
    userId = Id;
    @track value2;
    @track value1;
    @track sum;

    handleClick(event){
        /* eslint-disable no-console */
        const value = event.target.value;
        if(event.target.name === 'field1'){
            this.value1 = value;
        }
        if(event.target.name === 'field2'){
            this.value2 = value;
        }
        console.log(' I am inside JS file ', value);
        
    }

    handleSum(){
        this.sum = parseInt(this.value1) + parseInt(this.value2);
    }
}