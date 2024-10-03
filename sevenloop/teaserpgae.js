function startCountdown(targetDate) {
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
  
    function padZero(num) {
      return num < 10 ? "0" + num : num;
    }
  
    function updateCountdown() {
      const now = new Date();
      const timeRemaining = targetDate - now;
  
      if (timeRemaining <= 0) {
        daysElement.innerText = "00";
        hoursElement.innerText = "00";
        minutesElement.innerText = "00";
        return;
      }
  
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
  
      daysElement.innerText = padZero(days);
      hoursElement.innerText = padZero(hours);
      minutesElement.innerText = padZero(minutes);
    }
  
    updateCountdown(); // Run the first time immediately
    setInterval(updateCountdown, 1000 * 60); // Update every minute
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const targetDate = new Date("November 4, 2024 00:00:00");
    startCountdown(targetDate);
  });
