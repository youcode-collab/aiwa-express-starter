import e from "express";
import { generate } from "./ai/index.js" 
const router = e.Router();

router.get("/generate", async(req, res)=>{
    const response = (await generate()).message.content
    res.json({
        message: response
    });
})

export default router;