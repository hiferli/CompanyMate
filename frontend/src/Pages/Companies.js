import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getAllCompanies } from '../Utilities/Routes'
import Company from '../Components/Company';

const Companies = () => {
    const [allCompanies, setAllCompanies] = useState([]);
    const [query, setQuery] = useState({});

    const resetSearch = () => {

        setQuery({});
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setQuery({
            ...query,
            [name]: value,
        });
    };

    const isValid = async () => {
        if (query.name === "") {
            alert("Please Enter a Valid Company Name!")
            return false;
        }

        if (query.view === "") {
            query.view = 'alphabetical'
        }

        // console.log(query);
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isValid()) {
            // console.log("All good!")
            await getCompanies(query);
        }
    }

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    function jsonToQueryParams(json) {
        return Object.keys(json)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(json[key]))
            .join('&');
    }


    const getCompanies = async (query) => {
        const getCompaniesAPI = getAllCompanies + '?' + jsonToQueryParams(query);
        // console.log(getCompaniesAPI)

        await axios.get(getCompaniesAPI)
            .then((response) => setAllCompanies(response.data))
            .catch((error) => console.log(error))
            // .finally(() => console.log(allCompanies));
    }

    useEffect(() => {
        getCompanies({});
    }, [])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">What are you looking for?</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={query.name || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <label>
                        <input
                            type="radio"
                            name="view"
                            value="alphabetical"
                            checked={query.view === 'alphabetical'}
                            onChange={handleInputChange}
                        />
                        Alphabetical
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="view"
                            value="mostVisited"
                            checked={query.view === 'mostVisited'}
                            onChange={handleInputChange}
                        />
                        Most Visited
                    </label>

                </div>

                <div>
                    <button type="button" onClick={resetSearch}>Reset Search</button>
                </div>

                <div>
                    <button type="submit">Search</button>
                </div>
            </form>

            {
                allCompanies.map((company) => {
                    return (
                        <Company key={company._id} details={company} />
                    )
                })
            }
        </>
    )
}

export default Companies