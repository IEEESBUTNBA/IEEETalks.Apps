export interface IEvent {
    id: string;
    entityId: number;
    name: string;
    summary: string;
    description: string;
    image: string;
    location: string;
    quota: string;
    price: number;
    eventDate: Date;
}

export interface IEventResponse {
    hasMore: boolean;
    totalRecords: number;
    items: Array<IEvent>;
}
export class Event implements IEvent {
    constructor(
        public id: string,
        public entityId: number,
        public name: string,
        public summary: string,
        public description: string,
        public image: string,
        public location: string,
        public quota: string,
        public price: number,
        public eventDate: Date) {

    }
}