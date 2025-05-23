export interface IRequestCreate {
    topic: string;
    message: string;
}

export interface IResponseComplete {
    resolution?: string;
}

export interface IResponseCancel {
    cancellation?: string;
}