import React, {useContext} from "react";
import Layout from '../../components/layout/Layout';
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from "../../components/productCard/productCard";
import Track from "../../components/track/Tracks";

function Home() {

    return (  
     <Layout>
        <HeroSection/>
        <Filter/>
        <ProductCard/>
        <Track/>
     </Layout>
      )
   
}

export default Home;