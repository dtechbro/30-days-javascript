const arr = Array(8).fill('Japan')
console.log(arr)


let player = ['Ronaldo', 'Davies', 'Mbappe', 'Ozil', 'Bellingham', 'Modric']
let school = ['Ilorin', 'OAU', 'Nile', 'Babs']


console.log(player.concat('Ade'))
console.log(player.length)

let madrid = player.indexOf('Haaland')
if (madrid != -1) {
    console.log("The player plays for Madrid")
} else {
    console.log('The player doesn\'t belong to Madrid')
}

console.log(player.unshift(0))
console.log(player.reverse())
console.log(player.sort())
console.log(player.concat(school))