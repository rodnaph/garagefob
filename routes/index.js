
var fs = require( 'fs' );

function notifyBackend( config )
{
  if (config.backend) {
    var backend = require('../backends/' +config.backend);
    return backend.open(config.backends[config.backend]);
  }
  return false;
};

function open(res, config)
{
  if ( notifyBackend(config) === false ) {
    res.render(
      'error',
      {title: 'Ooops...'}
    );
  }
  else {
    res.render(
      'opening',
      {title: 'Garage Opening'}
    );
  }
};

function deny(res)
{
  res.redirect( '/' );
};

function pinIsOk(req, config)
{
  return (req.body.code == config.pin);
};

function onConfig(req, res, err, json)
{
  var config = JSON.parse(json);
  var handler = pinIsOk(req, config) ? open : deny;

  handler(res, config);
};

exports.enter = function(req, res)
{
  fs.readFile('config.js', onConfig.partial(req, res));
};

exports.index = function(req, res)
{
  res.render(
    'index',
    {title: 'Garage Fob'}
  );
};

