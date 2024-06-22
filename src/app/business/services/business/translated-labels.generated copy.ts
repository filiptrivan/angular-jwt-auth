export function getTranslatedClassName(name:string): string {
    // FT: ne interesuje nas koji je DTO i koji property u pitanju svejedno cemo uvek isti prevod da koristimo za isti @@
    // samo mozemo da obratimo paznju u generisanju da ne izgenerisemo isti 2 puta (npr imamo 2 DTO-a sa CreatedAt propertijima)
    switch(name){
        case 'User':
            return $localize`:@@User:User`;
        default:
            return name;
    }
}