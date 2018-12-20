

import { LightningElement, wire, track } from 'lwc';
import findAccounts from '@salesforce/apex/AccountsController.findAccounts';

const DELAY = 300;
export default class AccountList extends LightningElement {

    @track searchKey = '' ;
    @wire(findAccounts, { searchKey: '$searchKey' }) accounts;
    @track error;
    @track selectedAccount;
    @track selectedAccountId;

    handleSearch(event){
        
        const searchKey = event.detail;
        //eslint-disable-next-line @lwc/lwc/no-async-operation
        setTimeout(() => {
            this.searchKey = searchKey;
        }, DELAY);
        
    }

    handleSelect(event){
        const selectRecordId = event.detail;
        this.selectedAccountId = selectRecordId;
        this.selectedAccount = this.accounts.data.find( account => account.Id === selectRecordId);
    }

    handleRemove(event){
        event.preventDefault();
        this.selectedAccount = null;
        this.accounts = null;
    }
}