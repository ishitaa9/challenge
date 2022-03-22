import mongoose from 'mongoose';

const DealSchema = new mongoose.Schema ({
    
    date: {
        type: Number,
        required: true,
    },
    company_id: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        default: 0,
    },
    method: {
        type: Number,
        required: true,
    },
    
},{timestamps: true});

export default mongoose.models.Deal || 
mongoose.model("Companies", DealSchema);