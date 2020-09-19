import React, { useEffect, useState } from 'react';

import { housesEndpoint } from "./Search.config"
import { useSearch } from './Context';

export const Search = () => {
    const { searchParams, setSearchParams } = useSearch()
    const { selectedWorld } = searchParams
    const [ housesData, setHousesData ] = useState([])

    useEffect(() => { 
        async function fetchData() {
            await fetch(`${housesEndpoint}${selectedWorld}.json`)
                .then(response => response.json())
                .then(data => {
                    setHousesData(data.houses)
                })
            }

        fetchData()
    }, [selectedWorld])

    useEffect(() => {
        setSearchParams({
            ...searchParams,
            houses: housesData,
            town: housesData?.town
        })
    }, [housesData])

    return (
        <div>
            {housesData && (
                <>
                    <h2>Mundo: { searchParams.selectedWorld }</h2>
                    <main>
                        <header>
                            <h2>Cidade: { searchParams.town }</h2>
                        </header>
                        <ul>
                            { searchParams?.houses?.houses?.map(house => 
                                <li key={ house.name }>
                                    <div>
                                        <p><strong>Nome: </strong>{ house.name }</p>
                                        <p><strong>Preço: </strong>{ house.rent }</p>
                                        <p><strong>Status: </strong>{ house.status }</p>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </main>
                </>
            )}
        </div>
    )
}
