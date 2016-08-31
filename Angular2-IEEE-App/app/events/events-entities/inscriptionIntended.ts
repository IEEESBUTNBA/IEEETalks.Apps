export interface IInscriptionIntended {
    firstName: string;
    lastName: string;
    email: string;
    eventId: string;
}

export class InscriptionIntended implements IInscriptionIntended {

    constructor(public firstName: string,
                public lastName: string,
                public email: string,
                public eventId: string) { }
}