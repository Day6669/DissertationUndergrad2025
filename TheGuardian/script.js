// Function to handle language change when dropdown is selected
function changeLanguage() {
    const language = document.getElementById('language-selector').value; // Get selected language
    console.log('Language changed to: ' + language);
    
    // You can replace the console log with actions, like changing content or redirecting the page.
    // Example: 
    // window.location.href = `/${language}`; // Redirect to the page in the selected language.
}

// Function to show a specific section and hide others when navigation is clicked
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Add arrow rotation animation
document.addEventListener('DOMContentLoaded', function() {
    const editionDropdown = document.querySelector('.edition-dropdown');
    const arrowIcon = editionDropdown.querySelector('svg');
    
    editionDropdown.addEventListener('mouseenter', () => {
        arrowIcon.style.transform = 'rotate(180deg)';
    });
    
    editionDropdown.addEventListener('mouseleave', () => {
        arrowIcon.style.transform = 'rotate(0deg)';
    });
});