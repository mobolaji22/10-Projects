const open = document.getElementsByClassName('open')[0];

const close = document.getElementsByClassName('close')[0];

open.addEventListener('click', () => {
    document.getElementById('popup-container').style.display = 'flex';
});

close.addEventListener('click', () => {
    document.getElementById('popup-container').style.display = 'none';
});