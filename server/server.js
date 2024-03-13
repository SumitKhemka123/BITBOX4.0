import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT=3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("client"));


app.get("/" , (res, req)=>{
    req.send("Hello World");
})


app.listen(PORT , ()=>{
    console.log("Server is running on PORT 3000");
})