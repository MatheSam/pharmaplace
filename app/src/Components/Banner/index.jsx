import { Container } from "./style";
import Pharmacist from "../../Assets/LottieJson/Pharmacist.json";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./swiper.css";

const BannerArea = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate("/registerSeller");
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Pharmacist,
  };

  const settings = {
    navigation: true,
    pagination: { clickable: true },
    autoplay: true,
    loop: true,
  };
  return (
    <Swiper modules={[Navigation, Pagination, A11y, Autoplay]} {...settings}>
      <SwiperSlide>
        <Container>
          <div className="box">
            <section className="text_one">
              <h3>
                Cadastre sua empresa e receba milhares de visitas na Pharma
                Place
              </h3>
            </section>
            <section className="text_two">
              <p>
                O lugar certo para obter mais visibilidade e aumentar as vendas
                com o menor custo
              </p>
            </section>
            <section className="text_three">
              <p>Cadastro simplificado e gratuito</p>
              <button onClick={handleClick} className="button_visit">
                Cadastrar
              </button>
            </section>
          </div>
          <section className="animation">
            <Lottie options={defaultOptions} />
          </section>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container>
          <div className="box">
            <section className="text_one">
              <h3>
                Cadastre sua empresa e receba milhares de visitas na Pharma
                Place
              </h3>
            </section>
            <section className="text_two">
              <p>
                O lugar certo para obter mais visibilidade e aumentar as vendas
                com o menor custo
              </p>
            </section>
            <section className="text_three">
              <p>Cadastro simplificado e gratuito</p>
              <button onClick={handleClick} className="button_visit">
                Cadastrar
              </button>
            </section>
          </div>
          <section className="animation">
            <Lottie options={defaultOptions} />
          </section>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container>
          <div className="box">
            <section className="text_one">
              <h3>
                Cadastre sua empresa e receba milhares de visitas na Pharma
                Place
              </h3>
            </section>
            <section className="text_two">
              <p>
                O lugar certo para obter mais visibilidade e aumentar as vendas
                com o menor custo
              </p>
            </section>
            <section className="text_three">
              <p>Cadastro simplificado e gratuito</p>
              <button onClick={handleClick} className="button_visit">
                Cadastrar
              </button>
            </section>
          </div>
          <section className="animation">
            <Lottie options={defaultOptions} />
          </section>
        </Container>
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerArea;
