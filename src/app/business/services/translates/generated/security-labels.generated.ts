export function getTranslatedLabelSecurity(name: string): string
{
    switch(name) 
    {
        case 'accessToken':
            return $localize`:@@AccessToken:AccessToken`;
        case 'refreshToken':
            return $localize`:@@RefreshToken:RefreshToken`;
        case 'provider':
            return $localize`:@@Provider:Provider`;
        case 'idToken':
            return $localize`:@@IdToken:IdToken`;
        case 'password':
            return $localize`:@@Password:Password`;
        case 'testColumnForGrid':
            return $localize`:@@TestColumnForGrid:TestColumnForGrid`;
        case 'roles':
            return $localize`:@@Roles:Roles`;
        case 'email':
            return $localize`:@@Email:Email`;
        case 'passwordConfirmation':
            return $localize`:@@PasswordConfirmation:PasswordConfirmation`;
        case 'user':
            return $localize`:@@User:User`;
        case 'role':
            return $localize`:@@Role:Role`;
        case 'ipAddress':
            return $localize`:@@IpAddress:IpAddress`;
        case 'tokenString':
            return $localize`:@@TokenString:TokenString`;
        case 'expireAt':
            return $localize`:@@ExpireAt:ExpireAt`;
        case 'isSuccessful':
            return $localize`:@@IsSuccessful:IsSuccessful`;
        case 'isExternal':
            return $localize`:@@IsExternal:IsExternal`;
        case 'id':
            return $localize`:@@Id:Id`;
        case 'createdAt':
            return $localize`:@@CreatedAt:CreatedAt`;
        case 'name':
            return $localize`:@@Name:Name`;
        case 'description':
            return $localize`:@@Description:Description`;
        case 'version':
            return $localize`:@@Version:Version`;
        case 'modifiedAt':
            return $localize`:@@ModifiedAt:ModifiedAt`;
        case 'isDisabled':
            return $localize`:@@IsDisabled:IsDisabled`;
        case 'hasLoggedInWithExternalProvider':
            return $localize`:@@HasLoggedInWithExternalProvider:HasLoggedInWithExternalProvider`;
        default:
            return null;
    }
}

