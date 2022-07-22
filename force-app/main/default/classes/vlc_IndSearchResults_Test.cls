@isTest private class vlc_IndSearchResults_Test {
    
    
    @testSetup static void setup(){
        
        String prefix = vlc_IndSearchResults.getNameSpacePrefix();
        String OSObjNm = prefix + '__OmniScript__c';
        String OSTypeFldNm = prefix + '__Type__c';
        String OSSubTypeFldNm = prefix + '__SubType__c';
        String OSLngFldNm = prefix + '__Language__c';
        
        SObject os  = ((SObject) Type.forName(OSObjNm).newInstance());
        os.put(OSTypeFldNm, 'Test Labs');
        os.put(OSSubTypeFldNm ,'MultiAuto');
        os.put(OSLngFldNm , 'English');
        insert os;
       
        
        String EleObjNm = prefix + '__Element__c';
        String EleTypeFldNm = prefix + '__Type__c';
        String EleActiveFldNm = prefix + '__Active__c';
        String EleOSIdFldNm = prefix + '__OmniScriptId__c';
        
        SObject ele  = ((SObject) Type.forName(EleObjNm).newInstance());
        ele.put('Name' , 'test_estimatevalue-Edit');
        ele.put(EleTypeFldNm , 'Remote Action');
        ele.put(EleActiveFldNm , false);
        ele.put(EleOSIdFldNm , os.Id);
        insert ele;
        
    }
    
    @isTest
    private static void getNameSpacePrefix_Test(){
        String result = vlc_IndSearchResults.getNameSpacePrefix();
        
        system.assert(result.contains('vlocity'));
    }
    
    @isTest
    private static void getOmniscriptList_Test(){
        String result = vlc_IndSearchResults.getOmniscriptList();
        
    }
    
    @isTest
    private static void getOmniscriptByType_Test(){
        String result = vlc_IndSearchResults.getOmniscriptByType('Test Labs', 'MultiAuto','English');
        
    }
    
    @isTest
    private static void getOSHierarchy_Test(){
        String prefix = vlc_IndSearchResults.getNameSpacePrefix();
        String query = 'Select id from '+prefix+'__OmniScript__c Limit 1';
        Id osId = Database.query(query).Id;
        String result = vlc_IndSearchResults.getOSHierarchy(osId);
	}
    
    @isTest
    private static void getSearchResults_Test(){
        String prefix = vlc_IndSearchResults.getNameSpacePrefix();
        String query = 'Select id from '+prefix+'__OmniScript__c Limit 1';
        Id osId = Database.query(query).Id; 
        String result = vlc_IndSearchResults.getSearchResults('test',osId);
	}
    
    @isTest
    private static void getPropSetData_Test(){
        String prefix = vlc_IndSearchResults.getNameSpacePrefix();
        String query = 'Select id from '+prefix+'__Element__c Limit 1';
        
        Id eleId = Database.query(query).Id; 
        String result = vlc_IndSearchResults.getPropSetData(eleId);
	}
    
}