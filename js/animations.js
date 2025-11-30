// ============================================
// Animations JavaScript - Homepage Only
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Skills Section Animations
    const skillsObserverOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const skillsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillsSection = entry.target;
                
                // Animate skill items with stagger
                const skillItems = skillsSection.querySelectorAll('.skill-item');
                skillItems.forEach((item, index) => {
                    item.style.setProperty('--item-index', index);
                    item.style.animationDelay = `${index * 0.1}s`;
                    item.classList.add('animate-in');
                });

                // Animate progress bars with water-fill effect
                const progressBars = skillsSection.querySelectorAll('.skill-progress-bar');
                progressBars.forEach((bar, index) => {
                    const targetWidth = bar.getAttribute('data-width') || '0%';
                    bar.style.width = '0%';
                    // Stagger the animation for each bar
                    setTimeout(() => {
                        bar.style.width = targetWidth;
                    }, 500 + (index * 100));
                });
            }
        });
    }, skillsObserverOptions);

    // Observe skills section
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }

    // Background Section Timeline Animations
    const backgroundObserverOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const backgroundObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const backgroundSection = entry.target;
                
                // Animate timeline items with stagger
                const timelineItems = backgroundSection.querySelectorAll('.timeline-item');
                timelineItems.forEach((item, index) => {
                    // Add delay for stagger effect
                    setTimeout(() => {
                        if (item.classList.contains('left')) {
                            item.classList.add('animate-left');
                        } else if (item.classList.contains('right')) {
                            item.classList.add('animate-right');
                        }
                    }, index * 150);
                });
            }
        });
    }, backgroundObserverOptions);

    // Observe background section
    const backgroundSection = document.querySelector('.background');
    if (backgroundSection) {
        backgroundObserver.observe(backgroundSection);
    }

    // Projects Section Card Animations
    const projectsObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const projectsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const projectsSection = entry.target;
                
                // Animate project cards with stagger
                const projectCards = projectsSection.querySelectorAll('.project-card');
                projectCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate-in');
                        card.style.animationDelay = `${index * 0.15}s`;
                    }, index * 100);
                });

                // Animate tags with additional delay
                const projectTags = projectsSection.querySelectorAll('.project-tag');
                projectTags.forEach((tag, index) => {
                    setTimeout(() => {
                        tag.style.animationDelay = `${0.3 + (index * 0.1)}s`;
                    }, 300 + (index * 50));
                });
            }
        });
    }, projectsObserverOptions);

    // Observe projects section
    const projectsSection = document.querySelector('.projects');
    if (projectsSection) {
        projectsObserver.observe(projectsSection);
    }
});
