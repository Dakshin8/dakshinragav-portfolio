function copyEmail() {
    const email = "hello@dakshinragav.com";
    const btn = document.getElementById('emailBtn');
    const label = document.getElementById('btnLabel');
    const bg = document.querySelector('.success-bg');
    const icon = document.getElementById('btnIcon');
    const originalLabel = "Copy Email";

    navigator.clipboard.writeText(email).then(() => {
        bg.style.transform = "scaleX(1)";
        setTimeout(() => {
            label.innerText = "Address Copied";
            icon.innerHTML = '<polyline points="20 6 9 17 4 12"></polyline>';
        }, 100);

        setTimeout(() => {
            bg.style.transform = "scaleX(0)";
            setTimeout(() => {
                label.innerText = originalLabel;
                icon.innerHTML = '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>';
            }, 200);
        }, 2500);

    }).catch(err => {
        console.error('Copy failed', err);
    });
}
