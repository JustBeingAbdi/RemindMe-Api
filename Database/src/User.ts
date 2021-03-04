import {Model, model, Document, Schema } from "mongoose";


export interface IUser extends Document {
    key:string,
    ip:string,
}

export const UserSchema: Schema = new Schema({
    key: { type: String },
    ip: { type: String },
});


export const User: Model<IUser> = model("User", UserSchema);