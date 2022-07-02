let jonSnowHealth = 100
//string conversion
//jonSnowHealth = 100 + ''
//console.log(jonSnowHealth)
//jonSnowHealth = String(jonSnowHealth)
//console.log(jonSnowHealth)

//winner reassigning
// theWinnerIs = theWinnerIs.toLowerCase().replace('jamie','Jon')
let theWinnerIs = `Jamie is the winner`
//case insensitive 

//saving to a new variable
let newWinner = theWinnerIs.toLowerCase().replace('jamie','Jon')
//console.log(theWinnerIs)

//convert-string-to-kebab-case
//covnvert it to lowercase, then 

//newWinner = newWinner.toLowerCase().replaceAll(' ', '-')
// let newWinnerLower = newWinner.toLowerCase()
// let newWinnerSplit = newWinnerLower.split(' ')
// let newWinnerKebab = newWinnerSplit.join('-')
//same as above but minified by chaining commands
let newWinnerKebab = newWinner.toLowerCase().split(' ').join('-')

console.log(newWinner,'--------------',newWinnerKebab)

//functions

//lets create a function that will check to see if Jon's alive

function isJonAlive(){
    if(jonSnowHealth > 0){
        console.log(`Jon is alive!`)
    } else {
        console.log('RIP Jon Snow.')
    }
}

//isJonAlive()


//lets create a function that will be used every time Jon is attacked

function supriseAttack(attack){
    jonSnowHealth -= attack
    isJonAlive()
    return console.log(jonSnowHealth)
}

supriseAttack(21)
supriseAttack(13)
supriseAttack(32)
supriseAttack(26)
supriseAttack(26)

//create a function that allows two people to greet each other

function greeting(person1, person2){
    console.log(`${person1} and ${person2} say hello to eachother`)
}

greeting("Isha",'Jamie')
greeting("Stephanie",'Jon')
greeting("Isha",'Jon')

//function greetings() {
    //  console.log('Hey, what's up?')
      ///console.log('Not much, hbu?')
      // }

