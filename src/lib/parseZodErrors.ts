import {ZodIssue} from "zod";

export const parseZodErrors = (errors: ZodIssue[]) => {
    return errors.reduce((acc, curr) => {
        const key = curr.path[0];
        acc[key] = curr.message;
        return acc;
    }, {} as Record<string, string>);
}