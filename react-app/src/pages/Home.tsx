import HeroSection from '../sections/HeroSection';
import IntroSection from '../sections/IntroSection';
import ExperienceSection from '../sections/ProfessionalSection';
import ProjectSection from '../sections/ProjectSection';
import ContactSection from '../sections/ContactSection';
import Divider from '../components/Divider';
function Home() {
  return (
    <div>
      {/* hero */}
      <HeroSection></HeroSection>
      <Divider></Divider>
      {/* intro */}
      <section id="intro"><IntroSection></IntroSection></section>
      <Divider></Divider>
      {/* professional */}
      <section id="professional"><ExperienceSection></ExperienceSection></section>
      <Divider></Divider>
      {/* projects */}
      <section id="projects"><ProjectSection></ProjectSection></section>
      <Divider></Divider>
      {/* contact */}
      <section id="contact"><ContactSection></ContactSection></section>
    </div>
  ) 
}
export default Home