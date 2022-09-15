import React from "react";
import "./Navbar.css";
import NewsList from "./NewsList";
function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-md">
        <a class="navbar-brand" href="#">
          NEWS DAILY
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon">
            <i class="fa-solid fa-bars-progress"></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#home">
                HOME
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://en.wikipedia.org/wiki/Book">
                BOOKS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.indiatoday.in/livetv">
                LIVE
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                LOGIN
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section id="home">
        <div class="home-page">
          <div class="fixed">
            <form
              action="http://www.google.com/search"
              method="get"
              class="search-bar"
            >
              <input type="text" placeholder="search anything" name="q"></input>
              <button type="submit">
              <i class="fa-brands fa-searchengin"></i>
              </button>
            </form>
          </div>
          <div class="front">
            <h2>Welcome To News World</h2>
            <p>To Read More News ::: scroll Down...</p>
          </div>
        </div>
        <NewsList />
        <div class="foot-page">
        <div class="back">
           
          </div>

        </div>
      </section>
    </>
  );
}

export default NavBar;
