/*

  Hvornår skal jeg return this?

*/

// get ende kæden
// set fortsætter
// lave if else

var cascade = {

  currentEle: [],

  // current element, current index, the array
  filt: function(elem, index, self) {

    return index == self.indexOf(elem);
    // 2. findes elementet(object) i arrayet flere gange

    // 1. object equality

    // så det er altså værdien!

    // 1. sammenligne objecter
  },

  unique: function(a) {
    var arr = a;
    var outputArr = [];

    for (var i = 0; i < a.length; i++) {
      // hvis a[i] ikke findes i outputArr, så:
      if (a[i] !== outputArr) {
        outputArr.push(a[i]);
      }
    }

    return outputArr;

    // return arr.filter(this.filt);
  },
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

    a = [ "Woof", "Woof", "Dog", "Cat", "Cat"]
    console.log(this.currentEle);
    console.log(this.unique(this.currentEle));

    return this; // currentEle: Array[5]
  },

  //////////// ERROR ////////////
  parent: function() {

    // get: find plus parent
    // fortsætte med this
    // ikke dubletter

    this.forEach(function(e) {
      e.parentElement;
      console.log(e.parentElement);
    });
    return this;
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

  // To use cascading, we have to return this
  // (the object we want subsequent methods to operate on)
  // in each method.

  //////////// ERROR ////////////
  children: function() {
    this.forEach(function(e) {
      var children = e.children;
      var arr = [].slice.call(children);
      return arr;
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

function filt(elem, index, self) {
  return index == self.indexOf(elem);
}

function unique() {
  var arr = [1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 7, 8, 9, 10, 10];
  return arr.filter(filt);
}
console.log(unique());
