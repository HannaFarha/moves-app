import Slider from "../../components/slider/Slider";
import Footer from "../../components/footer/Footer";
import Services from "../../components/services/Services";
import BookSlider from "../../components/book-slider/BookSlider";
import HeadingTitle from "../../components/heading-title/HeadingTitle";

const HomePage=()=>{
    return(
        <>
   < Slider />
   <Services />
   <HeadingTitle title="Most gifted" />
   <BookSlider  />
   <HeadingTitle title="Best seller" />
   <BookSlider  />
   <HeadingTitle title="Most wished for" />
   <BookSlider  />
   <Footer />
   </>
    )
}
export default HomePage;