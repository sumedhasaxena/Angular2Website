import {Pipe, PipeTransform} from '@angular/core'

@Pipe({ name: 'orderBy'})
export class OrderByPipe implements PipeTransform{

  static orderByComparator(a:any, b:any) : number{

        if(a == undefined || b == undefined)        
            return 0;

        if((isNaN(parseFloat(a))) || !isFinite(a) || (isNaN(parseFloat(b))) || !isFinite(b)){
            //not a number
            if(a.toLowerCase() < b.toLowerCase()) return -1;
            if(a.toLowerCase() > b.toLowerCase()) return 1;
        }
        else{

            if(parseFloat(a) < parseFloat(b)) return -1;
            if(parseFloat(a) > parseFloat(b)) return 1;
        }

        return 0; // equal
    }

    transform(value: any, args: string){

        console.log(args);

        if(args == "" || args == "undefined")
        {
            return value;
        }
        var asc = true;
        var propertyToSortBy = (args) ? args.toString().toLocaleLowerCase() : "";                 
        
        if(propertyToSortBy!= "" && propertyToSortBy.substr(0,1) == '-')
        {
            asc = false;
            propertyToSortBy = propertyToSortBy.substr(1);
        }

        return value.sort(function(a:any, b:any){            
            return asc? 
                OrderByPipe.orderByComparator(a[propertyToSortBy], b[propertyToSortBy])
                : -OrderByPipe.orderByComparator(a[propertyToSortBy], b[propertyToSortBy])

        });

    } 

}