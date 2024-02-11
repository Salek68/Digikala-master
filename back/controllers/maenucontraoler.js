import menu from "../model/menu.js";
export const getallmenu= async(req,res)=>{
    try{
const menuv = await menu.find();
res.json(menuv);
    }
    catch(Error){
res.status(500).json({message : Error.message})
    }
}
export const savemenu = async (req,res)=>{
    const menuv = new menu(req.body);
    try{
const insertuser = await menuv.save();
res.json({message : "add ok"})
    }catch(Error){
        res.status(400).json({message : Error.message})
    }
}
export const getmenubyid = async(req,res)=>{
    try{
const menuv = await menu.findById(req.params.id);

res.json(menuv);
    }
    catch(Error){
res.status(500).json({message : Error.message})
    }
}
