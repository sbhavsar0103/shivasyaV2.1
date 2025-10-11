// import Layout from "./Layout/Layout";
// import BannerVideo from "./Layout/BannerVideo"

// function App() {
//   return (
//     <Layout>
//       <BannerVideo/>
//     </Layout>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./Layout/Layout";
// import BannerVideo from "./Layout/BannerVideo";
// import AboutUs from "./Layout/AboutUsBanner";
// import IELTSCoaching from "./Layout/IELTSCoaching";

// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<BannerVideo />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/ielts-coaching" element={<IELTSCoaching />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;


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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
