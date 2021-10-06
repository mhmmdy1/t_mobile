import React, { Component } from "react";
import "../css/formsearch.css";

export default class Formsearch extends Component {
  render() {
    return (
      <div>
        <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
          <div class="container">
            <div class="row">
              <div class="col col-12">
                <div class="col-10">
                  <label for="inputEmail3" class="col-form-label">
                    Email
                  </label>
                  <input
                    class="form-control form-control-sm  "
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>

                <div class="col-2">
                  <button
                    type="button"
                    class="btn btn-primary mb-2"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    data-whatever="@mdo"
                  >
                    Detailed Search
                  </button>
                </div>
              </div>
              <div class="col col-12">
                <div class="col-10">
                  <label for="inputEmail3" class="col-form-label">
                    Email
                  </label>
                  <input
                    class="form-control form-control-sm  "
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
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
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  New message
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
                  <div class="col-10">
                  <label for="inputEmail3" class="col-form-label">
                    Email
                  </label>
                  <input
                    class="form-control form-control-sm  "
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
                  </div>
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">
                      Message:
                    </label>
                    <textarea class="form-control" id="message-text"></textarea>
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
      </div>
    );
  }
}
