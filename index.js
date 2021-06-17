// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
//   });

const refs = {
days: document.querySelector('span[data-value ="days"]'),
hours: document.querySelector('span[data-value ="hours"]'),
mins: document.querySelector('span[data-value ="mins"]'),
secs: document.querySelector('span[data-value ="secs"]'),
}

const targetDate = new Date('Jul 17, 2019');

function pad(value) {
    return String(value).padStart(2, '0');
}

  function getTimeRemaining() {
    const targetDate = new Date('Jun 19, 2021');
    const targetDateInMilisek = Date.parse(targetDate);
    const time = targetDateInMilisek - new Date();
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return {
      days: days,
      hours: hours,
      mins: mins,
      secs: secs
    };
  };

  setInterval(() => {
    const { days, hours, mins, secs } = getTimeRemaining(targetDate);
    refs.days.textContent = `${days}`;
    refs.secs.textContent = `${secs}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    }, 1000);

    


  