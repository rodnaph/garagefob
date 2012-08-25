
exports.enter = function(req, res)
{
  // if code matches
  res.render('opening', { title: 'Garage Opening' })
};

exports.index = function(req, res)
{
  res.render('index', { title: 'Garage Fob' });
};

