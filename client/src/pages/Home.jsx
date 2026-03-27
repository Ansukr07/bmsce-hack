import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import FacultySection from '../components/FacultySection';
import Stats from '../components/Stats';
import CampusLife from '../components/CampusLife';
import Research from '../components/Research';
import Testimonials from '../components/Testimonials';
import EventsSection from '../components/EventsSection';
import ChatbotWidget from '../components/chatbot/ChatbotWidget';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <FacultySection />
      <Stats />
      <CampusLife />
      <Research />
      <Testimonials />
      <EventsSection />
      <ChatbotWidget />
    </>
  );
};

export default Home;
