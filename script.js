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
    const blackBox = document.getElementById('black-box'); // Get the black box element
    let lastMouseX = 0;

    document.addEventListener('mousemove', (e) => {
        const currentMouseX = e.clientX;

        if (currentMouseX < 20 && currentMouseX < lastMouseX) {
            openSidebar();
        }

        lastMouseX = currentMouseX;
    });

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeSidebar();
    });

    function openSidebar() {
        sidebar.classList.add('sidebar-open');
        document.querySelector('.main-content').style.marginLeft = '250px';
        blackBox.classList.add('black-box-move-right'); 
    }

    function closeSidebar() {
        sidebar.classList.remove('sidebar-open');
        document.querySelector('.main-content').style.marginLeft = '0';
        blackBox.classList.remove('black-box-move-right'); 
    }

    window.openSidebar = openSidebar;
});
