import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
        alt="logo"
      />
      <Link to="/" style={{ textDecoration: "none" }}>
        <SidebarOptions
          className="sidebaroption"
          Icon={HomeIcon}
          title="Home"
        />
      </Link>

      <Link to="/search" style={{ textDecoration: "none" }}>
        <SidebarOptions
          className="sidebaroption"
          Icon={SearchIcon}
          title="Search"
        />
      </Link>
      <SidebarOptions Icon={LibraryMusicIcon} title="Your library" />
      <br />
      <SidebarOptions Icon={AddIcon} title="Create Playlist" />
      <SidebarOptions Icon={FavoriteIcon} title="Liked songs" />
    </div>
  );
};

export default Sidebar;
