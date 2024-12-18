import { Button } from '@/components/ui/button';
import bannerOne from '../../assets/homePage10.avif';
import bannerTwo from '../../assets/homePage8.avif';
import bannerThree from '../../assets/homePage9.avif';
import bannerFour from '../../assets/homePage11.avif';
import { CarrotIcon, ChevronLeftIcon, ChevronRightIcon, CitrusIcon, Flower2Icon, SproutIcon, TractorIcon, VeganIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllFilteredProducts, fetchProductDetails } from '@/store/shop/products-slice';
import ShoppingProductTile from '@/components/shopping-view/product-tile';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import ProductDetailsDialog from '@/components/shopping-view/product-details';

const categoriesWithIcon =  [
    { id: "fruit", label: "Fruit", icon: CitrusIcon},
    { id: "flower", label: "Flower" , icon: Flower2Icon},
    { id: "vegetables", label: "Vegetables" , icon: CarrotIcon},
    { id: "seeds", label: "Seeds" , icon: VeganIcon},
    { id: "PlantProtectors", label: "PlantProtectors", icon: SproutIcon },
    { id: "GrowthPromoters", label: "GrowthPromoters" , icon: TractorIcon},
  ];

function ShoppingHome () {

   const [currentSlide, setCurrentSlide] = useState(0);
   const {productList, productDetails} = useSelector(state=> state.shopProducts)
   const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

   const {user} = useSelector(state=> state.auth)

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const {toast} = useToast(); 

    const slides= [bannerOne, bannerTwo, bannerThree,bannerFour]

    function handleNavigateToListingPage(getCurrentItem, section){
        sessionStorage.removeItem('filters');
        const currentFilter = {
            [section] : [getCurrentItem.id]
        }

        sessionStorage.setItem('filters', JSON.stringify(currentFilter));
        navigate(`/shop/listing`);
    }

    useEffect(()=>{
        const timer= setInterval(()=>{
            setCurrentSlide((prevSlide) =>(prevSlide+1)% slides.length);
        },2000);
        return ()=> clearInterval(timer);
    },[]);

    function handleGetProductDetails(getCurrentProductId) {
        dispatch(fetchProductDetails(getCurrentProductId));
    }

    function handleAddtoCart(getCurrentProductId) {
        console.log(getCurrentProductId);
        dispatch(
          addToCart({
            userId:user?.id,
            productId: getCurrentProductId,
            quantity: 1,
          })
        ).then(data=>{
          console.log(data);
          if(data?.payload?.success){
            dispatch(fetchCartItems(user?.id))
            toast({
             title:'Product is added  to cart',
            })
          }
        })
      }

    useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
    }, [productDetails]);
    useEffect(()=>{
    dispatch(fetchAllFilteredProducts({ filterParams : {}, sortParams: 'price-lowtohigh'}))
    },[dispatch])

    console.log(productList, 'productList')


    
    return (
        <div className="flex flex-col min-h-screen">
            <div className='relative w-full h-[600px] overflow-hidden'>
                {slides.map((slide, index) =>(
                    <img
                        src={slide}
                        key= {index}
                       className={`${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
              />
            ))
        }
                <Button variant="outline" 
                size="icon" 
               onClick = {()=>
                setCurrentSlide(
                    (prevSlide)=> (prevSlide -1 + slides.length) % slides.length
                )
            }
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80">
                    <ChevronLeftIcon className="w-4 h-4"/>
                   
                </Button>


                <Button variant="outline" size="icon"
               onClick = {()=>
                setCurrentSlide(
                    (prevSlide)=> (prevSlide + 1) % slides.length
                )
            }
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80">
                    <ChevronRightIcon className="w-4 h-4"/>
                   
                </Button>
            </div>
            <section className='py-12 bg-gray-50'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-8'>
                        Shop by Category
                    </h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                        {
                            categoriesWithIcon.map((categoryItem)=> 
                            (
                            <Card 
                            onClick={
                                ()=>handleNavigateToListingPage(categoryItem, 'category')

                            }
                            className="cursor-pointer hover:shadow-lg transition-shadow">
                                <CardContent className="flex flex-col items-center  justify-center p-6">
                                    <categoryItem.icon className='w-12 h-12 mb-4 text-primary'/>
                                    <span className='font-bold'>{categoryItem.label}</span>
                                </CardContent>
                            </Card>))
                        }
                    </div>
                </div>
            </section>


            <section className='py-12'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-8'>
                        Featured Products
                    </h2>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {
                            productList && productList.length > 0 ?
                            productList.map(productItem=> <ShoppingProductTile
                            handleGetProductDetails={handleGetProductDetails}
                            handleAddtoCart={handleAddtoCart}
                            product={productItem}/>
                                
                            ):null
                        }
                    </div>
                </div>
            </section>
            <ProductDetailsDialog
                open={openDetailsDialog}
                setOpen={setOpenDetailsDialog}
                productDetails={productDetails}
           />
        </div>
    );
}
export default ShoppingHome;