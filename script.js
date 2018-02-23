
function sendMail() {
  $.ajax({
    url: "https://maker.ifttt.com/trigger/nomorewater/with/key/h4-l6BVXrDbYw9ijIOCt1",
    data: {value1: "super"},
    dataType: "json"
  });
  Materialize.toast('Mail envoyé !', 3000, 'notif')
}


var temperature = 30;

function tempup() {
  temperature = temperature + 1;
  $("#tempDiv").html(temperature+"°C")
  if (temperature < 15) {
    $("#tempDiv").removeClass('green').addClass('red');
  }
  else {
    $("#tempDiv").removeClass('red').addClass('green');
  }
}

function tempdown() {

}
