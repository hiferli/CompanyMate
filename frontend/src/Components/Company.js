import React, { useState } from 'react'
import axios from 'axios'
import { incrementCompanyViewsRoute, updateCompanyRoute } from '../Utilities/Routes';

function toTitleCase(text) {
    return text
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

const Company = ({ details }) => {
    const [update, setUpdate] = useState(false);
    const [formData, setFormData] = useState(details);

    const isValid = () => {
        if(formData.companyName === "" || formData.careerPage === ""){
            alert("Please mention the company details")
            return false;
        }
        
        if(details.companyName == formData.companyName && details.careerPage === formData.careerPage){
            alert("There are no changes!");
            return false;
        }

        const expression = /^(https?:\/\/)?([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+)(\/\S*)?$/;
        var regex = new RegExp(expression);

        if (!formData.careerPage.match(regex)) {
            alert("Invalid Website");
            return false;
        }
        
        return true;
    }
    
    const updateInDatabase = async () => {
        const updateRoute = updateCompanyRoute + '/' + details._id;
        await axios.patch(updateRoute , formData)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }

    const makeChanges = () => {
        if(update){
            if(isValid()){
                // alert(isValid());
                updateInDatabase();
                window.location.reload(); 
            }
        } else {
            setFormData(details)
        }

        setUpdate(update => !update);
    }
    
    const incrementCompanyViews = async () => {
        const incrementRoute = incrementCompanyViewsRoute + "/" + details._id;
        console.log(incrementRoute)
        await axios.put(incrementRoute)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        
    }

    return (

        <div>

            {
                update ? (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Company Name:</label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                defaultValue={details.companyName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="careerPage">Career Page Link:</label>
                            <input
                                type="text"
                                id="careerPage"
                                name="careerPage"
                                defaultValue={details.careerPage}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </form>
                ) : (
                    <>
                        <h1>Name: {toTitleCase(details.companyName)}</h1>
                        <h2>Careers Page: <a target="_blank" href={details.careerPage} onClick={incrementCompanyViews}>Click here</a></h2>
                    </>
                )
            }

            <button onClick={makeChanges}>{update ? 'Make Changes' : 'Update'}</button>
            <hr />
        </div>
    )
}

export default Company