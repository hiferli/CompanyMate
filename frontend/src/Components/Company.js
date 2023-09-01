import React, { useState } from 'react'
import axios from 'axios'
import { updateCompanyRoute } from '../Utilities/Routes';
import ShowCompany from './ShowCompany';
import UpdateCompany from './UpdateCompany';


const Company = ({ details }) => {
    const [update, setUpdate] = useState(false);
    const [formData, setFormData] = useState(details);

    const isValid = () => {
        if(formData.companyName === "" || formData.careerPage === ""){
            alert("Please mention the company details")
            return false;
        }
        
        if(details.companyName === formData.companyName && details.careerPage === formData.careerPage){
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

    return (
        <div>
            {
                update ? (
                    <UpdateCompany details={details} formData={formData} setFormData={setFormData} />
                ) : (
                    <ShowCompany details={details}/>
                )
            }

            <button onClick={makeChanges}>{update ? 'Make Changes' : 'Update'}</button>
            <hr />
        </div>
    )
}

export default Company