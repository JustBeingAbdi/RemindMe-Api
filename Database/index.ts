import {data} from "./database";
import srs from "secure-random-string";
import mongoose from "mongoose";


export class Database {
    public async CreateKey(ip): Promise<any> {
        let userDB = await data.user.findOne({ ip: ip});
        if(userDB){
            userDB.key = srs({length:50})
            userDB.save();
            return userDB;
        } else {
            let userDB = await this.CreateUser(ip);
            userDB.key = srs({length:50})
            userDB.save();
        }
    }
    public async CreateUser(ip): Promise<any> {
        let userDB = new data.user({
            ip: ip,
        });
        userDB.save();
        return userDB;
    }
}

export class Connect {
    public async init(): Promise<any> {
        mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
    }
}