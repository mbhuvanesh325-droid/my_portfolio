// ============================================
// Hero Section Animation - Content Transition (Loop)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const heroGreeting = document.querySelector('.hero-greeting');
    const heroName = document.querySelector('.hero-name');
    const heroProfession = document.querySelector('.hero-profession');
    const profileImage = document.getElementById('profileImage');
    const profileContainer = document.getElementById('profileContainer');
    
    if (!heroGreeting || !heroName || !heroProfession) return;
    
    // Initial content
    const initialGreeting = 'HELLO!';
    const initialName = 'I\'m <span class="name-highlight">Bhuvanesh M</span>';
    const initialProfession = 'UI/UX Designer';
    
    // Transition content
    const transitionGreeting = 'Hello!';
    const transitionName = 'I\'m a UI/UX designer';
    const transitionProfession = 'based in Chennai.';
    
    // Image paths
    const initialImage = 'assets/images/profile/profile.png';
    const transitionImage = 'assets/images/profile/profile-2.png';
    
    let isInitialState = true;
    
    function performTransition() {
        if (isInitialState) {
            // Transition from initial to second state
            // Add fade-out class to text and image
            heroGreeting.classList.add('fade-out');
            heroName.classList.add('fade-out');
            heroProfession.classList.add('fade-out');
            if (profileImage) {
                profileImage.classList.add('fade-out');
            }
            
            // After fade-out animation completes, change content and image
            setTimeout(function() {
                heroGreeting.textContent = transitionGreeting;
                heroName.innerHTML = transitionName;
                heroProfession.textContent = transitionProfession;
                
                // Change image and move it up
                if (profileImage) {
                    profileImage.src = transitionImage;
                    profileContainer.classList.add('image-moved-up');
                }
                
                // Remove fade-out and add fade-in
                heroGreeting.classList.remove('fade-out');
                heroName.classList.remove('fade-out');
                heroProfession.classList.remove('fade-out');
                if (profileImage) {
                    profileImage.classList.remove('fade-out');
                }
                
                heroGreeting.classList.add('fade-in-content');
                heroName.classList.add('fade-in-content');
                heroProfession.classList.add('fade-in-content');
                if (profileImage) {
                    profileImage.classList.add('fade-in-content');
                }
                
                // Remove fade-in class after animation
                setTimeout(function() {
                    heroGreeting.classList.remove('fade-in-content');
                    heroName.classList.remove('fade-in-content');
                    heroProfession.classList.remove('fade-in-content');
                    if (profileImage) {
                        profileImage.classList.remove('fade-in-content');
                    }
                    
                    isInitialState = false;
                    // Loop back after 4 seconds
                    setTimeout(performTransition, 4000);
                }, 800);
            }, 500); // Wait for fade-out to complete
        } else {
            // Transition from second state back to initial
            // Add fade-out class to text and image
            heroGreeting.classList.add('fade-out');
            heroName.classList.add('fade-out');
            heroProfession.classList.add('fade-out');
            if (profileImage) {
                profileImage.classList.add('fade-out');
            }
            
            // After fade-out animation completes, change content and image
            setTimeout(function() {
                heroGreeting.textContent = initialGreeting;
                heroName.innerHTML = initialName;
                heroProfession.textContent = initialProfession;
                
                // Change image back and remove move-up class
                if (profileImage) {
                    profileImage.src = initialImage;
                    profileContainer.classList.remove('image-moved-up');
                }
                
                // Remove fade-out and add fade-in
                heroGreeting.classList.remove('fade-out');
                heroName.classList.remove('fade-out');
                heroProfession.classList.remove('fade-out');
                if (profileImage) {
                    profileImage.classList.remove('fade-out');
                }
                
                heroGreeting.classList.add('fade-in-content');
                heroName.classList.add('fade-in-content');
                heroProfession.classList.add('fade-in-content');
                if (profileImage) {
                    profileImage.classList.add('fade-in-content');
                }
                
                // Remove fade-in class after animation
                setTimeout(function() {
                    heroGreeting.classList.remove('fade-in-content');
                    heroName.classList.remove('fade-in-content');
                    heroProfession.classList.remove('fade-in-content');
                    if (profileImage) {
                        profileImage.classList.remove('fade-in-content');
                    }
                    
                    isInitialState = true;
                    // Loop back after 4 seconds
                    setTimeout(performTransition, 4000);
                }, 800);
            }, 500); // Wait for fade-out to complete
        }
    }
    
    // Start the loop after 4 seconds
    setTimeout(performTransition, 4000);
});
