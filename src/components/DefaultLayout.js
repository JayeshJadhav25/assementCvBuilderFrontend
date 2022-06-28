import { Button, Dropdown, Menu,message } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../resources/defaultlayout.css";
import { UserOutlined  } from "@ant-design/icons";
import axios from "axios";
import uuid4 from "react-uuid";

const { REACT_APP_PUBLIC_URL } = process.env;
function DefaultLayout(props) {
  // console.log(props.children)
  const navigate = useNavigate();

  const createCv = async (e) => {
    e.preventDefault();
    const cvName = prompt('Please enter CV Name');
    console.log('cvName',cvName);
    if(cvName === '' || cvName == null) {
      message.error('please enter cv name');
    } else {
      try {
         navigate(`/layoutSelect/${cvName}`);
      } catch ( err ) {
        console.log(err)
        message.error('something went wrong');
      }
    }
  }
  const menu = (
    <Menu>
      <Menu.Item>
      <Link to="/home">Home</Link>
      </Menu.Item>
      <Menu.Item>
        {/* <Link to={{pathname:"/profile",state:{test:'sdshdsh'}}}>Profile</Link> */}
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        <span>Logout</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="layout">
      <div className="header">
        {props.hideButton ? "" : <h1 onClick={()=>navigate('/home')} style={{cursor:'pointer'}}>My CV</h1> }
        {props.hideButton ? "" : <h1 onClick={(e)=> createCv(e)} style={{cursor:'pointer'}}>Create CV</h1> }
        {props.hideButton ? "" : <h1 onClick={() => navigate('/layouts')} style={{cursor:'pointer'}}>Layouts</h1> }
        {props.hideButton ? "" : 
        <Dropdown overlay={menu} placement="bottomLeft">
          <Button icon={<UserOutlined />}>{'jayesh'}</Button>
        </Dropdown> }
      </div>
      <div className="content" style={{overflow:'scroll'}}>{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
