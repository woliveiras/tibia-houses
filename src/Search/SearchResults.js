import React from 'react';

const SearchResults = props => {
    const { data } = props

    return (
        <div>
            {data && (
                <>
                    <h2>Mundo: { data.world }</h2>
                    <main>
                        <header>
                            <h2>Cidade: { data.town }</h2>
                        </header>
                        <ul>
                            { data.houses.map(house => 
                                <li key={ house.name }>{ house.name }</li>
                            )}
                        </ul>
                    </main>
                </>
            )}
        </div>
    )
}

export default SearchResults