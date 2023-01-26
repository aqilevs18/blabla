import { Pipe, PipeTransform} from "@angular/core";
let date =  new Date().getFullYear();

@Pipe({
    name: "datePipe"
})

export class datePipe implements PipeTransform {
 
    transform(value: any) {
        return value = date - value;
    }
}