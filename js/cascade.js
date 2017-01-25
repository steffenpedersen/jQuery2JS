/*

  Hvornår skal jeg return this?

*/

var cascade = {

  currentEle: [],

  // en function til at kunne løbe currentelements i gennem til hvert element
  forEach: function (callback) { // callback/function
    for (var i = 0; i < this.currentEle.length; i++) {
      callback.call(this, this.currentEle[i]); // kalder en function med this og argument
    }
  },

  find: function (ele) {
    var nodes = document.querySelectorAll(ele)
    this.currentEle = [];

    // starter ved den sidste, hvis der er elementer, kører den anden vej
    for (i = nodes.length - 1; i >= 0; --i) {
      this.currentEle.push(nodes[i]);
    }
    return this; // currentEle: Array[4]
  },

  //////////// ERROR ////////////
  html: function (value) {

    this.forEach(function (e) {
      if (value) {
        e.innerHTML = value;
      }

      return e.innerHTML;
      console.log(e.innerHTML);

    });
    return this;
  },

  remove: function() {
    this.forEach(function (e) {
      e.remove();
    });
    return this;
  },

  //////////// ERROR ////////////
  parent: function() {
    this.forEach(function(e) {
      return e.parentElement;
    });
    return this;
  },
  //////////// ERROR ////////////
  css: function (prop, def) {

    this.forEach(function (e) {
      var style = window.getComputedStyle(e) // method gives the values of all the CSS properties of an element

      if (def) {
        return e.style[prop] = def;
      }
      return style[prop];
      // set ikke this
    });
    return this;
  },

  addClass: function(name) {
    for (var j = 0; j < arguments.length; j++) {
      name = arguments[j];

      this.forEach(function(e) {
        e.classList.add(name);
      });
    }
    return this;
  }
}
console.log(cascade.find("li").parent());
cascade.find("li").css("background-color", "green").addClass("halli", "hallo");

/*

function addClass2(ele, className) {
  var x = find(ele);

  for (var i = 1; i < arguments.length; i++) { // before the loop; condition for running; after the loop
    className = arguments[i];
    x.classList.add(className);
  }
}
addClass2("li.someClass", "otherClass2", "otherClass3");

*/

/*
this.forEach(function(e) {
  for (var i = 1; i < arguments.length; i++) { // before the loop; condition for running; after the loop
    name = arguments[i];
    e.classList.add(name);
  }
  return this;
});
*/
