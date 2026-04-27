"use client";

import React from "react";
import { useRouter } from "next/navigation";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";

type FieldType = {
  email?: string;
};

export default function ForgotPasswordPage() {
  const router = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const res = await fetch("https://your-api.com/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Kiểm tra email để đặt lại mật khẩu");
      } else {
        alert(data.message || "Có lỗi xảy ra");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-200">
      <div className="bg-red-100 p-10 rounded-xl shadow-md w-[400px] text-black">
        <h2 className="text-2xl font-bold text-center mb-6">
          Quên mật khẩu
        </h2>

        <Form
          name="forgot"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          autoComplete="off">
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}>
            <Input />
          </Form.Item>


          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Gửi link reset
            </Button>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <div className="flex gap-4 mt-2">
              <Button
                onClick={() => router.push("/login")}
                className="flex-1 !bg-gray-200 hover:!bg-gray-300 !text-black !border !border-black">
                Quay lại đăng nhập
              </Button>

              <Button
                onClick={() => router.push("/signup")}
                className="flex-1 !bg-red-500 hover:!bg-red-600 !text-white">
                Đăng ký ngay
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}