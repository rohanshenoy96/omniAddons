public without sharing class vlc_IndSearchResults {
    
  
    public class Node{
        @AuraEnabled public String label {get; set;}
        @AuraEnabled public String name {get; set;}
        @AuraEnabled public String parentId {get; set;}
        @AuraEnabled public String metatext {get; set;}
        @AuraEnabled public Boolean expanded {get; set;}
        @AuraEnabled public List<Node> items {get; set;}
         
    }

    @AuraEnabled
    public static String getOmniscriptList(){
        try {
            // Old logic 
            // List<vlocity_ins__OmniScript__c> omniscripts = [SELECT Id, Name, vlocity_ins__Type__c, vlocity_ins__SubType__c, vlocity_ins__Language__c, vlocity_ins__IsActive__c, vlocity_ins__Version__c From vlocity_ins__OmniScript__c];
            List<AggregateResult> omniscripts = [SELECT MAX(Id) Id, Name, vlocity_ins__Type__c, vlocity_ins__SubType__c, vlocity_ins__Language__c From vlocity_ins__OmniScript__c Group BY vlocity_ins__SubType__c, vlocity_ins__Type__c, vlocity_ins__Language__c, Name];
            return JSON.serialize(omniscripts);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static String getOmniscriptByType(String type, String subType, String language){
        try {
            List<vlocity_ins__OmniScript__c> omniscripts = [
                SELECT Id, Name, vlocity_ins__Type__c, vlocity_ins__SubType__c, vlocity_ins__Language__c, vlocity_ins__IsActive__c, vlocity_ins__Version__c 
                From vlocity_ins__OmniScript__c 
                Where vlocity_ins__Type__c = :type AND vlocity_ins__SubType__c = :subType AND vlocity_ins__Language__c = :language
            ];
            return JSON.serialize(omniscripts);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @AuraEnabled
    public static String getOSHierarchy(Id contextId){
        List<vlocity_ins__Element__c> elements = [SELECT Id,vlocity_ins__ParentElementId__c,Name,vlocity_ins__Type__c FROM vlocity_ins__Element__c 
                                                  WHERE vlocity_ins__OmniScriptId__c =:contextId 
                                                  ORDER BY vlocity_ins__ParentElementId__r.vlocity_ins__Order__c , vlocity_ins__Order__c];
        
        Map<Id,Node> nodeMap = new Map<Id,Node>();
        
        Node node = new Node();
        node.name = contextId;
        node.items = new List<Node>();
        node.expanded = false;
        node.items = new List<Node>();
        nodeMap.put(contextId, node);
        
        node = new Node();
        node.Label = 'Script Configuration';
        node.metatext = 'Script Configuration';
        node.name = contextId;
        node.ParentId = contextId;
        node.expanded = true;
        node.items = new List<Node>();
        nodeMap.get(contextId).items.add(node);
        
        for(vlocity_ins__Element__c element : elements){
            node = new Node();
            node.Label = element.Name;
            node.name = element.Id;
            node.ParentId = element.vlocity_ins__ParentElementId__c;
            node.metatext = element.vlocity_ins__Type__c;
            node.items = new List<Node>();
            node.expanded = false;
            if(node.ParentId == null){
                node.ParentId = contextId;
            }
            
            nodeMap.put(element.Id,node);
        }
        
        for(Node nd : nodeMap.values()){
            if(nodeMap.get(nd.ParentId) != null){
                nodeMap.get(nd.ParentId).items.add(nd);
            }
        }
        return Json.serialize(nodeMap.get(contextId));
    }
    
    @AuraEnabled
    public static String getSearchResults(String searchKey, Id contextId){
       	searchKey += '*';
        
        List<List<SObject>> searchResults = [FIND :searchKey IN ALL FIELDS RETURNING  
                                             vlocity_ins__Element__c(Id, Name,vlocity_ins__ParentElementId__c ,vlocity_ins__ParentElementName__c
                                                                     WHERE  vlocity_ins__OmniScriptId__c =:contextId 
                                                                   ORDER by vlocity_ins__ParentElementId__r.vlocity_ins__Order__c , vlocity_ins__Order__c )];
        List<String> result = new List<String>();  
        
        for(List<SObject> objList : searchResults){
            for(SObject obj1 : objList){
                system.debug(obj1.getSObjectType());
                if(obj1.getSObjectType() == Schema.vlocity_ins__Element__c.SObjectType){
                    vlocity_ins__Element__c obj = (vlocity_ins__Element__c)obj1;
                    result.add(obj.Name);
                    
                }
            }
        }
        
        return JSON.serialize(result);
    }
    
    @AuraEnabled
    public static String getPropSetData(Id elementId){
        return [SELECT vlocity_ins__PropertySet__c FROM vlocity_ins__Element__c 
                              WHERE Id =:elementId].vlocity_ins__PropertySet__c;
    }
}