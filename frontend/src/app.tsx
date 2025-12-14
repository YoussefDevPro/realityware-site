import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./app/layout.tsx";
import Home from "./pages/home";
import { Suspense, lazy } from "react";

const HubPage = lazy(() => import("./app/hub/page"));
const ProjectsPage = lazy(() => import("./app/projects/page"));
const GalleryPage = lazy(() => import("./app/gallery/page"));
const VotingPage = lazy(() => import("./app/voting/page"));
const ShopPage = lazy(() => import("./app/shop/page"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
              <Home />
          }
        />
<Route
           path="/hub"
           element={
             <RootLayout>
               <Suspense fallback={<div>Loading Hub...</div>}>
                 <HubPage />
               </Suspense>
             </RootLayout>
           }
         />
<Route
           path="/projects"
           element={
             <RootLayout>
               <Suspense fallback={<div>Loading Projects...</div>}>
                 <ProjectsPage />
               </Suspense>
             </RootLayout>
           }
         />
<Route
           path="/gallery"
           element={
             <RootLayout>
               <Suspense fallback={<div>Loading Gallery...</div>}>
                 <GalleryPage />
               </Suspense>
             </RootLayout>
           }
         />
<Route
           path="/voting"
           element={
             <RootLayout>
               <Suspense fallback={<div>Loading Voting...</div>}>
                 <VotingPage />
               </Suspense>
             </RootLayout>
           }
         />
<Route
           path="/Shop"
           element={
             <RootLayout>
               <Suspense fallback={<div>Loading Shop...</div>}>
                 <ShopPage />
               </Suspense>
             </RootLayout>
           }
         />
      </Routes>
    </BrowserRouter> 
  );
}


