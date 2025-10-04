import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // 👈 use react-router-dom
import HomePage from "./Pages/HomePage.jsx";
import ServicesPage from "./Pages/ServicesPage.jsx";
import ContactUsPage from "./Pages/ContactUsPage.jsx";
import ConsultingPage from "./Pages/ConsultingPage.jsx";
import AdvisoryPage from "./Pages/AdvisoryPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      { index: true, element: <HomePage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "advisory", element: <AdvisoryPage /> },
      { path: "consulting", element: <ConsultingPage /> },
      { path: "contact-us", element: <ContactUsPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
