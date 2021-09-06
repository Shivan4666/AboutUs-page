import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Styles.css";
import CallIcon from "@material-ui/icons/Call";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ContactsIcon from "@material-ui/icons/Contacts";

const Navbar = () => {
  return (
    <>
      <div className="bar">
        <table>
          <tr>
            <th>
              <img
                src="https://kaybeebio.com//wp-content/uploads/2020/05/logo-for-footer_2.png"
                alt="regerg"
                className="paint"
              />
            </th>
            <th>
              <form>
                <input
                  className="input"
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </th>
            <th>
              <div>
                <ul class="nav justify-content-end">
                  <li className="first" class="nav-item">
                    <a class="nav-link active" href="w">
                      <CallIcon />
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="w">
                      <AddShoppingCartIcon />
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="w">
                      <ContactsIcon />
                    </a>
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link disabled" href="w">
              Disabled
            </a> */}
                    <div class="pos-f-t">
                      <div class="collapse" id="navbarToggleExternalContent">
                        <div class="bg-dark p-4">
                          <h4 class="text-white">Collapsed content</h4>
                          <span class="text-muted">
                            Toggleable via the navbar brand.
                          </span>
                        </div>
                      </div>
                      <nav class="navbar navbar-dark ">
                        <button
                          className="bg"
                          //class="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="wnavbarToggleExternalContent"
                          aria-controls="navbarToggleExternalContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span class="navbar-toggler-icon"></span>
                        </button>
                      </nav>
                    </div>
                  </li>
                </ul>
              </div>
            </th>
          </tr>
        </table>
      </div>
      <table className="tab">
        <tr>
          <td>
            <div className="color">
              <div className="back">
                <div className="photo">
                  <h1 className="two">ABOUT US</h1>
                  <p className="twwo">
                    Kay Bee Bio-organics Ltd. India's first ever manufacturer of
                    botanical based Bio-pesticides is a subsidiary company of
                    Kay Bee Exports which is Leading exporters of residue free &
                    organic products. Key products are Pomegranates, Mangoes,
                    Fresh-Cut fruits, Okra, Gourds, Chilies etc. It handles more
                    than 5000 tons of produce per annum with customers in
                    Europe, North America, Middle East, South East Asia and
                    Oceania. We, Kay Bee Bio-Organics are committed for the
                    manufacturing and supply of agricultural Inputs especially
                    for the Organic and Sustainable farming. As exporters, we
                    worked with farmers in the form of contract farming from
                    last 15 years and we realize farmer’s difficulties about
                    cost-effective feasible organic and residue free farming.
                  </p>
                </div>
              </div>
            </div>
          </td>
          <td>
            <img
              src="/pictures/aboutus image1.jpeg"
              alt="hbjhbjhbh"
              className="icon"
            />
          </td>
        </tr>
      </table>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>BRIEF HISTORY</h1>
      <br />
      <br />
      <br />
      <br />
      <div className="colorr">
        <div className="back1">
          <h1 className="two">OUR VISION</h1>
          <p className="twwo">
            Main vision of Kay Bee Bio-Organics is to replace harmful chemical
            synthetic pesticides by organic pesticides with insuring less cost
            of production at farmer level. Being in line with our mote we
            produce the products which are harmless to mammalian’s, environments
            and rhizospheres. Our products are highly suitable for organic
            farming and recommended for residue-free export quality
            agro-production, and sustainable agriculture.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>OUR ACHIEVEMENTS</h1>
      <br />
      <br />
      <br />
      <br />
      <p className="three">
        Leveraging our knowledge of business, we’re able to create superlative
        solutions that integrate more than just the state-of-the-art technology.
        There’s tremendous value in manufacturing innovative products that match
        to the current needs of genuine organic and residue free inputs for
        Agriculture, Horticultural, Floriculture, Tea and Spices farming. Kay
        Bee Bio-Organics offer a complete solution in Agriculture to help
        farmers meet their challenges in the field every season.
      </p>
      <br />
      <br />
      <table>
        <tr>
          <td>
            <img
              src="./pictures/download-1.png"
              alt="failed"
              className="img11"
            ></img>
            <figcaption className="img1" alt="gfh">
              ISO CERTIFIED
            </figcaption>
          </td>
          <td>
            <img
              src="./pictures/download-2.png"
              className="img22"
              alt="sh"
            ></img>
            <figcaption className="img2" alt="ch">
              ECOCERT CERTIFIED
            </figcaption>
          </td>
          <td>
            <img
              src="./pictures/download-3.png"
              className="imgg33"
              alt="dgd"
            ></img>
            <figcaption className="img3">CIB REGISTERED</figcaption>
          </td>
        </tr>
      </table>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>CORPORATE STRUCTURE</h1>
      <br />
      <br />
      <br />
      <br />
      <div className="graph">
        <p className="ga">
          Understanding the global threat that chemical pesticides have on our
          ecosystem, crops and thus our own health, the management at KBBO
          created and nurtured a foundation of excellence that led to quality
          products that fulfill the need of sustainable and organic farming
          practices.
        </p>
      </div>
      <figure>
        <table>
          <tr>
            <td>
              <img
                src="./pictures/Prakash Khakhar.png"
                alt="failed"
                className="img11"
              ></img>
              <figcaption className="img1">PRAKASH KHAKHAR</figcaption>
            </td>
            <td>
              <img
                src="./pictures/Kaushal Khakhar.png"
                className="img22"
                alt="ccghh"
              ></img>
              <figcaption className="img2">KAUSHAL KHAKHAR</figcaption>
            </td>
            <td>
              <img
                src="./pictures/Sachin Yadav.png"
                className="img33"
                alt="dthj"
              ></img>
              <figcaption className="img3">SACHIN YADAV</figcaption>
            </td>
          </tr>
        </table>
      </figure>
    </>
  );
};
export default Navbar;
