export function getTranslatedLabel(name:string): string {
    // FT: ne interesuje nas koji je DTO i koji property u pitanju svejedno cemo uvek isti prevod da koristimo za isti @@
    // samo mozemo da obratimo paznju u generisanju da ne izgenerisemo isti 2 puta (npr imamo 2 DTO-a sa CreatedAt propertijima)
    switch(name){
        case 'email':
            return $localize`:@@Email:Email`;
        case 'username':
            return $localize`:@@Username:Username`;
        case 'id':
            return $localize`:@@Id:Id`;
        case 'isDisabled':
            return $localize`:@@IsDisabled:Is Disabled`;
        case 'createdAt':
            return $localize`:@@CreatedAt:Created At`;
        case 'modifiedAt':
            return $localize`:@@ModifiedAt:Modified At`;
        case 'password':
            return $localize`:@@Password:Password`;
        default:
            return name;
    }
}