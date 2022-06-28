import React, { useState } from "react";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import axios from 'axios';

const { REACT_APP_PUBLIC_URL } = process.env;

const  SkillsEducation = () => {

  const [formData,setFormData] = useState({
    degree:'',
    percentage:'',
    institution:''
  })

  const { degree ,percentage,institution} = formData;

  const onChange = e => setFormData({...formData,[e.target.name]:e.target.value})
  // const onChange = (e) => {
  //   console.log('e.target',e.target.name);
  // }

  const addEducation = (e) => {
    e.preventDefault();
    console.log('formData',formData)
    try {

    } catch ( err ) {
      console.log(err)
    }
    console.log('inside addEducation')
  }


  return (
    <div>
      <h5><b>Education</b></h5>
      <hr />
      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-3">
                  <Form.Item
                    {...restField}
                    name={[name, "degree"]}
                    rules={[{ required: true, message: "Missing degree name" }]}
                    onChange={e=>onChange(e)}
                    // name='qualification'

                  >
                    <Input name='degree' placeholder="degree" />
                  </Form.Item>
                  </div>

                  <div className="col-md-2">
                  <Form.Item
                    {...restField}
                    name={[name, "percentage"]}
                    rules={[{ required: true, message: "Missing percentage name" }]}
                    onChange={e=>onChange(e)}

                  >
                    <Input name='percentage' placeholder="Percentage" />
                  </Form.Item>
                  </div>

                  <div className="col-md-3">
                  <Form.Item
                    {...restField}
                    name={[name, "institution"]}
                    rules={[{ required: true, message: "Missing institution name" }]}
                    onChange={e=>onChange(e)}

                  >
                    <Input name='institution' placeholder="Institution" />
                  </Form.Item>
                  </div>

                  <div className="col-md-2">
                    <MinusCircleOutlined style={{fontSize:25 , color:'tomato'}} onClick={() => remove(name)} />
                  </div>
                  
                 </>
              ))}
            </div>

            <Form.Item>
            <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Education
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <h5><b>Skills</b></h5>
      <hr />
      <Form.List name="skills">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-4">
                  <Form.Item
                    {...restField}
                    name={[name, "technology"]}
                    rules={[{ required: true, message: "Missing technology name" }]}
                  >
                    <Input placeholder="Technology" />
                  </Form.Item>
                  </div>

                  <div className="col-md-4">
                  <Form.Item
                    {...restField}
                    name={[name, "rating"]}
                    rules={[{ required: true, message: "Missing rating name" }]}
                  >
                    <Input placeholder="Rating" />
                  </Form.Item>
                  </div>

                 
                  <div className="col-md-2">
                  <MinusCircleOutlined style={{fontSize:25 , color:'tomato'}} onClick={() => remove(name)} />
                  </div>
                 </>
              ))}
            </div>

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Skill
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

    </div>
  );
}

export default SkillsEducation;
