(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.svd = require('./index')
},{"./index":2}],2:[function(require,module,exports){
exports.el = require('./lib/element')

},{"./lib/element":3}],3:[function(require,module,exports){
var _ = require('./util');

function Element(tagName, props, children) {
    if (!(this instanceof Element)) {
        return new Element(tagName, props, children)
    }
    if (Array.isArray(props)) {
        children = props;
        props = {};
    }
    this.tagName = tagName;
    this.props = props;
    this.children = children;
    this.children.forEach(function (child, i) {

    })


}
Element.prototype.render = function () {
    var el = document.createElement(this.tagName)
    var props = this.props
    for (var propName in props) {
        var propValue = props[propName]
        el.setAttribute(propName, propValue)
    }
    this.children.forEach( function (child) {
        var childEl = (child instanceof Element)
        ? child.render()
        : document.createTextNode(child)
      el.appendChild(childEl)
    })
    return el
}
module.exports = Element
},{"./util":4}],4:[function(require,module,exports){
var _ = {}
module.exports = _;
},{}]},{},[1]);
