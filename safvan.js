function showSection(sectionId) {
    // Hide all content sections
    let sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    let selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';

    // Scroll to the section
    selectedSection.scrollIntoView({ behavior: 'smooth' });
}

// Show content-sections div only after a section is selected
document.querySelector('.nav-menu').addEventListener('click', function() {
    document.querySelector('.content-sections').style.display = 'block';
});
