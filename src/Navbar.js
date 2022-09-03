import React from "react";
import NewsList from "./NewsList";
import "./Navbar.css";
import Search from "./Search";
import BookData from "./Data.json";
import "./Search.css";

function NavBar() {
  return (
    <>
      <nav class="navbar">
        <h2 class="logo">daily news</h2>
        <input type="checkbox" id="chk"></input>
        <label for="chk" class="show-menu-btn">
          <i class="fas fa-ellipsis-h"></i>
        </label>
        <ul class="menu">
          <a href="#home">Home</a>
          <a href="https://en.wikipedia.org/wiki/Book">Books</a>
          <a href="https://www.indiatoday.in/livetv">Live</a>
          <a href="/login">Login</a>
          <label for="chk" class="hide-menu-btn">
            <i class="fas fa-times"></i>
          </label>
        </ul>
      </nav>
      <nav class="searchbar">
        <li class="search-list">
          <Search
            placeholder="Enter input or search url.... "
            data={BookData}
          />
        </li>
      </nav>
      <section id="home">
        <NewsList />
      </section>
    </>
  );
}

export default NavBar;
