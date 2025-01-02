import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import SchoolTestimonials from "./components/TestimonialCards";
import UpcomingWebinar from "./components/UpcomingWebinar";
import Instructor from "./components/Instructors";
import Footer from "./components/Footer";
import TeacherSection from "./components/FeaturedCourses";

const pageVariants = {
  initial: { opacity: 0, x: "-100%" },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, x: "100%", transition: { duration: 0.8 } },
};

export default function Home() {
  return (
    <motion.main
      className="min-h-screen bg-black/[0.99] antialiased bg-grid-white/[0.04]"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HeroSection />
      {/* <TeacherSection/> */}
      {/* <FeaturedCourses/> */}
      <WhyChooseUs />
      <SchoolTestimonials />
      <UpcomingWebinar />
      <Instructor />
      <Footer />
    </motion.main>
  );
}
