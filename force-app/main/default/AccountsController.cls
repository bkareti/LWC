public with sharing class AccountsController {
    public AccountsController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [Select Id, Name, Rating, Industry, Phone From Account Limit 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey){
        String key = '%' + searchKey + '%';
        return [Select Id, Name, Rating, Industry, Phone From Account WHERE Name LIKE :key Limit 10];
    }
}
