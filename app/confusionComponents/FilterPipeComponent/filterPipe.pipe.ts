import {Pipe, PipeTransform} from '@angular/core'

@Pipe({ name: 'filter'})
export class FilterPipe implements PipeTransform{

    transform(value: any, args: string[]){

        console.log(args);
        let filter = (args) ? args.toString().toLocaleLowerCase() : "";           

        return filter ? value.filter(dish => dish.category.toLocaleLowerCase().indexOf(filter) != -1) : value;

    }

}