import {z} from "zod";

export const RequestCreate = z.object({
    topic: z.string(),
    message: z.string(),
}).strict()

export const RequestComplete = z.object({
    resolution: z.string().optional(),
})