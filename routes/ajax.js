const rpio = require('rpio');

function AjaxRequests(req, res) {
  const bodyRequest = req.body;
  if (Object.prototype.hasOwnProperty.call(bodyRequest, 'action')) {
    if (bodyRequest.action === 'write') {
      rpio.init({ mapping: 'gpio' });
      rpio.open(bodyRequest.gpio, rpio.OUTPUT, +bodyRequest.status);
      rpio.write(bodyRequest.gpio, +bodyRequest.status);
      res.contentType('json');
      res.send({ gpio: bodyRequest.gpio, status: bodyRequest.status });
    }
  }
}

module.exports = AjaxRequests;
