"use client";
import { Button, Table, Image, Modal, Input } from "antd";
import  CarService  from "@/app/services/car/car.service";
import { CarType } from "./type/car";
import { useState, useEffect } from "react";

export default function CarList() {
  // Columns cho table
  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên Xe",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (url: string) => {
  return (
    <div className="w-[300px] h-[300px] overflow-hidden rounded">
      <Image
       src={url}
        alt="Hình ảnh"
        width={300}
        height={300}
        style={{ objectFit: "cover" }}
      
      />
    </div>
  );
}
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Giá xe",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Chức năng",
      render: (item: CarType) => {
        return (
          <div className="flex gap-2">
            <Button
              color="pink"
              variant="solid"
              onClick={() => openUpdateModal(item)}
            >
              Cập nhật
            </Button>
            <Button color="red" variant="solid" onClick={() => openDeleteModal(item)}>
              Xóa
            </Button>
          </div>
        );
      },
    },
  ];

  //  GET
  const [carData, setCarData] = useState<CarType[]>([]);

  const fetchCarData = async () => {
    const data = await CarService.getAllCars();
    setCarData(data);
  };

  useEffect(() => {
    fetchCarData(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //  Add (Update)
  const [modalUpdate, setModalUpdate] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [carIdSelected, setCarIdSelected] = useState("");

  //  inputs model
  const [carName, setCarName] = useState("");
  const [carImage, setCarImage] = useState("");
  const [carDescription, setCarDescription] = useState("");
  const [carPrice, setCarPrice] = useState("");

  const resetForm = () => {
    setCarName("");
    setCarImage("");
    setCarDescription("");
    setCarPrice("");
  };

  const openUpdateModal = (carData: CarType | null) => {
    // update
    if (carData) {
      setIsUpdate(true);
      setCarIdSelected(carData.id);
      setCarName(carData.name);
      setCarImage(carData.image);
      setCarDescription(carData.description);
      setCarPrice(carData.price);
    }
    // create
    else {
      setCarIdSelected("");
      setIsUpdate(false);
      resetForm();
    }
    setModalUpdate(true);
  };

  const closeModal = () => {
    resetForm();
    setModalUpdate(false);
  };

  const handleUpdateCar = async () => {
    const payload = {
      name: carName,
      image: carImage,
      description: carDescription,
      price: carPrice,
    };

    if (isUpdate) {
      await CarService.updateCar(carIdSelected, payload);
    } else {
      await CarService.addCar(payload);
    }

    resetForm();
    fetchCarData();
    closeModal();
  };

  //Delete
  const [ deleteModal, setDeleteModal ] = useState(false)

  const openDeleteModal = ( carData: CarType) => {
    setCarIdSelected(carData.id)
    setDeleteModal(true);
  };

  const handleDelete = async () => {
    await CarService.deleteCar(carIdSelected);
    fetchCarData();
    closeDeleteModal();
  }

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="flex justify-end">
        <Button
          variant="solid"
          color="blue"
          onClick={() => openUpdateModal(null)}
        >
          Thêm mới
        </Button>
      </div>
      <Table
        dataSource={carData}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />
      {/* Modal add (update) */}
      <Modal
        title={isUpdate ? 'Cập nhật' : 'Thêm mới'}
        closable={{ "aria-label": "Custom Close Button" }}
        open={modalUpdate}
        onCancel={closeModal}
        onOk={handleUpdateCar}
      >
        <label>Tên xe</label>
        <Input
          size="large"
          placeholder="Tên xe"
          value={carName}
          onChange={(name) => setCarName(name.target.value)}
        />
        <label>Hình xe</label>
        <Input
          size="large"
          placeholder="hình ảnh"
          value={carImage}
          onChange={(img) => setCarImage(img.target.value)}
        />
        <label>Mô tả xe</label>
        <Input
          size="large"
          placeholder="Mô tả"
          value={carDescription}
          onChange={(desc) => setCarDescription(desc.target.value)}
        />
        <label>Giá xe</label>
        <Input
          size="large"
          placeholder="Giá"
          value={carPrice}
          onChange={(price) => setCarPrice(price.target.value)}
        />
      </Modal>
      {/* Modal delete */}
      <Modal 
        title="Xoá xe"
        closable={{"aria-label": "Custom Close Button"}}
        open={deleteModal}
        onCancel={closeDeleteModal}
        onOk={handleDelete}
     >
        Bạn muốn xoá xe ?
      </Modal>
    </div>
  );
}