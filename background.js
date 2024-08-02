document.addEventListener('DOMContentLoaded', () => {

    const footer = document.querySelector('.footer');
    const creditsDiv = document.createElement('div');
    creditsDiv.textContent = atob('QXJ0aHVyIFNhY29tb3Jp');
    Object.assign(creditsDiv.style, { fontSize: '1.5em', margin: '0 20px', color: 'white' });
    footer.insertBefore(creditsDiv, footer.querySelector('.address'));

    const background = document.getElementById('background');
    Array.from({ length: 600 }).forEach(() => {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 1;
        Object.assign(star.style, {
            width: `${size}px`,
            height: `${size}px`,
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`
        });
        star.speedX = (Math.random() - 0.5) * 0.5;
        star.speedY = (Math.random() - 0.5) * 0.5;
        background.appendChild(star);
    });

    const animation = () => {
        document.querySelectorAll('.star').forEach(star => {
            const rect = star.getBoundingClientRect();
            Object.assign(star.style, {
                top: `${rect.top + star.speedY}px`,
                left: `${rect.left + star.speedX}px`
            });

            if (rect.top > window.innerHeight) star.style.top = `-${star.style.height}`;
            if (rect.left > window.innerWidth) star.style.left = `-${star.style.width}`;
            if (rect.top < -rect.height) star.style.top = `${window.innerHeight}px`;
            if (rect.left < -rect.width) star.style.left = `${window.innerWidth}px`;
        });
        requestAnimationFrame(animation);
    };
    animation();

    window.addEventListener('scroll', () => {
        document.getElementById('topbar').classList.toggle('shrink', window.scrollY > 50);
    });
});
