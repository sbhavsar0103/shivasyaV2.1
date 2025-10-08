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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import BannerVideo from "./Layout/BannerVideo";
import AboutUs from "./Layout/AboutUsBanner";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<BannerVideo />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
