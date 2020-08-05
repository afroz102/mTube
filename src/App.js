import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import VideoDetailsPage from './pages/VideoDetailsPage.jsx';
import SearchResultPage from './pages/SearchResultPage';
import PlaylistPage from './pages/PlaylistPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

import NavBar from './components/NavBar.jsx';
import Search from './components/Search.jsx';

import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <Switch >
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/playlists" component={PlaylistPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/videos/:videoId" component={VideoDetailsPage} />
        <Route exact path="/search/:searchQuery" component={SearchResultPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
