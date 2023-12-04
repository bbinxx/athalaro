const splash = document.querySelector('.splash');

    document.addEventListener('DOMContentLoaded', (e)=>{
      setTimeout(() => {
        splash.classList.add('display-none');
      }, 2000);
    })



const targetDate = new Date('December 08, 2023 09:00:00');
    const timeElement = document.getElementById('countdown-time');
    const labelElement = document.getElementById('countdown-label');

    function updateCountdown() {
      const now = new Date();
      const timeRemaining = (targetDate - now) / 1000;

      if (timeRemaining <= 0) {
        timeElement.innerHTML = '00:00:00';
        labelElement.innerHTML = 'Athalaro 2k23!';
        clearInterval(interval);
        return;
      }

      const days = Math.floor(timeRemaining / (60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
      const seconds = Math.floor(timeRemaining % 60);

      timeElement.innerHTML = `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    const interval = setInterval(updateCountdown, 1000);

    updateCountdown();

    
    