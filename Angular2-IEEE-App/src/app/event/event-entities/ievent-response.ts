import { IEvent } from './ievent';

export interface IeventResponse {

    totalRecords: number;
    hasMore: boolean;
    items: IEvent[];
}
