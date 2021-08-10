const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(par){
    const newArray = par.slice(0,2);
    return newArray;
}
// returnFirstTwoDrivers(drivers);

function returnLastTwoDrivers(par){
    const newArray2 = par.slice(2);
    return newArray2;
}
// returnLastTwoDrivers(drivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (num) => {
   return function (fair) {
        return fair * num;
    }
}

const fareDoubler = (fair) => fair * 2

const fareTripler = (fair) => fair * 3

function selectDifferentDrivers(par, funct) {
    return funct(par);
}
// selectDifferentDrivers(drivers, returnFirstTwoDrivers(drivers));