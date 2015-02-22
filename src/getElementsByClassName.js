// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var elements = [];

  var checkElementAndChildren = function(element) {
    if(element.classList.contains(className)) {
      elements.push(element);
    }

    for(var i = 0; i < element.childNodes.length; i++) {
      if(element.childNodes[i].nodeType === 1)
      checkElementAndChildren(element.childNodes[i]);
    }
  };

  checkElementAndChildren(document.body);

  return elements;
};