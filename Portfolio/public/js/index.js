window.addEventListener('DOMContentLoaded', () => {
        const header = document.querySelector('header');

        const sections = document.querySelectorAll('main[id], section[id]');
        const navLinks = document.querySelectorAll('nav a');

        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -60% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    
                    navLinks.forEach(link => link.classList.remove('active'));
                    
                    const activeLink = document.querySelector(`nav a[href="/#${id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    });