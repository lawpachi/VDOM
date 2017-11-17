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