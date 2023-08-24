import Company from '../Models/Company.js'

export const getCompanies = async (request , response) => {
    try {
        const { view } = request.query;
        let allCompanies;

        if(view === 'mostVisited'){
            allCompanies = await Company.find().sort({ numberOfViews: -1 });
        } else {
            allCompanies = await Company.find().sort({ companyName: 1 });
        }

        response.status(201).json(allCompanies);
    } catch (error) {
        response.status(500).json({
            "Message": error.message
        })
    }
}

export const uploadCompany = async (request , response) => {
    try {
        // Else
            // TODO: Find the logo of the company
            // TODO: Find the description of the company
            
            // Store in the database
        const newCompany = new Company(request.body);
        const saveNewCompany = await newCompany.save();

        response.status(201).json(saveNewCompany);
    } catch (error) {
        response.status(400).json({
            "Message": error.message
        })
    }
}

export const deleteCompany = async (request , response) => {
    try {
        const id = request.params.id
        await Company.findByIdAndDelete(id);
        response.status(204).json({
            "Message": "Company deleted successfully!"
        })
    } catch (error) {
        response.status(500).json({
            "Message": error.message
        })  
    }
}

export const updateCompany = async (request , response) => {
    try {
        const id = request.params.id;
        const newData = request.body;

        const updatedCompany = await Company.findByIdAndUpdate(id , newData , {new: true});
        return response.status(200).json(updatedCompany) 
    } catch (error) {
        response.status(500).json({
            "Message": error.message
        }) 
    }
}