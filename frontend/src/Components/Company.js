import React from 'react'
import axios from 'axios'
import { incrementCompanyViewsRoute } from '../Utilities/Routes';

function toTitleCase(text) {
    return text
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

const Company = ({ details }) => {
    const incrementCompanyViews = async () => {
        const incrementRoute = incrementCompanyViewsRoute + "/" + details._id;
        console.log(incrementRoute)
        await axios.put(incrementRoute)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    }
    
    return (
        <div>
            <h1>Name: {toTitleCase(details.companyName)}</h1>
            <h2>Careers Page: <a target="_blank" href={details.careerPage} onClick={incrementCompanyViews}>Click here</a></h2>
            <hr />
        </div>
    )
}

export default Company