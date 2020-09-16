import React from 'react';

import Heading from '../../atoms/Heading'

const SearchResult = props => {
    const { result } = props

    return (
        <div>
            <Heading type='title'>Search Result</Heading>
            {result && (
                <ul>
                    {result.map(item => (
                        <li key={item.name}>
                            <div>
                                <p>Name: {item.name}</p>
                                <p>Size: {item.size}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default SearchResult