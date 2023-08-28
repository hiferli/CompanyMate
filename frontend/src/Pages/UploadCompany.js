import axios from 'axios';
import React, { useState } from 'react'
import { uploadCompanyRoute } from '../Utilities/Routes';

const UploadCompany = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        careerPage: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const isValid = () => {
        if (formData.companyName === "" || formData.careerPage === "") {
            alert("Please enter the details correctly")
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

    const uploadCompany = async () => {
        axios.post(uploadCompanyRoute, formData)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isValid()) {
            // alert("Form is okay");
            await uploadCompany();
            // console.log('Form data submitted:', formData);
        }
    };

    return (
        <div>
            <h2>Add a New Company</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Company Name:</label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.name}
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
                        value={formData.careerPage}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <button type="submit">Add Company</button>
                </div>

            </form>
        </div>
    )
}

export default UploadCompany