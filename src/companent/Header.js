import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import DataTable from "./DataTable";
import Rapor1 from "./Rapor1";
import Formsearch  from "./Formsearch";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

const Table1 = (props) => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {" "}
              <div className="dropdown">
                <Link className="dropdown-item" to="/anasayfa">
                  Anasayfa
                </Link>
              </div>
              <div className="dropdown">
                <Link className="dropdown-item" to="/tesistanımı">
                  Anasayfa
                </Link>
              </div>
              <div className="dropdown">
                <Link className="dropdown-item" to="/anasayfa">
                  Anasayfa
                </Link>
              </div>
              <div className="dropdown">
                <Link className="dropdown-item" to="/anasayfa">
                  Anasayfa
                </Link>
              </div>
              <div className="dropdown">
                <Link className="dropdown-item" to="/anasayfa">
                  Anasayfa
                </Link>
              </div>
              
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <button
                className="btn  "
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FaUserAlt /> test@gmail.com
              </button>

              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                <IoExitOutline /> Çıkış
              </button>
            </form>
          </div>
        </nav>

        <div>
          <Switch>
            <Route path="/anasayfa">
              <Rapor1 />
            </Route>
            <Route path="/">
              <Rapor1 />
            </Route>
            <Route path="/tesistanımı">
              <div class="container margin40">
                <Formsearch/>
                <DataTable/>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Table1;
