// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Populate the Stack section
    const skills = ['Python', 'JavaScript', 'DSA', 'HTML', 'Tailwind CSS', 'Figma', 'SQL'];
    const stackContainer = document.getElementById('stack-container');

    if (stackContainer) {
        // Clear container first to prevent duplicates
        stackContainer.innerHTML = ''; 
        
        skills.forEach(skill => {
            const span = document.createElement('span');
            span.className = 'bg-gray-800 border-2 border-gray-600 px-2 py-1 text-[10px] hover:bg-green-600 transition-colors cursor-default';
            span.textContent = `[${skill}]`;
            stackContainer.appendChild(span);
        });
    }

    // 2. Simple scroll animation for the "Initialize Contact" button
    const contactBtn = document.querySelector('.pixel-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }


     // Populate skills dynamically
    skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'bg-gray-800 border-2 border-gray-600 px-2 py-1 text-[10px] hover:bg-green-600 transition-colors cursor-default';
        span.textContent = `[${skill}]`;
        stackContainer.appendChild(span);
    });


    
    // 3. Smooth Scrolling for ALL Nav Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    console.log("VIPLOV.EXE: Initialized successfully.");
});
