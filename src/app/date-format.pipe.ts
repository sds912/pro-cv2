import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(inputDate: string): string {
    // Check if the inputDate is in the "YYYY-MM-DD" format
    const dateParts = inputDate.split('-');
    if (dateParts.length !== 3) {
      return inputDate; // Return the input as is if it's not in the expected format
    }

    const year = dateParts[0];
    const month = dateParts[1];
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const formattedDate = `${monthNames[+month - 1]} ${year}`;
    
    return formattedDate;
  }
}
