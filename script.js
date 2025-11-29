document.addEventListener('DOMContentLoaded', () => {
    
    // 1. LIVE CLOCK (Updates every second)
    const clock = document.getElementById('clock');
    
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZone: 'Asia/Kolkata' // Set to India
        });
        clock.innerHTML = `IN &mdash; ${timeString}`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // 2. COPY EMAIL LOGIC
    window.copyEmail = function() { // Attach to window for global access
        const email = "dakshinragav849@gmail.com";
        const btn = document.getElementById('copyBtn');
        const textSpan = document.getElementById('btnText');
        const originalText = "Copy Email Address";

        navigator.clipboard.writeText(email).then(() => {
            textSpan.innerText = "Copied!";
            btn.style.backgroundColor = "#10B981"; // Green
            btn.style.borderColor = "#10B981";
            btn.style.color = "white";

            setTimeout(() => {
                textSpan.innerText = originalText;
                btn.style.backgroundColor = "#0F0F0F"; // Black
                btn.style.borderColor = "#0F0F0F";
            }, 2000);
        });
    }
});