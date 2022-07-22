public with sharing class vlc_IndCompareOSVersion {
    
    @AuraEnabled
    public static Map<String,Boolean> getOSComparision(Id contextId1, Id contextId2){
        
        String prefix = vlc_IndSearchResults.getNameSpacePrefix();
        contextId1 = String.escapeSingleQuotes(contextId1);
        contextId2 = String.escapeSingleQuotes(contextId2);
        List<Id> contextIdList = new List<Id>{contextId1,contextId2};
            
        String query = 'SELECT Name,'+prefix+'__PropertySet__c FROM '+prefix+'__Element__c'+ 
                                                  ' WHERE '+prefix+'__OmniScriptId__c IN :contextIdList'+  
                                                  ' ORDER BY '+prefix+'__ParentElementId__r.'+prefix+'__Order__c , '+prefix+'__Order__c';
        system.debug('result : '+ Database.query(query));
        List<SObject> osRecordList = Database.query(query);
        
        Map<String,Object> compareMap = new Map<String,Object>();
        Map<String,Object> nodeMap2 = new Map<String,Object>();
        
        Map<String,Boolean> returnMap = new Map<String,Boolean>();
        String name;
        String propSet;
        Boolean cmpRslt;
        
        for(SObject element: osRecordList){
            name = (String)element.get('name');
            propSet = (String)element.get(prefix + '__PropertySet__c');
            
            if(compareMap.get(name) != null){
                
                cmpRslt = propSet.equals((String)compareMap.get(name)); 
                returnMap.put(name,!cmpRslt);
                system.debug(name + ' : cmpResult : '+ !cmpRslt);
                //SSsystem.debug(name + ' : diffResult : '+ propSet.difference((String)compareMap.get(name)));
                
            }else{
                compareMap.put(name, propSet);
            }
        }
        
        
        
        return returnMap;
    }
    
}