function copyEmail() {
    const email = "dakshinragav849@gmail.com";
    const btn = document.getElementById('emailBtn');
    const label = document.getElementById('btnLabel');
    const bg = document.querySelector('.success-bg');
    const icon = document.getElementById('btnIcon');
    const originalLabel = "Copy Email";

    navigator.clipboard.writeText(email).then(() => {
        
        // 1. Animate the Success Background (Sweep Effect)
        bg.style.transform = "scaleX(1)";
        
        // 2. Change Text & Icon after a tiny delay for visual sync
        setTimeout(() => {
            label.innerText = "Address Copied";
            // Checkmark Icon path
            icon.innerHTML = '<polyline points="20 6 9 17 4 12"></polyline>';
        }, 100);

        // 3. Reset State after 2.5s
        setTimeout(() => {
            bg.style.transform = "scaleX(0)"; // Sweep back
            setTimeout(() => {
                label.innerText = originalLabel;
                // Copy Icon path (reset)
                icon.innerHTML = '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>';
            }, 200); // Wait for background to leave
        }, 2500);

    }).catch(err => {
        console.error('Copy failed', err);
    });
}
