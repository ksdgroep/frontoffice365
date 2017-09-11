import {Pipe} from '@angular/core';

@Pipe({
  name: 'dutchDateFormat'
})
export class DutchDateFormat {
  transform(value: Date,
            weekdayOnly: boolean = false
  ): string {
    var date = value instanceof Date ? value : new Date(value);

    if (weekdayOnly) {
      let day = date.getDay();
      let weekdayName = '';

      // Translate Day
      switch (day) {
        case 0:
          weekdayName = 'Zondag';
          break;
        case 1:
          weekdayName = 'Maandag';
          break;
        case 2:
          weekdayName = 'Dinsdag';
          break;
        case 3:
          weekdayName = 'Woensdag';
          break;
        case 4:
          weekdayName = 'Donderdag';
          break;
        case 5:
          weekdayName = 'Vrijdag';
          break;
        case 6:
          weekdayName = 'Zaterdag';
          break;
      }

      return weekdayName;
    }
    else {
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
}
