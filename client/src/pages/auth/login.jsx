import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { loginUser } from "@/store/auth-slice";
import { data } from "autoprefixer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const initialState ={
    
    email: '',
    password: '',
};

function AuthLogin() 
{

    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const {toast} = useToast()

    function onSubmit(event){
           event.preventDefault();

           dispatch(loginUser(formData)).then((data) => {
            if(data?.payload?.success){
               toast({
                title : data?.payload?.message,
               });
            }else{
                toast({
                title : data?.payload?.message,
                variant: "destructive"
               });
            }
           });
           console.log(formData);
    }
    return (
    <div className="bg-opacity-60 backdrop-blur-lg px-8 py-10 rounded-md border">
        <div className="text-center  bg-opacity-60 backdrop-blur-sm px-8 py-10 rounded-md border">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
                Sign in To Your Account!!
                </h1>

            <p className="mt-2"> 
                Don't Have an Account ??
               <Link 
               className="font-medium ml-2 text-primary hover:underline" 
               to='/auth/register'
               >
                Register
                </Link>
            </p>
        </div>
        <CommonForm
        formControls={loginFormControls}
        buttonText={'Sign In'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        />
    </div>
    );
}

export default AuthLogin;