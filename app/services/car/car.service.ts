import axiosInstance from "@/app/utils/axios";
import { CarType, CreateCarType, UpdateCarType } from "@/app/type/car";
const CarService = {
    getAllCars: async (): Promise<CarType[]> => {
        const response = await axiosInstance.get("/car");
        return response.data;
    },

    getCarById: async (id: string): Promise<CarType> => {
        const response = await axiosInstance.get(`/car/${id}`);
        return response.data;
    },

    addCar: async (carData: CreateCarType): Promise<CarType> => {
        const response = await axiosInstance.post("/car", carData);
        return response.data;
    },

    updateCar: async (id: string, carData: UpdateCarType): Promise<CarType> => {
        const response = await axiosInstance.put(`/car/${id}`, carData);
        return response.data;
    },

    deleteCar: async (id: string): Promise<void> => {
        await axiosInstance.delete(`/car/${id}`);
    },
};

export default CarService;