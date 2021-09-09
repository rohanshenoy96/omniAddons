({
	doInit : function(component, event, helper) {
        console.log('doInit')
		var action = component.get("c.getOSHierarchy");
        action.setParams({ contextId : component.get('v.contextId') });

        // Create a callback that is executed after 
        // the server-side action returns
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                // Alert the user with the value returned 
                // from the server
                console.log("From server: " + response.getReturnValue());
               
                var nodes = JSON.parse(response.getReturnValue());
                console.log(nodes.items)
				component.set('v.nodes',nodes.items);
                console.log(component.get('v.nodes'))
                // You would typically fire a event here to trigger 
                // client-side notification that the server-side 
                // action is complete
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);

	},
    
    handleKeyUp : function(component, event, helper){
        console.log('handleKeyUp')
		var action = component.get("c.getSearchResults");
        var queryTerm = component.find('enter-search').get('v.value');
        action.setParams({ 
            searchKey : queryTerm,
            contextId : component.get('v.contextId') 
            
        });

        // Create a callback that is executed after 
        // the server-side action returns
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                // Alert the user with the value returned 
                // from the server
                //console.log("From server: " + response.getReturnValue());
                var searchResult = JSON.parse(response.getReturnValue());
                console.log(searchResult)
				component.set('v.searchResult',searchResult);
                console.log(component.get('v.searchResult'))
                // You would typically fire a event here to trigger 
                // client-side notification that the server-side 
                // action is complete
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    }
})