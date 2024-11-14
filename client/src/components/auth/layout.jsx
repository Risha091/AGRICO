import { Outlet } from "react-router-dom";




function AuthLayout() {
    return (
        <div className="flex min-h-screen w-full bg-green-200">
            

            <div className="h-screen bg-cover bg-no-repeat height: 500px flex flex-auto items-center justify-center bg-opacity-50 bg-[url('https://t3.ftcdn.net/jpg/08/04/22/42/360_F_804224219_QdNW7DlskOWvDzon8xM4LQuxX62bdvdm.jpg')]">
                <Outlet/>
            </div>
        </div>
    )
}

export default AuthLayout;