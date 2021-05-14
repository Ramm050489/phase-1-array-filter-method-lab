// Code your solution here
function findMatching(driversNames,string) {
    return driversNames.filter( possibleMatch =>
        possibleMatch.toLowerCase() === string.toLowerCase()
        )
}

function fuzzyMatch(driversNames,string) {
    return driversNames.filter( possibleMatch =>
        possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0
        )
}

function matchName(driver, string) {
    return driver.filter(result => result.name === string)
}