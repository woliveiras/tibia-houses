import React, { useState, useEffect } from 'react';

import { housesEndpoint } from "./constants"
import SearchResults from './SearchResults';

const Search = props => {
    const [housesData, setHousesData] = useState({
        world: 'carregando...',
        houses: []
    })

    useEffect(() => {
        const { world } = props
        
        async function fetchData() {
            await fetch(`${housesEndpoint}${world}.json`)
                .then(response => response.json())
                .then(data => setHousesData(data.houses))
            }
    
      fetchData()
    }, [props])

    return (
        <div>
            {housesData && (<SearchResults data={housesData} />)}
        </div>
    )
}

export default Search