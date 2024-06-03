import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Jobs from "./pages/jobs/Jobs";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Blog2 from "./pages/blog-1/blog-1";
import Startseite from "./pages/startseite/Startseite";
import Unterseite from "./pages/unterseite/Unterseite";
import Faqs from "./pages/faq/Faq";
import CaseStudies from "./pages/case-studies/CaseStudies";
import AboutUs from "./pages/about-us/AboutUs";
import Produkt from "./pages/produkt/Produkt";
import News from "./pages/news/News";
import Stellenbeschreibung from "./pages/stellenbeschreibung/Stellenbeschreibung";
function App() {
  return (
    <>
      <div className=" z-[1000]">
        <Header />
      </div>
      <Routes>
        {/* page 1 */}
        <Route path="/" element={<Startseite />} />
        {/* page 2 */}
        <Route path="/product" element={<Produkt />} />
        {/* page 3 */}
        <Route path="/about-us" element={<AboutUs />} />
        {/* page 4 */}
        <Route path="/case-studies" element={<CaseStudies />} />
        {/* page 5 */}
        <Route path="/unterseite" element={<Unterseite />} />
        {/* Page 6 */}
        <Route path="/contact" element={<Contact />} />
        {/* Page 7 */}
        <Route path="/faq" element={<Faqs />} />
        {/* Page 8 */}
        <Route path="/jobs" element={<Jobs />} />
        {/* Page 9 */}
        <Route path="/job-advert" element={<Stellenbeschreibung />} />
        {/* Page 10*/}
        <Route path="/news" element={<News />} />

        {/* Page 11*/}
        <Route path="/blog" element={<Blog />} />
        {/* Page 12*/}
        <Route path="/blog-1" element={<Blog2 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
