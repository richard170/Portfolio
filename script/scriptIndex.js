
const boxes = document.querySelectorAll('.box');

const newImages = [
    'img/workSwap.jpg',
    'img/mySkillsSwap.jpg',
    'img/blogSwap.jpg',
    'img/contactSwap.jpg',
    'img/aboutMeSwap.png'
];

function changeImageOnMouseEnter(box, newImage) {
    box.addEventListener('mouseover', () => {
        box.style.backgroundImage = `url(${newImage})`;
    });

    box.addEventListener('mouseout', () => {
        box.style.backgroundImage = 'var(--img)';
    });
}

boxes.forEach((box, index) => {
    changeImageOnMouseEnter(box, newImages[index]);
});