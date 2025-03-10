export type Users = {
    email: string
    name: string
    handle: string
    password: string
}

export type RegisterForm = Pick<Users, 'email' | 'name' | 'handle' > & {
    password: string
    password_confirmation: string
}

