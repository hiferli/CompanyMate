import Company from '../../Models/Company.js'

export const convertCase = (request , response , next) => {
    try {
        if(!request.body.companyName){
            return response.status(404).json({
                "Message": "Company Name Empty"
            })
        }
    } catch (error) {
        return response.status(500).json({
            "Message": error.message
        })
    }
    
    request.body.companyName = request.body.companyName.toLowerCase();
    next();
}

export const checkAlreadyExists = async (request , response , next) => {
    try {
        const { companyName , careerPage } = request.body;
        
        const searchResult = await Company.findOne({ $or: [{ companyName }, { careerPage }] });

        // Find whether the company exists in the database
        // If yes then skip
        if(searchResult){
            return response.status(400).json({ "Message": 'Company already exists' });
        }
    } catch (error) {
        return response.status(500).json({
            "Message": error.message
        })
    }

    next();
}

export const checkIfNotExisting = async (request , response , next) => {
    try {
        const id = request.params.id;
        const searchResult = await Company.findById(id);
        // console.log(searchResult)

        if(!searchResult){
            return response.status(404).json({
                "Message": "Company Not Found"
            })
        }
    } catch (error) {
        return response.status(500).json({
            "Message": error.message
        })
    }

    next();
}