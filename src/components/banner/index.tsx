'use client'

// core version + autoplay, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useCart } from '@/context/cartContext';

export default function Banner() {

    return (
        <div className="flex justify-center mt-8">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay configurado para passar automaticamente a cada 3 segundos
                spaceBetween={20}
                slidesPerView={1}
                centeredSlides={true} // Mantém o slide ativo centralizado
                className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[90%] h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px] rounded-lg shadow-lg"
            >
                <SwiperSlide className="rounded-lg overflow-hidden transform transition-transform duration-500 ease-in-out">
                    <img
                        src="https://usc1.contabostorage.com/ae5b13f74a9c431982425f53be583c27:catalogo/catalogo/BannerKimaster.png"
                        alt="Imagem 1"
                        className="w-full h-full object-cover swiper-slide-active:scale-110 swiper-slide-active:shadow-2xl" // Escala e sombra para o slide ativo
                    />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg overflow-hidden transform transition-transform duration-500 ease-in-out">
                    <img
                        src="https://usc1.contabostorage.com/ae5b13f74a9c431982425f53be583c27:catalogo/catalogo/a4.png"
                        alt="Imagem 2"
                        className="w-full h-full object-cover swiper-slide-active:scale-110 swiper-slide-active:shadow-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg overflow-hidden transform transition-transform duration-500 ease-in-out">
                    <img
                        src="https://usc1.contabostorage.com/ae5b13f74a9c431982425f53be583c27:catalogo/catalogo/revendedor.jpg"
                        alt="Imagem 3"
                        className="w-full h-full object-cover object-contain swiper-slide-active:scale-110 swiper-slide-active:shadow-2xl"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
