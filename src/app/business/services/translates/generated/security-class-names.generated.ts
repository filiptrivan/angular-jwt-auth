export function getTranslatedClassNameSecurity(name: string): string
{
    switch(name) 
    {
        case 'JwtAuthResult':
            return $localize`:@@JwtAuthResult:JwtAuthResult`;
        case 'Permission':
            return $localize`:@@Permission:Permission`;
        case 'Login':
            return $localize`:@@Login:Login`;
        case 'Role':
            return $localize`:@@Role:Role`;
        case 'User':
            return $localize`:@@User:User`;
        case 'ExternalProvider':
            return $localize`:@@ExternalProvider:ExternalProvider`;
        case 'RefreshTokenRequest':
            return $localize`:@@RefreshTokenRequest:RefreshTokenRequest`;
        case 'Registration':
            return $localize`:@@Registration:Registration`;
        case 'LoginResult':
            return $localize`:@@LoginResult:LoginResult`;
        case 'UserRole':
            return $localize`:@@UserRole:UserRole`;
        case 'RefreshToken':
            return $localize`:@@RefreshToken:RefreshToken`;
        default:
            return null;
    }
}

