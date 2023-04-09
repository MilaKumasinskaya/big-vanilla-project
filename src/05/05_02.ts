import {GovernmentBuildingType, HouseType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingType>) => {
    return buildings.map(e => e.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(e => e.address.street.title)
}

export const createMessages = (houses: Array<HouseType>) => {
    return houses.map(e => `Hello guys from ${e.address.street.title}`)
}