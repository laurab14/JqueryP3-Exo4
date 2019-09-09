//  var rectangle = document.queryselector('#rectangle');
// if (rectangle = 100px){
//   alert(startHeight);
// };
// function(startHeight){
//   $('#rectangle').height(10px);
// };

$('#pxHeight').click(function() {
  if ($('#rectangle').css('height') == '100px') {
    $('#rectangle').height('10px');
  };
  $('#rectangle').animate({
    height: '+=10px'
  });

});
$('#hide').click(function() {
  $('#rectangle').hide();
});

$('#show').click(function() {
  $('#rectangle').show();
});

$('#colorGreen').click(function() {
  $('#rectangle').css('background-color', 'green');
});

$('#colorStart').click(function() {
  $('#rectangle').css('background-color', '');
});
