public with sharing class ContactController {
    
    public ContactController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> contactList(){
        return [Select Id, Name, Title, Email, Phone From Contact Limit 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [SELECT Id, Name, Title, Phone, Email FROM Contact WHERE Email != null LIMIT 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> findContacts(String searchKey) {
        String key = '%' + searchKey + '%';
        return [SELECT Id, Name, Title, Phone, Email FROM Contact 
                            WHERE Name LIKE :key AND Email != null LIMIT 10];
    }

    @AuraEnabled(cacheable=true)
    public static Contact getSingleContact(){
        return [SELECT Id, Name, Title, Phone, Email FROM Contact LIMIT 1];
    }
}
