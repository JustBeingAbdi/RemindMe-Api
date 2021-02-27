import express from "express";



export class Api {
    public async init(): Promise<any> {
        let api = express();


        api.get("/", async(req, res) => {
            res.send(`Hey`);
        })


        api.listen(3000)

    }
}