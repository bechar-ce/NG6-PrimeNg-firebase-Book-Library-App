import { responseStatus } from './enums';

export interface IBookDetails {
    author: string;
    country: string;
    imageLink: string;
    language: string;
    link: string;
    pages: string;
    title: string;
    year: string;
}

export interface IResponse<T> {
    data: T;
    status: responseStatus;
    messageKey: string;
    apiUrl: string;
    message?: string;
}


