function onReady() {
  $('#get_color').on('click', onSubmit);
}

function onSubmit(event){
    $.post('/color', null, onSuccess);
}

function onSuccess(success){
  returnedObj = JSON.parse(success);
  $("#color_me li:nth-child(" + returnedObj.cell + ")").css('background-color', returnedObj.color);
}

$(document).ready(onReady);
