function onReady() {
  $('#get_color').on('click', onSubmit);
}

function onSubmit(event){
    $.post('/color', null, onSuccess);
}

function onSuccess(success){
  $("#color_me li:nth-child(" + success.cell + ")").css('background-color', success.color);
}

$(document).ready(onReady);
