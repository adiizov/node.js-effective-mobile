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

export interface IRequestGet {
    startDate?: string;
    endDate?: string;
}