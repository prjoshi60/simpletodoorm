import express, { Request, Response } from 'express';
import { createTask, getAllTasks, markComplete } from '../controllers/todoController';
import { todo } from 'node:test';
const todoRouter = express.Router();


todoRouter.get('/', getAllTasks);

todoRouter.post('/add', createTask);
todoRouter.put('/complete/:id', markComplete);

todoRouter.get('/:id', (req, res) => {
    res.send("To do for one task -> " + req.params.id);
});

export default todoRouter;
