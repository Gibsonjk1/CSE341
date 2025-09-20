const homeroute = (req, res) => {
  res.send('Jason Gibson was HERE!');
};

const Prosper = (req, res) => {
  res.send('Prosper!');
};

module.exports = { homeroute, Prosper };