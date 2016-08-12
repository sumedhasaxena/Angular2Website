import {Pipe, PipeTransform} from "@angular/core";
// import {DateFormatter} from '@angular/src/facade/lang';
import {DatePipe} from '@angular/common';

@Pipe({
    name: 'datePipe'
})
export class CustomDatePipe implements PipeTransform {
    transform(value: string, args: string): string {
        var parsedDate = Date.parse(value);
        if (isNaN(parsedDate)) {
            return "";
        }
        else {
            return new DatePipe().transform(new Date(parsedDate), args);
        }
    }
}