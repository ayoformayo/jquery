function onReady() {
  $('#get_color').submit(onSubmit);
}

function onSubmit(event){
  event.preventDefault();
  var serialized = $('#get_color').serialized;
  $.post('/color', serialized, onSuccess);
}

function onSuccess(success){

  alert(color)

}

$(document).ready(onReady);
