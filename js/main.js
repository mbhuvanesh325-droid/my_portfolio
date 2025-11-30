// ============================================
// Main JavaScript File - Homepage Only
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Check for profile image and apply glassmorphism
    checkProfileImage();

    // Resume download handler
    initResumeDownload();
});

// ============================================
// Check Profile Image and Apply Glassmorphism
// ============================================
function checkProfileImage() {
    const profileImage = document.getElementById('profileImage');
    const profileEmoji = document.getElementById('profileEmoji');
    const profileContainer = document.getElementById('profileContainer');
    
    if (!profileImage || !profileContainer) return;

    // Try to load profile image from common locations
    const possiblePaths = [
        'assets/images/profile/profile.jpg',
        'assets/images/profile/profile.png',
        'assets/images/profile/photo.jpg',
        'assets/images/profile/photo.png',
        'assets/images/profile/image.jpg',
        'assets/images/profile/image.png'
    ];

    let imageFound = false;
    let currentIndex = 0;

    function tryLoadImage() {
        if (currentIndex >= possiblePaths.length) {
            // No image found, use claymorphism (default)
            if (profileEmoji) {
                profileEmoji.style.display = 'block';
            }
            document.body.classList.remove('has-profile-image');
            return;
        }

        const img = new Image();
        img.onload = function() {
            // Image found! Apply glassmorphism
            profileImage.src = possiblePaths[currentIndex];
            profileImage.style.display = 'block';
            if (profileEmoji) {
                profileEmoji.style.display = 'none';
            }
            document.body.classList.add('has-profile-image');
            imageFound = true;
        };
        
        img.onerror = function() {
            // Try next image
            currentIndex++;
            tryLoadImage();
        };
        
        img.src = possiblePaths[currentIndex];
    }

    // Check if image src is already set
    if (profileImage.src && profileImage.src !== window.location.href) {
        const img = new Image();
        img.onload = function() {
            profileImage.style.display = 'block';
            if (profileEmoji) {
                profileEmoji.style.display = 'none';
            }
            document.body.classList.add('has-profile-image');
        };
        img.onerror = function() {
            if (profileEmoji) {
                profileEmoji.style.display = 'block';
            }
            document.body.classList.remove('has-profile-image');
        };
        img.src = profileImage.src;
    } else {
        // Try to find image
        tryLoadImage();
    }
    
    // Also check for profile image in hero section
    const heroProfileImage = document.querySelector('.profile-image-container img');
    const heroProfileEmoji = document.querySelector('.profile-placeholder');
    
    if (heroProfileImage && heroProfileEmoji) {
        const possiblePaths = [
            'assets/images/profile/profile.jpg',
            'assets/images/profile/profile.png',
            'assets/images/profile/photo.jpg',
            'assets/images/profile/photo.png',
            'assets/images/profile/image.jpg',
            'assets/images/profile/image.png'
        ];
        
        let foundHero = false;
        let currentIndex = 0;
        
        function tryHeroImage() {
            if (currentIndex >= possiblePaths.length || foundHero) return;
            
            const img = new Image();
            img.onload = function() {
                heroProfileImage.src = possiblePaths[currentIndex];
                heroProfileImage.style.display = 'block';
                heroProfileEmoji.style.display = 'none';
                document.body.classList.add('has-profile-image');
                foundHero = true;
            };
            img.onerror = function() {
                currentIndex++;
                tryHeroImage();
            };
            img.src = possiblePaths[currentIndex];
        }
        
        tryHeroImage();
    }
}

// ============================================
// Resume Download Handler
// ============================================
function initResumeDownload() {
    const resumeDownload = document.getElementById('resumeDownload');
    if (!resumeDownload) return;

    // Check if resume file exists
    const resumePath = resumeDownload.getAttribute('href');
    const possibleResumeNames = [
        'Bhuvanesh Resume.pdf',
        'Bhuvanesh_Resume.pdf',
        'resume.pdf',
        'Resume.pdf',
        'CV.pdf',
        'cv.pdf'
    ];

    // Try to find resume file
    function checkResumeFile() {
        const basePath = 'assets/resume/';
        let found = false;
        let currentIndex = 0;

        function tryResume() {
            if (currentIndex >= possibleResumeNames.length) {
                // No resume found, show message or hide button
                resumeDownload.style.opacity = '0.7';
                resumeDownload.title = 'Resume file not found. Please add your resume to assets/resume/ folder.';
                return;
            }

            const testPath = basePath + possibleResumeNames[currentIndex];
            
            // Create a link to test if file exists
            fetch(testPath, { method: 'HEAD' })
                .then(response => {
                    if (response.ok) {
                        resumeDownload.href = testPath;
                        resumeDownload.style.opacity = '1';
                        found = true;
                    } else {
                        currentIndex++;
                        tryResume();
                    }
                })
                .catch(() => {
                    currentIndex++;
                    tryResume();
                });
        }

        tryResume();
    }

    // Check on load
    checkResumeFile();

    // Handle download click
    resumeDownload.addEventListener('click', function(e) {
        // If file doesn't exist, prevent default and show message
        if (this.style.opacity === '0.7') {
            e.preventDefault();
            alert('Please add your resume PDF file to the assets/resume/ folder with one of these names:\n' + possibleResumeNames.join(', '));
        }
    });
}
