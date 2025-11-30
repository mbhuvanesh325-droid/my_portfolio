// ============================================
// Navbar JavaScript - Smooth Scroll
// ============================================

(function() {
    'use strict';

    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // DOM already loaded, run immediately
        setTimeout(init, 100);
    }

    function init() {
        const navbar = document.getElementById('navbar');
        const menuToggle = document.getElementById('menuToggle');
        const navbarMenu = document.getElementById('navbarMenu');
        const navbarLinks = document.querySelectorAll('.navbar-link');

        if (!navbar) {
            return;
        }

        if (navbarLinks.length === 0) {
            return;
        }

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        if (menuToggle) {
            menuToggle.addEventListener('click', function() {
                menuToggle.classList.toggle('active');
                if (navbarMenu) {
                    navbarMenu.classList.toggle('active');
                }
                document.body.style.overflow = navbarMenu && navbarMenu.classList.contains('active') ? 'hidden' : '';
            });
        }

        // Enhanced smooth scroll function
        function scrollToSection(sectionId) {
            let targetPosition = 0;
            let section = null;
            
            if (sectionId === 'hero' || !sectionId) {
                // For home/hero, always scroll to absolute top (0)
                targetPosition = 0;
            } else {
                section = document.getElementById(sectionId);
                if (!section) {
                    return;
                }

                const navbarHeight = navbar ? navbar.offsetHeight : 100;
                const sectionTop = section.offsetTop;
                targetPosition = Math.max(0, sectionTop - navbarHeight - 20);
            }

            const currentScroll = window.pageYOffset || window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

            // Check if we can scroll
            const maxScroll = Math.max(
                document.body.scrollHeight - window.innerHeight,
                document.documentElement.scrollHeight - window.innerHeight
            );

            // Special handling for scroll to top (Home) - always allow it
            if (targetPosition === 0) {
                // For position 0, always use manual scroll to ensure it works
                manualScroll(0, currentScroll);
                return;
            }
            
            // If already at target, do nothing
            if (Math.abs(currentScroll - targetPosition) < 5) {
                return;
            }

            // Method 1: Try native smooth scroll (modern browsers)
            if ('scrollBehavior' in document.documentElement.style || 'scrollBehavior' in document.body.style) {
                try {
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    // Verify scroll happened after a delay
                    setTimeout(function() {
                        const newScroll = window.pageYOffset || window.scrollY || document.documentElement.scrollTop || 0;
                        if (Math.abs(newScroll - targetPosition) > 10) {
                            manualScroll(targetPosition, currentScroll);
                        }
                    }, 100);
                    return;
                } catch (e) {
                    // Native scroll failed, fall through to manual
                }
            }

            // Method 2: Manual smooth scroll animation
            manualScroll(targetPosition, currentScroll);
        }

        // Manual smooth scroll implementation
        function manualScroll(targetPosition, startPosition) {
            const distance = targetPosition - startPosition;
            const duration = 800;
            let start = null;
            let animationId = null;
            let lastPosition = startPosition;

            // Special fast path for scrolling to top
            if (targetPosition === 0 && startPosition < 100) {
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
                return;
            }

            function smoothScrollStep(timestamp) {
                if (!start) {
                    start = timestamp;
                }
                
                const progress = timestamp - start;
                const percentage = Math.min(progress / duration, 1);
                
                // Easing function (ease-in-out cubic)
                const ease = percentage < 0.5 
                    ? 2 * percentage * percentage 
                    : 1 - Math.pow(-2 * percentage + 2, 2) / 2;
                
                const currentPosition = Math.max(0, Math.round(startPosition + distance * ease));
                
                // Only update if position changed
                if (currentPosition !== lastPosition) {
                    // Try all scroll methods for maximum compatibility
                    window.scrollTo(0, currentPosition);
                    if (document.documentElement) {
                        document.documentElement.scrollTop = currentPosition;
                    }
                    if (document.body) {
                        document.body.scrollTop = currentPosition;
                    }
                    lastPosition = currentPosition;
                }
                
                if (percentage < 1) {
                    animationId = requestAnimationFrame(smoothScrollStep);
                } else {
                    // Ensure we end at exact position (especially important for position 0)
                    window.scrollTo(0, targetPosition);
                    if (document.documentElement) {
                        document.documentElement.scrollTop = targetPosition;
                    }
                    if (document.body) {
                        document.body.scrollTop = targetPosition;
                    }
                    // Force scroll to 0 if target is 0 (multiple attempts)
                    if (targetPosition === 0) {
                        window.scrollTo(0, 0);
                        document.documentElement.scrollTop = 0;
                        document.body.scrollTop = 0;
                        // Double check after a tiny delay
                        setTimeout(function() {
                            const checkPos = window.pageYOffset || window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
                            if (checkPos > 0) {
                                window.scrollTo(0, 0);
                                document.documentElement.scrollTop = 0;
                                document.body.scrollTop = 0;
                            }
                        }, 50);
                    }
                }
            }

            // Cancel any existing animation
            if (animationId) {
                cancelAnimationFrame(animationId);
            }

            // Start animation
            animationId = requestAnimationFrame(smoothScrollStep);
        }

        // Handle navbar link clicks
        navbarLinks.forEach((link) => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Only handle anchor links
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const sectionId = href.substring(1);
                    
                    // Update active state immediately
                    navbarLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Update URL
                    try {
                        if (history.pushState) {
                            history.pushState(null, null, href);
                        }
                    } catch (e) {
                        // History update failed, continue anyway
                    }
                    
                    // Close mobile menu if open
                    if (window.innerWidth <= 768) {
                        if (menuToggle) {
                            menuToggle.classList.remove('active');
                        }
                        if (navbarMenu) {
                            navbarMenu.classList.remove('active');
                        }
                        document.body.style.overflow = '';
                    }
                    
                    // Scroll after a tiny delay to ensure preventDefault is processed
                    // Special handling for Home/hero to ensure it works
                    if (sectionId === 'hero') {
                        setTimeout(function() {
                            scrollToSection('hero');
                        }, 10);
                    } else {
                        setTimeout(function() {
                            scrollToSection(sectionId);
                        }, 50);
                    }
                }
            });
        });

        // Update active link on scroll
        function updateActiveLink() {
            const scrollY = window.pageYOffset || window.scrollY || document.documentElement.scrollTop || 0;
            const navbarHeight = navbar ? navbar.offsetHeight : 100;

            // Check if at top (Home section)
            if (scrollY < 200) {
                navbarLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === '#hero') {
                        navbarLinks.forEach(l => l.classList.remove('active'));
                        link.classList.add('active');
                    }
                });
                return;
            }

            // Check which section is in view
            const sections = document.querySelectorAll('section[id]');
            let currentSection = null;

            sections.forEach(section => {
                const sectionTop = section.offsetTop - navbarHeight - 100;
                const sectionBottom = sectionTop + section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollY >= sectionTop && scrollY < sectionBottom) {
                    currentSection = sectionId;
                }
            });

            if (currentSection) {
                navbarLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${currentSection}`) {
                        navbarLinks.forEach(l => l.classList.remove('active'));
                        link.classList.add('active');
                    }
                });
            }
        }

        // Throttle scroll event for performance
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(updateActiveLink, 10);
        });

        // Initial active link update
        updateActiveLink();
    }
})();
