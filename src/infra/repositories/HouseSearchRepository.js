export const HouseSearchRepository = (result) => {
    const repository = {
        SEARCH_RESULT: null
    }
    return {
        setSearchResult: result => {
            repository.SEARCH_RESULT = result
        },

        getSearchResult: () => repository.SEARCH_RESULT.houses
    }
}