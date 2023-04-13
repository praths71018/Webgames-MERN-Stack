import React from "react";
import "./Homepage.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="Fhead">PES GAMING</h2>
      <div className="fdiv">
        <h4>Developers</h4>
        <p className="Fp1">
          <br />
          Pratham R Shetty: 2nd Year CSE
          <br />
          ***********************
          <br />
          **********************
        </p>
      </div>
      <div className="fdiv2">
        <h4>Address</h4>
        <address className="Fp1">
          <br />
          PES University,VM67+HVP, Hosur Rd, Konappana Agrahara, Electronic
          City, Bengaluru, Karnataka 560100
        </address>
      </div>
      <div className="fdiv3">
        <h4>Mail us</h4>
        <br />
        <p className="Fp1">
          Click on who you want to mail
          <br />
          <a href="mailto:prathamshetty0825@gmail.com" className="mail">
            Webpage Developer
          </a>
          <br />
          <a href="mailto:prathamshetty0825@gmail.com" className="mail">
            Admin
          </a>
        </p>
      </div>
      <div className="fdiv4">
        <h4>Contact Us</h4>
        <br />
        <p className="Fp1">
          <a className="mail" href="tel:+91 **********">
            +91 **********
          </a>
          <br />
          <a className="mail" href="tel:+91 **********">
            +91 **********
          </a>
          <br />
          <a className="mail" href="tel:+91 **********">
            +91 **********
          </a>
          <br />
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-instagram"></a>
          <a href="#" className="fa fa-reddit"></a>
        </p>
      </div>
      <p className="copyright">
        Copyright &copy;2022 All rights reserved, PES UNIVERSITY, Bengaluru,
        Karnataka 560100
      </p>
    </footer>
  );
}

export default Footer;
