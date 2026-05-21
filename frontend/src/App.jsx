// frontend/src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PhotoGallery from "./pages/PhotoGallery";
import ProfileDetail from "./pages/ProfileDetail";
import CityProfiles from "./pages/CityProfiles";
import AllNewArrivals from "./pages/AllNewArrivals";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import MediaGallery from "./components/admin/MediaUploder.jsx";
import MediaTags from "./pages/admin/MediaTags.jsx";
import ImageGallery from "./pages/admin/MediaGallery.jsx";
import Users from "./pages/admin/Users";
import OwnerInfo from "./pages/admin/OwnerInfo";
import Profiles from "./pages/admin/Profiles";
import { ProtectedRoute } from "./components/ProtectedRoute";
import AgeGate from "./components/AgeGate";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import CookiesPolicy from "./pages/CookiesPolicy";
import SupportCenter from "./pages/SupportCenter";
import HelpCenter from "./pages/HelpCenter";
import ContactUs from "./pages/ContactUs";
import ScamReport from "./pages/ScamReport";
import Mahipalpur from "./pages/Mahipalpur";
import VasantKunj from "./pages/VasantKunj";
import LaxmiNagar from "./pages/LaxmiNagar";
import Saket from "./pages/Saket";
import Munirka from "./pages/Munirka";
import HauzKhas from "./pages/HauzKhas";
import Dwarka from "./pages/Dwarka";
import KarolBagh from "./pages/KarolBagh";
import LajpatNagar from "./pages/LajpatNagar";
import ConnaughtPlace from "./pages/ConnaughtPlace";
import SouthDelhi from "./pages/SouthDelhi";
import MalviyaNagar from "./pages/MalviyaNagar";
import NehruPlace from "./pages/NehruPlace";
import Aerocity from "./pages/Aerocity";
import Janakpuri from "./pages/Janakpuri";
import NewAshokNagar from "./pages/NewAshokNagar";
import PatelNagar from "./pages/PatelNagar";
import TilakNagar from "./pages/TilakNagar";
import Palam from "./pages/Palam";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-use" element={<TermsOfUse />} />
        <Route path="cookies-policy" element={<CookiesPolicy />} />
        <Route path="support-center" element={<SupportCenter />} />
        <Route path="help-center" element={<HelpCenter />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="scam-report" element={<ScamReport />} />
        <Route path="photos" element={<PhotoGallery />} />
        <Route path="profile/:name" element={<ProfileDetail />} />
        <Route path="new-arrivals" element={<AllNewArrivals />} />
        <Route path="escort-service-:city" element={<CityProfiles />} />
        <Route path="escort-service-mahipalpur" element={<Mahipalpur />} />
        <Route path="escort-service-vasant-kunj" element={<VasantKunj />} />
        <Route path="escort-service-laxmi-nagar" element={<LaxmiNagar />} />
        <Route path="escort-service-saket" element={<Saket />} />
        <Route path="escort-service-munirka" element={<Munirka />} />
        <Route path="escort-service-hauz-khas" element={<HauzKhas />} />
        <Route path="escort-service-dwarka" element={<Dwarka />} />
        <Route path="escort-service-karol-bagh" element={<KarolBagh />} />
        <Route path="escort-service-lajpat-nagar" element={<LajpatNagar />} />
        <Route
          path="escort-service-connaught-place"
          element={<ConnaughtPlace />}
        />
        <Route path="escort-service-south-delhi" element={<SouthDelhi />} />
        <Route path="escort-service-malviya-nagar" element={<MalviyaNagar />} />
        <Route path="escort-service-nehru-place" element={<NehruPlace />} />
        <Route path="escort-service-aerocity" element={<Aerocity />} />
        <Route path="escort-service-janakpuri" element={<Janakpuri />} />
        <Route path="escort-service-new-ashok-nagar" element={<NewAshokNagar />} />
        <Route path="escort-service-patel-nagar" element={<PatelNagar />} />
        <Route path="escort-service-tilak-nagar" element={<TilakNagar />} />
        <Route path="escort-service-palam" element={<Palam />} />
      </Route>

      {/* Admin Routes - Protected and Admin Only */}
      <Route element={<ProtectedRoute adminOnly />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="media-gallery" element={<ImageGallery />} />
          <Route path="media-gallery/upload" element={<MediaGallery />} />
          <Route path="media/tags" element={<MediaTags />} />
          <Route path="users" element={<Users />} />
          <Route path="profiles" element={<Profiles />} />
          <Route path="owner-info" element={<OwnerInfo />} />

          {/* Add more admin routes here */}
        </Route>
      </Route>

      {/* Not Found Route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
