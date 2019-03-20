/* eslint-disable no-unused-vars */
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

// Add and subtract player
function addPlayer() {
    var count = document.getElementById('count');
    var num = Number(count.innerHTML);
    if (num < 9) {
        count.innerHTML = `${++num}`;
    }
}

function subtractPlayer() {
    var count = document.getElementById('count');
    var num = Number(count.innerHTML);
    if (num > 0) {
        count.innerHTML = `${--num}`;
    }
}