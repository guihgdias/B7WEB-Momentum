const hourElement = document.querySelector('.clock-area .hour');
const minuteElement = document.querySelector('.clock-area .minutes');
const messageElement = document.querySelector('.message');

let userName = window.prompt('Olá, como você se chama?');

function setHourToDocument() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();

  hourElement.innerHTML = hour.toString().padStart(2, "0");
  minuteElement.innerHTML = minute.toString().padStart(2, "0");

  console.log(minute);

  if(hour >= 6 && hour <= 12) {
    messageElement.innerHTML = 'Bom dia, .' + userName;
  } else if(hour >= 13 && hour <= 18) {
    messageElement.innerHTML = 'Boa tarde, ' + userName;
  } else {
    messageElement.innerHTML = 'Boa noite, '  + userName;
  }
}

setHourToDocument();
setInterval(setHourToDocument, 5000);