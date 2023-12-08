export interface IProduct {
    id?: number
    name: string
    price: number
    image: string
    desc?: string
}
export interface IUser {
    id?: number
    name?: string
    email: string
    password: string
    confirmPassword?: string
}
