'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

var articles = [{
  id: 1,
  idNuevo: 'sfASDASDQWDDSDFSFdxzczx11111111',
  name: 'Articulo 1',
  price: 100,
  image: 'http://www.indianfootballonline.com/img/sport/sport_318_test-201.gif'
}, {
  id: 2,
  idNuevo: 'sfASDASDQWDDSDFSFdxzczx22222222',
  name: 'Articulo 2',
  price: 175,
  image: 'http://www.indianfootballonline.com/img/sport/sport_318_test-201.gif'
}, {
  id: 3,
  idNuevo: 'sfASDASDQWDDSDFSFdxzczx33333333',
  name: 'Articulo 3',
  price: 320,
  image: 'http://www.indianfootballonline.com/img/sport/sport_318_test-201.gif'
}];

var orders = [{
  id: 1,
  articles: [{ id: 1, cant: 7 }, { id: 2, cant: 5 }, { id: 3, cant: 2 }],
  completed: false
}, {
  id: 2,
  articles: [{ id: 2, cant: 5 }, { id: 3, cant: 2 }],
  completed: true
}, {
  id: 3,
  articles: [{ id: 3, cant: 2 }],
  completed: true
}];

app.use(_express2.default.static(__dirname + '/public'));

app.get('/api/articles', function (req, res) {
  return res.json(articles);
});
app.get('/api/orders', function (req, res) {
  return res.json(orders);
});

app.listen(port, function () {
  return console.log('Server litening on port ' + port);
});

