import data, {ITask1} from './dataOptions';

const filterOption = (optionValue: string): ITask1 => {
    return data.filter((option) => option.id === optionValue)[0].task1;
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

export {filterOption, answerTask1}
