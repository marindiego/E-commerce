
import Link from 'next/link';
import Logo from "@/components/Logo"
import ProfileNav from '../ProfileNav';
import { Dropdown, DropdownItem } from "flowbite-react";



const Navbar = () => {

  return (
    <nav className="w-full bg-primary h-28 sticky top-0 z-30">

      {/*Navbar top*/}
      <div className='w-full  md:h-20 px-3 flex justify-between items-center '>

        {/*Logo*/}
        <div className='h-full pt-2 hidden md:block'>
          <Logo titleColor='slate' titleShade='100' esloganShade="200" esloganColor='gray' logoColor='bg-white' />
        </div>

        {/*Search bar*/}
        <form className='w-3/5 md:w-1/3 max-w-md h-2/4'>
          <div className='flex items-center justify-start gap-2 size-full'>
            <input className='h-full w-4/5 text-gray-900 p-2' type='search' aria-label='search bar' placeholder='Search products...' />
            <div className="h-full">
              <button type='submit' className="w-auto py-2 px-3  bg-accentColor2 text-slate-700 h-full font-bold">Search</button>
            </div>
          </div>
        </form>

        {/*Cart and profile icons*/}
        <ProfileNav />
      </div>

      {/*Nav bar bottom*/}
      <div className='w-full p-2 bg-sky-950'>
        <div className='w-full flex justify-between items-center'>
          {/*Links*/}
          <ul className='flex justify-center gap-x-3 items-center font-bold'>
            <li className="flex items-center">
              <div className="relative w-5 h-5 mr-1">
                <img className="size-full absolute" src="/icons/home-white.svg" alt="home icon" />
              </div>
              <Link href="/">Home</Link>
            </li>
            <li className="flex items-center">
              <div className="relative w-5 h-5 mr-1">
                <img className="size-full absolute" src="/icons/categories.svg" alt="categories icon" />
              </div>
              <Dropdown label="Products" inline>
                <DropdownItem className="hover:!bg-slate-300" as={Link} href="/products">
                  All
                </DropdownItem>
                <DropdownItem className="hover:!bg-slate-300">IPhones</DropdownItem>
                <DropdownItem className="hover:!bg-slate-300">Laptops</DropdownItem>
                <DropdownItem className="hover:!bg-slate-300">Tablets</DropdownItem>
                <DropdownItem className="hover:!bg-slate-300">Accessories</DropdownItem>
              </Dropdown>
            </li>
            <li className="flex items-center -ml-1">
              <div className="relative w-5 h-5 mr-1">
                <img className="size-full absolute" src="/icons/contact-us.svg" alt="contact us icon" />
              </div>
              <Link href="/">Contact us</Link>
            </li>
          </ul>

          {/*Switch between light and dark mode*/}
          <div className='flex justify-center items-center'>
            <div className='relative w-5 h-5'>
              <img className="size-full absolute" src="/icons/light-mode.svg" alt="light mode icon" />
            </div>
            <div className="relative w-10 h-5">
              <label htmlFor="toggle">
                <span className="sr-only">Toggle dark and light mode</span>
                <input name="toggle" id="toggle" type="checkbox" className="opacity-0 w-0 h-0 peer" />
                <span className="absolute inset-0 cursor-pointer bg-blue-200 rounded-full transition-all duration-400 ease-out peer-checked:bg-blue-700 peer-focus:ring-1 peer-focus:ring-blue-700"></span>
                <span className="absolute inset-y-0 left-0 w-5 h-5 bg-white rounded-full shadow-lg transition-all duration-400 ease-out transform peer-checked:translate-x-6"></span>
              </label>
            </div>
            <div className='relative w-5 h-5'>
              <img className="size-full absolute" src="/icons/dark-mode.svg" alt="dark mode icon" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
