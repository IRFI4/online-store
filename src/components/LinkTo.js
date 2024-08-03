import React from 'react'

const LinkTo = ({ href, className, text }) => {
    return (
        <>
            <a href={href} className={className}>{text}</a>
        </>
    )
}

export default LinkTo