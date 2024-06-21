import React from 'react'

const Image = ({ url, alt, className }) => {
    return (
        <>
            <img
                src={require(`../images${url}`)}
                alt={alt}
                className={className}

            />
        </>
    )
}

export default Image