$(function() {
  $('.button-go-back').click(function() {
    window.location.href = '/';
  });

  var socket = io();

  $('button-camera').click(function() {
    socket.emit('start-stream');
    $('.button-camera').hide();
  });

  socket.on('liveStream', function(url) {
    $('#stream').attr('src', url);
    $('.button-camera').hide();
  });
});
