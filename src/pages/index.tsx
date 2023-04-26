import Header from '@/components/Header';
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import JoinUs from "@/components/JoinUs";
import Objectives from "@/components/Objectives";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home(): JSX.Element {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutUs/>
      <JoinUs/>
      <Objectives/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}
