import { Search } from '../entities/Search'
import HousesSearchService from '../../infra/services/HousesSearchService'
import { HouseSearchRepository } from '../../infra/repositories/HouseSearchRepository'

export const SearchHouse = () => {
    return {
        getFromWorld: async (world, setData) => {
            const search = Search()
            const service = HousesSearchService()
            const repository = HouseSearchRepository()

            search.setWorld(world)
            await service.getHousesFromWolrd(search.getWorld(), repository.setSearchResult)
            setData(repository.getSearchResult())
        }
    }
}
