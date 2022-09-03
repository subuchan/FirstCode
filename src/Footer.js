import React from "react";
import './Footer.css';
function Footer() {
  return (
    <div>
       <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our service</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">customer care</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>News</h4>
              <ul>
                <li>
                  <a href="#">cricket</a>
                </li>
                <li>
                  <a href="#">weather</a>
                </li>
                <li>
                  <a href="#">satellite</a>
                </li>
                <li>
                  <a href="#">live</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div class="design">
        <div class="designing">
          <h1>designed and developed by subash</h1>
          <hr class></hr>
        </div>
      </div>
    </div>
  );
}

export default Footer;
