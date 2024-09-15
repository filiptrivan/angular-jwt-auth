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
        case 'testColumnForGrid':
            return $localize`:@@TestColumnForGrid:TestColumnForGrid`;
        case 'roles':
            return $localize`:@@Roles:Roles`;
        case 'status':
            return $localize`:@@Status:Status`;
        case 'message':
            return $localize`:@@Message:Message`;
        case 'idToken':
            return $localize`:@@IdToken:IdToken`;
        case 'browser':
            return $localize`:@@Browser:Browser`;
        case 'email':
            return $localize`:@@Email:Email`;
        case 'password':
            return $localize`:@@Password:Password`;
        case 'refreshToken':
            return $localize`:@@RefreshToken:RefreshToken`;
        case 'verificationCode':
            return $localize`:@@VerificationCode:VerificationCode`;
        case 'ipAddress':
            return $localize`:@@IpAddress:IpAddress`;
        case 'tokenString':
            return $localize`:@@TokenString:TokenString`;
        case 'expireAt':
            return $localize`:@@ExpireAt:ExpireAt`;
        case 'hasLoggedInWithExternalProvider':
            return $localize`:@@HasLoggedInWithExternalProvider:HasLoggedInWithExternalProvider`;
        case 'numberOfFailedAttemptsInARow':
            return $localize`:@@NumberOfFailedAttemptsInARow:NumberOfFailedAttemptsInARow`;
        case 'isVerified':
            return $localize`:@@IsVerified:IsVerified`;
        case 'version':
            return $localize`:@@Version:Version`;
        case 'id':
            return $localize`:@@Id:Id`;
        case 'createdAt':
            return $localize`:@@CreatedAt:CreatedAt`;
        case 'modifiedAt':
            return $localize`:@@ModifiedAt:ModifiedAt`;
        case 'name':
            return $localize`:@@Name:Name`;
        case 'description':
            return $localize`:@@Description:Description`;
        default:
            return null;
    }
}

