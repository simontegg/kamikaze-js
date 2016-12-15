var map = require('lodash.map')
var kamikaze = require('./kamikaze')
var items = ['b', 'd', 'a', 'c']

//module.exports = function (data) {
//  // setup kamikaze
//  var store = kamikaze.init(items)
//  var map = store.map
//  var render = store.render
//  var store.register('sort', sort)
//
//  return render(
//    page(
//      { title: 'banzai!' }, 
//      list(store, 'sort')
//    )
//  )
//}
//
module.exports = {
  page: page,
  list: list
}

// actions
function sort (items) {
  return items.sort()
}

// components
function page (options, content) {
  var title = options.title || ''
  var style = options.style || ''
  var content = content || ''

  return `
    <html>
     <head>
       <meta charset="UTF-8">
       <title>${title}</title>
       <style type="text/css">
         ${style}
       </style>
     </head>
     <body class="top yup">
       ${content}
     </body>
    </html>`
}

function list (items, onclick) {
  return `
  <button onclick=${onclick}>Sort</button>
  <ul>
  ${map(items, function (item) {
    return `
    <li>${item}</li>`
  })}
  <ul>`
}




//<style type="text/css">
//ul {
//  display: flex;
//  flex-direction: column;
//}
//
//input[type="checkbox"]:checked ~ ul > .a { order: 2; }
//input[type="checkbox"]:checked ~ ul > .b { order: 1; }
//input[type="checkbox"]:checked ~ ul > .c { order: 4; }
//input[type="checkbox"]:checked ~ ul > .d { order: 3; }
//
//
//</style>
//</head>
//<body>
//<input type="checkbox" >
//<ul>
//
//<li class="a">a</li>
//<li class="b">b</li>
//<li class="c">c</li>
//<li class="d">d</li>
//
//</ul>
//</body>
//</html>
