var fs = require('fs');
var http = require('http');
http.createServer((req, res) => {});

// Edit PLAYER.JSON
function createPlayer(num) {
    try {
        var players = JSON.parse(fs.readFileSync('./PLAYERS/players.json'));
        players.list.push({
            'number': toString(num)
        });
        fs.writeFileSync('./PLAYERS/players.json', players);
    } catch (e) {
        console.error(e);
    }
}

function removePlayer(num) {
    try {
        var players = JSON.parse(fs.readFileSync('./PLAYERS/players.json'));
        var gone = players.list.pop();
        fs.writeFileSync('./PLAYERS/players.json', players);
        if (gone.name !== undefined) {
            console.log(`${gone.name} left.`);
        } else {
            console.log('Unnamed player left.');
        }
    } catch (e) {
        console.error(e);
    }
}