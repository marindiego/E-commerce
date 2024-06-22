const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function getOrders(token: string) {
    try {
        const response = await fetch(`${apiUrl}/users/orders`, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                'Authorization': token,
                'ngrok-skip-browser-warning':  'true',
            }
        })
        const orders = await response.json()
        return orders;
        
    } catch (error: any) {
        throw new Error(error);
    }
}
export async function createOrder(products: number[], token: string) {
    try {
        const response = await fetch(`${apiUrl}/orders`, {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning':  'true',
                'Authorization': token
            },
            body: JSON.stringify({ products })
        })
        const order = await response.json()
        return order;

    } catch (error: any) {
        throw new Error(error);
    }
}