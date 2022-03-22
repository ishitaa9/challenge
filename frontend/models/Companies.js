import mongoose from 'mongoose';

const CompanySchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
        maxlength: 60,
    },
    desc: {
        type: String,
        required: true,
        maxlength: 200,
    },

    prices: {
        type: [Number],
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    
},{timestamps: true});

export default mongoose.models.Company || 
mongoose.model("Companies", CompanySchema);