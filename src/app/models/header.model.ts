export interface Header{
    jobTitle?: string;
    firstName?: string;
    lastName?: string;
    country?: string;
    city?: string;
    postal?: string;
    phone?: string;
    email?: string;
    avatar?: Avatar;
}

export interface Avatar {
   localUrl: string;
   remoteUrl: string;
}