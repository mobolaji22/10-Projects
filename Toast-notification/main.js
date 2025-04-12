const btn = document.getElementById('btn');
let container = document.getElementById('container');
btn.addEventListener('click', () => {
    const notif = document.createElement('div');
    notif.innerText = 'Blu is Awesome!';
    notif.classList.add('toast');
    container.appendChild(notif);
    setTimeout(() => {
        notif.remove();
    }, 3000);
});
