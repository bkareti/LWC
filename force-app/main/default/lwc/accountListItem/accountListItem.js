import { LightningElement, api } from 'lwc';

export default class AccountListItem extends LightningElement {
    @api account;

    handleClick(event){
        event.preventDefault();
        const selectedEvent = new CustomEvent(
            "select",
            {
                detail : this.account.Id
            }
        );
        this.dispatchEvent(selectedEvent);
    }
}