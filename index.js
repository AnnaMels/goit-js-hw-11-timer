class CountdownTimer {
    constructor({selector, targetDate}) {
      this.targetDate = new Date(targetDate);
      this.daysSpan = document.querySelector(`${selector} .value[data-value="days"]`);
      this.hoursSpan = document.querySelector(`${selector} .value[data-value="hours"]`);
      this.minutesSpan = document.querySelector(`${selector} .value[data-value="mins"]`);
      this.secondsSpan = document.querySelector(`${selector} .value[data-value="secs"]`);
      this.timerId;
    }
    
    padZero(value) {
      return String(value).padStart(2, '0');
    }
    countDown() {
      const currentTime = new Date();
      this.createSpanValue(currentTime);
    }

  
    showTime() {
      let currentTime = new Date();
      this.timerId = setInterval(() => this.countDown(), 1000);
    }
  
    createSpanValue(currentTime) {
      const time = this.targetDate - currentTime;
      this.daysSpan.textContent = this.padZero(Math.floor(time / (1000 * 60 * 60 * 24)));
      this.hoursSpan.textContent = this.padZero(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      this.minutesSpan.textContent = this.padZero(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      this.secondsSpan.textContent = this.padZero(Math.floor((time % (1000 * 60)) / 1000));
      if(this.secondsSpan.textContent < 1 && this.daysSpan.textContent < 1 && this.hoursSpan.textContent < 1 && this.minutesSpan.textContent) {
        clearInterval(this.timerId);
      }
    }
  }


const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jun 24, 2021, 14:13:00'),
  });

  const btn = document.querySelector('.start-button');
  btn.addEventListener("click", startTimer);

  function startTimer() {
      timer.showTime()
  }
// const refs = {
// days: document.querySelector('span[data-value ="days"]'),
// hours: document.querySelector('span[data-value ="hours"]'),
// mins: document.querySelector('span[data-value ="mins"]'),
// secs: document.querySelector('span[data-value ="secs"]'),
// }

// const targetDate = new Date('Jul 17, 2019');

// function pad(value) {
//     return String(value).padStart(2, '0');
// }

//   function getTimeRemaining() {
//     const targetDate = new Date('Jun 19, 2021');
//     const targetDateInMilisek = Date.parse(targetDate);
//     const time = targetDateInMilisek - new Date();
//     const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//     return {
//       days: days,
//       hours: hours,
//       mins: mins,
//       secs: secs
//     };
//   };

//   setInterval(() => {
//     const { days, hours, mins, secs } = getTimeRemaining(targetDate);
//     refs.days.textContent = `${days}`;
//     refs.secs.textContent = `${secs}`;
//     refs.hours.textContent = `${hours}`;
//     refs.mins.textContent = `${mins}`;
//     }, 1000);

    


  