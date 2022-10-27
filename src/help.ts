import data, { ITask1, ITask2, ITask3, ITask4, ITask5, ITask6, ITask7, ITask8 } from './dataOptions';

/**
 * Фильтруем по варианту работы и выдаем запрашиваемые данные task-а
 * @param optionValue - Вариант лабараторной работы
 * @param task - номер блока формул
 */
const filterOption = (optionValue: string, task: string): ITask1 | ITask2 | ITask3 | ITask4 | ITask5 | ITask6 | ITask7 | ITask8 | void => {
    switch (task) {
        case 'task1': return data.filter((option) => option.id === optionValue)[0].task1;
        case 'task2': return data.filter((option) => option.id === optionValue)[0].task2;
        case 'task3': return data.filter((option) => option.id === optionValue)[0].task3;
        case 'task4': return data.filter((option) => option.id === optionValue)[0].task4;
        case 'task5': return data.filter((option) => option.id === optionValue)[0].task5;
        case 'task6': return data.filter((option) => option.id === optionValue)[0].task6;
        case 'task7': return data.filter((option) => option.id === optionValue)[0].task7;
        case 'task8': return data.filter((option) => option.id === optionValue)[0].task8;
    }
}

const answerTask1 = (option: ITask1, index: string, value: string): boolean | void => {
    switch (index) {
        case 'LTRP' : return option.LTRP.toString() === value;
        case 'LI' : return option.LI.toString() === value;
        case 'LD' : return option.LD.toString() === value;
        case 'LKAP' : return option.LKAP.toString() === value;
        case 'LDIZ' : return option.LDIZ.toString() === value;
        case 'LL' : return option.LL.toString() === value;
        case 'KP' : return option.KP.toString() === value;
        case 'F' : return option.F.toString() === value;
    }
}

const answerTask2 = (option: ITask2, index: string, value: string): boolean | void => {
    switch (index) {
        case 'LEKV' : return option.LEKV.toString() === value;
    }
}

const answerTask3 = (option: ITask3, index: string, value: string): boolean | void => {
    switch (index) {
        case 'WMAX' : return option.WMAX.toString() === value;
    }
}

const answerTask4 = (option: ITask4, index: string, value: string): boolean | void => {
    switch (index) {
        case 'AZEL' : return option.AZEL.toString() === value;
    }
}

const answerTask5 = (option: ITask5, index: string, value: string): boolean | void => {
    switch (index) {
        case 'B' : return option.B.toString() === value;
    }
}

const answerTask6 = (option: ITask6, index: string, value: string): boolean | void => {
    switch (index) {
        case 'AECRB' : return option.AECRB.toString() === value;
    }
}

const answerTask7 = (option: ITask7, index: string, value: string): boolean | void => {
    switch (index) {
        case 'YGL' : return option.YGL.toString() === value;
        case 'AECR' : return option.AECR.toString() === value;
    }
}

const answerTask8 = (option: ITask8, index: string, value: string): boolean | void => {
    switch (index) {
        case 'L' : return option.L.toString() === value;
    }
}

export { filterOption, answerTask1, answerTask2, answerTask3, answerTask4, answerTask5, answerTask6, answerTask7, answerTask8 }
