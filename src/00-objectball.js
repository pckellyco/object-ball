//using global variables is bad practice, this takes up more memory is much more efficient
// create multiple funcitons so thjat they are doing one thing at a time
// use new methods like forEach, map, filter, find, reduce

const alanAndersonStats =
    {
    number: 0,
    shoe: 16,
    points: 22,
    rebounds: 12,
    assists: 12,
    steals: 3,
    blocks: 1,
    slamDunks: 1
    };

const reggieEvansStats = 
    {
    number: 30,
    shoe: 14,
    points: 12,
    rebounds: 12,
    assists: 12,
    steals: 12,
    blocks: 12,
    slamDunks: 7
    };

const brookLopezStats =
    {
    number: 11,
    shoe: 17,
    points: 17,
    rebounds: 19,
    assists: 10,
    steals: 3,
    blocks: 1,
    slamDunks: 15
    };

const masonPlumleeStats =
    {
    number: 1,
    shoe: 19,
    points: 26,
    rebounds: 12,
    assists: 6,
    steals: 3,
    blocks: 8,
    slamDunks: 5
    };

const jasonTerryStats =
    {
    number: 31,
    shoe: 15,
    points: 19,
    rebounds: 2,
    assists: 2,
    steals: 3,
    blocks: 8,
    slamDunks: 1 
    };

const jeffAdrienStats =
    {
    number: 4,
    shoe: 18,
    points: 10,
    rebounds: 1,
    assists: 1,
    steals: 2,
    blocks: 7,
    slamDunks: 2 
    };

const bismakBiyomboStats =
    {
    number: 0,
    shoe: 16,
    points: 12,
    rebounds: 4,
    assists: 7,
    steals: 7,
    blocks: 15,
    slamDunks: 10
    };

const deSagnaDiopStats =
    {
    number: 2,
    shoe: 14,
    points: 24,
    rebounds: 12,
    assists: 12,
    steals: 4,
    blocks: 5,
    slamDunks: 5 
    };

const benGordanStats =
    {
    number: 8,
    shoe: 15,
    points: 33,
    rebounds: 3,
    assists: 2,
    steals: 1,
    blocks: 1,
    slamDunks: 0 
    };

const brendanHaywoodStats =
    {
    number: 33,
    shoe: 15,
    points: 6,
    rebounds: 12,
    assists: 12,
    steals: 22,
    blocks: 5,
    slamDunks: 12 
    };

const gameObject = () => {
    return {    // can just return instead of creating variable, better to create object as function so it doesn't run the whole thing until its called
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                "Alan Anderson": alanAndersonStats,
                "Reggie Evans": reggieEvansStats,
                "Brooke Lopez": brookLopezStats,
                "Mason Plumlee": masonPlumleeStats,
                "Jason Terry": jasonTerryStats
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                "Jeff Adrien": jeffAdrienStats,
                "Bismak Biyombo": bismakBiyomboStats,
                "DeSagna Diop": deSagnaDiopStats,
                "Ben Gordan": benGordanStats,
                "Brendan Haywood": brendanHaywoodStats
            }
        }
    }
}

const gameObj = gameObject();


//takes in players name, returns their score
//need to check home and away to match name, then return points
//maybe helper function

// Given a player's name, return the number of points scored by that player
// function numPointsScored(playerInput) {
//     const game = gameObject()
//     debugger
//     for (let gameKey in game) { // iterate through game keys (home, away)
//         let teamObj = game[gameKey]
//         debugger
//         for (let teamKey in teamObj) { // iterate through team keys (teamName, colors, players)
//             let playerObj = teamObj.players
//             debugger
//             for (let playerKey in playerObj) { // iterate through players
//                 debugger
//                 if (playerKey === playerInput) { // check to see if player matches function argument
//                     return playerObj[playerKey].points // return the player's points
//                 }
//             }
//         }
//     }
// }

// debugger

const players = () => {
    const homePlayers = gameObj.home.players;
    const awaysPlayers = gameObj.
    Object.assign({}, gameObj.home.players, gameObj.away.players)
}
console.log('players', players())

const numPointsScored = (name) => {
    if (gameObj.home.players[name] !== undefined) {
        return gameObj.home.players[name].points
    } else if (gameObj.away.players[name] !== undefined) {
        return gameObj.away.players[name].points
    } else {
        return "Player was not in the game."
    }
}

// console.log(numPointsScored("Jeff Adrien"));

