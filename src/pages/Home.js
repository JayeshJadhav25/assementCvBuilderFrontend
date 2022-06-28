import React, { useEffect,useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import templateimg from "../resources/templates/template1.png";
import template2img from "../resources/templates/template2.png";
import "../resources/templates.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const { REACT_APP_PUBLIC_URL } =process.env;

const Home = () => {
  const [isBusy,setBusy]=useState(false);
  
  const [cvData,setCvData]=useState([]);
  const navigate = useNavigate();
  const [msg,setMsg]=useState("");

  const getCv = () => {
    try {
      const config = {
        headers: {
            'Content-Type':'application/json',
            'Authorization': localStorage.getItem("token")
        }
      }
      axios.get(`${REACT_APP_PUBLIC_URL}/cv/get`,config).then((res) => {
        if(res.data.result.length == 0){
          setMsg('You have not created any CV yet lets create one');

        }
        else {
          setCvData(res.data.result);
          setMsg("");

        }
          // setBusy(true)
          console.log('cvDetails',res.data)
      })
    } catch ( err ) {
      console.log(err)
    }
  }

  const onDelete = (id) => {
    
    try {
      console.log('onDelete ',id)
      if(window.confirm('Are you sure you want to Delete')) {
          const config = {
            headers: {
                'Content-Type':'application/json',
                'Authorization': localStorage.getItem("token")
            }
          }
          axios.post(`${REACT_APP_PUBLIC_URL}/cv/delete/${id}`,{},config).then((res) => {
              // window.location.reload();
              getCv()
          })
        }
      } catch ( err ) {
        console.log(err)
      }
  }
  useEffect(() => {
    getCv();
  },[])
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
    <DefaultLayout>
      <div className="row home">
        <h1>{msg}</h1>
        {cvData.map((template, index) => {
          return (
            <div className="col-md-4">
              <div className="template">
                <img
                  src={template.templateName && template.templateName == 'Highlighted Sections Resume' ? template2img  : templateimg}
                  height="400"
                  alt=""
                  style={{ width: "100%" }}
                />
                <div className="text">
                  <p>{template.name}</p>
                  <button onClick={() => navigate(`/profile/${template._id}`)}>
                    Edit
                  </button>
                  <br></br>
                  <button onClick={() => navigate(`/templates/${template._id}/${template.templateName}`)}>
                    Preview
                  </button>
                  <br></br>
                  <button onClick={() => onDelete(template._id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DefaultLayout>
  );
}

export default Home;
