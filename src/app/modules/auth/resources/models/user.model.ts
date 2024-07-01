export interface AuthUser {
    first_name: string;
    last_name: string;
    role: Role;
    token: string;
}

export interface UserLogin {
    email: string;
    password: string;
}

export enum Role {
    User = 'User',
    Admin = 'Admin'
}