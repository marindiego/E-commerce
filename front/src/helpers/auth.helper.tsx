import { IProduct, LoginProps, RegisterUserProps } from "@/types";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function register(userData: RegisterUserProps) {
  try {
    const response = await fetch(`${apiUrl}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'ngrok-skip-browser-warning':  'true',
      },
      body: JSON.stringify(userData) /// Convert the object to a JSON string before sending it to the server   
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error status: ${response.status} - ${errorData.message}`);
    }

    // Handle successful response
    const data = await response.json(); // Return the JSON data from the server as a JavaScript object
    return data;
  }
  catch (error: any) {
    throw new Error(error.message);
  }
}
export async function login(userData: LoginProps) {
  try {
    const response = await fetch(`${apiUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'ngrok-skip-browser-warning':  'true',
      },
      body: JSON.stringify(userData) 
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error status: ${response.status} - ${errorData.message}`);
    }

    // Handle successful response
    const data = await response.json();
    return data;
  }
  catch (error: any) {
    throw new Error(error.message);
  }
} 