export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId?: number;
}
export interface ICategory {
    id: number;
    name: string;
}

export interface LoginProps {
    email: string;
    password: string;
}
export interface LoginErrorProps {
    email?: string;
    password?: string;
}

export interface RegisterUserProps {
    [key: string]: string;
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
}
export interface RegisterErrorProps {
    name?: string;
    email?: string;
    password?: string;
    address?: string;
    phone?: string;
    [key: string]: string | undefined;
}
export interface IUserSession {
    token: string;
    userData: {
        id: number;
        name: string;
        email: string;
        address: string;
        phone: string;
        role: string;
        orders: []
    }
}
export interface IUserData {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: string;
    orders: []
}
export interface IOrder {
    id: number;
    status: string;
    date: Date; 
    products: IProduct[];
}
export interface AuthContextProps {
    userData: IUserSession | null;
    setUserData: (userData: IUserSession | null) => void;
}
export interface AuthProviderProps {
    children: React.ReactNode;
}
export interface CartProductProps extends IProduct {
    handleRemoveProduct: (productId: number) => void;
}