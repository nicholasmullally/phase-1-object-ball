//I'm working on the project in this file. 

function gameObject() {
    return {
        "home:" {
            "teamname": "Brooklyn Nets",
            "colors": ["black", "white"],
            "players": {
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
        "away": {
            "teamname": "Charlotte Hornets",
            "colors": ["turquoise", "purple"],
            "players": {
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
                    slamDunks: 5
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

   const game = gameObject()
   const homeTeam = game.homeTeam
   const awayTeam = game.away
   const players = [game.home.players, game.away.players]
   const players = [game["home:"].players, game.away.players]

    function allPlayers() {
        const all = players.map(function(team) {
            const newArr = []
            for(const player in team) {
                newArr.push({nameOfPlayer: player, ...team[player]})
            }
            return newArr
        })
        return all.flat()
    }

    function findPlayer(playerName) {
        return allPlayers().find(player => {
            return player.nameOfPlayer === playerName

        })
    }

    function numPointsScored(playersName) {
        return findPlayer(playersName).points
    }

    function shoeSize(playerName) {
        return findPlayer(playerName.shoe)

    }

    function isHome(team) {
        return teamName === homeTeam.teamName

    }
    const homeTeam = game.home
    const awayTeam = game.away

    function doesLongNameStealATon() {
        const current = {length: 0, player: ""}
        for(const player of allPlayers()){
            console.log(player)
            if(player.nameOfPlayer.length > current.length) {
                current.player = player.nameOfPlayer
            }

        }
        return current.player
    }




    //function numPointsScored(playersName) {
        //const game = gameObject()
       // for(const team in game) {
           // for(const player in game[team].players){
           //     if(playersName === player) {
                   // return game[team].players[playersName].points
         //       }

     //       }
 //   }
//}

allPlayers().find(player => { 
    return player.name === playersName
}).points
}
}