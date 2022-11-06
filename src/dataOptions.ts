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
    h: number;
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
        task5: { B: 0.892, h: 5 },
        task6: { AECRB: 18 },
        task7: { YGL: 85, AECR: 16.8 },
        task8: { L: 46.8 }
    },
    {
        id: '2',
        task1: { LTRP: 80.5, LI: 0, LD: -1.5, LKAP: -2, LDIZ: 0, LL: 6.1, KP: 0.9, F: 0 },
        task2: { LEKV: 6.51 },
        task3: { WMAX: 12.5 },
        task4: { AZEL: 5, help: 'Уровень шума осталось снизить на 1,51' },
        task5: { B: 0.968, h: 5 },
        task6: { AECRB: 18 },
        task7: { YGL: 45, AECR: 2.9 },
        task8: { L: 63.61 }
    },
    {
        id: '3',
        task1: { LTRP: 79.5, LI: 4, LD: 6, LKAP: 1, LDIZ: 3, LL: 5.5, KP: 1.1, F: 0 },
        task2: { LEKV: 22.45 },
        task3: { WMAX: 12.5 },
        task4: { AZEL: 5, help: 'Уровень шума осталось снизить на 17,45' },
        task5: { B: 1.557, h: 6 },
        task6: { AECRB: 20 },
        task7: { YGL: 85, AECR: 18.7 },
        task8: { L: 63.75 }
    },
    {
        id: '4',
        task1: { LTRP: 75.5, LI: 1, LD: -1.5, LKAP: -2, LDIZ: 0, LL: 8.4, KP: 1.25, F: 0 },
        task2: { LEKV: 12.5 },
        task3: { WMAX: 37.5 },
        task4: { AZEL: 12, help: 'Уровень шума осталось снизить на 0,5' },
        task5: { B: 0.892, h: 5 },
        task6: { AECRB: 18 },
        task7: { YGL: 45, AECR: 2.9 },
        task8: { L: 47.6 }
    },
    {
        id: '5',
        task1: { LTRP: 78.5, LI: 1, LD: 0, LKAP: -2, LDIZ: 1, LL: 9.3, KP: 0.9, F: 0 },
        task2: { LEKV: 20.13 },
        task3: { WMAX: 62.5 },
        task4: { AZEL: 12, help: 'Уровень шума осталось снизить на 8.13' },
        task5: { B: 0.869, h: 5 },
        task6: { AECRB: 18 },
        task7: { YGL: 70, AECR: 9 },
        task8: { L: 47.6 }
    },
    {
        id: '6',
        task1: { LTRP: 79, LI: 0, LD: 0, LKAP: -2, LDIZ: 0, LL: 10.4, KP: 1.25, F: 0 },
        task2: { LEKV: 29 },
        task3: { WMAX: 37.5 },
        task4: { AZEL: 12, help: 'Уровень шума осталось снизить на 17' },
        task5: { B: 1.431, h: 6 },
        task6: { AECRB: 20 },
        task7: { YGL: 85, AECR: 18.7 },
        task8: { L: 33.3 }
    },
    {
        id: '7',
        task1: { LTRP: 82.5, LI: 4, LD: -1.5, LKAP: -2, LDIZ: 2, LL: 5.7, KP: 1, F: 0 },
        task2: { LEKV: 19.3 },
        task3: { WMAX: 12.5 },
        task4: { AZEL: 5, help: 'Уровень шума осталось снизить на 14.3' },
        task5: { B: 0.968, h: 5 },
        task6: { AECRB: 18 },
        task7: { YGL: 85, AECR: 16.8 },
        task8: { L: 57.5 }
    },
    {
        id: '8',
        task1: { LTRP: 81.5, LI: 3, LD: 1, LKAP: -2, LDIZ: 1, LL: 6.7, KP: 0.9, F: 0 },
        task2: { LEKV: 28.47 },
        task3: { WMAX: 25 },
        task4: { AZEL: 10, help: 'Уровень шума осталось снизить на 18.47' },
        task5: { B: 1.471, h: 6 },
        task6: { AECRB: 20 },
        task7: { YGL: 85, AECR: 18.7 },
        task8: { L: 49.77 }
    }
];

export default data;
