import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { CreateMovie } from '../pages/CreateMovie'
import { MoviePreview } from '../pages/MoviePreview'
import { Profile } from '../pages/Profile'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createmovie" element={<CreateMovie />} />
      <Route path="/moviepreview" element={<MoviePreview />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
