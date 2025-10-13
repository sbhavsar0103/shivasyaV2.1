import { Globe, BookOpen, ChevronRight } from 'lucide-react';

export default function AboutCompany() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left Column - Cards */}
        <div className="grid grid-cols-1 gap-8">
          {/* Our Vision Card */}
          <div
            className="relative rounded-3xl p-8 flex flex-col justify-start h-full"
            style={{ backgroundColor: '#C67B3E', color: '#3D1F14' }}
          >
            <div className="w-12 h-12 mb-4">
              <Globe className="w-full h-full" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-base leading-relaxed">
              At Global Colliance, our vision is to create a world where every student has the opportunity
              to broaden their horizons and gain global exposure through foreign education.
            </p>
          </div>

          {/* Our Mission Card */}
          <div
            className="relative rounded-3xl p-8 flex flex-col justify-start h-full"
            style={{ backgroundColor: '#3D1F14', color: '#C67B3E' }}
          >
            <div className="w-12 h-12 mb-4">
              <BookOpen className="w-full h-full" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-base leading-relaxed">
              Our mission at Global Colliance is to provide students with exceptional study-abroad
              experiences that inspire personal growth, academic achievement, and cross-cultural understanding.
            </p>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col justify-center">
          <div
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: '#C67B3E', color: '#3D1F14' }}
          >
            ABOUT COMPANY
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#3D1F14' }}>
            Our Story Who We Are
          </h2>

          <p className="font-semibold mb-4 leading-relaxed" style={{ color: '#3D1F14' }}>
            Global Colliance is a leading study abroad consultant in India, offering expert guidance
            and comprehensive services for those seeking international education opportunities.
          </p>

          <p className="mb-6 leading-relaxed" style={{ color: '#3D1F14' }}>
            With over a decade of experience, Global Colliance has established itself as a trusted name
            in overseas education consultants in India, committed to delivering convenience and excellence
            to aspiring students. Fulfil your ambition of studying abroad with guidance from our dedicated
            study-abroad education consultants.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2" style={{ color: '#3D1F14' }}>
                <ChevronRight className="w-5 h-5" style={{ color: '#C67B3E' }} />
                Beneficial Strategies
              </h3>
              <p className="leading-relaxed" style={{ color: '#3D1F14' }}>
                Global Colliance is your trusted partner as an <span className="font-semibold">overseas education consultant</span>
                for a brighter future. We aim to provide students with diverse programs that help them
                master their skills, encourage growth, critical thinking, self-expression, and multitasking.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2" style={{ color: '#3D1F14' }}>
                <ChevronRight className="w-5 h-5" style={{ color: '#C67B3E' }} />
                Preparation Series
              </h3>
              <p className="leading-relaxed" style={{ color: '#3D1F14' }}>
                Global Colliance offers IELTS, PTE, TOEFL and Duolingo exam preparation services for students
                aspiring to study abroad. With our expert overseas consultancy services, you can explore
                global horizons. We are committed to a personalized approach to teaching.
              </p>
            </div>
          </div>

          <button
            className="px-8 py-3 rounded-lg font-semibold transition-colors w-max"
            style={{ backgroundColor: '#3D1F14', color: '#C67B3E' }}
          >
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}