import { houses } from "../../config/endpoints"

const HousesSearchService = () => {
    return {
        getHousesFromWolrd: async (world, callback) => {
            return await fetch(`${houses}${world}.json`)
                .then(response => response.json())
                .then(data => callback(data.houses))
        }
    }
}

export default HousesSearchService