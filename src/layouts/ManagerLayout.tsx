import AdminHeader from "@/components/AdminHeader"
import AdminSidebar from "@/components/AdminSidebar"
import { Outlet } from 'react-router-dom'


const ManagerLayout = () => {
  return (
    <>
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white  text-black pad  ">
            <AdminSidebar/>
            <AdminHeader/>
            <div className="h-full ml-14 mt-14 mb-10 md:ml-64 p-10">
              <Outlet/>
            </div>
            
        </div>
    </>
  )
}

export default ManagerLayout