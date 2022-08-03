import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'mayusculas'//este el nombre de mim pipe
   
})

export class MayusculasPipe implements PipeTransform{
    transform(valor: string, enMayuscula: boolean = true): string {
        
        // if (enMayuscula) {
        //     return valor.toUpperCase()
            
        // } else {
        //     return valor.toLowerCase()
            
        // }

        return (enMayuscula) ? valor.toUpperCase(): valor.toLowerCase() 
    }

    
}