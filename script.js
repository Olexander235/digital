let time = document.getElementById('time')
let date = document.getAnimations('date')

setInterval(() => {
    let now = new Date();


    let timeNow = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    let dateNow = now.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });

    time.textContent = timeNow
    date.textContent = dateNow
}, 1000) 

const countdownEl = document.getElementById('countdown');
const bidEl = document.getElementById('bid');

// Set initial bid and start countdown
bidEl.textContent = '0.24 ETH';
startCountdown(5 * 60 * 60); // Example: 5 hours countdown

// Countdown timer logic
function startCountdown(seconds) {
  const interval = setInterval(() => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    countdownEl.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (seconds <= 0) {
      clearInterval(interval);
    } else {
      seconds--;
    }
  }, 1000);
}

// Placeholder for bidding action
function placeBid() {
  alert('Bid placed!');
}