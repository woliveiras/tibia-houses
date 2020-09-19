import React, { useCallback, useEffect, useState } from 'react';

import { housesEndpoint } from "./constants"
import { useSearch } from './Context';

export const Search = () => {
    const { searchParams, setSearchParams } = useSearch()
    const { selectedWorld } = searchParams
    const [ houses, setHouses ] = useState([])

    useEffect(() => { 
        async function fetchData() {
            await fetch(`${housesEndpoint}${selectedWorld}.json`)
                .then(response => response.json())
                .then(data => {
                    setHouses(data.houses.houses)
                })
            }

        fetchData()
    }, [selectedWorld])

    useEffect(() => {
        setSearchParams({
            ...searchParams,
            houses: houses
        })
    }, [houses])

    return (
        <div>
            {houses && (
                <>
                    <h2>Mundo: { searchParams.selectedWorld }</h2>
                    <main>
                        <header>
                            <h2>Cidade: { searchParams.town }</h2>
                        </header>
                        <ul>
                            { searchParams.houses.map(house => 
                                <li key={ house.name }>{ house.name }</li>
                            )}
                        </ul>
                    </main>
                </>
            )}
        </div>
    )
}
