import express from "express";
import srs from "secure-random-string";
import {Database, Connect } from "./../Database";
import { Data } from "ejs";
import bodyparser from "body-parser";
import path from "path";
import ejs from "ejs";
import responstime from "response-time";





export class Api {
    public data: Database = new Database();
    public async init(): Promise<any> {
        new Connect().init();

        let api = express();
        api.use(bodyparser.json());
    api.use(bodyparser.urlencoded({ extended: true }));
    api.engine("html", ejs.renderFile);
    api.set('view engine', 'ejs');
    api.set('views', path.join(__dirname, "./../views"));
    api.use(express.static(path.join(__dirname, "./../public")));
api.set('trust proxy', true)
    
        api.use(responstime());


        api.get("/", async(req, res) => {
            res.render("index");
        })
        api.get("/api/key", async(req, res) => {
            let code = srs({ length:50});
            res.send(code);
            let userDB = this.data.CreateKey(req.ip);
        })

        


        api.listen(3000)

    }
}