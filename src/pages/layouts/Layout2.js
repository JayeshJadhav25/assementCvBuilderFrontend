import React, { useEffect, useState } from "react";
import "../../resources/templates.css";
import axios from "axios";

import { useParams } from "react-router-dom";

const { REACT_APP_PUBLIC_URL } =process.env;

function Layout2() {

  const params = useParams();

  const user = {"_id": "62b6d8f435e4d1cd67338b1b","username": "jayesh","password": "jayesh@123","firstName": "Jayesh","lastName": "","email": "","mobileNumber": "","portfolio": "","address": "","carrierObjective": "","education": [],"skills": [],"experience": [],"projects": [],"createdAt": "2022-06-25T09:44:20.418Z","updatedAt": "2022-06-25T09:44:20.418Z","__v": 0};

  return (
    <div className="template1-parent">
      <div className="top d-flex flex-column">
        <h1>
          {user.firstName ? user.firstName.toUpperCase() : "" } {user.lastName ? user.lastName.toUpperCase() : "" }
        </h1>
        <div>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <p>{user.mobileNumber}</p>
        </div>
      </div>

      <div className="divider mt-3"></div>
      <div className="divider mt-1"></div>
      <div className="objective mt-3">
        <h3 style={{backgroundColor:'gray' , padding:10}}>Objective</h3>
        <hr />
        <p>{user.introduction}</p>
      </div>
      <div className="divider mt-3"></div>

      <div className="education mt-3">
        <h3 style={{backgroundColor:'gray' , padding:10}}>Education</h3>
        <hr />
        {user.education ? user.education.map((education) => {
          return (
            <div className="d-flex align-items-center">
              {/* <h6 style={{ width: 120 }}>
                <b>{education.range} : </b>
              </h6> */}
              <p>
                <b>- {education.degree}</b> with{" "}
                <b>- {education.percentage}%</b> in {education.institution}
              </p>
            </div>
          );
        }) : "" }
      </div>

      <div className="divider mt-3"></div>

      <div className="experience mt-3">
        <h3 style={{backgroundColor:'gray' , padding:10}}>Experience</h3>
        <hr />
        {user.experience ? user.experience.map((exp) => {
          return (
            <div className="d-flex align-items-center">
              <h6 style={{ width: 200 }}>
                <b>{exp.joiningDate} : {exp.leavingDate} </b>
              </h6>
              <p>
                <b>{exp.organization}</b> in <b>{exp.location}</b>
              </p>
            </div>
          );
        }): "" }
      </div>

      <div className="divider mt-3"></div>

      <div className="projects mt-3">
        <h3 style={{backgroundColor:'gray' , padding:10}}>Projects</h3>
        <hr />
        {user.projects ? user.projects.map((project) => {
          return (
            <div className="d-flex flex-column">
              <h6>
                <b>
                  {project.title} 
                </b>
              </h6>
              <h8>
                <b>
                    <p> Technologies : {project.technologies}</p>
                </b>
              </h8>
              <h8>
                <b>
                    <p> Description : {project.description}</p>
                </b>
              </h8>
              <br></br>
              <p>{project.rating}</p>
            </div>
          );
        }): "" }
      </div>

      <div className="divider mt-3"></div>

      <div className="projects mt-3">
        <h3 style={{backgroundColor:'gray' , padding:10}}>Skills</h3>
        <hr />
        {user.skills ? user.skills.map((skill) => {
          return <p>{skill.technology}</p>;
        }): ""}
      </div>
    </div>
  );
}

export default Layout2;