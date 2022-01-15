function findMatching(drivers, name) {
    return drivers.filter(names => names.toLowerCase() === name.toLowerCase());
}

findMatching(drivers, name);

function fuzzyMatch(drivers, string) {
    return drivers.filter(names => names.slice(0, 2) === string);
}

fuzzyMatch(drivers);

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name) 
}

matchName(drivers);