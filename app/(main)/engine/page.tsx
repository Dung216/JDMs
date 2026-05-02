"use client";
import axiosInstance from "@/app/utils/axios";
import { CarType, CreateCarType, UpdateCarType } from "@/app/type/car";
import CarList from "@/app/carlist";

export default function Page() {
  return <CarList />;
}
const URL = '/car';

// GET ALL
export const getUsers = async (): Promise<CarType[]> => {
  const res = await axiosInstance.get<CarType[]>(URL);
  return res.data;
};

// GET BY ID
export const getUserById = async (id: string) => {
  const res = await axiosInstance.get(`${URL}/${id}`);
  return res.data;
};

// CREATE
export const createUser = async (data: CreateCarType) => {
  const res = await axiosInstance.post(URL, data);
  return res.data;
};

// UPDATE
export const updateUser = async (id: string, data: UpdateCarType) => {
  const res = await axiosInstance.put(`${URL}/${id}`, data);
  return res.data;
};

// DELETE
export const deleteUser = async (id: string) => {
  const res = await axiosInstance.delete(`${URL}/${id}`);
  return res.data;
};