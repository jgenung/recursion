// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className)
{
	var node = document.body;
	var array = [];
	
	var getElementsByName = function(node)
	{
		var classes = node.classList;
		var children = node.childNodes;

		if(classes  && (classes.length > 0) && classes.contains(className))
		{
				array.push(node);
		}

		if(children.length > 0)
		{
			for(var i = 0; i < children.length; i++)
			{
				getElementsByName(children[i]);
			}
		}
	}
	
	getElementsByName(node);
	return array;
};
