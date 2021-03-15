// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name){

    let results = drivers.filter(element => name.toLowerCase() == element.toLowerCase())
        // results.toLowerCase()
       if (results) {
           return results
       }
}



function fuzzyMatch(drivers, string) {
let match = drivers.filter(element => string.slice(0, string.length) == element.slice(0, string.length))
return match
}

function matchName(drivers, string) {
    let name = drivers.filter(element => string == element.name)
return name
}