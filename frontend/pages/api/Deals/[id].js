import get_db from '../fullstack_challenge_api/utils/db';
import Deals from '../../../models/Deals';

const handler = async (req, res) => {
    const {method, query:{id} } = req;

    await get_db();

    if(method === "GET") {
        try{
            const order = await Order.findById(id);
            res.status(200).json(order)
        }catch(err){
            res.status(500).json(err)
        }
    }

    if(method === "PATCH") {
        try{
            const product  = await Order.findByIdAndUpdate(id, req.body, {new: true,});
            res.status(201).json(order);

        }catch(err){
            res.status(500).json(err)
        }
    }

    if(method === "DELETE") {}
    try{
        await Deals.create(req.body);
        res.status(200).json("The Deal has been deleted!");

    }catch(err){
        res.status(500).json(err)
    }
};

export default handler;