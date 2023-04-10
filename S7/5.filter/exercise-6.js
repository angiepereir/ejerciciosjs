const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];


const legendsStreamers =
streamers.filter(streamer => streamer.gameMorePlayed.includes("Legends"));

const valorMayuscula = legendsStreamers.map(streamer =>{
    if (streamer.age > 35) {
        return {...streamer, gameMorePlayed: streamer.gameMorePlayed.toUpperCase()};
        
    }
    return streamer
})
console.log(valorMayuscula);