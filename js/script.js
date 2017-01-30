//////////////////////////////////////////////////////
/////////////////// $() / .find() ////////////////////
//////////////////////////////////////////////////////

// you don't know js
// eloquent

// tjekke element for id, tag, class, css selector
function find(ele) {
  var x = document.querySelector(ele);
  //console.log(x);
  return x;
}

find("li");

//////////////////////////////////////////////////////
/////////////////////// html() ///////////////////////
//////////////////////////////////////////////////////

// bruge findmetode
function html(ele, value) {
  var x = find(ele);
  if (value) {
    x.innerHTML = value;
  }
  return x.innerHTML;
}

var y = html("li.someClass", "two");
// når vi kører funktionen, så er var "outputtet"

function test() {
  return 'et eller andet';
}

var z = test;
//console.log(z);
// når vi IKKE kører funktionen, så er var funktionen

//////////////////////////////////////////////////////
/////////////////////// .val() ///////////////////////
//////////////////////////////////////////////////////

function val(ele, value) {
  var x = find(ele);
  if (value) {
    x.value = value;
  }
  //console.log(x);
  //console.log(value);
  return x.value;
}

document.getElementById("btn").onclick = function() {
  val("input", "Ny");
};

//////////////////////////////////////////////////////
////////////////////// .append() /////////////////////
//////////////////////////////////////////////////////

// sidst i elementet
function append(node, text, ele) {
  var node = document.createElement(node);
  var textnode = document.createTextNode(text);
  node.appendChild(textnode);
  document.querySelector(ele).appendChild(node);
}
append("LI", "Last", "ul");

//////////////////////////////////////////////////////
///////////////////// .prepend() /////////////////////
//////////////////////////////////////////////////////

// færst i elementet
function prepend(node, text, ele) {
  var node = document.createElement(node);
  var textnode = document.createTextNode(text);
  node.appendChild(textnode);

  var x = find(ele);
  x.insertBefore(node, x.childNodes[0]);
}
prepend("LI", "First", "ul");

//////////////////////////////////////////////////////
////////////////////// .remove() /////////////////////
//////////////////////////////////////////////////////

// remove
function remove(ele) {
  var x = find(ele);
  x.remove();
}
remove("li#d");

//////////////////////////////////////////////////////
/////////////////////// .each() //////////////////////
//////////////////////////////////////////////////////

// each
function each(array, func) {
  var a = array;

  a.forEach(function(x) {
    func(x);
  });
}

function logSomething(string) {
  console.log(string);
}

function consoleLog() {
  console.log("Det virker");
}

each(["a", "b", "c"], logSomething);

//////////////////////////////////////////////////////
////////////////////// .parent() /////////////////////
//////////////////////////////////////////////////////

// parent
function parent(ele) {
  var x = find(ele);
  //console.log(x.parentElement);
}
parent("li#aID");

//////////////////////////////////////////////////////
//////////////////// .children() /////////////////////
//////////////////////////////////////////////////////

// children
function children(ele) {
  var x = find(ele);
  var children = x.children;
  var arr = [].slice.call(children);
  //console.log(arr);
  return arr;
}
children("ul");

//////////////////////////////////////////////////////
//////////////////// .siblings() /////////////////////
//////////////////////////////////////////////////////

function parentChildren(ele) {
  var x = find(ele);
  var children = x.parentNode.children;
  var arr = [].slice.call(children);
  //console.log(arr);
  return arr;
}
console.log(parentChildren("li#aID"));

// siblings
function siblings(ele) {
  var x = find(ele);
  var nodes = parentChildren(ele);

  nodes = nodes.filter(function val(node) {
    return node !== x;
  });

  return nodes;
}
console.log(siblings("li#aID"));

//////////////////////////////////////////////////////
///////////////////// .addClass() ////////////////////
//////////////////////////////////////////////////////

function addClass1(ele, className) {
  var x = find(ele);
  x.className += className;
  //console.log(x.className);
}
addClass1("li.someClass", " otherClass1");

function addClass2(ele, className) {
  var x = find(ele);

  for (var i = 1; i < arguments.length; i++) { // before the loop; condition for running; after the loop
    className = arguments[i];
    x.classList.add(className);
  }
}
addClass2("li.someClass", "otherClass2", "otherClass3");

//////////////////////////////////////////////////////
/////////////////// .removeClass() ///////////////////
//////////////////////////////////////////////////////

function removeClass(ele, className) {
  var x = find(ele);

  for (var i = 1; i < arguments.length; i++) { // before the loop; condition for running; after the loop
    className = arguments[i];
    x.classList.remove(className);
  }
}
removeClass("li.removeClass", "removeClass1");

//////////////////////////////////////////////////////
/////////////////// .toggleClass() ///////////////////
//////////////////////////////////////////////////////

function toggleClass(ele, className) {
  var x = find(ele);

  for (var i = 1; i < arguments.length; i++) { // before the loop; condition for running; after the loop
    className = arguments[i];
    x.classList.toggle(className);
  }
}
toggleClass("li.someClass", "someClass");

//////////////////////////////////////////////////////
/////////////////////// .css() ///////////////////////
//////////////////////////////////////////////////////

// property på object når jeg har en streng
// javascript define parameter as property
// .style er kun til inline style attribute
function css(ele, prop, def) {
  var x = find(ele);
  var style = window.getComputedStyle(x) // method gives the values of all the CSS properties of an element

  if (def) {
    return x.style[prop] = def;
  }
  return style.getPropertyValue(prop);
}
css("h1", "font-size", "43px");
console.log(css("h1", "color", "green"));

