function gameObject() {
    return {
    home: {
        teamName: "Brooklyn Nets",
        colors: ["black", "white"],
        players: {
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1               
             },
             "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
             },
             "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
             },
             "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
             },
             "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
             }

        }
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: ["turquoise", "purple"],
        players: {
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
            },
            "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
            },
            "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,
            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12, 
                steals: 22,
                blocks: 5,
                slamDunks: 12
            }
        }
    }
    }
}

function numPointsScored(playerName){
    let game = gameObject();
    for (let gameKey in game){
        let teamObj = game[gameKey];
        if (teamObj.players[playerName]){
            return teamObj.players[playerName].points
        }
    }
}

numPointsScored();

function shoeSize(playerName){
    let game = gameObject();
    for (let gameKey in game){
        let teamObj = game[gameKey];
        if (teamObj.players[playerName]){
            return teamObj.players[playerName].shoe
        }
    }
}

shoeSize();

function teamColors(team){
    let game = gameObject();
    for (let gameKey in game){
        let teamObj = game[gameKey];
        if (teamObj.teamName === team){
            return teamObj.colors
        }
    }
}

teamColors();

function teamNames(){
    let game = gameObject();
    const names = [game.away.teamName, game.home.teamName]
    return names    
}

teamNames();

function playerNumbers(team){
    let playerNum = [];
    let game = gameObject();
    for (let gameKey in game){
        let teamObj = game[gameKey];
         if (teamObj.teamName === team){
             let teamPlayers = teamObj.players
             for (let playerKey in teamPlayers){
                  let playerInfo = teamPlayers[playerKey].number;
                   playerNum.push(playerInfo)
             }
        }
    }
    return playerNum
}

playerNumbers();

function playerStats(playerName){
    let game = gameObject();
    for (let gameKey in game){
        let teamObj = game[gameKey];
        if (teamObj.players[playerName]){
            return teamObj.players[playerName]
        }
    }    
}

playerStats()

function bigShoeRebounds(){
    let playerBigShoe = {"shoe": 0};
    let game = gameObject();
    for (let gameKey in game){
        let teamObj = game[gameKey].players;
         for (let playerKey in teamObj){
             if (teamObj[playerKey].shoe > playerBigShoe.shoe){
                 playerBigShoe = teamObj[playerKey]
             } 
         }
    }
    return playerBigShoe.rebounds
}

bigShoeRebounds();

function mostPointsScored(){
    let playerMostPoints = {"points": 0, "playerName": ""};
    let game = gameObject();
    for (let gameKey in game){
        let teamObj = game[gameKey].players;
        for (let playerKey in teamObj){
            if (teamObj[playerKey].points > playerMostPoints.points){
                playerMostPoints.points = teamObj[playerKey].points
                playerMostPoints.playerName = playerKey
            }
        }
    }
    return playerMostPoints.playerName
}

mostPointsScored();

function winningTeam(){
    let homeTeam = gameObject().home.players;
    let awayTeam = gameObject().away.players;
    let homePoints = [];
    let awayPoints = [];
    for (let gameKey in homeTeam){     
        let teamObj = homeTeam[gameKey];
          homePoints.push(teamObj.points);
    }
    for (let gameKey in awayTeam){
        let teamObj = awayTeam[gameKey];
        awayPoints.push(teamObj.points);
    }
    let homeSum = 0;
    for (let i = 0; i < homePoints.length; i++){
        homeSum += homePoints[i];
    };
    let awaySum = 0;
    for (let i = 0; i < awayPoints.length; i++){
        awaySum += awayPoints[i];
    }
    if (homeSum > awaySum){
        return gameObject().home.teamName
    }else{
        return gameObject().away.teamName
    }
}

winningTeam();

function playerWithLongestName(){
    let game = gameObject();
    let arrayOfNames = [];
    for (let gameKey in game){
        let teamObj = game[gameKey].players;
        for (let playerKey in teamObj){
            arrayOfNames.push(playerKey);
        }
    }
    let longestName = arrayOfNames.reduce(function(longestWord, word){
        if (word.length > longestWord.length)
        return word;
        else
        return longestWord;
    });
    return longestName
}

playerWithLongestName();

function doesLongNameStealATon(){
    let playerMostSteals = {"steals": 0, "playerName": ""};
    let arrayOfNames = [];
    let game = gameObject();
    for (let gameKey in game){
        let teamObj = game[gameKey].players;
        for (let playerKey in teamObj){
            if (teamObj[playerKey].steals > playerMostSteals.steals){
                playerMostSteals.steals = teamObj[playerKey].steals;
                playerMostSteals.playerName = [playerKey];
            };
            arrayOfNames.push(playerKey);
        }
    }
    let longestName = arrayOfNames.reduce(function(longestWord, word){
        if (word.length > longestWord.length)
        return word;
        else
        return longestWord;
    })
    if (playerMostSteals.playerName = longestName)
        return "True";
        else
        return "False";
};

doesLongNameStealATon();