export interface IUser {
    _id?: string
    email: string
    password: string
    firstName?: string
    lastName?: string
    phone?: string
    accountNo?: string
    balance?: number
    createdAt?: Date
    updatedAt?: Date
  }
  export interface CustomRequest {
    details: IUser
    file: object
    params: object
    query: object
    path: object
  }
  