import Header from '@/components/Header';
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import JoinUs from "@/components/JoinUs";
import Objectives from "@/components/Objectives";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import MisionVision from "@/components/MisionVision";
import TeamMembers from "@/components/TeamMembers";
import Benefits from "@/components/Benefits";

export default function Home(): JSX.Element {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutUs/>
      <MisionVision/>
      <Objectives/>
      <JoinUs/>
      <Benefits/>
      {/*<TeamMembers/>*/}
      <ContactUs/>
      <Footer/>
    </div>
  )
}
