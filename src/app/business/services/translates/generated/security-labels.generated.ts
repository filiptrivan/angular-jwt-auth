export function getTranslatedLabelSecurity(name: string): string
{
    switch(name) 
    {
        case 'user':
            return $localize`:@@User:User`;
        case 'userEmail':
            return $localize`:@@UserEmail:UserEmail`;
        case 'accessToken':
            return $localize`:@@AccessToken:AccessToken`;
        case 'token':
            return $localize`:@@Token:Token`;
        case 'status':
            return $localize`:@@Status:Status`;
        case 'message':
            return $localize`:@@Message:Message`;
        case 'verificationToken':
            return $localize`:@@VerificationToken:VerificationToken`;
        case 'browser':
            return $localize`:@@Browser:Browser`;
        case 'name':
            return $localize`:@@Name:Name`;
        case 'description':
            return $localize`:@@Description:Description`;
        case 'id':
            return $localize`:@@Id:Id`;
        case 'createdAt':
            return $localize`:@@CreatedAt:CreatedAt`;
        case 'version':
            return $localize`:@@Version:Version`;
        case 'modifiedAt':
            return $localize`:@@ModifiedAt:ModifiedAt`;
        case 'email':
            return $localize`:@@Email:Email`;
        case 'password':
            return $localize`:@@Password:Password`;
        case 'hasLoggedInWithExternalProvider':
            return $localize`:@@HasLoggedInWithExternalProvider:HasLoggedInWithExternalProvider`;
        case 'numberOfFailedAttemptsInARow':
            return $localize`:@@NumberOfFailedAttemptsInARow:NumberOfFailedAttemptsInARow`;
        case 'isVerified':
            return $localize`:@@IsVerified:IsVerified`;
        case 'idToken':
            return $localize`:@@IdToken:IdToken`;
        case 'refreshToken':
            return $localize`:@@RefreshToken:RefreshToken`;
        case 'testColumnForGrid':
            return $localize`:@@TestColumnForGrid:TestColumnForGrid`;
        case 'roles':
            return $localize`:@@Roles:Roles`;
        case 'ipAddress':
            return $localize`:@@IpAddress:IpAddress`;
        case 'tokenString':
            return $localize`:@@TokenString:TokenString`;
        case 'expireAt':
            return $localize`:@@ExpireAt:ExpireAt`;
        default:
            return null;
    }
}

