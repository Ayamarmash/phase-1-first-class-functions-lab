const returnFirstTwoDrivers = (drivers)=>{
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = (drivers)=>{
    return drivers.slice((drivers.length)-2, drivers.length)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = (fare)=>{
    return (ride)=>{
        return ride*fare
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
const selectDifferentDrivers = (drivers, returnFirstTwoDrivers)=>{
    return returnFirstTwoDrivers(drivers)
}