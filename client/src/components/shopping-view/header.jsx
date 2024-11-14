import { House, LogOut, Menu, ShoppingCart, UserCog} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { SheetContent, SheetTrigger, Sheet} from "../ui/sheet";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";
//import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "../ui/dropdown-menu";
import { logOutUser } from "@/store/auth-slice";


function MenuItems(){
    return(
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
        {
            shoppingViewHeaderMenuItems.map((menuItem)=> (<Link className="text-lg" 
                key={menuItem.id} 
                to={menuItem.path}>
                    {menuItem.label}
                    </Link>
            ))
        }
    </nav>
    );
}

function HeaderRightContent() {
    

    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    function handleLogout(){
        dispatch(logOutUser());    
    }

    return(
      <div className="flex lg:items-center lg:flex-row flex-col gap-4">
          
          <Button variant="outline" size="icon">
            <ShoppingCart className="w-6 h-6" />
            <span className="sr-only">User Cart</span>
          </Button>
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                     <Avatar className="bg-black">
                        <AvatarFallback className="bg-black text-white font-extrabold">
                            {user?.userName[0].toUpperCase()}
                        </AvatarFallback>
                     </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent side="right" className="w-56">
                    <DropdownMenuLabel>
                        Logged In as {user?.userName}
                    </DropdownMenuLabel>

                    <DropdownMenuSeparator/>

                    <DropdownMenuItem onClick={()=>navigate('/shop/account')}>
                        <UserCog className="mr-2 h-4 w-4" /> Account
                    </DropdownMenuItem>

              <DropdownMenuSeparator/>

                    <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        LogOut
                    </DropdownMenuItem>


                </DropdownMenuContent>
             </DropdownMenu>
      </div>
    )
}
function ShoppingHeader() {

    const {isAuthenticated} = useSelector((state) => state.auth)
    //console.log(user, "useruseruser");


    return(
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="flex h-16 items-center justify-between px-4 md:px-6 bg-green-500">
                <Link to="/shop/home" className="flex items-center gap-2">
                <House className="h-6 w-6"/>
                <span className="font-bold">AGRICO</span>
                </Link>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="lg:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle heder menu</span>
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="left" className="w-full max-w-xs" >
                        <MenuItems/>

                        <HeaderRightContent/>
                    </SheetContent>
                </Sheet>

                <div className="hidden lg:block">
                     <MenuItems/>
                </div>
                <div className="hidden lg:block">
                        <HeaderRightContent/>
                    </div> 
                
            </div>
        </header>
    )
}

export default ShoppingHeader;