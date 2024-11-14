import { Menu } from "lucide-react";
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { logOutUser } from "@/store/auth-slice";

function AdminHeader({setOpen}) {

      const dispatch = useDispatch()

      function handleLogout(){
        dispatch(logOutUser());
      }

    return (
    <header className="flex-items-center justify-between px-4 py-3 bg-green-400 border-b">
        <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
            <Menu />
            <span className="sr-only">
                Toggle Menu
            </span>
        </Button>

        <div className="flex flex-1 justify-end">
             <Button onClick={handleLogout} className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium bg-green-800 shadow">
                <LogOut />
                Logout
             </Button>
        </div>
    </header>
);
}

export default AdminHeader;