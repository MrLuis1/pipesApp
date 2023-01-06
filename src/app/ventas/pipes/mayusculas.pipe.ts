import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'mayus'
})

export class MayusculasPipe implements PipeTransform{
    transform(valor : string, mayusActivo: boolean = true): string {
        
        return (mayusActivo) ? valor.toUpperCase() : valor.toLocaleLowerCase()
        
    }
}