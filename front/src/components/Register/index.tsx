"use client";

// vendor
import {  useState } from "react";
import { useRouter } from "next/navigation";

// types 
import { RegisterErrorProps, RegisterUserProps } from "@/types";

// helpers
import { validateRegisterForm } from "@/helpers/formValidation";
import { HiMail, HiLockClosed, HiUser, HiPhone, HiLocationMarker } from "react-icons/hi";
import { register } from "@/helpers/auth.helper";

// components
import { Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";


export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterUserProps>({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });
  const [errors, setErrors] = useState<RegisterErrorProps>({});
  const [agree, setAgree] = useState(false);    

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = validateRegisterForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }
    if (!agree) {
      alert("Please agree to the terms and conditions");
      return;
    }


    // Call your API here
    try {
      await register(formData);
      alert("User registered")
      router.push("/login");

    } catch (error: any) {
      alert(error.message);
    }
  };
  
  return (
    <form
      className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 my-9"
      onSubmit={handleSubmit}
    >
      {Object.keys(formData).map((field) => (
        <div key={field} className="max-w-md mb-2">
          <div className="mb-2 block">
            <Label
              htmlFor={field}
              value={field.charAt(0).toUpperCase() + field.slice(1)}
              className="text-sm font-bold"
            />
          </div>
          <TextInput
            id={field}
            type={field}
            name={field}
            icon={field === "name" ? HiUser : field === "email" ? HiMail : field === "password" ? HiLockClosed : field === "address" ? HiLocationMarker : HiPhone}
            placeholder={field === "name" ? "John Doe" : field === "email" ? "name@flowbite.com" : field === "password" ? "********" : field === "address" ? "Street, City, Country" : "11 23908766"}
            value={formData[field]}
            onChange={handleOnChange}
            shadow
            required
          />
          {errors[field] && <p className="text-red-500 text-xs italic">{errors[field]}</p>}
        </div>
      ))}
      <div className="flex items-center gap-2 my-5">
        <Checkbox id="agree" checked={agree} onChange={() => setAgree(!agree)}/>
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
          <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
            terms and conditions
          </Link>
        </Label>
      </div>
      <div className="flex justify-end">
        <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 ease-in-out">
          Register
        </button>
      </div>
    </form>
  );
}
