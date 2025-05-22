import { Request, Response, NextFunction } from "express";
import {IRequestCreate} from "../models/request";
import prisma from "../prisma-client";
import {RequestCreate} from "../schemas/request.schema";
import {parseZodErrors} from "../lib/parseZodErrors";

export const createRequest = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body as IRequestCreate;
        const parsed = RequestCreate.safeParse(data);
        if(!parsed.success) {
            const parsedErrors = parseZodErrors(parsed.error.issues)
            console.log("Zod error === ", parsedErrors);
            res.status(400).json(parsedErrors);
            return
        }
        await prisma.request.create({data: parsed.data})
        res.status(201).json("New request created");
    } catch (error) {
        next(error);
    }
};
