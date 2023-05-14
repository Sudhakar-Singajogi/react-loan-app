import React from "react";
import RecentFeeder from "../Components/RecentFeeder";
import TwoBoxLayout from "../Components/TwoBoxLayout";
import ApplicantForm from "./NewApplicantRelatedForm/ApplicantForm";

import "../css/new-applicant.css";
function NewApplicant() {
  return (
    <>
      {/* <TwoBoxLayout params={{"leftCardComponent":RecentFeeder, "rightCardComponent":ApplicantForm, "title":<div classNameName="card-title h5">New Loan Applicant</div>}} /> */}
      <div className="container">
        <div className="box box1">
          <div className="card">
            <div className="card-header card-header-tabs card-header-primary">
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <h4 className="card-title">Recent Feeds</h4>
                  {/* <p className="card-category">New employees on 15th September, 2016</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box box2">
          <div className="card">
            <div className="card-header card-header-warning">
              <div class="nav-tabs-navigation">
                <div class="nav-tabs-wrapper">
                  {/* <span class="nav-tabs-title">Tasks:</span> */}
                  <ul class="nav nav-tabs" data-tabs="tabs">
                    <li class="nav-item">
                      <a
                        class="nav-link active show"
                        href="#profile"
                        data-toggle="tab"
                      >
                        <i class="material-icons">bug_report</i> Bugs
                        <div class="ripple-container"></div>
                        <div class="ripple-container"></div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#messages" data-toggle="tab">
                        <i class="material-icons">code</i> Website
                        <div class="ripple-container"></div>
                        <div class="ripple-container"></div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#settings" data-toggle="tab">
                        <i class="material-icons">cloud</i> Server
                        <div class="ripple-container"></div>
                        <div class="ripple-container"></div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewApplicant;
