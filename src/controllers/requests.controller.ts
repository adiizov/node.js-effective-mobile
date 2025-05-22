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

export const startProcessingRequest = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params
        const searchRequest = await prisma.request.findUnique({where: {id}, select: {status: true}});
        if (!searchRequest) {
            res.status(409).json({"message": "request not found"})
        } else if (searchRequest.status === "INPROGRESS") {
            res.status(400).json({"message": "request already in progress"})
        }
        await prisma.request.update({where: {id}, data: {status: "INPROGRESS"},})
        res.status(200).json({"message": "request started processing"});
    } catch (error) {
        next(error);
    }
}


