import React from 'react'

const UpdateCompany = ({ details, formData, setFormData }) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    return (
        <form>
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
    )
}

export default UpdateCompany