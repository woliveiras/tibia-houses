import React, { useState, useEffect, useContext } from 'react';

import { SearchContext, SearchDispatchContext } from './Context'

const Filters = props => {
    const searchDetails = useContext(SearchContext)
    const setSearchDetails = useContext(SearchDispatchContext)
    const [worlds, setWorlds] = useState({})
 
    useEffect(() => {       
        async function fetchData() {
            await fetch('https://api.tibiadata.com/v2/worlds.json')
                .then(response => response.json())
                .then(data => setWorlds(data.worlds.allworlds))
            }
        fetchData()
    }, [])

    const buildWorldList = worlds => {
        let worldsList = []

        for (const world in worlds) {
            worldsList.push(worlds[world].name)
        }

        return (
            <select value={searchDetails.world} onChange={event => setSearchDetails({ world: event.currentTarget.value})}>
                <option>Selecione o mundo</option>
                {worldsList.map(world => (<option key={world}>{ world }</option>))}
            </select>
        )
    }
      
    return (
        <>
            { worlds && buildWorldList(worlds) }
        </>
    )
}

export default Filters