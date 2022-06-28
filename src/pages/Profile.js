import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Button, Form, message, Spin, Tabs } from "antd";
import PersonalInfo from "../components/PersonalInfo";
import SkillsEducation from "../components/SkillsEducation";
import ExperienceProjects from "../components/ExperienceProjects";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const { REACT_APP_PUBLIC_URL } =process.env;

const { TabPane } = Tabs;
const  Profile = () => {
  const params = useParams();
  
  const [loading, setLoading] = useState(false);
  const [isBusy,setBusy]=useState(false);
  const [user,setUser]=useState({});

  const navigate = useNavigate();

  // const [data, setData] = useState({
  //   profileDetail: {},
  // })
  // var user = {"_id": "62b6d8f435e4d1cd67338b1b","username": "jayesh","password": "jayesh@123","firstName": "jayesh","lastName": "jadhav","email": "","mobileNumber": "","portfolio": "","address": "","carrierObjective": "","education": [],"skills": [],"experience": [],"projects": [],"createdAt": "2022-06-25T09:44:20.418Z","updatedAt": "2022-06-25T09:44:20.418Z","__v": 0};

  // var user = {};
    const getDetails = () => {
      console.log('params id',params.id)
      const config = {
        headers: {
            'Content-Type':'application/json',
            'Authorization': localStorage.getItem("token")
        }
      }
      axios.get(`${REACT_APP_PUBLIC_URL}/cv/getCvById/${params.id}`,config).then((res) => {
          // res.data.result[0].mobileNumber = res.data.result[0].mobileNo;
          setUser(res.data.result[0]);
          setBusy(true)
      })
    }

    const goBack = () => {
      if(window.confirm('Are you sure you want to go back?')) {
          navigate('/home');
      }
    }

  useEffect(() => {
    console.log('inside')
    getDetails()
    // var user = {"_id": "62b6d8f435e4d1cd67338b1b","username": "jayesh","password": "jayesh@123","firstName": "jayesh","lastName": "jadhav","email": "","mobileNumber": "","portfolio": "","address": "","carrierObjective": "","education": [],"skills": [],"experience": [],"projects": [],"createdAt": "2022-06-25T09:44:20.418Z","updatedAt": "2022-06-25T09:44:20.418Z","__v": 0};

  },[])

  const onFinish = async (values) => {
    setLoading(true);
    try {

      const config = {
        headers: {
            'Content-Type':'application/json',
            'Authorization': localStorage.getItem("token")
        }
      }
      let tObj = values;
      tObj._id = params.id;
      console.log('tObj-->',tObj);

      const result = await axios.post(`${REACT_APP_PUBLIC_URL}/cv/create`,tObj,config);
      setLoading(false);
      message.success("Profile updated successfully");
    } catch (error) {
      setLoading(false);
      message.error("Registration failed");
    }
  };
  return (
    <DefaultLayout hideButton={true}>
      {loading && <Spin size="large" />}
      <div className="update-profile">
        <h4><b>Update Profile</b></h4>
        <button onClick={() => goBack()}>Back</button>
        <hr />
        {isBusy ? 
        <Form layout="vertical" onFinish={onFinish} initialValues={user}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Personal Info" key="1">
              <PersonalInfo />
            </TabPane>
            <TabPane tab="Skills and Education" key="2">
              <SkillsEducation />
            </TabPane>
            <TabPane tab="Experience / Projects" key="3">
              <ExperienceProjects />
            </TabPane>
          </Tabs>

          <Button htmlType="submit">UPDATE</Button>
        </Form>
       : 
        ""
       }
      </div>
    </DefaultLayout>
  );
}

export default Profile;
