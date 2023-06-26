import Link from "next/link";
import MyToggle from "./switch";
export default function NavBar() {
  return (
    <div className='navbar bg-base-100 sticky top-0 z-40 border-b border-accent '>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-md w-52'
          >
            <li>
              <Link href='/'> Nav 1</Link>
            </li>
            <li>
              <Link href='/'> Nav 2</Link>
            </li>
            <li>
              <Link href='/'> Nav 3</Link>
            </li>
          </ul>
        </div>
        {/* <a className='btn btn-ghost normal-case text-xl'></a> */}
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal hover:text-secondary px-0 space-x-11'>
          <li>
            <Link href='/'> Nav 1</Link>
          </li>
          <li>
            <Link href='/'> Nav 2</Link>
          </li>
          <li>
            <Link href='/'> Nav 3</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end pr-2'>
        <MyToggle />
      </div>
    </div>
  );
}
