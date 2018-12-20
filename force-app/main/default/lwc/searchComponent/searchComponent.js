import { LightningElement, track } from 'lwc';

export default class SearchComponent extends LightningElement {
    @track searchKey ='';

    handleOnchange(event){
        const searchKey = event.target.value;
        var searchEvent = new CustomEvent(
            'search',
            {
                detail : searchKey
            }
        );
        this.dispatchEvent(searchEvent);
    }
}