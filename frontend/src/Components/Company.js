import React from 'react'

function toTitleCase(text) {
    return text
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

const Company = ({ details }) => {
    return (
        <div>{toTitleCase(details.companyName)}</div>
    )
}

export default Company