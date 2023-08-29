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
        <div>
            <h1>Name: {toTitleCase(details.companyName)}</h1>
            <h2>Careers Page: <a target="_blank" href={details.careerPage}>Click here</a></h2>
            <hr />
        </div>
    )
}

export default Company