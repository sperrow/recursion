// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  
  if(obj === null) {
    return 'null';
  } else if(obj === undefined) {
    return;
  } else if(typeof obj === "function") {
    return;
  } else if(obj.constructor === String) {
    return '"' + obj + '"';
  } else if(obj.constructor === Number) {
    return obj.toString();
  } else if(obj.constructor === Boolean) {
    return obj.toString();
  } else if(obj.constructor === Array) {
    var str = [];
    for(var i = 0; i < obj.length; i++) {
      if(obj[i] !== undefined && typeof obj[i] !== "function") {
        str.push(stringifyJSON(obj[i]));
      }
    }
    return '[' + str.join(',') + ']';
  } else if(obj.constructor === Object) {
    var str = [];
    for(var key in obj) {
      if(obj[key] !== undefined && typeof obj[key] !== "function") {
        str.push('"' + key + '":' + stringifyJSON(obj[key]));
      }
    }
    return '{' + str.join(',') + '}';
  }
  else {
    return '';
  }
};
