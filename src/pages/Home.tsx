import Hero from '../components/sections/Hero';
import CoreCapabilities from '../components/sections/CoreCapabilities';
import ProductsPreview from '../components/sections/ProductsPreview';
import SolutionsPreview from '../components/sections/SolutionsPreview';

export default function Home() {
  return (
    <div>
      <Hero />
      <CoreCapabilities />
      <ProductsPreview />
      <SolutionsPreview />
    </div>
  );
}
