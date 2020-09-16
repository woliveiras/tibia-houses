export const Search = () => {
    const Search = {
        WORLD: 'wolrd',
        TOWN: 'town',
        TYPE: 'type'
    }

    return { 
        setWorld: world =>  {
            Search.WORLD = world
        },

        getWorld: () => Search.WORLD
    }
}