
import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

export default class ObjectInfo extends LightningElement {
    objectApiNameInputValue ='Account';
    objectAPIName;
    @wire(getObjectInfo, { objectApiName: '$objectApiName' }) ObjectInfo;

    handleOnChange(event){
        this.objectApiNameInputValue = event.target.value;
    }
    get objectInfoStr(){
        return this.ObjectInfo ? JSON.stringify(this.ObjectInfo.data):'';
    }

    handleBtnClick() {
        this.objectApiName = this.objectApiNameInputValue;
    }
}