// To use cascading, we have to return this
// (the object we want subsequent methods to operate on)
// in each method.

// get ende kæden
// set fortsætter
// lave if else

function log() {
  console.log("It Works!");
}

var cascade = {

  currentEle: [],

  unique: function(a) {
    var outputArr = [];

    for (var i = 0; i < a.length; i++) {
      // hvis array outputArr med indexOf (retunerer positionen af værdien)
      // object ikke er i array
      if (outputArr.indexOf(a[i]) == -1) {
        outputArr.push(a[i]);
      }
    }

    return outputArr;
  },
  // en function til at kunne løbe currentelements i gennem til hvert element
  forEach: function (callback) { // callback/function
    for (var i = 0; i < this.currentEle.length; i++) {
      callback.call(this, this.currentEle[i]); // kalder en function med this og argument
    }
  },

  find: function (ele) {
    var nodes = document.querySelectorAll(ele)

    var newElements = []; // laver tom array

    // starter ved den sidste, hvis der er elementer, kører den anden vej
    for (i = nodes.length - 1; i >= 0; --i) {
      newElements.push(nodes[i]);
    }

    this.currentEle = newElements; // tager this.currentEle og erstatter

    return this; // currentEle: Array[5]
  },

  parent: function() {

    var newElements = []; // laver tom array

    this.forEach(function(e) {
      newElements.push(e.parentElement); // push til tomt array
    });

    this.currentEle = this.unique(newElements); // tager this.currentEle og erstatter

    return this;
  },

  children: function() {
    var newElements = [];

    this.forEach(function(e) {
      var arr = [].slice.call(e.children); // slicer htmlcollection til array så css kan bruge det
      newElements.push(arr);
    });
    var mynewElements = [].concat.apply([], newElements); // merge nested arrays into one

    this.currentEle = mynewElements;

    return this;
  },

  parentChildren: function() {

    var newElements = [];

    this.forEach(function(e) {
      var arr = [].slice.call(e.parentNode.children);
      newElements.push(arr);
    });
    var mynewElements = [].concat.apply([], newElements); // merge nested arrays into one

    this.currentEle = mynewElements;

    return this;
  },

  siblings: function() {

    var newElements = [];

    this.forEach(function(e) {
      var nodes = parentChildren(ele);

      nodes = nodes.filter(function val(node) {
        return node !== x;
      });

    });
    var mynewElements = [].concat.apply([], newElements); // merge nested arrays into one

    this.currentEle = mynewElements;

    return this;

  },

  // get/set
  css: function (prop, def) {

    var newElements = []; // laver tom array

    this.forEach(function (e) {
      var style = window.getComputedStyle(e) // method gives the values of all the CSS properties of an element

      newElements.push(style[prop]); // push til tomt array

      if (def) {
        e.style[prop] = def;
      }
    });

    this.currentEle = newElements; // tager this.currentEle og erstatter

    if (def) { // på alle get/set
      return this;
    }

    return newElements;

  },

  addClass: function(name) {

    for (var j = 0; j < arguments.length; j++) {
      name = arguments[j];

      this.forEach(function(e) {
        e.classList.add(name);
      });
    }

    return this;
  },

  removeClass: function(name) {

    for (var j = 0; j < arguments.length; j++) {
      name = arguments[j];

      this.forEach(function(e) {
        e.classList.remove(name);
      });
    }

    return this;
  },

  toggleClass: function(name) {

    for (var j = 0; j < arguments.length; j++) {
      name = arguments[j];

      this.forEach(function(e) {
        e.classList.toggle(name);
      });
    }

    return this;
  },

  remove: function() {
    this.forEach(function (e) {
      e.remove();
    });
    return this;
  },

  html: function (value) {
    var newElements = [];

    this.forEach(function (e) {
      newElements.push(e.innerHTML);
      if (value) {
        e.innerHTML = value;
      }
    });

    if (value) { // på alle get/set
      return this;
    }

    return newElements;

  },

  val: function (value) {
    var newElements = [];

    this.forEach(function (e) {
      newElements.push(e.value);
      if (value) {
        e.value = value;
      }
    });
    if (value) { // på alle get/set
      return this;
    }

    return newElements;
  },
  /*
  append: function (node, text) {
    this.forEach(function (e) {

      var node = document.createElement(node);
      var textnode = document.createTextNode(text);
      node.appendChild(textnode);
      document.querySelector(e).appendChild(node);
    });
  },
*/
  on: function (handler, func) {
    this.forEach(function (e) {
      e.addEventListener(handler, func);
    });

    return this;
  },

  off: function(handler, func) {
    this.forEach(function (e) {
      e.removeEventListener(handler, func);
    });

    return this;
  },

  one: function(handler, func) {
    this.forEach(function (e) {
      e.addEventListener(handler, removeEvent);
      function removeEvent() {
        e.removeEventListener(handler, removeEvent);
        func();
      }
    });

    return this;
  },

  trigger: function(evnt) {
    this.forEach(function (e) {
      let evt = new Event(evnt);
      e.dispatchEvent(evt); // afsender event
    });

    return this;
  }

}
console.log(cascade.find("ul").children().css("background-color", "lightblue"));
//cascade.find("h4").parent().css("border", "2px solid lightblue");
