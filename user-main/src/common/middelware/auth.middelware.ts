import jwt from 'jsonwebtoken';
import { Response } from 'express';

export const verifyToken = (req:any,res:Response,next:any) => {
    try{
        const token:string = req.body.token || req.query.token || req.headers.authorization;
        if (!token) {
            res.status(403).send({"message":"A token is required for authentication"});
        }
        try {
            const decoded = jwt.verify(token.split(" ")[1], "fgsdfgasfhasgdkjfhadsgkfjas");
            req["user"] = decoded;
        } catch (err:any) {
            throw new Error(err["message"])
        }
        return next();
    }
    catch(error){
        res.status(401).send(error);
    }
} 