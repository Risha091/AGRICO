import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
//import { Sheet, SheetContent, SheetHeader, SheetTitle} from "@/components/ui/sheet"
import { Fragment, useEffect, useState } from "react";
import ProductImageUpload from "@/components/admin-view/image-upload";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct, deleteProduct, editProduct, fetchAllProducts } from "@/store/admin/product-slice";
import { useToast } from "@/hooks/use-toast";
import AdminProductTile from "@/components/admin-view/product-tile";
import { data } from "autoprefixer";


const initialFormData = {
        image: null,
        title: '',
        description : '',
        category: '',
        price: '',
        totalstock: '',
    }


function AdminProducts() {

    const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);

     const [formData,setFormData] = useState(initialFormData)
    const [imageFile, setImageFile] = useState(null);
    const [uploadImageUrl, setUploadImageUrl] = useState('')
    const [imageLoadingState, setImageLoadingState] = useState(false);
    const [currentEditedId, setcurrentEditedId] = useState(null)
    const {productList} = useSelector(state=>state.adminProducts)
 const dispatch = useDispatch()
 const {toast} = useToast()


function onSubmit(event){
      event.preventDefault();

        currentEditedId !== null ?
        dispatch(editProduct({
            id: currentEditedId ,formData
})).then((data)=>
{
    console.log(data, "edit");

    if(data?.payload?.success){
        dispatch(fetchAllProducts());
        setFormData(initialFormData);
        setOpenCreateProductsDialog(false);
        setcurrentEditedId(null);
    }
}) : 

      dispatch(addNewProduct({
        ...formData,
        image : uploadImageUrl
      }))
      .then((data)=> {
          console.log(data);
          if(data?.payload?.success){
            dispatch(fetchAllProducts())
            setOpenCreateProductsDialog(false)
            setImageFile(null);
            setFormData(initialFormData)
            toast({
                title: "Product added successfully"
            })
          }
      });
}

function handleDelete(getCurrentProductId){
    console.log(getCurrentProductId);
    dispatch(deleteProduct(getCurrentProductId)).then(data=> {
        if(data?.payload?.success){
            dispatch(fetchAllProducts());
        }
    })
    
}

 function isFormValid(){
       return Object.keys(formData).map((key)=> formData[key] !== '')
       .every((item)=> item);
 }


useEffect(()=> {
    dispatch(fetchAllProducts())
},[dispatch])

console.log(formData, "productList");

    return (
       <Fragment>
        <div className="mb-5 w-full flex justify-end">
             <Button onClick={()=> setOpenCreateProductsDialog(true)}>
                Add New Product
             </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
      {
        productList && productList.length > 0 ?
        productList.map(productItem=> 
        <AdminProductTile setFormData={setFormData} 
        setOpenCreateProductsDialog= {setOpenCreateProductsDialog} 
        setcurrentEditedId={setcurrentEditedId} 
        product={productItem} 
        handleDelete={handleDelete}/>
    ) : null
      }
        </div>

        <Sheet 
        open = {openCreateProductsDialog} 
        onOpenChange={()=> {
            setOpenCreateProductsDialog(false);
            setcurrentEditedId(null);
            setFormData(initialFormData);
        }

        }>

      <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>
                {
                    currentEditedId !== null ?
                    'Edit Product' : 'Add New product'
                }
            </SheetTitle>
          </SheetHeader>

          <ProductImageUpload 
          imageFile={imageFile} 
          setImageFile={setImageFile}
           uploadImageUrl={uploadImageUrl} 
           setUploadImageUrl={setUploadImageUrl}
           setImageLoadingState={setImageLoadingState}
           imageLoadingState={imageLoadingState}
           currentEditedId={currentEditedId}
           isEditMode={currentEditedId !== null}
            />

          <div className="py-6">
                <CommonForm 
                onSubmit={onSubmit} 
                formData={formData}
                setFormData={setFormData} 
                buttonText={currentEditedId !== null ? 'Edit' : 'Add'}
                formControls={addProductFormElements}
                isBtnDisabled={!isFormValid()}
                />
          </div>
      </SheetContent>

        </Sheet>
       </Fragment>
    );
}

export default AdminProducts;