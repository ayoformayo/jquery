$(document).ready(function(){
  $('a').click(prevent);
  $('#get_color').on('click', onClick);

});

function prevent(event){
  event.preventDefault();
};

function onClick(){
  $.post('/color', onSuccess);
};

function onSuccess(success){
  $("#color_me li:nth-child(" + success.cell + ")").css("background-color", success.color);
};
