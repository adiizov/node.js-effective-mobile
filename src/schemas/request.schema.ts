import {z} from "zod";

export const RequestCreate = z.object({
    topic: z.string(),
    message: z.string(),
    status: z.enum(["NEW","INPROGRESS","COMPLETED","CANCELED"]).optional(),
}).strict()