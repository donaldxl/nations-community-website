document.addEventListener('DOMContentLoaded', function() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        fetch('/header.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                headerPlaceholder.innerHTML = data;
                // Initialize mobile menu toggle after header is loaded
                initializeMobileMenu();
                // Highlight active navigation link
                highlightActiveLink();
            })
            .catch(error => console.error('Error fetching header:', error));
    }
});

function initializeMobileMenu() {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

function highlightActiveLink() {
    // Get the pathname, ensure it ends with a slash if it's not the root
    let currentPath = window.location.pathname;
    if (currentPath === '/index.html') {
        currentPath = '/'; // Treat index.html as root
    }
    if (currentPath !== '/' && !currentPath.endsWith('/')) {
        currentPath += '/'; // Ensure non-root paths end with /
    }

    const navLinks = document.querySelectorAll('#desktop-nav .nav-link, #mobile-nav .nav-link');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        let linkPath = linkHref;

        // Basic check if it's an internal link starting and ending with /
        if (!linkPath || !linkPath.startsWith('/') || !linkPath.endsWith('/')) {
             if(linkPath !== '/') return; // Allow root path '/' without trailing slash check
        }

        // Special case handling
        let isActive = false;
        if (linkPath === currentPath) {
            isActive = true;
        // Make 'about' link active also for '/what-we-believe/' page
        } else if (currentPath === '/what-we-believe/' && linkPath === '/about/') {
            isActive = true;
        // Make 'home' link active also for '/join-us/' page
        } else if (currentPath === '/join-us/' && linkPath === '/') {
            isActive = true;
        }
         // Example for East Africa page if needed
         // else if (currentPath === '/join-us-east-africa/' && linkPath === '/') {
         //    isActive = true;
         // }

        if (isActive) {
            link.classList.add('text-orange-500', 'font-medium'); // Active style for desktop
            if (link.closest('#mobile-nav')) {
                 link.classList.add('bg-gray-800'); // Active style for mobile
            }
        } else {
            link.classList.remove('text-orange-500', 'font-medium', 'bg-gray-800');
        }
    });
} 