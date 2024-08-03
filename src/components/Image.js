import React from 'react'

const Image = ({ url, alt, className, width, height }) => {
    return (
        <>
            <img
                src={require(`../images${url}`)}
                alt={alt}
                className={className}
                width={width}
                height={height}
            />
        </>
    )
}

export default Image