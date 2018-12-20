import { LightningElement, wire } from 'lwc';
import { getRecord , getFieldValue} from 'lightning/uiRecordApi';
import id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
import TITLE_FIELD from '@salesforce/schema/User.Title';
export default class CurrentUser extends LightningElement {
    userId = id;
    @wire(getRecord, { recordId : '$userId', fields : [NAME_FIELD, EMAIL_FIELD, TITLE_FIELD]}) user;

    get name(){
        return getFieldValue(this.user.data, NAME_FIELD);
    }
    get title(){
        return getFieldValue(this.user.data, TITLE_FIELD);
    }

    get email(){
        return getFieldValue(this.user.data, EMAIL_FIELD);
    }
}