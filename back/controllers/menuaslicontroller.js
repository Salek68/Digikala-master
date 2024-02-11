import menu from "../model/menuasli.js";
export const getallmenua= async(req,res)=>{
    try{
const menuv = await menu.find();
res.json(menuv);
    }
    catch(Error){
res.status(500).json({message : Error.message})
    }
}
export const savemenua = async (req,res)=>{
    const menuv = new menu(req.body);
    try{
const insertuser = await menuv.save();
res.json({message : "add ok"})
    }catch(Error){
        res.status(400).json({message : Error.message})
    }
}
export const getmenuabyid = async(req,res)=>{
    try{
const menuv = await menu.findById(req.params.id);

res.json(menuv);
    }
    catch(Error){
res.status(500).json({message : Error.message})
    }
}
