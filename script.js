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
    const blackBoxes = document.querySelectorAll('.black-box'); 
    const overlays = document.querySelectorAll('.overlay');
    const lectureButton = document.getElementById('LectureSideButton');
    const lectureBars = document.querySelectorAll('.lecturebar');
    let lastMouseX = 0;
    let isLecturebaropen = false;
    let isHoveringLectureButtonOrBar = false;
    let sideBarClosed = true;

    document.addEventListener('mousemove', (e) => {
        const currentMouseX = e.clientX;

        if (currentMouseX < 20 && currentMouseX < lastMouseX) {
            openSidebar();
        }

        lastMouseX = currentMouseX;
    });

    document.addEventListener('mousemove', (e) => {
        const currentMouseX = e.clientX;

        if (currentMouseX > 250 && !isLecturebaropen) {
            closeSidebar();
        } else if (currentMouseX > 500 && isLecturebaropen) {
            closeSidebar();
        }
    });

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeSidebar();
    });

    function openSidebar() {
        sidebar.classList.add('sidebar-open');
        lectureBars.forEach(lectureBar => lectureBar.classList.add('lecturebar-open'));
        document.querySelector('.main-content').style.marginLeft = '250px';
        blackBoxes.forEach(box => box.classList.add('black-box-move-right'));
        overlays.forEach(overlay => overlay.classList.add('overlay-visible'));
        sideBarClosed = false;
    }

    function closeSidebar() {
        sidebar.classList.remove('sidebar-open');
        lectureBars.forEach(lectureBar => lectureBar.classList.remove('lecturebar-open'));
        document.querySelector('.main-content').style.marginLeft = '0';
        blackBoxes.forEach(box => box.classList.remove('black-box-move-right')); 
        overlays.forEach(overlay => overlay.classList.remove('overlay-visible'));
        sideBarClosed = true;
    }

    function handleMouseEnter() {
        if (!sideBarClosed){
            lectureBars.forEach(lectureBar => lectureBar.classList.add('lecturebar-extend'));
            isLecturebaropen = true;
            isHoveringLectureButtonOrBar = true;
        }
    }

    function handleMouseLeave(event) {
        isHoveringLectureButtonOrBar = false;
        if (event.clientX < 250) {
            setTimeout(() => {
                if (!isHoveringLectureButtonOrBar) {
                    lectureBars.forEach(lectureBar => lectureBar.classList.remove('lecturebar-extend'));
                    isLecturebaropen = false;
                }
            }, 200); 
        } else {
            if (!isHoveringLectureButtonOrBar || sideBarClosed) {
                lectureBars.forEach(lectureBar => lectureBar.classList.remove('lecturebar-extend'));
                isLecturebaropen = false;
            }
        }
    }

    if (lectureButton) {
        lectureButton.addEventListener('mouseenter', handleMouseEnter);
        lectureButton.addEventListener('mouseleave', handleMouseLeave);
    }

    lectureBars.forEach(lectureBar => {
        lectureBar.addEventListener('mouseenter', handleMouseEnter);
        lectureBar.addEventListener('mouseleave', handleMouseLeave);
    });
});
