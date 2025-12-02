document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SCROLL REVEAL ANIMATION (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up, .fade-down').forEach(el => observer.observe(el));

    // 2. SCROLL PROGRESS BAR
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;
        document.querySelector('.scroll-progress').style.width = scrolled + "%";
    });
});

// 3. TOAST NOTIFICATION LOGIC
function copyEmail() {
    const email = "dakshinragav849@gmail.com";
    const toast = document.getElementById('toast');

    navigator.clipboard.writeText(email).then(() => {
        // Show Toast
        toast.classList.add('show');
        
        // Hide Toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy', err);
    });
}
