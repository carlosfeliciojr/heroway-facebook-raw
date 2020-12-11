export interface IGithubInitialState {
    loading: boolean,
    error: boolean,
    errorMessage: string,
    user: IUser
}

export interface IProfileSidebar {
    user: IUser
}

export interface IProfileInfo {
    user: IUser
}

export interface ITyping {
    user: IUser
}

export interface IUser {
    login: string,
    avatar_url?: string
}