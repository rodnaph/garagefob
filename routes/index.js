
var fs = require( 'fs' );

function notifyBackend( config )
{
  if (config.backend) {
    console.info('Notify backend: ', config.backend);
    var backend = require('../backends/' +config.backend);
    return backend.open(config.backends[config.backend]);
  }
  return false;
};

function show(res, tmpl, title)
{
  res.render(
    tmpl,
    {title: title}
  );
}

function open(res, config)
{
  if ( notifyBackend(config) === false ) {
    show(res, 'error', 'Ooops');
  }
  else {
    show(res, 'opening', 'Garage Opening');
  }
};

function deny(res)
{
  res.redirect( '/' );
};

function pinIsOk(req, config)
{
  var pin = req.body.code;
  console.info('Check pin: ', pin)
  return (pin == config.pin);
};

function onConfig(req, res, err, json)
{
  if (err) {
    console.error('Config file not found...');
    show(res, 'error', 'Ooops...');
  }
  else {
    var config = JSON.parse(json);
    var handler = pinIsOk(req, config) ? open : deny;

    handler(res, config);
  }
};

exports.enter = function(req, res)
{
  fs.readFile('config.sjs', onConfig.partial(req, res));
};

exports.index = function(req, res)
{
  show(res, 'index', 'Garage Fob');
};

