// Set active navigation link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = {
        'index.html': 'nav-home',
        'login.html': 'auth-link',
        'signup.html': 'nav-signup'
    };

    const activeLinkId = navLinks[currentPage];
    if (activeLinkId) {
        document.getElementById(activeLinkId).classList.add('active');
    }
}

// Call on page load
document.addEventListener('DOMContentLoaded', setActiveNavLink);