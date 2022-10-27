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

export interface ITask2 {
    LEKV: number;
}

export interface ITask3 {
    WMAX: number;
}

export interface ITask4 {
    AZEL: number;
}

export interface IData {
    id: string;
    task1: ITask1;
    task2: ITask2;
    task3: ITask3;
    task4: ITask4;
}

const data: IData[] = [
    {
        id: '1',
        task1: { LTRP: 83, LI: 2, LD: 2, LKAP: -2, LDIZ: 1, LL: 10.4, KP: 1, F: 0 },
        task2: { LEKV: 25.6 },
        task3: { WMAX: 37.5 },
        task4: { AZEL: 12 }
    }
];

export default data;
