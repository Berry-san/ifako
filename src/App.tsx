import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import Footer from './components/molecules/Footer'
import Header from './components/molecules/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import News from './pages/News'
import ReportProblem from './pages/ReportProblem'
import CouncilExcos from './pages/CouncilExcos'
import ManagementTeam from './pages/ManagementTeam'
import Achievements from './pages/Achievements'
import LegislativeArm from './pages/LegislativeArm'
import EmergencyServices from './pages/EmergencyServices'
import NewsDetail from './pages/NewDetails'
import Heeds from './pages/Heeds'

const queryClient = new QueryClient()

// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <div className="bg-background min-h-screen">
//         <div className="flex flex-col px-4 sm:px-6 lg:px-10 pb-4 min-h-screen font-afacad max-w-7xl">
//           <Header />
//           <div className=" flex-grow flex flex-col w-full">
//             <div className="flex-grow px-4 sm:px-6 lg:px-20 py-10 lg:pt-10 lg:pb-20 bg-white text-lg">
//               <Routes>
//                 {/* Home route */}
//                 <Route path="/" element={<Home />} />
//                 {/* About route */}
//                 <Route
//                   path="/about-us/corporate-overview"
//                   element={<AboutUs />}
//                 />
//                 <Route
//                   path="/about-us/management-team"
//                   element={<ManagementTeam />}
//                 />
//                 <Route
//                   path="/about-us/legislative-arm"
//                   element={<LegislativeArm />}
//                 />
//                 <Route
//                   path="/about-us/council-excos"
//                   element={<CouncilExcos />}
//                 />
//                 <Route
//                   path="/about-us/achievements"
//                   element={<Achievements />}
//                 />

//                 {/* Contact route */}
//                 <Route path="/contact-us" element={<ContactUs />} />
//                 {/* News Route */}
//                 <Route path="/news" element={<News />} />
//                 <Route path="/news/:id" element={<NewsDetail />} />

//                 {/* Emergency Services Route */}
//                 <Route
//                   path="/resources/emergency-services"
//                   element={<EmergencyServices />}
//                 />

//                 {/* Report Problem Route */}
//                 <Route path="/report-problem" element={<ReportProblem />} />

//                 {/* 404 Route */}
//                 <Route
//                   path="*"
//                   element={
//                     <div className="text-center">
//                       <h1 className="text-4xl font-bold">404 </h1>
//                       <p className="text-xl">Page not found</p>
//                     </div>
//                   }
//                 />
//               </Routes>
//             </div>
//             <Footer />
//           </div>
//         </div>
//       </div>
//     </QueryClientProvider>
//   )
// }

// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       {/* Outer wrapper to center everything */}
//       <div className="bg-background mx-auto min-h-screen flex flex-col items-center ">
//         {/* Centered Layout */}
//         <div className="flex flex-col items-center w-full min-h-screen max-w-7xl">
//           {/* Centered Header */}
//           <Header />

//           {/* Main Content (Pages) */}
//           <main className="flex-grow flex flex-col items-center w-full h-full">
//             <div className="px-4 sm:px-6 lg:px-20 py-10 lg:pt-10 lg:pb-20 bg-white text-lg w-full">
//               <Routes>
//                 {/* Home route */}
//                 <Route path="/" element={<Home />} />
//                 {/* About route */}
//                 <Route
//                   path="/about-us/corporate-overview"
//                   element={<AboutUs />}
//                 />
//                 <Route
//                   path="/about-us/management-team"
//                   element={<ManagementTeam />}
//                 />
//                 <Route
//                   path="/about-us/legislative-arm"
//                   element={<LegislativeArm />}
//                 />
//                 <Route
//                   path="/about-us/council-excos"
//                   element={<CouncilExcos />}
//                 />
//                 <Route
//                   path="/about-us/achievements"
//                   element={<Achievements />}
//                 />

//                 {/* Contact route */}
//                 <Route path="/contact-us" element={<ContactUs />} />
//                 {/* News Route */}
//                 <Route path="/news" element={<News />} />
//                 <Route path="/news/:id" element={<NewsDetail />} />

//                 {/* Resources Route */}
//                 <Route
//                   path="/resources/emergency-services"
//                   element={<EmergencyServices />}
//                 />
//                 <Route path="/resources/heeds-agenda" element={<Heeds />} />

//                 {/* Report Problem Route */}
//                 <Route path="/report-problem" element={<ReportProblem />} />

//                 {/* 404 Route */}
//                 <Route
//                   path="*"
//                   element={
//                     <div className="text-center">
//                       <h1 className="text-4xl font-bold">404 </h1>
//                       <p className="text-xl">Page not found</p>
//                     </div>
//                   }
//                 />
//               </Routes>
//             </div>
//           </main>

//           {/* Centered Footer */}
//           <Footer />
//         </div>
//       </div>
//     </QueryClientProvider>
//   )
// }

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Full page container */}
      <div className="bg-background min-h-screen flex flex-col items-center">
        {/* Width-limited wrapper */}
        <div className="w-full max-w-7xl flex flex-col flex-grow">
          {/* Header (natural height) */}
          <Header />

          {/* Main content that grows to fill space */}
          <main className="flex-grow flex flex-col">
            <div className="flex-grow px-4 sm:px-6 lg:px-20 py-10 bg-white text-lg w-full">
              <Routes>
                {/* Home route */}
                <Route path="/" element={<Home />} />
                {/* About Us */}
                <Route
                  path="/about-us/corporate-overview"
                  element={<AboutUs />}
                />
                <Route
                  path="/about-us/management-team"
                  element={<ManagementTeam />}
                />
                <Route
                  path="/about-us/legislative-arm"
                  element={<LegislativeArm />}
                />
                <Route
                  path="/about-us/council-excos"
                  element={<CouncilExcos />}
                />
                <Route
                  path="/about-us/achievements"
                  element={<Achievements />}
                />
                {/* Contact */}
                <Route path="/contact-us" element={<ContactUs />} />
                {/* News */}
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsDetail />} />
                {/* Resources */}
                <Route
                  path="/resources/emergency-services"
                  element={<EmergencyServices />}
                />
                <Route path="/resources/heeds-agenda" element={<Heeds />} />
                {/* Report Problem */}
                <Route path="/report-problem" element={<ReportProblem />} />
                {/* 404 */}
                <Route
                  path="*"
                  element={
                    <div className="text-center">
                      <h1 className="text-4xl font-bold">To be updated soon</h1>
                      {/* <p className="text-xl">Page not found</p> */}
                    </div>
                  }
                />
              </Routes>
            </div>
          </main>

          {/* Footer (natural height) */}
          <Footer />
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App
