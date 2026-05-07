import Link from "next/link";

export default function NissansR35Page() {
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
          NISSAN R35 GT-R
        </h1>

        <div className="mt-6 h-2 w-32 bg-red-500"></div>
      </div>

      {/* IMAGE */}
      <div className="mb-16 overflow-hidden rounded-[30px] border border-white/10">
        <img
          src="/r35.jpg"
          alt="R35 GT-R"
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
            text-gray-300
            text-lg
            leading-[2.2]
            space-y-10
        "
        >
        <p>
            Nissan GT-R R35 Nismo là thế hệ thứ 6 của dòng Skyline GT-R
            huyền thoại đến từ Nhật Bản. Dù có mức giá dễ tiếp cận hơn
            nhiều siêu xe khác, mẫu xe này vẫn thuộc hàng cực hiếm tại
            Việt Nam với số lượng chỉ khoảng 10 chiếc xuất hiện trên thị trường.
        </p>

        <p>
            Đầu năm 2022, cộng đồng mê xe Việt Nam từng xôn xao khi một
            đại gia trong nước đặt mua thành công phiên bản hiệu suất cao
            GT-R R35 Nismo Special Edition, mẫu xe giới hạn chỉ 300 chiếc
            trên toàn thế giới.
        </p>

        <p>
            Phiên bản Nismo mang thiết kế đậm chất khí động học với hàng
            loạt chi tiết carbon siêu nhẹ như nắp ca-pô, cánh gió sau và
            ốp gương, giúp trọng lượng xe giảm đáng kể so với bản tiêu chuẩn.
        </p>

        <p>
            Xe sở hữu màu sơn Stealth Grey đặc trưng kết hợp các đường
            viền đỏ mạnh mẽ thuộc gói Nismo Appearance Package, tạo nên
            diện mạo vừa hiện đại vừa đậm chất xe đua đường phố Nhật Bản.
        </p>

        <p>
            Phần đầu xe nổi bật với các khe hút gió cỡ lớn giúp tối ưu
            luồng không khí làm mát động cơ và hệ thống phanh hiệu suất cao.
            Cụm đèn hậu LED tròn kép đặc trưng vẫn được giữ lại như một
            biểu tượng bất biến của dòng GT-R.
        </p>

        <p>
            Bộ mâm RAYS 20 inch siêu nhẹ kết hợp cùng hệ thống phanh
            Carbon-Ceramic với ngàm phanh màu vàng tạo nên hiệu năng
            vận hành cực kỳ ấn tượng. Hệ thống ống xả Titanium của
            Fujitsubo mang đến âm thanh uy lực và đậm chất JDM.
        </p>

        <p>
            Nội thất của GT-R R35 Nismo là sự kết hợp hoàn hảo giữa
            Alcantara, carbon và da cao cấp với tông màu đỏ - đen chủ đạo.
            Ghế ngồi thể thao ôm sát cơ thể giúp người lái luôn có cảm giác
            chắc chắn khi vận hành ở tốc độ cao.
        </p>

        <p>
            Xe được trang bị vô lăng bọc Alcantara, màn hình giải trí
            8 inch hỗ trợ Apple CarPlay cùng hệ thống âm thanh Bose cao cấp,
            mang lại trải nghiệm vừa thể thao vừa hiện đại.
        </p>

        <p>
            Trái tim của GT-R R35 Nismo là khối động cơ VR38DETT V6 3.8L
            tăng áp kép nổi tiếng, được lắp ráp hoàn toàn thủ công bởi
            các nghệ nhân Takumi danh tiếng của Nissan.
        </p>

        <p>
            Động cơ này sản sinh công suất lên tới 600 mã lực và mô-men
            xoắn cực đại 652 Nm, kết hợp cùng hộp số ly hợp kép 6 cấp và
            hệ dẫn động 4 bánh toàn thời gian ATTESA E-TS.
        </p>

        <p>
            Nhờ cấu hình hiệu năng cực cao, chiếc xe có khả năng tăng tốc
            từ 0-97 km/h chỉ trong khoảng 2,9 giây trước khi đạt tốc độ tối đa
            lên đến 330 km/h.
        </p>

        <p>
            Tại thị trường Mỹ, GT-R R35 Nismo Special Edition có giá khởi
            điểm khoảng 220.000 USD và toàn bộ 300 chiếc giới hạn đều nhanh
            chóng cháy hàng ngay sau khi mở bán.
        </p>

        <p>
            Trong khi đó tại Việt Nam, mức giá lăn bánh của mẫu xe này
            được ước tính vào khoảng 10 tỷ VNĐ, cạnh tranh trực tiếp với
            nhiều mẫu xe hiệu năng cao đình đám như Porsche 911 Carrera
            hay Mercedes-AMG GT.
        </p>

        <p>
            Dù sở hữu mức giá rất cao và cực kỳ kén khách, Nissan GT-R
            R35 Nismo vẫn được xem là biểu tượng hiệu năng của Nhật Bản,
            một cỗ máy hoàn hảo kết hợp giữa sức mạnh, công nghệ và sự
            tỉ mỉ trong từng chi tiết chế tác.
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