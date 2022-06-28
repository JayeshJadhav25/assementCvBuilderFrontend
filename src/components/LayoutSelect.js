import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import templateimg from "../resources/templates/template1.png";
import template2img from "../resources/templates/template2.png";
import "../resources/templates.css";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import uuid4 from "react-uuid";

const { REACT_APP_PUBLIC_URL } =process.env;

const LayoutSelect = () => {
  const params = useParams();
  console.log('params',params);
  const onSelect = async (title) => {
    try {
      const newData = {
        name:params.name,
        _id:uuid4(),
        templateName:title
       }
       const config = {
           headers: {
               'Content-Type':'application/json',
               'Authorization': localStorage.getItem("token")
           }
        }

       const body = JSON.stringify(newData);
       const res = await axios.post(`${REACT_APP_PUBLIC_URL}/cv/create`,body , config);

       navigate('/home')

    } catch ( err ) {
      console.log(err)
    }
  }
  const navigate = useNavigate();
  const templates = [
    {
      title: "Simple Resume",
      image: templateimg,
    },
    {
      title: "Highlighted Sections Resume",
      image: template2img,
    },
  ];
  return (
    // <DefaultLayout>
      <div className="row home">
        {templates.map((template, index) => {
          return (
            <div className="col-md-4">
              <div className="template">
                <img
                  src={template.image}
                  height="400"
                  alt=""
                  style={{ width: "100%" }}
                />
                <div className="text">
                  <p>{template.title}</p>
                  <button onClick={() => onSelect(template.title)}>
                    Select
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    // </DefaultLayout>
  );
}

export default LayoutSelect;
