import React from 'react';

const Heading = ({ type, children}) => {
    const headings = {
        title: <h1>{children}</h1>,
        subtitle: <h2>{children}</h2>,
        intertitle: <h3>{children}</h3>
    }

    return (
        headings[type]
    )
}

export default Heading;
