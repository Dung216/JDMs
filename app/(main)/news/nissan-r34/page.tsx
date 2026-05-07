import Link from "next/link";

export default function NissanR34Page() {
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
          NISSAN R34 GT-R
        </h1>

        <div className="mt-6 h-2 w-32 bg-red-500"></div>
      </div>

      {/* IMAGE */}
      <div className="mb-16 overflow-hidden rounded-[30px] border border-white/10">
        <img
          src="/R34.png"
          alt="Nissan R34 GT-R"
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
    Nissan Skyline GT-R R34 từ lâu đã trở thành một trong những biểu tượng
    vĩ đại nhất của thế giới JDM, một chiếc xe không chỉ nổi tiếng nhờ hiệu năng
    mà còn vì giá trị văn hóa mà nó mang lại đối với cộng đồng mê xe toàn cầu.
  </p>

  <p>
    Tại khu vực Bắc Mỹ, Skyline GT-R R34 từng được xem như một “trái cấm”
    bởi xe không được phép nhập khẩu chính thức trong suốt nhiều năm.
    Người chơi xe muốn sở hữu mẫu xe này buộc phải thông qua các đơn vị nhập khẩu
    tư nhân cùng hàng loạt bài kiểm tra khí thải và va chạm cực kỳ phức tạp.
  </p>

  <p>
    Chỉ đến năm 2024, Skyline GT-R R34 mới chính thức đủ điều kiện nhập khẩu hợp pháp
    vào Mỹ theo quy định xe cổ 25 năm tuổi, khiến giá trị của dòng xe này tăng vọt
    trên toàn thế giới.
  </p>

  <p>
    Trước đó, chiếc Skyline GT-R R34 từng giữ kỷ lục giá bán là bản V-Spec II Nür
    màu trắng giới hạn 159 chiếc với số công-tơ-mét chỉ 10 km, được bán với mức giá
    khoảng 302.000 USD.
  </p>

  <p>
    Điều này cho thấy giá trị sưu tầm của Skyline GT-R R34 hiện nay thậm chí còn vượt qua
    nhiều siêu xe hiệu năng cao hiện đại.
  </p>

  <p>
    Ngay cả Nissan GT-R R35 Nismo đời mới với động cơ 600 mã lực cũng chỉ có giá bán
    khoảng 210.800 USD, thấp hơn đáng kể so với nhiều chiếc R34 đặc biệt.
  </p>

  <p>
    Skyline GT-R R34 được sản xuất từ năm 1999 đến 2002 và sử dụng khối động cơ RB26DETT
    6 xy-lanh thẳng hàng dung tích 2.6L tăng áp kép nổi tiếng.
  </p>

  <p>
    Động cơ này cho công suất khoảng 276 mã lực cùng mô-men xoắn 400 Nm,
    kết hợp với hộp số sàn Getrag 6 cấp và hệ dẫn động bốn bánh ATTESA E-TS,
    mang đến khả năng tăng tốc 0-100 km/h chỉ trong khoảng 5,2 giây.
  </p>

  <p>
    Không chỉ mạnh mẽ, RB26DETT còn nổi tiếng nhờ độ bền cực cao và tiềm năng nâng cấp
    gần như vô hạn, khiến Skyline GT-R R34 trở thành lựa chọn hàng đầu của giới tuner
    và đua xe đường phố đầu những năm 2000.
  </p>

  <p>
    Hình ảnh chiếc R34 màu bạc xanh gắn liền với nhân vật Brian O’Conner do
    Paul Walker thủ vai trong loạt phim Fast & Furious đã đưa mẫu xe này trở thành
    huyền thoại toàn cầu.
  </p>

  <p>
    Cho đến ngày nay, Nissan Skyline GT-R R34 vẫn được xem là một trong những mẫu xe
    Nhật Bản vĩ đại nhất từng được chế tạo, đại diện cho thời kỳ hoàng kim của JDM
    và là giấc mơ của hàng triệu người yêu xe trên khắp thế giới.
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