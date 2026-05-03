document.addEventListener('DOMContentLoaded', () => {
    const skills = [
        'Python', 'JavaScript', 'DSA', 
        'HTML', 'Tailwind CSS', 'Figma', 
        'Digital Art', 'SQL'
    ];

    const stackContainer = document.getElementById('stack-container');

    // Populate skills dynamically
    skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'bg-gray-800 border-2 border-gray-600 px-2 py-1 text-[10px] hover:bg-green-600 transition-colors cursor-default';
        span.textContent = `[${skill}]`;
        stackContainer.appendChild(span);
    });

    // Simple scroll animation for the "Initialize Contact" button
    const contactBtn = document.querySelector('.pixel-btn');
    contactBtn.addEventListener('click', () => {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });

    console.log("VIPLOV.EXE initialized...");
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Stop the instant jump

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
