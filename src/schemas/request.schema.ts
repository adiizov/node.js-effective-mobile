import {z} from "zod";

export const RequestCreate = z.object({
    topic: z.string(),
    message: z.string(),
}).strict()

export const RequestComplete = z.object({
    resolution: z.string().optional(),
})

const dateObject = z.string().regex(
  /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
  "Дата должна быть в формате YYYY-MM-DD"
)

export const RequestGet = z.object({
    startDate: dateObject.optional(),
    endDate: dateObject.optional()
})