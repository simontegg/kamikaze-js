const parser = require('html-vtree')
const virtual = require('virtual-html')
const Vnode = require('virtual-dom/vnode/vnode')
const createElement = require('virtual-dom/create-element')
const toHtml = require('vdom-to-html')
const { page, list } = require('./dream')
var items = ['b', 'd', 'a', 'c']
var traverse = require('traverse')

// actions
function sort (items) {
  return items.sort()
}

var p = page({title: 'banzai!'}, list(items, 'sort'))
//var p = page({title: 'banzai!'})

virtual(p, function (err, tree) {

  var clicks = []


  var map = {}
  function setIds (node, path, index) {
   
    if (node && node.children) {
      console.log('ttt')
      var index = 0
      
      node.children.forEach(function (child, i) {
        if (child.tagName) {
          index ++
          var childPath = `${path}.${index}` 
          child.properties = child.properties || {}
          child.properties.attributes = child.properties.attributes || {}
      
          child.properties.attributes['data-kk-id'] = childPath
          
          setIds(child, childPath, index)
        }
      })
    }
  }

  setIds(tree, 0, 0)

  console.log(tree)
  console.log(toHtml(tree))

})

//set classes
