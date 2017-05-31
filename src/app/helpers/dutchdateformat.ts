import {Pipe} from '@angular/core';

@Pipe({
    name: 'dutchDateFormat'
})
export class DutchDateFormat {
    transform(value: Date,
        //currencySign: string = '€ ',
        //decimalLength: number = 2, 
        //chunkDelimiter: string = '.', 
        //decimalDelimiter:string = ',',
        //chunkLength: number = 3
    ): string {
            var date = value instanceof Date ? value : new Date(value);

            let dayPart = date.getDate();
            let monthPart = date.getMonth();
            let yearPart = date.getFullYear();

            // Translate Month
            let monthName = '';
            switch (monthPart) {
                case 0:
                    monthName = 'januari';
                    break;
                case 1:
                    monthName = 'februari';
                    break;
                case 2:
                    monthName = 'maart';
                    break;
                case 3:
                    monthName = 'april';
                    break;
                case 4:
                    monthName = 'mei';
                    break;
                case 5:
                    monthName = 'juni';
                    break;
                case 6:
                    monthName = 'juli';
                    break;
                case 7:
                    monthName = 'augustus';
                    break;
                case 8:
                    monthName = 'september';
                    break;
                case 9:
                    monthName = 'oktober';
                    break;
                case 10:
                    monthName = 'november';
                    break;
                case 12:
                    monthName = 'december';
                    break;
            }
 
            return dayPart + ' ' + monthName + ' ' + yearPart;
    }
}