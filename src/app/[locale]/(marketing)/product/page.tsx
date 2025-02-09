import { getTranslations, setRequestLocale } from 'next-intl/server';

import ProductListHeader from '@/sections/product/ProductListHeader';
import ProductList from '@/sections/product/ProductList';


type IAboutProps = {
  params: Promise<{ slug: string; locale: string }>;
};
export async function generateMetadata(props: IAboutProps) {
  // const { locale } = await props.params;
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'courses',
  // });

  // return {
  //   title: t('meta_title'),
  //   description: t('meta_description'),
  // };
}


const fetchRepo = async () => {
  const res = await fetch('http://localhost:9000/v1/product', {
    next: { revalidate: 60 }, // Enables ISR (Incremental Static Regeneration)
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};


export default async function Courses(props: IAboutProps) {
  // const { locale } = await props.params;
  // setRequestLocale(locale);
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'About',
  // });

  const productsData = await fetchRepo();
  console.log(productsData.data.products)



  return (
    <div className='overflow-hidden pt-16 bg-black text-white min-h-screen'>
        <div className="container mx-auto pt-20">
          {/* Header */}
          <ProductListHeader />
        </div>

        <div className="px-4 pt-4">
          <ProductList productsData={productsData?.data} />
        </div>
    </div>
  );
};
