
var fs = require( 'fs' );

var onConfig = function(req, res, json)
{
  res.render(
    'opening',
    { title: 'Garage Opening' +json }
  );
};

exports.enter = function(req, res)
{
  fs.readFile( 'config.js', onConfig.partial(req,res) );
};

exports.index = function(req, res)
{
  res.render('index', { title: 'Garage Fob' });
};

