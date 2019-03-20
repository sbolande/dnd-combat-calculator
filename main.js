const fs = require('fs');

/* eslint-disable no-unused-vars */
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

// Edit PLAYER.JSON
function createPlayer() {

}

function removePlayer() {

}

// Add and subtract player
function addPlayer() {
    var count = document.getElementById('count');
    if (Number(count.innerHTML) < 9) {
        count.innerHTML = `${Number(count.innerHTML) + 1}`;
        createPlayer();
    }
}

function subtractPlayer() {
    var count = document.getElementById('count');
    if (Number(count.innerHTML) > 0) {
        count.innerHTML = `${Number(count.innerHTML) - 1}`;
        removePlayer();
    }
}