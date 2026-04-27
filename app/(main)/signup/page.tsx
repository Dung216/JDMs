"use client";

import React from "react";
import { useRouter } from "next/navigation";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";

type FieldType = {
  email?: string;
  password?: string;
};

export default function SignupPage() {
  const router = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const res = await fetch("https://your-api.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup success");
        router.push("/login");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-200">
      <div className="bg-red-100 p-10 rounded-xl shadow-md w-[400px] text-black">
        <h2 className="text-2xl font-bold text-center mb-6">
          Sign Up
        </h2>

        <Form
          name="signup"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 6, message: "Ít nhất 6 ký tự!" },
            ]}
          >
            <Input.Password />
          </Form.Item>

          {/* Submit */}
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>

          {/* 2 nút dưới */}
          <Form.Item wrapperCol={{ span: 24 }}>
            <div className="flex gap-4 mt-2">
              <Button
                onClick={() => router.push("/login")}
                className="flex-1 !bg-gray-200 hover:!bg-gray-300 !text-black !border !border-black"
              >
                Quay lại đăng nhập
              </Button>

              <Button
                onClick={() => router.push("/forgot-password")}
                className="flex-1 !bg-blue-500 hover:!bg-blue-600 !text-white"
              >
                Quên mật khẩu
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}