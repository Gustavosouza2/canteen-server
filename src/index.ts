import express, { Express, Request, Response } from "express";
import * as bodyParser from "body-parser";

    const app = express();
    app.disable('x-powered-by');
    
    app.use(bodyParser.json());

    app.listen(3001);
    console.log("Server running at port 3001");

