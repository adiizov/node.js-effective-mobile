import { Request, Response, NextFunction } from "express";
import {IRequestCreate} from "../models/request";
import prisma from "../prisma-client";

export const createRequest = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body as IRequestCreate;
        const newRequest = await prisma.request.create({data})
        res.status(201).json("New request created");
    } catch (error) {
        next(error);
    }
};

// // Read all items
// export const getItems = (req: Request, res: Response, next: NextFunction) => {
//     try {
//         res.json(items);
//     } catch (error) {
//         next(error);
//     }
// };
//
// // Read single item
// export const getItemById = (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const id = parseInt(req.params.id, 10);
//         const item = items.find((i) => i.id === id);
//         if (!item) {
//             res.status(404).json({ message: 'Item not found' });
//             return;
//         }
//         res.json(item);
//     } catch (error) {
//         next(error);
//     }
// };
//
// // Update an item
// export const updateItem = (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const id = parseInt(req.params.id, 10);
//         const { name } = req.body;
//         const itemIndex = items.findIndex((i) => i.id === id);
//         if (itemIndex === -1) {
//             res.status(404).json({ message: 'Item not found' });
//             return;
//         }
//         items[itemIndex].name = name;
//         res.json(items[itemIndex]);
//     } catch (error) {
//         next(error);
//     }
// };
//
// // Delete an item
// export const deleteItem = (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const id = parseInt(req.params.id, 10);
//         const itemIndex = items.findIndex((i) => i.id === id);
//         if (itemIndex === -1) {
//             res.status(404).json({ message: 'Item not found' });
//             return;
//         }
//         const deletedItem = items.splice(itemIndex, 1)[0];
//         res.json(deletedItem);
//     } catch (error) {
//         next(error);
//     }
// };