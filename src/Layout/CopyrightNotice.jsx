import Footer from "../Layout/footer";
import CopyrightNoticeSection from "../Layout/CopyrightNoticeSection";

export default function CopyrightNotice() {
    return (
        <>
            {/* Banner Section with Solid Color */}
            <section className="w-full h-[30vh] flex items-center justify-center relative bg-[#C67B3E]">
                <h1 className="text-4xl sm:text-5xl font-bold text-white z-10">
                    Copyright Notice
                </h1>
            </section>
            <CopyrightNoticeSection />
            <Footer />
        </>
    );
}
