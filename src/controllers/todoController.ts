import { Request, Response } from "express";
import db from '../models';

const Tasks = db.Tasks;

export const getAllTasks = async (req: Request, res: Response) => {
    //res.send('Sending response from controller..');
    try {
        const tasks = await Tasks.findAll();
        res.send({data: tasks});
    } catch (err) {
        res.send({success: false}).status(500);
    }
     
}; 

export const createTask = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Tasks.create(body);
         res.send(body).status(200);
    } catch (err) {
        res.send({success: false}).status(500);
    }
    
}; 

export const markComplete = async  (req: Request, res: Response) => {
    const id = req.params.id; 

    if (id) {
        const data = await Tasks.findOne({id:id});
        await data.update({status:true});
        res.send('Completed..').status(200);
    }
}
