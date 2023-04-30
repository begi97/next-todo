// import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import uuid from 'react-uuid';
// import Cookies from 'cookies';
import {API_URL} from "../utils/";


export default function Home({homeBanners}) {

 
  // console.log(banners);

  const mapHomeBanners = () => {
    return homeBanners.length > 0 && homeBanners.map((item, index) => {
        const {category_id, img, img_mobile, category_name} = item;

        const ifIsMobile = isMobile() ? img_mobile : img;

        
        if(index === 0) return <div key={category_id} className="section-container home-container"><div  className="full-banner-img-container cursor-pointer position-relative" onClick={() => handleRedirect(routerLinks.category.selfWithoutId, category_name, category_id)}><img src={ifIsMobile} className="img" alt={category_name} as="style" /></div></div>

        return <div key={category_id} className="section-container home-container">
        <div  className="full-banner-img-container cursor-pointer position-relative" onClick={() => handleRedirect(routerLinks.category.selfWithoutId, category_name, category_id)}>
                    <Image img = {ifIsMobile} category_name={category_name} />
                
            </div>
        </div>
    })
}


  return (<main>
    <section className="home-banners-main-wrapper">
      {/* {mapHomeBanners()} */}
      Banners
    </section>
    </main>
  )
}


export async function getServerSideProps({ req, res }) {
 
  const token = req.cookies.token;

  // request body
  const requestBody = {
    api_key: process.env.api_key,
    token
  }

  const response = await fetch(`${API_URL}/en-get-banners.json`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestBody)
  })

  const data = await response.json();

 

  const banners = data.banners ? data.banners.full_banner : [];

 
  

  return {
    props: {homeBanners : banners},
  }

}


