import React, { Component } from "react";
import "../css/formsearch.css";

export default class Formsearch extends Component {
  render() {
    return (
      <div>
        <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
          <div class="container">
            <div class="row">

              <div class="col col-12 jsend ">
                <div class="col-3">
                  <button
                    type="button"
                    class="btn btn-primary mb-2"
                    data-toggle="modal"
                    data-target="#addCustomer"
                    data-whatever="@mdo"
                  >
                    Add Customer
                  </button></div>
              </div>
              <div class="col col-12">
                <div class="col-10">
                  <label for="inputEmail3" class="col-form-label">

                  </label>
                  <input
                    class="form-control form-control-sm  "
                    type="text"
                    placeholder="Find By Customer ID"
                    aria-label="Find By Customer ID"
                  />
                </div>

                <div class="col-2">
                  <button
                    type="button"
                    class="btn btn-primary mb-2"
                    data-toggle="modal"
                    data-target="#search"
                    data-whatever="@mdo"
                  >
                    Detailed Search
                  </button>
                </div>
              </div>
              <div class="col col-12">
                <div class="col-10">
                  <label for="inputEmail3" class="col-form-label">

                  </label>
                  <input
                    class="form-control form-control-sm  "
                    type="text"
                    placeholder="Find By Contract ID"
                    aria-label="Find By Contract ID"
                  />
                </div>

                <div class="col-2">
                  <button type="submit" class="btn btn-primary mb-2">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div class="row"></div>
          </div>
        </form>

        {/* Modal Search */}
        <div
          class="modal fade"
          id="search"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Search
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <div class="col-10 margin-20">
                      <label for="inputEmail3" class="col-form-label">
                        MSISDN
                      </label>
                      <input
                        class="form-control form-control-sm  "
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                    <div class="col-10 margin-20">
                      <label for="inputEmail3" class="col-form-label">
                        MSISDN
                      </label>
                      <input
                        class="form-control form-control-sm  "
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                    <div class="col-10 margin-20">
                      <label for="inputEmail3" class="col-form-label">
                        MSISDN
                      </label>
                      <input
                        class="form-control form-control-sm  "
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                    <div class="col-10 margin-20">
                      <label for="inputEmail3" class="col-form-label">
                        MSISDN
                      </label>
                      <input
                        class="form-control form-control-sm  "
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                    <div class="col-10 margin-20">
                      <label for="inputEmail3" class="col-form-label">
                        MSISDN
                      </label>
                      <input
                        class="form-control form-control-sm  "
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                    <div class="col-10 margin-20">
                      <label for="inputEmail3" class="col-form-label">
                        MSISDNMSISDNMSISDNMSISDN
                      </label>
                      <input
                        class="form-control form-control-sm  "
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                    <div class="col-10 margin-20">
                      <label for="inputEmail3" class="col-form-label">
                        MSISDN
                      </label>
                      <input
                        class="form-control form-control-sm  "
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                  </div>

                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Search
                </button>
              </div>
            </div>

          </div>
        </div>
        {/* Modal Search  End*/}

        {/* Modal Add Customer */}
        <div
          class="modal fade"
          id="addCustomer"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Search
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <div class="col-10 margin-20">
                      <label for="inputEmail3" class="col-form-label">
                        MSISDN
                      </label>
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="col-10 margin-20">
                      <label for="inputEmail3" class="col-form-label">
                        MSISDN
                      </label>
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="col-10 margin-20">
                      <label for="inputEmail3" class="col-form-label">
                        MSISDN
                      </label>
                      <input
                        class="form-control form-control-sm  "
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                    <div class="col-10 margin-20">
                      <label for="inputEmail3" class="col-form-label">
                        MSISDN
                      </label>
                      <input
                        class="form-control form-control-sm  "
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                    <div class="col-10 margin-20">
                      <label for="inputEmail3" class="col-form-label">
                        MSISDN
                      </label>
                      <input
                        class="form-control form-control-sm  "
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                    <div class="col-10 margin-20">
                      <label for="inputEmail3" class="col-form-label">
                        MSISDNMSISDNMSISDNMSISDN
                      </label>
                      <input
                        class="form-control form-control-sm  "
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                    <div class="col-10 margin-20">
                      <label for="inputEmail3" class="col-form-label">
                        MSISDN
                      </label>
                      <input
                        class="form-control form-control-sm  "
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                  </div>

                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Search
                </button>
              </div>
            </div>

          </div>
        </div>
        {/* End */}
      </div>
    );
  }
}
