import ContactForm from "../Layout/ContactUsForm";
import Footer from "../Layout/footer";
import RussiaStudy from "../assets/study/russia-study.png";
import RussiaStudyContactSection from "../Layout/RussiaContactSection";
import RussiaInfoSection from "../Layout/RussiaInfoSection";
import CareerOpportunitiesRussia from "../Layout/CareerOpportunitiesRussia";
import WhyStudyInRussia from "../Layout/WhyStudyRussia";
import CostOfLivingRussia from "../Layout/CostOfLivingRussia";
import RussiaScholarship from "../Layout/RussiaScholarship";
import RussiaCoursesSection from "../Layout/RussiaCoursesSection";
import RussiaAdmissionRequirement from "../Layout/RussiaAdmissionRequirement";

export default function RussiaStudySection() {
    return (
        <>
            {/* Image Section */}
            <section className="w-full h-[30vh] bg-center bg-cover flex items-center justify-center relative" style={{ backgroundImage: `url(${RussiaStudy})` }} >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
            </section>
            <RussiaStudyContactSection />
            <RussiaInfoSection />
            <CareerOpportunitiesRussia />
            <WhyStudyInRussia />
            <CostOfLivingRussia />
            <RussiaScholarship />
            <RussiaCoursesSection />
            <RussiaAdmissionRequirement />
            <ContactForm />
            <Footer />
        </>
    );
}
