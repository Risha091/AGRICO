import { Button } from '@/components/ui/button';
import bannerOne from '../../assets/homePage10.avif';
import bannerTwo from '../../assets/homePage8.avif';
import bannerThree from '../../assets/homePage9.avif';
import bannerFour from '../../assets/homePage11.avif';
import { CarrotIcon, ChevronLeftIcon, ChevronRightIcon, CitrusIcon, Flower2Icon, SproutIcon, TractorIcon, VeganIcon } from 'lucide-react';
import { Card, card,CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';


function ShoppingHome () {

    const [currentSlide, setCurrentSlide]= useState(0);

    const slides= [bannerOne, bannerTwo, bannerThree,bannerFour]

    useEffect(()=>{
        const timer= setInterval(()=>{
            setCurrentSlide(prevSlide=>(prevSlide+1)%slides.length);
        },5000);
        return ()=> clearInterval(timer);
    },[]);

    const categoriesWithIcon=  [
        { id: "fruit", label: "Fruit" ,icon: CitrusIcon
        },
        { id: "flower", label: "Flower" ,icon: Flower2Icon},
        { id: "vegetables", label: "Vegetables" ,icon: CarrotIcon},
        { id: "seeds", label: "Seeds" ,icon: VeganIcon},
        { id: "Plant-Protectors", label: "Plant-Protectors",icon: SproutIcon },
        { id: "Growth-Promoters", label: "Growth-Promoters" ,icon: TractorIcon},
      ]
    return (
        <div className="flex flex-col min-h-screen">
            <div className='relative w-full h-[600px] overflow-hidden'>
                {slides.map((slide, index) =>(
                    <img
                        src={slide}
                        key= {index}
                        className={`${index === currentSlide ? "opacity-100": "opacity-0"}absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
                    />
                ))}
                <Button variant="outline" size="icon" 
                onClick={() =>setCurrentSlide((prevSlide)=>(prevSlide-1+ slides.length)%slides.length)}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80">
                    <ChevronLeftIcon className="w-4 h-4"/>
                   
                </Button>
                <Button variant="outline" size="icon"
                onClick={() =>setCurrentSlide((prevSlide)=>(prevSlide+1)%slides.length)} 
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
                            categoriesWithIcon.map(categoryItem=> <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                                <CardContent className="flex flex-col items-center  justify-center p-6">
                                    <categoryItem.icon className='w-12 h-12 mb-4 text-primary'/>
                                    <span className='font-bold'>{categoryItem.level}</span>
                                </CardContent>
                            </Card>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}
export default ShoppingHome;