function shoeSize(name) {
    if (gameObj.home.players[name] !== undefined) {
        return gameObj.home.players[name].shoe;
    } else if (gameObj.away.players[name] !== undefined) {
        return gameObj.away.players[name].shoe;
    } else {
        return "Player was not in the game.";
    }
}

// console.log(shoeSize("Jason Terry")); --- check

function teamColors(team) {
    if (gameObj.home.teamName === team) {
        return gameObj.home.colors;
    } else if (gameObj.away.teamName === team) {
        return gameObj.away.colors;
    } else {
        return "Team did not play in the game.";
    }
}

// console.log(teamColors('Brooklyn Nets')); --- check

function teamNames(object) {
    return [object.home.teamName, object.away.teamName]
}

// console.log(teamNames(gameObj)); --- check

// check if team name is away or home, then iterate through the object to get playerNums
// use teamNames to check if team is away or home

function homeOrAwayCheck(nameOfTeam) {  //created helper  function to check if team is home or away
    if (gameObj.home.teamName === nameOfTeam) {
        return 'home';
    } else if (gameObj.away.teamName === nameOfTeam) {
        return 'away'
    }
}

function playerNumbers(nameOfTeam) {
    const playersNumbers = []
    const teamLocation = homeOrAwayCheck(nameOfTeam);
    const playersObj = gameObj[teamLocation].players;
    for (let playerNameKey in playersObj) {
        let player = playersObj[playerNameKey]
        playersNumbers.push(player.number)
    }

    return playersNumbers;
}

// console.log(playerNumbers('Brooklyn Nets')) --- check


function playerTeamLocation(playerName) {
    if (gameObj.home.players[playerName] !== undefined) {
        return 'home';
    } else if (gameObj.away.players[playerName] !== undefined) {
        return 'away';
    }
}

// console.log(playerTeamLocation('Alan Anderson')) --- check

function playerStats(playerName) {
    const playerTeam = playerTeamLocation(playerName);
    return gameObj[playerTeam].players[playerName];
}

// console.log(playerStats('Bismak Biyombo')); ---check

// use numPointsScored which returns points scored by a player
// create variables to store points


const homePlayersObj = gameObj.home.players // returns object, players names are the keys
const awayPlayersObj = gameObj.away.players

const mostPointsScored = () => {
    let bestPlayer = '';
    for (let homePlayer in homePlayersObj) {
        const currentHomePlayerPoints = numPointsScored(homePlayer)
        if (currentHomePlayerPoints > numPointsScored(bestPlayer) || bestPlayer === '') {
            bestPlayer = homePlayer;
            bestPlayerLocation = 'home'
        }
    }
    for (let awayPlayer in awayPlayersObj) {
        const currentAwayPlayerPoints = numPointsScored(awayPlayer)
        if (currentAwayPlayerPoints > numPointsScored(bestPlayer) || bestPlayer === '') {
            bestPlayer = awayPlayer;
            bestPlayerLocation = 'away'
        }
    }

    return numPointsScored(bestPlayer);
}

console.log(mostPointsScored())

const winningTeam= () => {
    let homePoints = 0;
    let awayPoints = 0;
    for (let homePlayer in homePlayersObj) {
        const homePlayerPoints = numPointsScored(homePlayer)
        homePoints += homePlayerPoints
    }
    for (let awayPlayer in awayPlayersObj) {
        const awayPlayerPoints = numPointsScored(awayPlayer)
        awayPoints += awayPlayerPoints
    }
    if (homePoints > awayPoints) {
        return gameObj.home.teamName;
    } else {
        return gameObj.away.teamName;
    }
}

console.log(winningTeam())


const playerWithLongestName = () => {
    let longestName = '';
    for (let homePlayer in homePlayersObj) {
        if (homePlayer.length > longestName.length) {
            longestName = homePlayer;
        }
    }
    for (let awayPlayer in awayPlayersObj) {
        if (awayPlayer.length > longestName.length) {
            longestName = awayPlayer
        }
    }

    return longestName;
}

console.log(playerWithLongestName())


// 1. Write a function that returns true if the player with the longest name had
//    the most steals. Call the function `doesLongNameStealATon`.
// create a helper function to determine person who steals the most, then compare it to longestName steals
const doesLongNameStealATon = () => {
    const longestNameSteals = playerStats(playerWithLongestName()).steals
    for (let homePlayer in homePlayersObj) {
        if (playerStats(homePlayer).steals > longestNameSteals) {
            return false;
        }
    }
    for (let awayPlayer in awayPlayersObj) {
        if (playerStats(awayPlayer).steals > longestNameSteals) {
            return false;
        }
    }

    return true;
}

console.log(doesLongNameStealATon())

