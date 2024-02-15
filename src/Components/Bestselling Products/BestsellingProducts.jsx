import React, { useEffect, useState } from "react";
import "./BestsellingProducts.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import ChangerNumToPersian from "../../Utils/ChangerNumToPersian";
import { FreeMode, Navigation } from "swiper";
import axios from "axios";
import menu from "../../../back/model/menu";

const BestsellingProducts = () => {
  const [mahsol,setmahsol] = useState([]);
  const getmahsol = async()=>{
    await axios.get('http://localhost:5000/mahsolat')
.then(res => {
  setmahsol(res.data)})
  }
  useEffect(()=>{
getmahsol();
  },[])
  return (
    <div className="bestselling-products-cotainer margin-1024">
      <div className="bestselling-products-title">
        <h3>پرفروش ترین کالاها</h3>
        <a href="#">مشاهده همه</a>
      </div>
      <Swiper
        className="bestselling-products-slider"
        modules={[FreeMode, Navigation]}
        navigation={true}
        freeMode={true}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          0: {
            slidesPerView: 1.3,
            spaceBetween: 5,
          },
          470: {
            slidesPerView: 1.5,
            spaceBetween: 3,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 3,
          },
          1096: {
            slidesPerView: 4,
            spaceBetween: 3,
          },
        }}
      >
     <SwiperSlide>
     
        {
mahsol.map((menu,index)=>{
 if(index+1 >=4){
return(
  <SwiperSlide  >
  <div className="bestselling-products-items" style={{marginRight:"320px",marginTop:"-200px"}}>
    
  <a href="#">
  <div className="img-container">
    <img
      src="https://dkstatics-public.digikala.com/digikala-products/e4b2145a5e77bdc30aafff78bba4734798ac8d68_1620202335.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
      alt=""
    />
  </div>
              <span>{ChangerNumToPersian(index+1)}</span>
              <div>
                <p>{menu.mahsolname}</p>
              </div>
            </a>
           
     </div>
     </SwiperSlide>
)
 }
 else{

     
       return(  
      
      <div className="bestselling-products-items">
    <a href="#">
    <div className="img-container">
      <img
        src="https://dkstatics-public.digikala.com/digikala-products/e4b2145a5e77bdc30aafff78bba4734798ac8d68_1620202335.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
        alt=""
      />
    </div>
                <span>{ChangerNumToPersian(index+1)}</span>
                <div>
                  <p>{menu.mahsolname}</p>
                </div>
              </a>
             
       </div>
         
  )}
    
    
  
    
  

})
        }
         </SwiperSlide>   
          

      
     
      </Swiper>
    </div>
  );
};

export default BestsellingProducts;
