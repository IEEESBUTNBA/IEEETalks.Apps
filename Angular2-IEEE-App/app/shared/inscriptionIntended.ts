export interface IinscriptionIntended {
    firstName: string;
    lastName: string;
    email: string;
    eventId: string;
}

export class InscriptionIntended implements IinscriptionIntended {

    constructor(public firstName: string,
                public lastName: string,
                public email: string,
                public eventId: string) { }
}