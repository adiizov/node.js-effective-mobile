export interface IRequestCreate {
    topic: string;
    message: string;
    status: "NEW" | "INPROGRESS" | "COMPLETED" | "CANCELED",
}