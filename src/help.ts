import data, {ITask1} from './dataOptions';

const filterOption = (optionValue: string): ITask1 => {
    return data.filter((option) => option.id === optionValue)[0].task1;
}

const answerTask1 = (option: ITask1, index: string, value: string): boolean | void => {
    switch (index) {
        case 'LTRP' : return option.LTRP.toString() === value;
    }
}

export {filterOption, answerTask1}
