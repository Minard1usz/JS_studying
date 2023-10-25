import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { UsersList } from './pages/UsersList';
import { AlbumList } from './pages/AlbumList';
import { PhotosList } from './pages/PhotosList';
import { Notfoundpage } from './pages/Notfoundpage';
import { UserDetails } from './pages/UserDetails';

function App() {
 
  return (
    <>
      <header>
      <Link to="/">Home</Link>
    </header>

    <Routes>
      <Route path="/" element={<UsersList />}  />
      <Route path="*" element={<Notfoundpage />}  />
      <Route path="/users/:userId/albums" element={<AlbumList />} />
      <Route path="/albums/:albumId/photos" element={<PhotosList />} />
      <Route path="/users/:userId" element={<UserDetails />} />
    </Routes>
    </>
    
  );

}

export default App;
