const imgs = document.getElementById('container');

const img = document.querySelectorAll('#container img');
let idx = 0;
function run() {
    idx++;

    if (idx > img.length-1) {
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`;

    setTimeout(run, 2000);
}

run();