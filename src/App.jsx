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

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wrapper */}
        <Route path="/" element={<Layout />}>
          <Route index element={<BannerVideo />} /> {/* "/" route */}
          <Route path="about" element={<AboutUs />} />
          <Route path="ielts-coaching" element={<IELTSCoaching />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
