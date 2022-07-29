import React from "react";

const Navbar = () => {
  const navStyle = {
    height: "135px",
  };

  const sectionStyle = {
    marginLeft: '200px'
  }
  const navLinkStyle = {
    
  }
  return (
    <>
      <section>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          style={navStyle}
        >
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="./images/BCA.jpg" alt="" height={90}/>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown" style={sectionStyle}>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={navLinkStyle}
                  >
                    ABOUT US
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        KLE SOCIETY
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        KLE BCA
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        COORDINATOR'S MESSAGE
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ACADEMICS
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        BCA
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        SPECALIZATION
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ADMISSION
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        BROACHER
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        ELIGIBILITY
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        APPLY ONLINE
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    OUR FACULTY
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    STUDENTS
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        STUDENT UNION
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        FEAST
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        SEMINAR &amp; WORKSHOP
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    FACILITIES
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        CLASSROOM
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        LIBRARY
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        COMPUTER LAB
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
