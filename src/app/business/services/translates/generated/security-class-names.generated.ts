export function getTranslatedClassNameSecurity(name: string): string
{
    switch(name) 
    {
        case 'JwtAuthResult':
            return $localize`:@@JwtAuthResult:JwtAuthResult`;
        case 'User':
            return $localize`:@@User:User`;
        case 'RegistrationVerificationResult':
            return $localize`:@@RegistrationVerificationResult:RegistrationVerificationResult`;
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
        case 'VerificationTokenRequest':
            return $localize`:@@VerificationTokenRequest:VerificationTokenRequest`;
        case 'RefreshToken':
            return $localize`:@@RefreshToken:RefreshToken`;
        case 'LoginVerificationResult':
            return $localize`:@@LoginVerificationResult:LoginVerificationResult`;
        case 'LoginVerificationToken':
            return $localize`:@@LoginVerificationToken:LoginVerificationToken`;
        case 'VerificationToken':
            return $localize`:@@VerificationToken:VerificationToken`;
        case 'RegistrationVerificationToken':
            return $localize`:@@RegistrationVerificationToken:RegistrationVerificationToken`;
        case 'Role':
            return $localize`:@@Role:Role`;
        case 'Permission':
            return $localize`:@@Permission:Permission`;
        default:
            return null;
    }
}

