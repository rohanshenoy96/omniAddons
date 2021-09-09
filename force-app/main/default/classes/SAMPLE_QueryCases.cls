global with sharing class SAMPLE_QueryCases implements vlocity_ins.VlocityOpenInterface
{
    global SAMPLE_QueryCases() {}

    global Boolean invokeMethod(String methodName, Map<String,Object> inputMap, Map<String,Object> outMap, Map<String,Object> options) {
        Boolean result = true;
        try
        {
            if (methodName.equals('GetCaseData'))
            {
                GetCaseData(inputMap,outMap);
            }
            else 
            {
                result = false;
            }   
        } 
        catch(Exception e)
        {
            System.debug('SAMPLE_QueryCases:invokeMethod -> exception: '+e);
            result = false;
        }
        
        return result;
    }
    
void GetCaseData(Map<String, Object> inputMap, Map<String, Object> outMap)
   {
        String sAccountId = (String)inputMap.get('AccountId');
        System.debug('Id Entered: ' + sAccountId);
    
        List<Case> caseList = [SELECT CaseNumber, Priority, Type, Subject, Status, CreatedDate FROM Case WHERE AccountId=:sAccountId];
     
        if(caseList != null && caseList.size() > 0)
        {
           List<Map<String, String>>  returnList = new List<Map<String,String>>();
           for (Case c : caseList)
           {           
               Map<String, String> tempMap = new Map<String, String>();
               tempMap.put('Case Id', c.Id);
               tempMap.put('Case Number', c.CaseNumber);
               tempMap.put('Subject', c.Subject);
               tempMap.put('Priority', c.Priority);
               tempMap.put('Status', c.Status);
               tempMap.put('Type', c.Type);
               tempMap.put('CreatedDate', c.CreatedDate.format('MM/dd/yyyy'));                             
                                                            
               returnList.add(tempMap);
           }
           outMap.put('options', returnList);
           System.debug('These are my Cases' + returnList);
        }
        else{
           outMap.put('caseList', 'NOT FOUND');
        }
    }        
}