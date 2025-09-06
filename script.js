document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.getElementById('modal-overlay');
    const closeButton = document.getElementById('close-button');
    const desktopWrapper = document.getElementById('desktop-wrapper');
    const showDetailsLink = document.getElementById('show-details-link');
    const mainOverview = document.getElementById('main-overview');
    const detailsView = document.getElementById('details-view');
    const courseIntroView = document.getElementById('course-intro-view');
    const backButtons = document.querySelectorAll('.back-button');
    const navCourseIntroButton = document.getElementById('nav-course-intro-button');

    closeButton.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
        desktopWrapper.style.display = 'flex';
    });

    if (showDetailsLink) {
        showDetailsLink.addEventListener('click', (event) => {
            event.preventDefault();
            mainOverview.style.display = 'none';
            detailsView.style.display = 'block';
            courseIntroView.style.display = 'none';
        });
    }

    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            detailsView.style.display = 'none';
            courseIntroView.style.display = 'none';
            mainOverview.style.display = 'block';
        });
    });

    if (navCourseIntroButton) {
        navCourseIntroButton.addEventListener('click', (event) => {
            event.preventDefault();
            mainOverview.style.display = 'none';
            detailsView.style.display = 'none';
            courseIntroView.style.display = 'block';
        });
    }
});