export interface User {
    id: string;
    email: string;
    authToken: string;
    firstName: string;
    lastName: string;
    userType: UserType
}

export enum UserType {
    OWNER = 'OWNER',
    ADMIN = 'ADMIN',
    REGULAR = 'REGULER',
    GUEST = 'GUEST'
}