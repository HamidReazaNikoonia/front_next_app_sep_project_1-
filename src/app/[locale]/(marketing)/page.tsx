// import { Sponsors } from '@/components/Sponsors';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import MainSwiper from '@/components/swiper/MainSwiper';

import ServiceCardItem from '@/components/Card/ServiceCardItem';


// sections
import CoursesCardSection from '../../../sections/home/CoursesCardSection';
import ProductCardSection from '../../../sections/home/ProductCardSection';
import ThumbsSwiperImageGallery from '../../../sections/home/ThumbsSwiperImageGallery';
import MultimediaTabsPortfolio from '../../../sections/home/MultimediaTabsPortfolio';
import FAQSection from '../../../sections/home/FAQ';
import HeroSection from '@/sections/home/HeroSection'
import HomeCardSection from '@/sections/home/HomeCardSection';
import ProductCategoryCards from '@/sections/home/ProductCategoryCards';



type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return (
    <div className="overflow-hidden ">

      {/* Main Slider In md Screen */}
      {/* <div className="hidden md:flex">
        <MainSwiper />
      </div> */}

      {/* Hero Section */}
      <div className='w-full'>
        <HeroSection />
      </div>



      {/* Card Section */}
      <div className='w-full' style={{backgroundColor: "#FFDEE9",backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)"}}>
        <HomeCardSection />
      </div>



      {/* Product Category Section */}
      <div className='w-full'>
        <ProductCategoryCards />
      </div>

      {/* Service Card Item */}
      {/* <div className="container mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <ServiceCardItem title="پژوهشکده هوش مصنوعی" subtitle="دنیایی از تکنولوژی های جدید"
            backgroundImage="https://aisun-ci.ir/wp-content/uploads/2024/08/photography5.jpg"
            buttonText="ورود به این بخش" buttonLink="/" />

          <ServiceCardItem title="پژوهشکده هوش مصنوعی" subtitle="دنیایی از تکنولوژی های جدید"
            backgroundImage="https://aisun-ci.ir/wp-content/uploads/2024/08/photography5.jpg"
            buttonText="ورود به این بخش" buttonLink="/" />

          <ServiceCardItem title="پژوهشکده هوش مصنوعی" subtitle="دنیایی از تکنولوژی های جدید"
            backgroundImage="https://aisun-ci.ir/wp-content/uploads/2024/08/photography5.jpg"
            buttonText="ورود به این بخش" buttonLink="/" />


          <ServiceCardItem title="پژوهشکده هوش مصنوعی" subtitle="دنیایی از تکنولوژی های جدید"
            backgroundImage="https://aisun-ci.ir/wp-content/uploads/2024/08/photography5.jpg"
            buttonText="ورود به این بخش" buttonLink="/" />

        </div>
      </div> */}


      {/* Service Card Swiper */}
      <div className=" py-20" style={{background: 'linear-gradient(90deg, rgb(77, 186, 100), rgb(37, 160, 111))'}}>
        <ProductCardSection />
      </div>


      {/* Courses Card Section */}
      <div className=" py-20 primary-gradient-bg">
        <CoursesCardSection />
      </div>


      {/* Image Gallery Section */}
      <div className="container mx-auto py-20">
        <ThumbsSwiperImageGallery />
      </div>


      {/* Multimedia Video Tabs Section */}
      <div className="py-20 bg-black" >
        <MultimediaTabsPortfolio />
      </div>


       {/* FAQs Section */}
       <div className=" py-20 " style={{background: 'linear-gradient(90deg, rgb(77, 186, 100), rgb(37, 160, 111))'}}>
        <FAQSection />
      </div>
    </div>
  );
};
