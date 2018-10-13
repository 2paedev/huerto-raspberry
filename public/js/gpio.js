$(function() {
  const buttonCam = $('.button-cam');
  const gpioCheckbox = $('.gpio-checkbox');

  gpioCheckbox.on('change', function(e) {
    var data = {};
    data.action = 'write';
    data.gpio = $(this).data('gpio');
    data.status = this.checked;
    setButtonColor($(this), this.checked);
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: '/ajax',
      error: function(data) {
        alert('Error');
      }
    });
  });

  setButtonColor = function(self, checked) {
    if (checked) {
      self.parent().addClass('btn-success');
      self.parent().removeClass('btn-danger');
      self.siblings('label').html('Activated');
    } else {
      self.parent().addClass('btn-danger');
      self.parent().removeClass('btn-success');
      self.siblings('label').html('Disabled');
    }
  };

  buttonCam.click(function() {
    window.location.href = '/camera';
  });
});
