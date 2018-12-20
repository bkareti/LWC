import { LightningElement, track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountsController.getAccountList';
import findAccounts from '@salesforce/apex/AccountsController.findAccounts';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LoadAccounts extends LightningElement {
    @track accounts;
    @track error;
    @track searchKey ='';
    /* 
        To get the list of all accounts from Salesforce 
        on button click
    */
    handleLoadAccount(){
        getAccountList()
        .then(result => {
            this.accounts = result;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Account Loaded',
                    variant: 'success',
                }),
            );
        })
        .catch(error => {
            this.error = error;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error Loading record',
                    message: error.message,
                    variant: 'error',
                }),
            );
        });
    }

    handleOnchange(event){
        this.searchKey = event.target.value;
        findAccounts({ searchKey: this.searchKey })
        .then(result => {
            this.accounts = result;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Account Loaded',
                    variant: 'success',
                }),
            );
        })
        .catch(error =>{
            this.error = error;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error Loading record',
                    message: error.message,
                    variant: 'error',
                }),
            );
        });
    }
}