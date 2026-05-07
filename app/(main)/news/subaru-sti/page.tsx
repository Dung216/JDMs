import Link from "next/link";

export default function SubaruSTIPage() {
  return (
    <main className="min-h-screen bg-black text-white px-[3cm] py-20">
      
      {/* TITLE */}
      <div className="mb-16">
        <h1
          className="
            text-5xl
            md:text-7xl
            font-black
            italic
            text-red-500
            leading-tight
            uppercase
          "
        >
          SUBARU IMPREZA WRX STI
        </h1>

        <div className="mt-6 h-2 w-32 bg-red-500"></div>
      </div>

      {/* IMAGE */}
      <div className="mb-16 overflow-hidden rounded-[30px] border border-white/10">
        <img
          src="/STI.jpg"
          alt="Subaru STI"
          className="
            w-full
            h-[700px]
            object-cover
          "
        />
      </div>

    {/* CONTENT */}
<div
  className="
    mx-auto
    max-w-[1400px]
    text-gray-300
    text-[20px]
    leading-[2.3]
    tracking-wide
    space-y-12
    font-light
  "
>
  <p className="text-justify">
    Subaru WRX là mẫu sedan hiệu suất cao nổi tiếng đến từ Nhật Bản,
    được phát triển dựa trên dòng Subaru Impreza huyền thoại.
    Ra mắt lần đầu vào năm 1992, WRX nhanh chóng trở thành biểu tượng
    trong thế giới xe thể thao nhờ sự kết hợp giữa hiệu năng mạnh mẽ
    và hệ dẫn động bốn bánh toàn thời gian đặc trưng của Subaru.
  </p>

  <p className="text-justify">
    Lấy cảm hứng trực tiếp từ các mẫu xe đua rally,
    Subaru WRX sở hữu phong cách thiết kế hầm hố, cơ bắp
    cùng khả năng vận hành cực kỳ linh hoạt trên nhiều loại địa hình.
    Trải qua nhiều thế hệ phát triển, mẫu xe này vẫn giữ nguyên DNA thể thao
    nhưng đồng thời được cải tiến để phù hợp hơn với nhu cầu sử dụng hàng ngày.
  </p>

  <p className="text-justify">
    Subaru WRX 2026 tiếp tục duy trì ngôn ngữ thiết kế mạnh mẽ đặc trưng.
    Phần đầu xe nổi bật với lưới tản nhiệt hình lục giác cỡ lớn,
    kết hợp cụm đèn LED sắc cạnh hình chữ C mang đậm dấu ấn Subaru.
  </p>

  <p className="text-justify">
    Hốc gió lớn trên nắp ca-pô không chỉ tạo điểm nhấn thị giác
    mà còn đóng vai trò tối ưu khả năng làm mát động cơ tăng áp,
    nhấn mạnh chất xe hiệu năng cao của WRX.
  </p>

  <p className="text-justify">
    Thân xe sở hữu các đường nét góc cạnh cùng phần vòm bánh xe mở rộng,
    mang lại cảm giác chắc chắn và đầy cơ bắp.
    Bộ mâm đa chấu kích thước từ 17 đến 18 inch kết hợp với các chi tiết khí động học
    như cánh gió và khe thoát gió giúp WRX trông cực kỳ thể thao.
  </p>

  <p className="text-justify">
    Phía sau xe gây ấn tượng với cụm ống xả kép đối xứng,
    cản sau phong cách racing cùng cánh lướt gió lớn,
    tạo nên dáng vẻ đậm chất xe đua rally đường phố.
  </p>

  <p className="text-justify">
    Khoang nội thất của Subaru WRX 2026 được thiết kế theo phong cách hiện đại
    nhưng vẫn giữ tinh thần tập trung hoàn toàn vào người lái.
  </p>

  <p className="text-justify">
    Trung tâm bảng táp-lô là màn hình cảm ứng kích thước lớn 11,6 inch,
    hỗ trợ Apple CarPlay, Android Auto và kết nối Bluetooth,
    mang đến trải nghiệm giải trí và điều khiển trực quan.
  </p>

  <p className="text-justify">
    Trái tim của Subaru WRX 2026 là khối động cơ Boxer tăng áp 2.4L,
    sản sinh công suất tối đa 271 mã lực cùng mô-men xoắn cực đại 349 Nm.
  </p>

  <p className="text-justify">
    Động cơ này kết hợp với hộp số sàn 6 cấp hoặc hộp số tự động Subaru Performance Transmission,
    mang lại trải nghiệm lái đậm chất thể thao và cực kỳ phấn khích.
  </p>

  <p className="text-justify">
    Hệ dẫn động bốn bánh toàn thời gian Symmetrical AWD nổi tiếng của Subaru
    tiếp tục là điểm mạnh lớn nhất của WRX,
    giúp chiếc xe duy trì độ bám đường ấn tượng ngay cả trong điều kiện vận hành khó khăn.
  </p>

  <p className="text-justify">
    Với thiết kế thể thao, hiệu suất mạnh mẽ,
    khả năng vận hành linh hoạt và công nghệ hiện đại,
    Subaru WRX 2026 tiếp tục là một trong những mẫu sedan hiệu năng cao
    hấp dẫn nhất dành cho những người yêu thích tốc độ và văn hóa JDM.
  </p>
</div>

      {/* BUTTON */}
      <div className="mt-20">
        <Link
          href="/tintuc"
          className="
            inline-flex
            items-center
            justify-center
            rounded-full
            bg-white
            px-10
            py-5
            text-lg
            font-black
            uppercase
            text-black
            transition-all
            duration-500
            hover:bg-red-500
            hover:text-white
            hover:scale-105
          "
        >
          ← Quay lại tin tức
        </Link>
      </div>
    </main>
  );
}