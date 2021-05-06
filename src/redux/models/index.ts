export interface UserModel{
    firstName: string;
    lastName: string;
    contactNumber: string;
    token: string,
    verified: boolean
}
 
export interface UserState{
    user: UserModel;
    error: string | undefined;
}

