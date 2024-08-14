import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import BannerSection from "./Components/BannerSection";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import FooterSection from "./Components/FooterSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="position-relative">
        <img
          className=" position-absolute object-fit-cover z-0 h-100"
          style={{ left: "40%", width: "80%" }}
          loading="lazy"
          alt=""
          src={require("./Assets/designer-1@2x.png")}
        />
        <Navbar />
        <BannerSection />
      </div>

      <Section1 />

      <Section2
        img={require("./Assets/undraw-happy-news-hxmt@2x.png")}
        title={"Light, Fast & Powerful"}
        body1={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus "
        }
        body2={
          "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
        }
      />

      <Section2
        img={require("./Assets/undraw_social_influencer_sgsv.png")}
        title={"Light, Fast & Powerful"}
        body1={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus "
        }
        body2={
          "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
        }
      />

      <Section2
        img={require("./Assets/undraw-mention-6k5d@2x.png")}
        title={"Light, Fast & Powerful"}
        body1={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus "
        }
        body2={
          "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
        }
        button={
          <button className="btn btn-dark px-5 py-1" type="submit">
            Purchase UI Kit
          </button>
        }
      />

      <FooterSection />

      <Footer />
    </>
  );
}

export default App;
