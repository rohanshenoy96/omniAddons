public without sharing class vlc_IndSearchResults {
   
    public static String getNameSpacePrefix(){
        String prefix = '';
        PackageLicense pckg =  [SELECT NamespacePrefix FROM PackageLicense WHERE NamespacePrefix LIKE 'vlocity_%' LIMIT 1];
        if(pckg != null && !String.isEmpty(pckg.NamespacePrefix)){
            prefix = pckg.NamespacePrefix;
        }
        return prefix;
    }
    
    @AuraEnabled
    public static String getOmniscriptList(){
        try {
            // Old logic 
            // List<vlocity_ins__OmniScript__c> omniscripts = [SELECT Id, Name, vlocity_ins__Type__c, vlocity_ins__SubType__c, vlocity_ins__Language__c, vlocity_ins__IsActive__c, vlocity_ins__Version__c From vlocity_ins__OmniScript__c];
           	
            String prefix = getNameSpacePrefix();
            String query ='SELECT MAX(Id) Id, Name, '+prefix+'__Type__c, '+prefix+'__SubType__c, '+prefix+'__Language__c From '+prefix+'__OmniScript__c Group BY '+prefix+'__SubType__c, '+prefix+'__Type__c, '+prefix+'__Language__c, Name';
            system.debug('query ' + query);
            List<SObject> queryResult = Database.query(query);
            List<OSData> osList = new List<OSData>();
            OSData os;
            for(SObject obj : queryResult){
                os = new OSData();
                os.name = (String)obj.get('Name');
                os.osType = (String)obj.get(prefix+'__Type__c');
                os.osSubtype = (String)obj.get(prefix+'__SubType__c');
                os.language = (String)obj.get(prefix+'__Language__c');
                osList.add(os);
            }
            return JSON.serialize(osList);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static String getOmniscriptByType(String type, String subType, String language){
        try {
            String prefix = getNameSpacePrefix();
        	type = String.escapeSingleQuotes(type);
            subType = String.escapeSingleQuotes(subType);
            language = String.escapeSingleQuotes(language);
            
            String query = 'SELECT Id, Name, '+prefix+'__Type__c, '+prefix+'__SubType__c, '+prefix+'__Language__c, '+prefix+'__IsActive__c, '+prefix+'__Version__c'+ 
                ' From '+prefix+'__OmniScript__c'+ 
                ' Where '+prefix+'__Type__c = :type AND '+prefix+'__SubType__c = :subType AND '+prefix+'__Language__c = :language';
            
            return JSON.serialize(Database.query(query));
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @AuraEnabled
    public static String getOSHierarchy(Id contextId){
        String prefix = getNameSpacePrefix();
        contextId = String.escapeSingleQuotes(contextId);
        
        String query = 'SELECT Id,'+prefix+'__ParentElementId__c,Name,'+prefix+'__Type__c, '+prefix+'__Active__c FROM '+prefix+'__Element__c'+ 
                                                  ' WHERE '+prefix+'__OmniScriptId__c =:contextId'+ 
                                                  ' ORDER BY '+prefix+'__ParentElementId__r.'+prefix+'__Order__c , '+prefix+'__Order__c';
        system.debug('query'+Database.query(query));
        
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
        
        for(SObject element : Database.query(query)){
            node = new Node();
            node.Label = (String)element.get('Name');
            node.name = (String)element.get('Id');
            node.ParentId = (String)element.get(prefix+'__ParentElementId__c');
            node.metatext = (String)element.get(prefix+'__Type__c');
            node.active = (Boolean)element.get(prefix + '__Active__c');
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
        String prefix = getNameSpacePrefix();
        
       	searchKey =String.escapeSingleQuotes(searchKey) +  '*';
        contextId = String.escapeSingleQuotes(contextId);
        String elementObjNm = prefix + '__Element__c';
        
        String query = 'FIND :searchKey IN ALL FIELDS RETURNING '+
            prefix+'__Element__c(Id, Name, '+prefix+'__ParentElementId__c ,'+ prefix+'__ParentElementName__c '+
            'WHERE  '+prefix+'__OmniScriptId__c =:contextId ORDER by '+prefix+'__ParentElementId__r.'+prefix+'__Order__c , '+prefix+'__Order__c )';

        system.debug(query);
        
        List<String> result = new List<String>();  
        
        for(List<SObject> objList : search.query(query)){
            for(SObject obj1 : objList){
                system.debug(String.valueOf(obj1.getSObjectType()));
                if(String.valueOf(obj1.getSObjectType()) == elementObjNm){
                    result.add((String)obj1.get('Name'));
                    
                }
            }
        }
        
        return JSON.serialize(result);
    }
    
    @AuraEnabled
    public static String getPropSetData(Id elementId){
        String prefix = getNameSpacePrefix();
        elementId = String.escapeSingleQuotes(elementId);
        String query = 'SELECT '+ prefix + '__PropertySet__c FROM '+ prefix +'__Element__c WHERE Id =: elementId';
        SObject queryResult = Database.query(query)[0];
        
        String fldName = prefix + '__PropertySet__c';
        
        return (String)queryResult.get(fldName);
        
    }
    
    public class Node{
        @AuraEnabled public String label {get; set;}
        @AuraEnabled public String name {get; set;}
        @AuraEnabled public String parentId {get; set;}
        @AuraEnabled public String metatext {get; set;}
        @AuraEnabled public Boolean expanded {get; set;}
        @AuraEnabled public Boolean active {get; set;}
        @AuraEnabled public Boolean matched {get; set;}
        @AuraEnabled public Boolean isChanged {get; set;}
        @AuraEnabled public List<Node> items {get; set;}
         
    }
    
    public class OSData{
        @AuraEnabled public String name {get; set;}
        @AuraEnabled public String osType {get; set;}
        @AuraEnabled public String osSubtype {get; set;}
        @AuraEnabled public String language {get; set;}
        
    }
}