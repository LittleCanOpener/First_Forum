function updateAuthLinks() {
    const authLink = document.getElementById('auth-link');
    const logoutLink = document.getElementById('logout-link');
    const userEmailSpan = document.getElementById('user-email');
    const userId = localStorage.getItem('userId');
    const userEmail = localStorage.getItem('userEmail');

    if (userId && userEmail) {
        authLink.style.display = 'none';
        logoutLink.style.display = 'inline';
        userEmailSpan.textContent = `Logged in as: ${userEmail}`;
        userEmailSpan.style.display = 'inline';
    } else {
        authLink.style.display = 'inline';
        logoutLink.style.display = 'none';
        userEmailSpan.textContent = '';
        userEmailSpan.style.display = 'none';
    }
}

// Handle logout
document.getElementById('logout-link').addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('userId');
    localStorage.removeItem('userEmail');
    updateAuthLinks();
    window.location.href = 'login.html';
});

// Initialize auth state on page load
document.addEventListener('DOMContentLoaded', updateAuthLinks);