import { ApiError } from './api-error';

export class ApiMessage {
    Message: string;
    Errors: ApiError[];
}