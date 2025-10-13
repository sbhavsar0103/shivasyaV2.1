import Footer from "../Layout/footer";
import PrivacyPolicySection from "../Layout/PrivacyPolicySection";

export default function PrivacyPolicy() {
    return (
        <>
            {/* Banner Section with Solid Color */}
            <section className="w-full h-[30vh] flex items-center justify-center relative bg-[#C67B3E]">
                <h1 className="text-4xl sm:text-5xl font-bold text-white z-10">
                    Privacy Policy
                </h1>
            </section>
            <PrivacyPolicySection />
            <Footer />
        </>
    );
}