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
        task8: { L: 49.13 }
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
    },
    {
        id: '9',
        task1: { LTRP: 79, LI: 0, LD: 2, LKAP: -2, LDIZ: 3, LL: 10.4, KP: 1.1, F: 0 },
        task2: { LEKV: 20.56 },
        task3: { WMAX: 37.5 },
        task4: { AZEL: 12, help: 'Уровень шума осталось снизить на 8.56' },
        task5: { B: 0.892, h: 5 },
        task6: { AECRB: 18 },
        task7: { YGL: 70, AECR: 9 },
        task8: { L: 49.56 }
    },
    {
        id: '10',
        task1: { LTRP: 80.5, LI: 2, LD: 6, LKAP: -2, LDIZ: -1, LL: 8.8, KP: 1.25, F: 0 },
        task2: { LEKV: 34.5 },
        task3: { WMAX: 37.5 },
        task4: { AZEL: 12, help: 'Уровень шума осталось снизить на 22.5' },
        task5: { B: 4.399, h: 10 },
        task6: { AECRB: 24 },
        task7: { YGL: 85, AECR: 22.5 },
        task8: { L: 40 }
    },
    {
        id: '11',
        task1: { LTRP: 82.5, LI: 1, LD: 0, LKAP: -2, LDIZ: 1, LL: 6.7, KP: 0.9, F: 0 },
        task2: { LEKV: 26.47 },
        task3: { WMAX: 25 },
        task4: { AZEL: 10, help: 'Уровень шума осталось снизить на 16.47' },
        task5: { B: 0.916, h: 5 },
        task6: { AECRB: 18 },
        task7: { YGL: 85, AECR: 16.8 },
        task8: { L: 49.67 }
    },
    {
        id: '12',
        task1: { LTRP: 83, LI: 1, LD: -1.5, LKAP: -2, LDIZ: 0, LL: 8.8, KP: 0.9, F: 0 },
        task2: { LEKV: 32.58 },
        task3: { WMAX: 37.5 },
        task4: { AZEL: 12, help: 'Уровень шума осталось снизить на 20.58' },
        task5: { B: 2.065, h: 7 },
        task6: { AECRB: 22 },
        task7: { YGL: 85, AECR: 20.7 },
        task8: { L: 39.88 }
    },
    {
        id: '13',
        task1: { LTRP: 82.5, LI: 2, LD: 1, LKAP: -2, LDIZ: 0, LL: 8.4, KP: 1, F: 0 },
        task2: { LEKV: 25.1 },
        task3: { WMAX: 37.5 },
        task4: { AZEL: 12, help: 'Уровень шума осталось снизить на 13.1' },
        task5: { B: 2.064, h: 7 },
        task6: { AECRB: 22 },
        task7: { YGL: 80, AECR: 14.5 },
        task8: { L: 48.6 }
    },
    {
        id: '14',
        task1: { LTRP: 79, LI: 0, LD: 2, LKAP: -2, LDIZ: 0, LL: 9.3, KP: 0.9, F: 0 },
        task2: { LEKV: 20.63 },
        task3: { WMAX: 62.5 },
        task4: { AZEL: 12, help: 'Уровень шума осталось снизить на 8.63' },
        task5: { B: 0.869, h: 5 },
        task6: { AECRB: 18 },
        task7: { YGL: 70, AECR: 9 },
        task8: { L: 49.63 }
    },
    {
        id: '15',
        task1: { LTRP: 82.5, LI: 2, LD: 6, LKAP: -2, LDIZ: 1, LL: 10.4, KP: 1.1, F: 0 },
        task2: { LEKV: 28.06 },
        task3: { WMAX: 37.5 },
        task4: { AZEL: 12, help: 'Уровень шума осталось снизить на 16.06' },
        task5: { B: 7.826, h: 5 },
        task6: { AECRB: 18 },
        task7: { YGL: 85, AECR: 16.8 },
        task8: { L: 49.26 }
    },
    {
        id: '16',
        task1: { LTRP: 81.5, LI: 1, LD: 0, LKAP: -2, LDIZ: 0, LL: 7.7, KP: 1.25, F: 0 },
        task2: { LEKV: 30.875 },
        task3: { WMAX: 25 },
        task4: { AZEL: 10, help: 'Уровень шума осталось снизить на 20.875' },
        task5: { B: 4.54, h: 10 },
        task6: { AECRB: 24 },
        task7: { YGL: 85, AECR: 22.5 },
        task8: { L: 38.375 }
    },
    {
        id: '17',
        task1: { LTRP: 79, LI: 3, LD: 6, LKAP: -2, LDIZ: 0, LL: 10.4, KP: 0.9, F: 0 },
        task2: { LEKV: 26.64 },
        task3: { WMAX: 37.5 },
        task4: { AZEL: 12, help: 'Уровень шума осталось снизить на 14.64' },
        task5: { B: 0.892, h: 5 },
        task6: { AECRB: 18 },
        task7: { YGL: 85, AECR: 16.8 },
        task8: { L: 47.84 }
    },
    {
        id: '18',
        task1: { LTRP: 77.5, LI: 3, LD: 1, LKAP: -2, LDIZ: 2, LL: 7.7, KP: 0.9, F: 0 },
        task2: { LEKV: 24.57 },
        task3: { WMAX: 25 },
        task4: { AZEL: 10, help: 'Уровень шума осталось снизить на 14.57' },
        task5: { B: 0.916, h: 5 },
        task6: { AECRB: 18 },
        task7: { YGL: 85, AECR: 16.8 },
        task8: { L: 47.77 }
    },
    {
        id: '19',
        task1: { LTRP: 81, LI: 0, LD: 2, LKAP: -2, LDIZ: 3, LL: 5.5, KP: 1, F: 0 },
        task2: { LEKV: 18.5 },
        task3: { WMAX: 12.5 },
        task4: { AZEL: 5, help: 'Уровень шума осталось снизить на 13.5' },
        task5: { B: 0.968, h: 5 },
        task6: { AECRB: 16.5 },
        task7: { YGL: 85, AECR: 16.8 },
        task8: { L: 56.7 }
    },
    {
        id: '20',
        task1: { LTRP: 84.5, LI: 3, LD: 6, LKAP: -2, LDIZ: 3, LL: 5.7, KP: 0.9, F: 0 },
        task2: { LEKV: 24.7 },
        task3: { WMAX: 12.5 },
        task4: { AZEL: 5, help: 'Уровень шума осталось снизить на 19.37' },
        task5: { B: 3.041, h: 8 },
        task6: { AECRB: 22 },
        task7: { YGL: 85, AECR: 20.7 },
        task8: { L: 63.67 }
    },
    {
        id: '21',
        task1: { LTRP: 78.5, LI: 2, LD: 0, LKAP: -2, LDIZ: 1, LL: 5.2, KP: 1.1, F: 0 },
        task2: { LEKV: 23.78 },
        task3: { WMAX: 12.5 },
        task4: { AZEL: 5, help: 'Уровень шума осталось снизить на 18.78' },
        task5: { B: 2.252, h: 7 },
        task6: { AECRB: 22 },
        task7: { YGL: 85, AECR: 20.7 },
        task8: { L: 48.08 }
    },
    {
        id: '22',
        task1: { LTRP: 76, LI: 1, LD: -1.5, LKAP: -2, LDIZ: 0, LL: 5.5, KP: 1.25, F: 0 },
        task2: { LEKV: 26.625 },
        task3: { WMAX: 12.5 },
        task4: { AZEL: 5, help: 'Уровень шума осталось снизить на 21.625' },
        task5: { B: 3.908, h: 9 },
        task6: { AECRB: 24 },
        task7: { YGL: 85, AECR: 22.5 },
        task8: { L: 39.125 }
    },
    {
        id: '23',
        task1: { LTRP: 79.5, LI: 0, LD: 1, LKAP: -2, LDIZ: 0, LL: 10.4, KP: 0.9, F: 0 },
        task2: { LEKV: 19.14 },
        task3: { WMAX: 37.5 },
        task4: { AZEL: 12, help: 'Уровень шума осталось снизить на 7.14' },
        task5: { B: 0.171, h: 3 },
        task6: { AECRB: 12 },
        task7: { YGL: 70, AECR: 7.5 },
        task8: { L: 49.64 }
    },
    {
        id: '24',
        task1: { LTRP: 83, LI: 0, LD: 2, LKAP: -2, LDIZ: 2, LL: 7.2, KP: 1.25, F: 0 },
        task2: { LEKV: 26 },
        task3: { WMAX: 25 },
        task4: { AZEL: 10, help: 'Уровень шума осталось снизить на 16' },
        task5: { B: 0.916, h: 5 },
        task6: { AECRB: 18 },
        task7: { YGL: 85, AECR: 16.8 },
        task8: { L: 49.2 }
    },
    {
        id: '25',
        task1: { LTRP: 78.5, LI: 0, LD: 6, LKAP: -2, LDIZ: -1, LL: 7.1, KP: 1, F: 0 },
        task2: { LEKV: 14.4 },
        task3: { WMAX: 25 },
        task4: { AZEL: 10, help: 'Уровень шума осталось снизить на 4.4' },
        task5: { B: 0.916, h: 5 },
        task6: { AECRB: 18 },
        task7: { YGL: 55, AECR: 4.7 },
        task8: { L: 59.7 }
    },
    {
        id: '26',
        task1: { LTRP: 83, LI: 1, LD: 0, LKAP: 1, LDIZ: 3, LL: 7.5, KP: 0.9, F: 0 },
        task2: { LEKV: 21.25 },
        task3: { WMAX: 12.5 },
        task4: { AZEL: 5, help: 'Уровень шума осталось снизить на 16.25' },
        task5: { B: 0.968, h: 5 },
        task6: { AECRB: 18 },
        task7: { YGL: 85, AECR: 16.8 },
        task8: { L: 59.45 }
    },
    {
        id: '27',
        task1: { LTRP: 82.5, LI: 3, LD: -1.5, LKAP: 2, LDIZ: 2, LL: 7.7, KP: 1.1, F: 0 },
        task2: { LEKV: 29.53 },
        task3: { WMAX: 37.5 },
        task4: { AZEL: 12, help: 'Уровень шума осталось снизить на 17.53' },
        task5: { B: 1.43, h: 6 },
        task6: { AECRB: 20 },
        task7: { YGL: 85, AECR: 18.7 },
        task8: { L: 48.83 }
    },
    {
        id: '28',
        task1: { LTRP: 81.5, LI: 2, LD: 1, LKAP: -2, LDIZ: 0, LL: 7.1, KP: 1.25, F: 0 },
        task2: { LEKV: 23.625 },
        task3: { WMAX: 25 },
        task4: { AZEL: 10, help: 'Уровень шума осталось снизить на 13.625' },
        task5: { B: 0.916, h: 5 },
        task6: { AECRB: 18 },
        task7: { YGL: 85, AECR: 16.8 },
        task8: { L: 46.825 }
    },
    {
        id: '29',
        task1: { LTRP: 77, LI: 1, LD: 2, LKAP: -1, LDIZ: 2, LL: 8.4, KP: 0.9, F: 0 },
        task2: { LEKV: 23.44 },
        task3: { WMAX: 37.5 },
        task4: { AZEL: 12, help: 'Уровень шума осталось снизить на 11.44' },
        task5: { B: 0.892, h: 5 },
        task6: { AECRB: 18 },
        task7: { YGL: 80, AECR: 13 },
        task8: { L: 48.44 }
    },
    {
        id: '30',
        task1: { LTRP: 80.5, LI: 0, LD: 6, LKAP: -2, LDIZ: 0, LL: 9.2, KP: 0.9, F: 0 },
        task2: { LEKV: 26.22 },
        task3: { WMAX: 25 },
        task4: { AZEL: 10, help: 'Уровень шума осталось снизить на 16.22' },
        task5: { B: 0.916, h: 5 },
        task6: { AECRB: 18 },
        task7: { YGL: 85, AECR: 16.8 },
        task8: { L: 49.42 }
    }
];

export default data;
