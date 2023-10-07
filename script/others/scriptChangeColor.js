function changeBackgroundColor() {
    const colorPicker = document.getElementById('colorPicker');
    const selectedColor = colorPicker.value;
    document.body.style.backgroundColor = selectedColor;
}

const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('input', changeBackgroundColor);