//////////////////////////////////////////////////////
//////////////////////// .on() ///////////////////////
//////////////////////////////////////////////////////

function on(ele, handler, func) {
  var x = find(ele);

  return x.addEventListener(handler, func);
}
on("h1", "mouseenter", consoleLog);
console.log(on("h1", "mouseenter", consoleLog));

//////////////////////////////////////////////////////
/////////////////////// .off() ///////////////////////
//////////////////////////////////////////////////////

function off(ele, handler, func) {
  var x = find(ele);

  return x.removeEventListener(handler, func);
}
off("h1", "mouseenter", consoleLog);
console.log(off("h1", "mouseenter", consoleLog));

//////////////////////////////////////////////////////
/////////////////////// .one() ///////////////////////
//////////////////////////////////////////////////////


function one(ele, handler, func) {
  var x = find(ele);

  x.addEventListener(handler, oneFunc);

  // hoisting bliver læst først
  function oneFunc() {
    // remove event
    x.removeEventListener(handler, oneFunc);
    func();
  }
}
one("p", "click", consoleLog);

//////////////////////////////////////////////////////
///////////////////// .trigger() /////////////////////
//////////////////////////////////////////////////////

////////////////////// scroll ///////////////////////
function runOnScroll(evt) {
  console.log("loleren");
};
on("body", "scroll", consoleLog);
window.addEventListener("scroll", runOnScroll);

////////////////////// resize ///////////////////////
function resize() {
  var w = window.outerWidth;
  var h = window.outerHeight;
  var txt = "Window size: width=" + w + ", height=" + h;
  document.getElementById("resize").innerHTML = txt;
}
resize();
window.addEventListener('resize', resize);

/////////////////////// dbclick ////////////////////////
function runOnDBclick(evt) {
  css("#box", "background-color", "pink");
};

function dbclick(ele) {
  let x = find(ele);
  x.addEventListener('dblclick', runOnDBclick);
}
dbclick("#box");

/////////////////////// click ////////////////////////
function runOnSingleclick(evt) {
  css("#box", "background-color", "lightgrey");
};

function singleclick(ele) {
  let x = find(ele);
  x.addEventListener('click', runOnSingleclick);
}
singleclick("#box");

/////////////////////// keyup ///////////////////////
function runOnKeyup(evt) {
  console.log("keyup");
};

function keyup() {
  window.addEventListener('keyup', runOnKeyup);
}
keyup();

/////////////////////// keydown ///////////////////////
function runOnKeydown(evt) {
  console.log("keydown");
};

function keydown() {
  window.addEventListener('keydown', runOnKeydown);
}
keydown();

/////////////////////// custom event ///////////////////////

function tripleClick(ele) {
  var uygfEvent = new Event('uygf');
  x = find(ele);

  x.addEventListener('click', function(evt) {
    if (evt.detail === 3) {
      x.dispatchEvent(uygfEvent);
    }
  });
}
tripleClick("#box");
on("#box", "uygf", function(){
  alert('triple click!');
});

/////////////////////// trigger ///////////////////////

function trigger(ele, e) {
  let cb = find(ele);
  let evt = new Event(e); // represents events that occur due to a mouse.
  console.log(cb);

  cb.dispatchEvent(evt); // afsender event
}
trigger("#box", "dblclick");

//////////////////////////////////////////////////////
/////////////////////// cascade //////////////////////
//////////////////////////////////////////////////////

var cascade1 = {

  findElement: function() {
    this.txt1 = "Hej";
    this.txt2 = "Hello";
    return this;
  }

}
//alert(cascade1.findElement().txt2);



//////////////////////////////////////////////////////
//////////////////////// .live ///////////////////////
//////////////////////////////////////////////////////

// Attach an event handler for all elements which match
// the current selector, now and in the future.

//////////////////////////////////////////////////////
////////////////////// .delegate /////////////////////
//////////////////////////////////////////////////////

// Attach a handler to one or more events for all elements
// that match the selector, now or in the future, based on
// a specific set of root elements.

/////////////////////// let, var, const ///////////////////////

// funfunfunction
// let er block scope (som if-statement)
// var er function scope
// const kan ikke overskrives

// minimize mutable state / minimere foranderlig tilstand

/////////////////////// .bind ///////////////////////

function bind() {
  let dog = {
    sound: "woof",
    talk: function() {
      console.log(this.sound)
    }
  }

  let button = document.getElementById("dog")

  button.addEventListener(
    "click",
    dog.talk.bind(dog)
    // bind it to dog because it doesn't know "this" (it goes to window)
  )
}
bind();

///////////////// => arrow functions ///////////////

// it is a shorter function syntax
// to make small inline single-purpose functions

function arrow() {
  const dragonEvents = [
    { type: "attack", value: 12, target: "player-dorkman" },
    { type: "eat", value: 40, target: "player-fluff" },
    { type: "kill", value: 100, target: "player-dorkman" },
    { type: "attack", value: 12, target: "player-kent" },
  ]
  const totalDamage = dragonEvents
    // 1. filter
    .filter(function(event) {
      return event.type === "attack"
    })
    // 2. filter
    .filter(event => event.target === "player-kent")

  console.log(totalDamage);
}
arrow();
