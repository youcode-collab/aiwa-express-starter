import e from "express";
import controllers from "./routes/index.js"
let app = e();
app.use("/api/v1/", controllers)
app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})