import { response } from 'express';
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
        const { companyName , careerPage } = request.body;
        const searchResult = await Company.findOne({ $or: [{ companyName }, { careerPage }] });

        // Find whether the company exists in the database
        // If yes then skip
        if(searchResult){
            return response.status(400).json({ "Message": 'Company already exists' });
        }

        // Else
            // Find the logo of the company
            // Find the description of the company
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
        const id = request.params.id;
        const searchResult = await Company.findById(id);
        console.log(searchResult)

        if(!searchResult){
            return response.status(404).json({
                "Message": "Company Not Found"
            })
        }

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