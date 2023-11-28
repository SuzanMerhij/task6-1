import './Home.css';
import Navigation from '../../Components/Navbar/Navigation';
import Slider from '../../Components/Slider/Slider';
import Section_head from '../../Components/Section_head/Section_head';
import Essential_cards from '../../Components/Essential_cards/Essential_cards';
import photo_4 from '../../assets/Images/ic11.jpg';
import photo_5 from '../../assets/Images/ic12.jpg';
import photo_6 from '../../assets/Images/ic13.jpg';
import photo_7 from '../../assets/Images/ic7.jpg';
import photo_8 from '../../assets/Images/ic8.jpg';
import photo_9 from '../../assets/Images/ic9_db35a001-6739-4b9f-b1d9-12a825ddf8d9.jpg';
import photo_10 from '../../assets/Images/ic10.jpg';
import photo_11 from '../../assets/Images/hotspot_2934b3a5-cd7e-49be-b709-8269a17f7390.jpg';
import Possibilities from '../../Components/Possibilities/Possibilities';
import photo_12 from '../../assets/Images/ic1.webp';
import photo_13 from '../../assets/Images/ic2.jpg';
import photo_14 from '../../assets/Images/ic3.webp';
import photo_15 from '../../assets/Images/ic4.webp';
import photo_16 from '../../assets/Images/ic5.jpg';
import photo_17 from '../../assets/Images/ic6.webp';
import photo_18 from '../../assets/Images/center-img.webp';
import InnovativeCard from '../../Components/InnovativeCard/InnovativeCard';
import photo_19 from '../../assets/Images/bg-1.jpg';
import Ako from '../../Components/Ako/Ako';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Slider />
      {/******************************/}
      <section id="ESSENTIAL" className="bg-light">
        <div className="container py-5 text-light">
          <Section_head
            heading={'WHAT MAKES THE ESSENTIAL DIFFERENT?'}
            paragraphe={'EXPERIENCE HIGH PERFORMANCE AND SECURE'}
          />
          <div className="row">
            <Essential_cards img={photo_4} />
            <Essential_cards img={photo_5} />
            <Essential_cards img={photo_6} />
          </div>
        </div>
      </section>
      {/********************************/}
      <section id="POSSIBILITIES" className="mt-5">
        <div className="container py-5">
          <Section_head
            heading={'POSSIBILITIES PERFORMANCE POWER'}
            paragraphe={'EXPERIENCE HIGH PERFORMANCE AND SECURE'}
          />
          <div className="photo-phone w-100">
            <img src={photo_11} className="img-fluid w-100" alt="" />
            <span className="point-1"></span>
            <span className="point-2"></span>
            <span className="point-3"></span>
            <span className="point-4"></span>
          </div>
          <div className="row">
            <Possibilities img={photo_7} />
            <Possibilities margin={"mt-5"} img={photo_8} />
            <Possibilities img={photo_9} />
            <Possibilities margin={"mt-5"} img={photo_10} />
          </div>
        </div>
      </section>
      <section id="INNOVATIVE" className="mt-5">
        <div className="container py-5 text-light">
          <Section_head
            heading={'INNOVATIVE QUALITIES & FEATURES'}
            paragraphe={'SHOW YOURS TO THE WORLD'}
          />
          <div className="row">
            <div className="col-lg-4 col-sm-12 ">
              <InnovativeCard img={photo_12} />
              <InnovativeCard img={photo_13} />
              <InnovativeCard img={photo_14} />
            </div>
            <div className="col-lg-4 col-sm-12 py-2">
              <img src={photo_18}
                className="img-fluid w-100" />
            </div>
            <div className="col-lg-4 col-sm-12 ">
              <InnovativeCard imgs={photo_15} />
              <InnovativeCard imgs={photo_16} />
              <InnovativeCard imgs={photo_17} />
            </div>
          </div>
        </div>
      </section>
      <section id="CUSTOMERS" className="mt-5">
        <div className="container py-5">
          <Section_head
            color={"text-black"}
            heading={'SEE WHY CUSTOMERS LOVE THE OUR MOBILES'}
            paragraphe={'DESIGNED TO PERFECTION'}
          />
          <div className="row">
            <div className="col-lg-6 col-sm-12 py-2">
              <img src={photo_19} className="img-fluid w-100" />
            </div>
            <div className="col-lg-6 col-sm-12 py-2">
                 <Ako/>   
            </div>
          </div>
        </div>
      </section>
      {/****************************/}
      <Footer />
    </div>
  )
}

export default Home
