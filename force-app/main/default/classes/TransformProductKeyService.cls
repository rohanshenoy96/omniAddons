/*
* VLOCITY, INC. CONFIDENTIAL
* __________________
*
*  2014-2017 Vlocity, Inc.
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Vlocity, Inc. and its suppliers,
* if any. The intellectual and technical concepts contained
* herein are proprietary to Vlocity, Inc. and its suppliers and may be
* covered by U.S. and Foreign Patents, patents in process, and are
* protected by trade secret or copyright law. Dissemination of this
* information and reproduction, modification or reverse-engineering
* of this material, is prohibited unless prior written permission
* is obtained from Vlocity, Inc.
*
*/
global with sharing class TransformProductKeyService implements vlocity_ins.VlocityOpenInterface2 {
    public Object invokeMethod(String methodName,
                               Map<String, Object> inputs,
                               Map<String, Object> output,
                               Map<String, Object> options)
    {
        if (methodName.equalsIgnoreCase('transformKeys')) {
            transformKeys(inputs, output, options);
        }

        return true;
    }

    private void transformKeys(Map<String, Object> inputs,
                               Map<String, Object> output,
                               Map<String, Object> options) {
        logMap('transformKeys', 'inputs', inputs);
        logMap('transformKeys', 'options', options);

        String transformedKey = 'transformed';
        String newKey = 'input_';
        Integer counter = 1;
        List<String> validKeys = new List<String>();

        output.put(transformedKey, new Map<String, Object>());

        for (String key : inputs.keySet()) {
            if (isId(key)) {
                validKeys.add(key);
                continue;
            }

            if (key.indexOf('_') > -1) {
                List<String> ids = key.split('_', 0);

                if (isId(ids.get(0))) {
                    validKeys.add(key);
                    continue;
                }
            }

            if (key == 'options') {
                output.put(key, inputs.get(key));
            }
        }

        for (String key : validKeys) {
            ( (Map<String, Object>) output.get(transformedKey) ).put(newkey + (counter++), inputs.get(key));
        }

        logMap('transformKeys', 'output', output);
    }

    private Boolean isID(String someString) {
        return (someString instanceOf ID);
    }

    private static void logMap(String sourceFunction, String paramName, Map<String, Object> someMap) {
        Integer counter = 1;
        if (someMap != null)
            for (String key: someMap.keySet()) {
                System.debug(LoggingLevel.DEBUG, ' -- ' + sourceFunction +  ' -- ' + paramName + ' key ' + (counter++) + ': ' + key + '; value: ' + someMap.get(key));
            }
    }
}