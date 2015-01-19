// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) 
{
  // Switch on object to test type
  switch(testType(obj))
  {
    case "null": 
      return "null";	
    case "undefined":
      return "";
    case "number":
      return obj.toString();
    case "boolean":
      return "" + obj;
    case "string":
      return "\"" + obj + "\"";
    case "object":
      if(_.contains(obj, "") || _.contains(obj, undefined)){obj = "";}
      var objectVals = _.map(obj, function(val, key)
      {
        return stringifyJSON(key) + ":" + stringifyJSON(val); 
      }).join(",");
      return "{" + objectVals + "}";
    case "array":
			var content = _.map(obj, function(val){ 
        return stringifyJSON(val); 
      }).join(",");
      return "[" + content + "]";
  }
};

// Test item to see what type it is
var testType = function(item)
{
	var type = typeof item;
	if(item === null){ return "null"; }
	if(Array.isArray(item)){ return "array"; }
	return type;
}
