export interface ITask1 {
    LTRP: number;
    LI: number;
    LD: number;
    LKAP: number;
    LDIZ: number;
    LL: number;
    KP: number;
    F: number;
}

export interface IData {
    id: string;
    task1: ITask1;
}

const data: IData[] = [
    {id: '1', task1: { LTRP: 83, 'LI': 2, LD: 2, LKAP: -2, LDIZ: 1, LL: 10.4, KP: 1, F: 0 }}
];

export default data;
