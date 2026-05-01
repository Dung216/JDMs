export default function ContactPage() {
  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center">

      <div className="w-[700px]">


        <div className="mb-6">
          <span className="bg-red-100 p-4 rounded-xl shadow-md w-[400px] text-black">
            Thông tin liên hệ
          </span>
        </div>

     
        <div className="bg-red-100 p-6 rounded-xl text-lg leading-8 shadow-md w-[700px] text-black">
          <p>
            <strong>Địa chỉ:</strong> Đại học Lạc Hồng, Biên Hòa, Đồng Nai.
          </p>

          <br />

          <p><strong>Email:</strong> phambac8526@gmail.com</p>
          <p><strong>SĐT:</strong> 0902073457 - Bắc</p>

          <br />

          <p><strong>Email:</strong> dung216dang@gmail.com</p>
          <p><strong>SĐT:</strong> 0814129540 - Dũng</p>
        </div>
      </div>
    </div>
  );
}