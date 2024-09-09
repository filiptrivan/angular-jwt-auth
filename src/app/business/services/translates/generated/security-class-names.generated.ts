export function getTranslatedClassNameSecurity(name: string): string
{
    switch(name) 
    {
        case 'JwtAuthResult':
            return $localize`:@@JwtAuthResult:JwtAuthResult`;
        case 'Permission':
            return $localize`:@@Permission:Permission`;
        case 'ExternalProvider':
            return $localize`:@@ExternalProvider:ExternalProvider`;
        case 'Login':
            return $localize`:@@Login:Login`;
        case 'RefreshTokenRequest':
            return $localize`:@@RefreshTokenRequest:RefreshTokenRequest`;
        case 'User':
            return $localize`:@@User:User`;
        case 'Registration':
            return $localize`:@@Registration:Registration`;
        case 'Role':
            return $localize`:@@Role:Role`;
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

