import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import BannerVideo from "./Layout/BannerVideo";
import AboutUs from "./Layout/AboutUsBanner";
import IELTSCoaching from "./Layout/IELTSCoaching";
import PTECoaching from "./Layout/PTECoaching";
import USAStudy from "./Layout/USAStudy";
import CanadaStudy from "./Layout/CanadaStudy";
import AustraliaStudy from "./Layout/AustraliaStudy";
import NewZealandStudy from "./Layout/NewZealandStudy";
import UKStudy from "./Layout/UKStudy";
import IrelandStudy from "./Layout/IrelandStudy";
import EuropeStudy from "./Layout/EuropeStudy";
import ItalyStudy from "./Layout/ItalyStudy";
import AbroadServices from "./Layout/AbroadServices";
import RussiaStudy from "./Layout/RussiaStudy";
import ContactUsPage from "./Layout/ContactUsPage";
import PrivacyPolicy from "./Layout/PrivacyPolicy";
import Disclaimer from "./Layout/Disclaimer";
import TermsAndConditions from "./Layout/TermsAndConditions";
import CopyrightNotice from "./Layout/CopyrightNotice";
import GDPR from "./Layout/GDPR";
import MonetaryPolicy from "./Layout/MonetaryPolicy";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wrapper */}
        <Route path="/" element={<Layout />}>
          <Route index element={<BannerVideo />} /> {/* "/" route */}
          <Route path="about" element={<AboutUs />} />
          <Route path="ielts-coaching" element={<IELTSCoaching />} />
          <Route path="pte-coaching" element={<PTECoaching />} />
          <Route path="usa-study" element={<USAStudy />} />
          <Route path="canada-study" element={<CanadaStudy />} />
          <Route path="australia-study" element={<AustraliaStudy />} />
          <Route path="new-zealand-study" element={<NewZealandStudy />} />
          <Route path="uk-study" element={<UKStudy />} />
          <Route path="ireland-study" element={<IrelandStudy />} />
          <Route path="europe-study" element={<EuropeStudy />} />
          <Route path="italy-study" element={<ItalyStudy />} />
          <Route path="abroad-services" element={<AbroadServices />} />
          <Route path="russia-study" element={<RussiaStudy />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="terms-conditions" element={<TermsAndConditions />} />
          <Route path="copyright-notice" element={<CopyrightNotice />} />
          <Route path="gdpr" element={<GDPR />} />
          <Route path="monetary-policy" element={<MonetaryPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
