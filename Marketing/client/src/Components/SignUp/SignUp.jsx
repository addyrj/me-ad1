import React, { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import "./SignUp.scss";
import { Input, Form, Button, message } from "antd";
import axios from "axios";
const SignUpForm = ({ setShowModal }) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const apiUrl = "https://api.playindia24.live/api/v1/users/register";
    // const apiUrl = "http://localhost:4001/api/v1/users/register";
    await axios
      .post(apiUrl, values)
      .then((response) => {
        if (response?.data?.status) {
          message.success(response?.data?.message);
        }
      })
      .catch((error) => {
        message.error(error?.response?.data?.message);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="form-cont">
      <div className="form">
        <div className="sign-up-heading">
          <h2>Sign up</h2>
          <span>
            <RxCross1 onClick={() => setShowModal(false)} />
          </span>
        </div>
        <Form
          layout="vertical"
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="name"
            label="Username"
            rules={[
              {
                required: false,
                message: "Please input your name!",
              },
            ]}
          >
            <Input placeholder="name..." />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: false,
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder="email..." />
          </Form.Item>
          <Form.Item
            name="mobileNo"
            label="Mobile"
            rules={[
              {
                required: true,
                message: "Please input your mobile!",
              },
            ]}
          >
            <Input placeholder="mobile..." type="number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
