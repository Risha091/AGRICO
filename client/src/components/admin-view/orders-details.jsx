import { useState } from "react";
import CommonForm from "../common/form";
import { DialogContent } from "../ui/dialog"
import { Label } from "../ui/label"
import { Separator } from "../ui/separator";

const initialFormData={
    status : ''
}
function AdminOrdersDetailsView(){

    const [formData, setformData] = useState(initialFormData)

    function handleUpadteStatus(event){
        event.preventDefault();
    }
    return(
        <DialogContent classname="sm:max-w-[600px]">
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <div className="flex mt-2 items-center justify-between">
                    <p className="font-medium">Order ID</p>
                    <Label>123456</Label>
                    </div>

                    <div className="flex mt-2 items-center justify-between">
                    <p className="font-medium">Order DAte</p>
                    <Label>27/01/25</Label>
                    </div>


                    <div className="flex mt-2 items-center justify-between">
                    <p className="font-medium">Order Status</p>
                    <Label>$1000</Label>
                    </div>

                    <div className="flex mt-2 items-center justify-between">
                    <p className="font-medium">Order ID</p>
                    <Label>In Process</Label>
                    </div>
                </div>

                <Separator/>

                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <div className="font-medium">Order details</div>
                        <ul className="grid gap-3">
                            <li className="flex items-center justify-between">
                                <span>Product One</span>
                                <span>$1000</span>
                            </li>
                        </ul>
                    </div>
                </div>
              
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <div className="font-medium">Shipping Info</div>
                        <div className="grid gap-0.5 text-muted-foreground">
                            <span>Risha Mondal</span>
                            <span>Address</span>
                            <span>City</span>
                            <span>Pincode</span>
                            <span>Phone</span>
                            <span>Notes</span>
                        </div>

                    </div>
                </div>

             <div>
                <CommonForm
                formControls={[
                    {
  label: "Order Status",
  name: "status",
  componentType: "select",
  options: [
    { id: "pending", label: "Pending" },
    { id: "inProcess", label: "In Process" },
    { id: "inShipping", label: "In Shipping" },
    { id: "delivered", label: "Delivered" },
    { id: "rejected", label: "Rejected" },
  ],
},
                ]}
                formData={formData}
                setFormData={setformData}
                buttonText={"Update Order status"}
                onSubmit={handleUpadteStatus}/>
             </div>
            </div>
        </DialogContent>
    )
}
export default AdminOrdersDetailsView;