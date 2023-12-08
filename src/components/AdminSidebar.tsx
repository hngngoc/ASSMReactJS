import { Link } from "react-router-dom"

const AdminSidebar = () => {
  return (
    <>
<div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-gray-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
    <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
      <ul className="flex flex-col py-4 space-y-1">
        <li className="px-5 hidden md:block">
          <div className="flex flex-row items-center h-8">
            <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Main</div>
          </div>
        </li>
        <li>
          <Link to={"/admin"} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-500 dark:hover:border-gray-800 pr-6">
            <span className="inline-flex justify-center items-center ml-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to={"/admin/products"} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-500 dark:hover:border-gray-800 pr-6">
            <span className="inline-flex justify-center items-center ml-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Products</span>
            
          </Link>
        </li>
        <li>
          <Link to={"/admin/users"} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-500 dark:hover:border-gray-800 pr-6">
          <span className="inline-flex justify-center items-center ml-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Users</span>
          </Link>
        </li>
        <li className="px-5 hidden md:block">
          <div className="flex flex-row items-center mt-5 h-8">
            <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Settings</div>
          </div>
        </li>
        
        <li>
          <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-500 dark:hover:border-gray-800 pr-6">
            <span className="inline-flex justify-center items-center ml-4">
            <span className="inline-flex mr-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          </span>
              
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Log out</span>
          </a>
        </li>
      </ul>
      <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2023</p>
    </div>
  </div>
    </>
  )
}

export default AdminSidebar