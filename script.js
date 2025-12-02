document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SCROLL REVEAL (Intersection Observer)
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up, .fade-down').forEach(el => observer.observe(el));

    // 2. TEXT REVEAL ANIMATION
    const textReveals = document.querySelectorAll('.reveal-text');
    textReveals.forEach((el, index) => {
        setTimeout(() => {
            el.style.transform = "translateY(0)";
            el.style.opacity = "1";
        }, 200 + (index * 100));
    });

    // 3. SCROLL PROGRESS
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;
        const bar = document.querySelector('.scroll-progress');
        if(bar) bar.style.width = scrolled + "%";
    });

    // 4. ACTIVE LINK HIGHLIGHT (For Sidebar TOC)
    const tocLinks = document.querySelectorAll('.toc-link');
    const sections = document.querySelectorAll('.content-block');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});

// 5. TOAST NOTIFICATION
function copyEmail() {
    const email = "dakshinragav849@gmail.com";
    const toast = document.getElementById('toast');

    navigator.clipboard.writeText(email).then(() => {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy', err);
    });
}
