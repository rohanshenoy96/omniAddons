export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"nikhil.shukla-31743538596@industryapps.edu","userId":"0055e000005Xo2aAAC","userCurrencyCode":"USD","timeStamp":"2021-07-22T08:23:23.655Z","sOmniScriptId":"a0g5e000001K7YzAAK","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"stepChartPlacement":"right","disableUnloadWarn":true,"errorMessage":{"custom":[]},"consoleTabIcon":"custom:custom18","consoleTabTitle":null,"rtpSeed":false,"showInputWidth":true,"currencyCode":"","autoFocus":false,"pubsub":false,"message":{},"ssm":false,"wpm":false,"consoleTabLabel":"New","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","cancelSource":"%ContextId%","allowCancel":true,"cancelType":"SObject","visualforcePagesAvailableInPreview":{},"hideStepChart":false,"timeTracking":true,"knowledgeArticleTypeQueryFieldsMap":{},"lkObjName":null,"bLK":false,"enableKnowledge":false,"trackingCustomData":{},"seedDataJSON":{},"elementTypeToHTMLTemplateMapping":{},"autoSaveOnStepNext":false,"saveURLPatterns":{},"saveObjectId":"%ContextId%","saveContentEncoded":false,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveNameTemplate":null,"allowSaveForLater":true,"persistentComponent":[{"sendJSONPath":"","sendJSONNode":"","responseJSONPath":"","responseJSONNode":"","render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"vlcProductConfig.html","modalController":"ModalProductCtrl"},"label":"","itemsKey":"cartItems","id":"vlcCart"},{"render":false,"remoteTimeout":30000,"remoteOptions":{"preTransformBundle":"","postTransformBundle":""},"remoteMethod":"","remoteClass":"","preTransformBundle":"","postTransformBundle":"","modalConfigurationSetting":{"modalSize":"lg","modalHTMLTemplateId":"","modalController":""},"label":"","itemsKey":"knowledgeItems","id":"vlcKnowledge"}]},"prefillJSON":"{}","lwcId":"7cfde5c1-3a46-48b8-7113-171e3ea2409e","labelMap":{"Image":"Braintree:transaction:creditCard:Image","imageUrl":"Braintree:transaction:creditCard:imageUrl","customerLocation":"Braintree:transaction:creditCard:customerLocation","maskedNumber":"Braintree:transaction:creditCard:maskedNumber","expirationDate":"Braintree:transaction:creditCard:expirationDate","cardType":"Braintree:transaction:creditCard:cardType","AchAuth":"achAuthorization:achApproval:AchAuth","paymentMethodName":"Braintree:transaction:paymentMethodName","creditCard":"Braintree:transaction:creditCard","createdAt":"Braintree:transaction:createdAt","processorAuthorizationCode":"Braintree:transaction:processorAuthorizationCode","type":"Braintree:transaction:type","status":"Braintree:transaction:status","processorResponseText":"Braintree:transaction:processorResponseText","Amount":"CreditCard:Charge Total:Amount","achAccount":"ach:mopACH:achAccount","achRouting":"ach:mopACH:achRouting","achType":"ach:mopACH:achType","acctHolder":"ach:mopACH:acctHolder","EFTInstructions":"ach:mopACH:EFTInstructions","achApproval":"achAuthorization:achApproval","transaction":"Braintree:transaction","paymentNonce":"CreditCard:paymentNonce","URLFormula":"CreditCard:URLFormula","Checkout":"CreditCard:Checkout","TextClientToken":"CreditCard:TextClientToken","CustomLWC1":"CreditCard:CustomLWC1","Charge Total":"CreditCard:Charge Total","paymentMethodACH":"ach:paymentMethodACH","mopACH":"ach:mopACH","payMethod":"paymentDetails:payMethod","savePaymentMethod":"paymentDetails:savePaymentMethod","paymentDate":"paymentDetails:paymentDate","BalanceDueAmt":"paymentDetails:BalanceDueAmt","CreatePaymentMethod":"CreatePaymentMethod","achAuthorization":"achAuthorization","Braintree":"Braintree","CreditCard":"CreditCard","ach":"ach","paymentDetails":"paymentDetails","SetValues":"SetValues"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{"CABHAEDAAcc727d80b62142c9a83b83ef3f764e71":"0155e000001t8zHAAQ","CABHAECJA391062e54e094306b4bae7aab2167d7f":"0155e000001t8zIAAQ"},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Set Values","propSetMap":{"validationRequired":"None","showInputWidth":false,"required":false,"repeatClone":false,"repeat":false,"readOnly":false,"minLength":0,"maxLength":255,"inputWidth":12,"hide":false,"help":false,"debounceValue":0,"conditionType":"Hide if False","accessibleInFutureSteps":false,"label":null,"pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[false,false],"elementValueMap":{"paymentDate":"=TODAY()","Checkout":"='yes'"},"controlWidth":12,"aggElements":{}},"offSet":0,"name":"SetValues","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bSetValues":true,"JSONPath":"SetValues","lwcId":"lwc0"},{"type":"Step","propSetMap":{"documentNames":["CABHAEDAAcc727d80b62142c9a83b83ef3f764e71"],"errorMessage":{"default":null,"custom":[]},"allowSaveForLater":true,"label":"Enter payment details","chartLabel":"","instructionKey":"","HTMLTemplateId":"","conditionType":"Hide if False","show":null,"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"remoteOptions":{},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","showPersistentComponent":[true,false],"instruction":"<p><img src=\"/servlet/servlet.FileDownload?file=0153s000001myezAAA&amp;&amp;docName=CABHAEDAAcc727d80b62142c9a83b83ef3f764e71\" alt=\"\" width=\"60\" height=\"60\" /></p>","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","cancelMessage":"Are you sure?","cancelLabel":"Cancel","nextWidth":6,"nextLabel":"Proceed to Pay","previousWidth":3,"previousLabel":"Previous","validationRequired":true,"uiElements":{"paymentDetails":"","BalanceDueAmt":"","paymentDate":"","savePaymentMethod":"","payMethod":""},"aggElements":{}},"offSet":0,"name":"paymentDetails","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Currency","rootIndex":1,"response":null,"propSetMap":{"label":"Payment Amount","disOnTplt":false,"hide":false,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"hideGroupSep":false,"allowNegative":false,"max":null,"min":null,"mask":null,"helpText":"","help":false,"defaultValue":null,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":false,"inputWidth":12,"showInputWidth":false,"controlWidth":4},"name":"BalanceDueAmt","level":1,"JSONPath":"paymentDetails:BalanceDueAmt","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bCurrency":true,"lwcId":"lwc10-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Date","rootIndex":1,"response":null,"propSetMap":{"label":"Payment Date","maxDate":"%quoteExpirationDate%","minDate":"%quoteEffectiveDate%","disOnTplt":false,"hide":false,"HTMLTemplateId":"","accessibleInFutureSteps":true,"conditionType":"Hide if False","show":null,"dateFormat":"MM-dd-yyyy","modelDateFormat":"yyyy-MM-dd","dateType":"date","helpText":"","help":false,"defaultValue":null,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":false,"inputWidth":12,"showInputWidth":false,"controlWidth":4},"name":"paymentDate","level":1,"JSONPath":"paymentDetails:paymentDate","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bDate":true,"lwcId":"lwc11-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Checkbox","rootIndex":1,"response":null,"propSetMap":{"label":"Checkbox1","disOnTplt":false,"hide":false,"HTMLTemplateId":"","accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"checkLabel":"Save this payment method?","helpText":"","help":false,"defaultValue":false,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"controlWidth":12},"name":"savePaymentMethod","level":1,"JSONPath":"paymentDetails:savePaymentMethod","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bCheckbox":true,"lwcId":"lwc12-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Radio","rootIndex":1,"response":null,"propSetMap":{"label":"Method of Payment","disOnTplt":false,"enableCaption":true,"imageCountInRow":3,"optionHeight":100,"optionWidth":100,"hide":false,"HTMLTemplateId":"","accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"controllingField":{"type":"","source":"","element":""},"optionSource":{"type":"","source":""},"options":[{"autoAdv":"next","value":"Electronic Check","name":"Bank Account"},{"autoAdv":"next","value":"Credit Card","name":"Credit Card"}],"helpText":"","help":false,"defaultValue":null,"horizontalMode":"displayWide","readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":true,"controlWidth":12},"name":"payMethod","level":1,"JSONPath":"paymentDetails:payMethod","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bRadio":true,"lwcId":"lwc13-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"paymentDetails","lwcId":"lwc1"},{"type":"Step","propSetMap":{"disOnTplt":false,"errorMessage":{"default":null,"custom":[]},"allowSaveForLater":true,"label":"Bank Account Details","chartLabel":null,"instructionKey":"","HTMLTemplateId":"","conditionType":"Hide if False","show":{"group":{"rules":[{"field":"payMethod","data":"Bank Account","condition":"="}],"operator":"AND"}},"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"remoteOptions":{},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","showPersistentComponent":[false,false],"instruction":"","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","cancelMessage":"Are you sure?","cancelLabel":"Cancel","nextWidth":3,"nextLabel":"Next","previousWidth":3,"previousLabel":"Previous","validationRequired":false,"uiElements":{"ach":"","acctHolder":"","achType":"","achRouting":"","achAccount":"","mopACH":""},"aggElements":{"paymentMethodACH":""}},"offSet":0,"name":"ach","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Block","rootIndex":2,"response":null,"propSetMap":{"bus":true,"show":null,"repeatLimit":null,"repeatClone":false,"repeat":false,"label":"Electronic check payment","hide":false,"disOnTplt":false,"controlWidth":12,"conditionType":"Hide if False","collapse":false,"accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"mopACH","level":1,"JSONPath":"ach:mopACH","indexInParent":0,"index":0,"children":[{"response":null,"level":2,"indexInParent":0,"eleArray":[{"type":"Headline","rootIndex":2,"response":null,"propSetMap":{"HTMLTemplateId":"","controlWidth":12,"documentNames":["CABHAECJA391062e54e094306b4bae7aab2167d7f"],"label":"<p><img src=\"../servlet/servlet.FileDownload?file=0153s000001myf4AAA&amp;&amp;docName=CABHAECJA391062e54e094306b4bae7aab2167d7f\" alt=\"\" width=\"386\" height=\"225\" /></p>","labelKey":"","show":{"group":{"operator":"AND","rules":[{"condition":"=","data":"ach","field":"payMethod"}]}}},"name":"EFTInstructions","level":2,"JSONPath":"ach:mopACH|1:EFTInstructions","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"lwcId":"lwc2000-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":1,"eleArray":[{"type":"Text","rootIndex":2,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":255,"mask":"","label":"Account Holder","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":null,"debounceValue":0,"controlWidth":12,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"acctHolder","level":2,"JSONPath":"ach:mopACH|1:acctHolder","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc2001-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":2,"eleArray":[{"type":"Select","rootIndex":2,"response":null,"propSetMap":{"label":"Account Type","disOnTplt":false,"hide":false,"HTMLTemplateId":"","accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"controllingField":{"type":"","source":"","element":""},"optionSource":{"type":"","source":""},"options":[{"value":"Checking","name":"checking"},{"value":"Savings","name":"savings"}],"helpText":"","help":false,"defaultValue":null,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":true,"inputWidth":12,"showInputWidth":false,"controlWidth":3},"name":"achType","level":2,"JSONPath":"ach:mopACH|1:achType","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bSelect":true,"lwcId":"lwc2002-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":3,"eleArray":[{"type":"Number","rootIndex":2,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":255,"mask":null,"label":"Routing Number","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":null,"debounceValue":0,"controlWidth":3,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"achRouting","level":2,"JSONPath":"ach:mopACH|1:achRouting","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bNumber":true,"lwcId":"lwc2003-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":4,"eleArray":[{"type":"Number","rootIndex":2,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":true,"repeatLimit":null,"repeatClone":false,"repeat":false,"readOnly":false,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":255,"mask":null,"label":"Account Number","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"defaultValue":null,"debounceValue":0,"controlWidth":3,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"achAccount","level":2,"JSONPath":"ach:mopACH|1:achAccount","indexInParent":4,"index":0,"children":[],"bHasAttachment":false,"bNumber":true,"lwcId":"lwc2004-0"}],"bHasAttachment":false}],"bHasAttachment":false,"bBlock":true,"lwcId":"lwc20-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Formula","rootIndex":2,"response":null,"propSetMap":{"label":null,"disOnTplt":false,"HTMLTemplateId":"","dateFormat":"MM-dd-yyyy","hideGroupSep":false,"dataType":null,"mask":null,"show":null,"hide":true,"expression":"CONCATENATE(%acctHolder%,\"-\",%achType%)","inputWidth":12,"showInputWidth":false,"controlWidth":12},"name":"paymentMethodACH","level":1,"JSONPath":"ach:paymentMethodACH","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bFormula":true,"lwcId":"lwc21-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"ach","lwcId":"lwc2"},{"type":"Step","propSetMap":{"validationRequired":true,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"payMethod","data":"Credit Card","condition":"="}],"operator":"AND"}},"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","previousWidth":3,"previousLabel":"Previous","nextWidth":3,"nextLabel":"Next","label":"Credit Card Details","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instruction":"","errorMessage":{"default":null,"custom":[]},"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","cancelMessage":"Are you sure?","cancelLabel":"Cancel","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"CreditCard":"","Charge Total":"","Checkout":"","paymentNonce":""},"aggElements":{"Amount":"","CustomLWC1":"","TextClientToken":"","URLFormula":""}},"offSet":0,"name":"CreditCard","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Block","rootIndex":3,"response":null,"propSetMap":{"bus":true,"show":null,"repeatClone":false,"repeat":false,"label":null,"hide":false,"disOnTplt":false,"controlWidth":12,"conditionType":"Hide if False","collapse":false,"accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"Charge Total","level":1,"JSONPath":"CreditCard:Charge Total","indexInParent":0,"index":0,"children":[{"response":null,"level":2,"indexInParent":0,"eleArray":[{"type":"Formula","rootIndex":3,"response":null,"propSetMap":{"label":"Amount","disOnTplt":false,"HTMLTemplateId":"","dateFormat":"MM-dd-yyyy","hideGroupSep":false,"dataType":"Currency","mask":null,"show":null,"hide":true,"expression":"%BalanceDueAmt%","inputWidth":12,"showInputWidth":false,"controlWidth":12},"name":"Amount","level":2,"JSONPath":"CreditCard:Charge Total|1:Amount","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bFormula":true,"lwcId":"lwc3000-0"}],"bHasAttachment":false}],"bHasAttachment":false,"bBlock":true,"lwcId":"lwc30-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Custom Lightning Web Component","rootIndex":3,"response":null,"propSetMap":{"formulaPath":"%CreditCard:URLFormula%","disOnTplt":false,"label":"CustomLWC1","customAttributes":[{"source":"400","name":"height"},{"source":"100%","name":"width"}],"bStandalone":false,"lwcName":"braintreeIframe","hide":false,"conditionType":"Hide if False","show":null,"controlWidth":12},"name":"CustomLWC1","level":1,"JSONPath":"CreditCard:CustomLWC1","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bcustomlightningwebcomponent1":true,"lwcId":"lwc31-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Formula","rootIndex":3,"response":null,"propSetMap":{"label":"Client Token","disOnTplt":false,"HTMLTemplateId":"","dateFormat":"MM-dd-yyyy","hideGroupSep":false,"dataType":null,"mask":null,"show":null,"hide":true,"expression":"'sandbox_hrtqy2qx_9nd32f8m28kjm56b'","inputWidth":12,"showInputWidth":false,"controlWidth":12},"name":"TextClientToken","level":1,"JSONPath":"CreditCard:TextClientToken","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bFormula":true,"lwcId":"lwc32-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Select","rootIndex":3,"response":null,"propSetMap":{"label":"Checkout using Braintree","disOnTplt":false,"hide":false,"HTMLTemplateId":"","accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"controllingField":{"type":"","source":"","element":""},"optionSource":{"type":"","source":""},"options":[{"value":"yes","name":"yes"},{"value":"no","name":"no"}],"helpText":"","help":false,"defaultValue":"yes","readOnly":false,"repeatClone":false,"repeat":false,"required":false,"inputWidth":12,"showInputWidth":true,"controlWidth":12},"name":"Checkout","level":1,"JSONPath":"CreditCard:Checkout","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bSelect":true,"lwcId":"lwc33-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":4,"eleArray":[{"type":"Formula","rootIndex":3,"response":null,"propSetMap":{"label":"Formula - These parameters will be passed to braintree","disOnTplt":false,"HTMLTemplateId":"","dateFormat":"MM-dd-yyyy","hideGroupSep":false,"dataType":null,"mask":null,"show":null,"hide":true,"expression":"\"amount=\" + %Amount% + (IF(%orderId%!=null, \"&orderId=\" + %orderId%, \"\")) \n+ (IF(%TextClientToken%!=null, \"&clientToken=\" + %TextClientToken%, \"\")) + (IF(%FirstName%!=null, \"&firstName=\" + %FirstName%, \"\"))\n+ (IF(%LastName%!=null, \"&lastName=\" + %LastName%, \"\"))\n+ (IF(%Company%!=null, \"&company=\" + %Company%, \"\"))\n+ (IF(%Phone%!=null, \"&phone=\" + %Phone%, \"\"))\n+ (IF(%Website%!=null, \"&website=\" + %Website%, \"\"))\n+ (IF(%Email%!=null, \"&email=\" + %Email%, \"\"))\n+ (IF(%Checkout%!=null, \"&checkout=\" + %Checkout%, \"\"))","inputWidth":12,"showInputWidth":false,"controlWidth":12},"name":"URLFormula","level":1,"JSONPath":"CreditCard:URLFormula","indexInParent":4,"index":0,"children":[],"bHasAttachment":false,"bFormula":true,"lwcId":"lwc34-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":5,"eleArray":[{"type":"Text","rootIndex":3,"response":null,"propSetMap":{"label":"Payment Nonce","disOnTplt":false,"hide":false,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"maxLength":255,"minLength":0,"ptrnErrText":"","pattern":"","mask":"","helpText":"","help":false,"readOnly":true,"repeatClone":false,"repeat":false,"required":false,"inputWidth":12,"showInputWidth":false,"controlWidth":8},"name":"paymentNonce","level":1,"JSONPath":"CreditCard:paymentNonce","indexInParent":5,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc35-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"CreditCard","lwcId":"lwc3"},{"type":"Step","propSetMap":{"disOnTplt":false,"errorMessage":{"default":null,"custom":[]},"allowSaveForLater":true,"label":"Payment Authorization","HTMLTemplateId":"","conditionType":"Hide if False","show":{"group":{"rules":[{"field":"payMethod","data":"Credit Card","condition":"="}],"operator":"AND"}},"knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"remoteOptions":{},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","showPersistentComponent":[false,false],"instruction":"","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","cancelMessage":"Are you sure?","cancelLabel":"Cancel","nextWidth":3,"nextLabel":"Next","previousWidth":0,"previousLabel":"Previous","validationRequired":false,"uiElements":{"Braintree":"","processorResponseText":"","status":"","type":"","processorAuthorizationCode":"","createdAt":"","cardType":"","expirationDate":"","maskedNumber":"","customerLocation":"","imageUrl":"","creditCard":"","transaction":""},"aggElements":{"paymentMethodName":""}},"offSet":0,"name":"Braintree","level":0,"indexInParent":4,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Block","rootIndex":4,"response":null,"propSetMap":{"bus":true,"show":null,"repeatClone":false,"repeat":false,"label":"Transaction Details","hide":false,"disOnTplt":false,"controlWidth":12,"conditionType":"Hide if False","collapse":false,"accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"transaction","level":1,"JSONPath":"Braintree:transaction","indexInParent":0,"index":0,"children":[{"response":null,"level":2,"indexInParent":0,"eleArray":[{"type":"Text","rootIndex":4,"response":null,"propSetMap":{"showInputWidth":true,"show":null,"required":false,"repeatClone":false,"repeat":false,"readOnly":true,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":255,"mask":"","label":"Processor Response Text","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"debounceValue":0,"controlWidth":6,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"processorResponseText","level":2,"JSONPath":"Braintree:transaction|1:processorResponseText","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc4000-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":1,"eleArray":[{"type":"Text","rootIndex":4,"response":null,"propSetMap":{"showInputWidth":true,"show":null,"required":false,"repeatClone":false,"repeat":false,"readOnly":true,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":255,"mask":"","label":"Status","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"debounceValue":0,"controlWidth":6,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"status","level":2,"JSONPath":"Braintree:transaction|1:status","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc4001-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":2,"eleArray":[{"type":"Text","rootIndex":4,"response":null,"propSetMap":{"showInputWidth":true,"show":null,"required":false,"repeatClone":false,"repeat":false,"readOnly":true,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":255,"mask":"","label":"Type","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"debounceValue":0,"controlWidth":6,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"type","level":2,"JSONPath":"Braintree:transaction|1:type","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc4002-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":3,"eleArray":[{"type":"Text","rootIndex":4,"response":null,"propSetMap":{"showInputWidth":true,"show":null,"required":false,"repeatClone":false,"repeat":false,"readOnly":true,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":255,"mask":"","label":"Processor Authorization Code","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"debounceValue":0,"controlWidth":6,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"processorAuthorizationCode","level":2,"JSONPath":"Braintree:transaction|1:processorAuthorizationCode","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc4003-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":4,"eleArray":[{"type":"Text","rootIndex":4,"response":null,"propSetMap":{"showInputWidth":true,"show":null,"required":false,"repeatClone":false,"repeat":false,"readOnly":true,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":255,"mask":"","label":"Ceated At","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"debounceValue":0,"controlWidth":6,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"createdAt","level":2,"JSONPath":"Braintree:transaction|1:createdAt","indexInParent":4,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc4004-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":5,"eleArray":[{"type":"Block","rootIndex":4,"response":null,"propSetMap":{"show":null,"repeatClone":false,"repeat":false,"label":"Card Details","hide":false,"disOnTplt":false,"controlWidth":12,"conditionType":"Hide if False","collapse":false,"accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"creditCard","level":2,"JSONPath":"Braintree:transaction|1:creditCard","indexInParent":5,"index":0,"children":[{"response":null,"level":3,"indexInParent":0,"eleArray":[{"type":"Text","rootIndex":4,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatClone":false,"repeat":false,"readOnly":true,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":255,"mask":"","label":"cardType","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"debounceValue":0,"controlWidth":6,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"cardType","level":3,"JSONPath":"Braintree:transaction|1:creditCard|1:cardType","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc400500-0"}],"bHasAttachment":false},{"response":null,"level":3,"indexInParent":1,"eleArray":[{"type":"Text","rootIndex":4,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatClone":false,"repeat":false,"readOnly":true,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":255,"mask":"","label":"expirationDate","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"debounceValue":0,"controlWidth":6,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"expirationDate","level":3,"JSONPath":"Braintree:transaction|1:creditCard|1:expirationDate","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc400501-0"}],"bHasAttachment":false},{"response":null,"level":3,"indexInParent":2,"eleArray":[{"type":"Text","rootIndex":4,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatClone":false,"repeat":false,"readOnly":true,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":255,"mask":"","label":"maskedNumber","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"debounceValue":0,"controlWidth":6,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"maskedNumber","level":3,"JSONPath":"Braintree:transaction|1:creditCard|1:maskedNumber","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc400502-0"}],"bHasAttachment":false},{"response":null,"level":3,"indexInParent":3,"eleArray":[{"type":"Text","rootIndex":4,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatClone":false,"repeat":false,"readOnly":true,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":255,"mask":"","label":"customerLocation","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"debounceValue":0,"controlWidth":6,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"customerLocation","level":3,"JSONPath":"Braintree:transaction|1:creditCard|1:customerLocation","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc400503-0"}],"bHasAttachment":false},{"response":null,"level":3,"indexInParent":4,"eleArray":[{"type":"Text","rootIndex":4,"response":null,"propSetMap":{"showInputWidth":false,"show":null,"required":false,"repeatClone":false,"repeat":false,"readOnly":true,"ptrnErrText":"","pattern":"","minLength":0,"maxLength":255,"mask":"","label":"imageUrl","inputWidth":12,"hide":false,"helpText":"","help":false,"disOnTplt":false,"debounceValue":0,"controlWidth":6,"conditionType":"Hide if False","accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"imageUrl","level":3,"JSONPath":"Braintree:transaction|1:creditCard|1:imageUrl","indexInParent":4,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc400504-0"}],"bHasAttachment":false},{"response":null,"level":3,"indexInParent":5,"eleArray":[{"type":"Text Block","rootIndex":4,"response":null,"propSetMap":{"text":"<p><img src=\"%imageUrl%\" alt=\"\" /></p>","show":null,"label":null,"disOnTplt":false,"dataJSON":true,"controlWidth":12,"HTMLTemplateId":""},"name":"Image","level":3,"JSONPath":"Braintree:transaction|1:creditCard|1:Image","indexInParent":5,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc400505-0"}],"bHasAttachment":false}],"bHasAttachment":false,"bBlock":true,"lwcId":"lwc4005-0"}],"bHasAttachment":false},{"response":null,"level":2,"indexInParent":6,"eleArray":[{"type":"Formula","rootIndex":4,"response":null,"propSetMap":{"label":null,"disOnTplt":false,"HTMLTemplateId":"","dateFormat":"MM-dd-yyyy","hideGroupSep":false,"dataType":null,"mask":null,"show":null,"hide":true,"expression":"CONCATENATE(%payMethod%,\"-\",%Braintree:transaction:creditCard:last4%)","inputWidth":12,"showInputWidth":false,"controlWidth":12},"name":"paymentMethodName","level":2,"JSONPath":"Braintree:transaction|1:paymentMethodName","indexInParent":6,"index":0,"children":[],"bHasAttachment":false,"bFormula":true,"lwcId":"lwc4006-0"}],"bHasAttachment":false}],"bHasAttachment":false,"bBlock":true,"lwcId":"lwc40-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"Braintree","lwcId":"lwc4"},{"type":"Step","propSetMap":{"validationRequired":true,"showPersistentComponent":[false,false],"show":{"group":{"rules":[{"field":"payMethod","data":"Bank Account","condition":"="}],"operator":"AND"}},"saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","remoteTimeout":30000,"remoteOptions":{},"remoteMethod":"","remoteClass":"","previousWidth":3,"previousLabel":"Previous","nextWidth":3,"nextLabel":"Next","label":"Payment Authorization","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"publishStatus":"Online","language":"English","keyword":"","dataCategoryCriteria":""},"instructionKey":"","instruction":"","errorMessage":{"default":null,"custom":[]},"disOnTplt":false,"conditionType":"Hide if False","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","chartLabel":null,"cancelMessage":"Are you sure?","cancelLabel":"Cancel","allowSaveForLater":true,"HTMLTemplateId":"","uiElements":{"achAuthorization":"","achApproval":""},"aggElements":{}},"offSet":0,"name":"achAuthorization","level":0,"indexInParent":5,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Block","rootIndex":5,"response":null,"propSetMap":{"bus":true,"show":{"group":{"rules":[{"field":"payMethod","data":"Bank Account","condition":"="}],"operator":"AND"}},"repeatLimit":null,"repeatClone":false,"repeat":false,"label":null,"hide":false,"disOnTplt":false,"controlWidth":12,"conditionType":"Hide if False","collapse":false,"accessibleInFutureSteps":false,"HTMLTemplateId":""},"name":"achApproval","level":1,"JSONPath":"achAuthorization:achApproval","indexInParent":0,"index":0,"children":[{"response":null,"level":2,"indexInParent":0,"eleArray":[{"type":"Text Block","rootIndex":5,"response":null,"propSetMap":{"textKey":"","text":"<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Your payment has been Approved. Please click next to issue your policy</p>","show":null,"label":null,"disOnTplt":false,"dataJSON":false,"controlWidth":12,"HTMLTemplateId":""},"name":"AchAuth","level":2,"JSONPath":"achAuthorization:achApproval|1:AchAuth","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bTextBlock":true,"lwcId":"lwc5000-0"}],"bHasAttachment":false}],"bHasAttachment":false,"bBlock":true,"lwcId":"lwc50-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"achAuthorization","lwcId":"lwc5"},{"type":"DataRaptor Post Action","propSetMap":{"disOnTplt":false,"enableActionMessage":false,"enableDefaultAbort":false,"errorMessage":{"default":null,"custom":[]},"label":"postPaymentMethod","pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":{"group":{"rules":[{"data":"true","field":"savePaymentMethod","condition":"="}],"operator":"AND"}},"showPersistentComponent":[false,false],"redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectNextWidth":3,"redirectNextLabel":"Next","redirectTemplateUrl":"vlcAcknowledge.html","redirectPageName":"","validationRequired":null,"failureAbortMessage":"Are you sure?","failureGoBackLabel":"Go Back","failureAbortLabel":"Abort","failureNextLabel":"Continue","postMessage":"Done","inProgressMessage":"In Progress","sendJSONNode":"","sendJSONPath":"","postTransformBundle":"","remoteTimeout":30000,"bundle":"payment_PostPaymentMethod_OTPIssueOS","controlWidth":12,"aggElements":{}},"offSet":0,"name":"CreatePaymentMethod","level":0,"indexInParent":6,"bHasAttachment":false,"bEmbed":false,"bDataRaptorPostAction":true,"JSONPath":"CreatePaymentMethod","lwcId":"lwc6"}],"bReusable":true,"bpVersion":1,"bpType":"insWC","bpSubType":"IssuePayment","bpLang":"English","bHasAttachment":false,"lwcVarMap":{}};