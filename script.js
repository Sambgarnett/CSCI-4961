// script.js
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetUrl = button.getAttribute('data-url');
            if (targetUrl) {
                window.location.href = targetUrl;
            }
        });
    });

    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');

    document.addEventListener('mousemove', (e) => {
        if (e.clientX < 10) {
            openSidebar();
        }
    });

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeSidebar();
    });

    function openSidebar() {
        sidebar.classList.add('sidebar-open');
        document.querySelector('.main-content').style.marginLeft = '250px';
    }

    function closeSidebar() {
        sidebar.classList.remove('sidebar-open');
        document.querySelector('.main-content').style.marginLeft = '0';
    }
});
