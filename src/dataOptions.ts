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
    help: string;
}

export interface ITask5 {
    B: number;
}

export interface ITask6 {
    AECRB: number;
}

export interface ITask7 {
    YGL: number;
    AECR: number;
}

export interface ITask8 {
    L: number
}

export interface IData {
    id: string;
    task1: ITask1;
    task2: ITask2;
    task3: ITask3;
    task4: ITask4;
    task5: ITask5;
    task6: ITask6;
    task7: ITask7;
    task8: ITask8;
}

/**
 * Локальная коллекция данных (ответы)
 * Берите, сдавайте, мне не жалко
 */
const data: IData[] = [
    {
        id: '1',
        task1: { LTRP: 83, LI: 2, LD: 2, LKAP: -2, LDIZ: 1, LL: 10.4, KP: 1, F: 0 },
        task2: { LEKV: 25.6 },
        task3: { WMAX: 37.5 },
        task4: { AZEL: 12, help: 'Уровень шума осталось снизить на 13,6' },
        task5: { B: 0.892 },
        task6: { AECRB: 18 },
        task7: { YGL: 85, AECR: 16.8 },
        task8: { L: 46.8 }
    }
];

export default data;
