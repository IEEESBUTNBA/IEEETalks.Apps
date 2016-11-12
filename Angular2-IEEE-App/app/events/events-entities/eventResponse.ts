import {IEvent} from './event';

export interface IEventResponse {
    hasMore: boolean;
    totalRecords: number;
    items: Array<IEvent>;
}