import React from "react";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
const { TextArea } = Input;
function ExperienceProjects() {
  return (
    <div>

      <h5><b>Experience</b></h5>
      <hr />
      <Form.List name="experience">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "organization"]}
                      rules={[
                        { required: true, message: "Missing organization name" },
                      ]}
                    >
                      <Input placeholder="Organization" />
                    </Form.Item>
                  </div>

                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "position"]}
                      rules={[
                        { required: true, message: "Missing position name" },
                      ]}
                    >
                      <Input placeholder="Position" />
                    </Form.Item>
                  </div>

                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "location"]}
                      rules={[
                        { required: true, message: "Missing location name" },
                      ]}
                    >
                      <Input placeholder="Location" />
                    </Form.Item>
                  </div>
                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "ctc"]}
                      rules={[
                        { required: true, message: "Missing ctc name" },
                      ]}
                    >
                      <Input placeholder="ctc" />
                    </Form.Item>
                  </div>

                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "joiningDate"]}
                      rules={[
                        { required: true, message: "Missing joiningDate name" },
                      ]}
                    >
                      <Input placeholder="Joining Date" />
                    </Form.Item>
                  </div>

                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "leavingDate"]}
                      rules={[
                        { required: true, message: "Missing leavingDate name" },
                      ]}
                    >
                      <Input placeholder="Leaving Date" />
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, "technologies"]}
                      rules={[
                        { required: true, message: "Missing technologies name" },
                      ]}
                    >
                      <Input placeholder="technologies" />
                    </Form.Item>
                  </div>

                  

                  <div className="col-md-2">
                    <MinusCircleOutlined
                      style={{ fontSize: 25, color: "tomato" }}
                      onClick={() => remove(name)}
                    />
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
                Add Experience
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <h5><b>Projects</b></h5>
      <hr />
      <Form.List name="projects">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "title"]}
                      rules={[
                        { required: true, message: "Missing title name" },
                      ]}
                    >
                      <Input placeholder="Title" />
                    </Form.Item>
                  </div>

                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "duration"]}
                      rules={[
                        { required: true, message: "Missing duration name" },
                      ]}
                    >
                      <Input placeholder="Duration" />
                    </Form.Item>
                  </div>

                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "technologies"]}
                      rules={[
                        { required: true, message: "Missing technologies name" },
                      ]}
                    >
                      <Input placeholder="Technologies" />
                    </Form.Item>
                  </div>

                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "description"]}
                      rules={[
                        { required: true, message: "Missing description name" },
                      ]}
                    >
                      <TextArea placeholder="Description" />
                    </Form.Item>
                  </div>


                  <div className="col-md-2">
                    <MinusCircleOutlined
                      style={{ fontSize: 25, color: "tomato" }}
                      onClick={() => remove(name)}
                    />
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
                Add Project
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
}

export default ExperienceProjects;
