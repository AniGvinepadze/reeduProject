import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import RoadMap from "../views/RoadMap";
import FeedBackPage from "../views/NewFeedBackPage";
import EditFeedBackPage from "../views/EditFeedBackPage";
import FeedbackDetails from "../views/FeedbackDetails";
import SignUp from "./molecules/authFont/SignUp";
import SignIn from "./molecules/authFont/SignIn";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/roadmap" element={<RoadMap />} />
      <Route path="/" element={<Home />} />
      <Route path="/new-feedback" element={<FeedBackPage />} />
      <Route path="/edit-feedback/:id" element={<EditFeedBackPage />} />
      <Route path="/feedback-detail/:id" element={<FeedbackDetails />} />
      <Route path="/auth/sign-up" element={<SignUp/>} />
      <Route path="/auth/sign-in" element={<SignIn/>} />
    </Routes>
  );
}
