import  Express  from "express";
import { deleteusers, getuser, getuserbyid, saveusers, updateusers } from "../controllers/usercontroller.js";

import { getallmahsol, getmasolbyid, savemahsol } from "../controllers/mahsolatmodel.js";
import { getallmenu, savemenu } from "../controllers/maenucontraoler.js";
import { getallmenua, savemenua } from "../controllers/menuaslicontroller.js";
const router = Express.Router();

router.get("/users",getuser)
router.get("/topmenu",getallmenu)
router.get("/menuasli",getallmenua)
router.post("/topmenu",savemenu)
router.post("/menuasli",savemenua)
router.post("/users",saveusers)
router.get("/users/:id",getuserbyid)
router.patch("/users/:id",updateusers)
router.delete("/users/:id",deleteusers)
router.get("/mahsolat",getallmahsol)
router.post("/mahsolat",savemahsol)
router.get("/mahsolat/:id",getmasolbyid)
export default router;
