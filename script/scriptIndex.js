
const boxes = document.querySelectorAll('.box');

const newImages = [
    '../character-img/workSwap.jpg',
    '../character-img/mySkillsSwap.jpg',
    '../character-img/blogSwap.jpg',
    '../character-img/contactSwap.jpg',
    '../character-img/aboutMeSwap.png'
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