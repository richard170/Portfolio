
function setInitialImages() {
    const boxes = document.querySelectorAll('.box');
    const newImages = [
        'img/workSwap.jpg',
        'img/mySkillsSwap.jpg',
        'img/blogSwap.jpg',
        'img/contactSwap.jpg',
        'img/aboutMeSwap.png'
    ];
    boxes.forEach((box, index) => {
        const style = window.getComputedStyle(box);
        const imgUrl = style.getPropertyValue('--img');
        if (imgUrl) {
            box.style.backgroundImage = 'var(--img)';
        }

        box.addEventListener('mouseover', () => {
            box.style.backgroundImage = `url(${newImages[index]})`;
        });

        box.addEventListener('mouseout', () => {
            if (imgUrl) {
                box.style.backgroundImage = 'var(--img)';
            }
        });
    });
}

window.addEventListener('load', setInitialImages);