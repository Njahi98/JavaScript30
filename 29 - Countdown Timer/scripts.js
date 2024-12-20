let countdown;
const timeDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

function timer(seconds) {
  //clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds / 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const leftSeconds = Math.round((then - Date.now()) / 1000);
    //check if we should stop
    if (leftSeconds <= 0) {
      clearInterval(countdown);
      return;
    }
    console.log("test");

    //display it
    displayTimeLeft(leftSeconds);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remSeconds = seconds % 60;
  const display = `${minutes}:${remSeconds < 10 ? "0" : ""}${remSeconds}`;
  document.title = display;
  timeDisplay.textContent = display;
}
function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back at ${hour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}
function startTimer() {
  const seconds = parseInt(this.dataset.time);
}
buttons.forEach((button) => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
