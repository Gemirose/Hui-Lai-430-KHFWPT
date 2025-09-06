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
    const showQrModalButton = document.getElementById('show-qr-modal-button');
    const navFormButton = document.getElementById('nav-form-button');

    closeButton.addEventListener('click', () => {
        if (window.getComputedStyle(desktopWrapper).display === 'none') {
            desktopWrapper.style.display = 'flex';
        }
        modalOverlay.style.display = 'none';
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

    const openQrModal = (event) => {
        event.preventDefault();
        modalOverlay.style.display = 'flex';
    };

    if (showQrModalButton) {
        showQrModalButton.addEventListener('click', openQrModal);
    }

    if (navFormButton) {
        navFormButton.addEventListener('click', openQrModal);
    }
});