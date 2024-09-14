export function getTranslatedClassNameSecurity(name: string): string
{
    switch(name) 
    {
        case 'JwtAuthResult':
            return $localize`:@@JwtAuthResult:JwtAuthResult`;
        case 'RegistrationResult':
            return $localize`:@@RegistrationResult:RegistrationResult`;
        case 'VerificationTokenRequest':
            return $localize`:@@VerificationTokenRequest:VerificationTokenRequest`;
        case 'Permission':
            return $localize`:@@Permission:Permission`;
        case 'Role':
            return $localize`:@@Role:Role`;
        case 'User':
            return $localize`:@@User:User`;
        case 'ExternalProvider':
            return $localize`:@@ExternalProvider:ExternalProvider`;
        case 'Login':
            return $localize`:@@Login:Login`;
        case 'RefreshTokenRequest':
            return $localize`:@@RefreshTokenRequest:RefreshTokenRequest`;
        case 'Registration':
            return $localize`:@@Registration:Registration`;
        case 'LoginResult':
            return $localize`:@@LoginResult:LoginResult`;
        case 'RefreshToken':
            return $localize`:@@RefreshToken:RefreshToken`;
        default:
            return null;
    }
}

