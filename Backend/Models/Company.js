import mongoose from 'mongoose'

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },

    description: String,
    
    careerPage: {
        type: String,
        required: true,
    },
    
    numberOfViews: {
        type: Number,
        default: 0, // Default to 0 views when a new company is created.
    },
    
    icon: String,
});

export default mongoose.model('Company', companySchema);
