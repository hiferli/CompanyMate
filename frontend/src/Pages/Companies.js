import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getAllCompanies } from '../Utilities/Routes'

const Companies = () => {
    const [data, setData] = useState(null);

    const getData = async () => {
        await axios.get(getAllCompanies)
        .then((response) => setData(response))
        .catch((error) => console.log(error))
        .finally(() => console.log(data.data));
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>Companies</div>
    )
}

export default Companies