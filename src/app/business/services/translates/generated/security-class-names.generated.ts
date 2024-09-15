export function getTranslatedClassNameSecurity(name: string): string
{
    switch(name) 
    {
        case 'User':
            return $localize`:@@User:User`;
        case 'ExternalProvider':
            return $localize`:@@ExternalProvider:ExternalProvider`;
        case 'Permission':
            return $localize`:@@Permission:Permission`;
        case 'Role':
            return $localize`:@@Role:Role`;
        case 'JwtAuthResult':
            return $localize`:@@JwtAuthResult:JwtAuthResult`;
        case 'Login':
            return $localize`:@@Login:Login`;
        case 'LoginResult':
            return $localize`:@@LoginResult:LoginResult`;
        case 'LoginVerificationResult':
            return $localize`:@@LoginVerificationResult:LoginVerificationResult`;
        case 'LoginVerificationToken':
            return $localize`:@@LoginVerificationToken:LoginVerificationToken`;
        case 'RefreshToken':
            return $localize`:@@RefreshToken:RefreshToken`;
        case 'RefreshTokenRequest':
            return $localize`:@@RefreshTokenRequest:RefreshTokenRequest`;
        case 'Registration':
            return $localize`:@@Registration:Registration`;
        case 'RegistrationVerificationResult':
            return $localize`:@@RegistrationVerificationResult:RegistrationVerificationResult`;
        case 'RegistrationVerificationToken':
            return $localize`:@@RegistrationVerificationToken:RegistrationVerificationToken`;
        case 'VerificationTokenRequest':
            return $localize`:@@VerificationTokenRequest:VerificationTokenRequest`;
        default:
            return null;
    }
}

