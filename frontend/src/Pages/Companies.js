import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getAllCompanies } from '../Utilities/Routes'
import Company from '../Components/Company';

const Companies = () => {
    const [allCompanies, setAllCompanies] = useState([]);
    
    useEffect(() => {
        (
            async () => {
                await axios.get(getAllCompanies)
                    .then((response) => setAllCompanies(response.data))
                    .catch((error) => console.log(error))
                    // .finally(() => console.log(allCompanies));
            }
        )();
    }, [])

    return (
        <>
            {
                allCompanies.map((company) => {
                    return (
                        <Company key={company._id} details={company}/>
                    )
                })
            }
        </>
    )
}

export default Companies