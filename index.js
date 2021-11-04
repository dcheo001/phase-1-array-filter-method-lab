// Code your solution here
function findMatching (driverArray, name){
    const newDrivers = driverArray.filter(person => person.toLowerCase() === name.toLowerCase());
    return newDrivers;
}
// function fuzzyMatch (driverArray, driverName){
//     return driverArray.filter(element => element.slice(0,1) === driverName.slice(0,1))
//     }
    const fuzzyMatch = (array, name) => {
        const newArray = array.filter(name2 => name2.substring(0,2) === name )
        return newArray
    }
    
function matchName(object, hometown) {
    return object.filter(driver => driver.name === hometown);
}