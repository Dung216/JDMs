import Link from "next/link";

export default function NissanR33Page() {
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
          NISSAN R33 GT-R
        </h1>

        <div className="mt-6 h-2 w-32 bg-red-500"></div>
      </div>

      {/* IMAGE */}
      <div className="mb-16 overflow-hidden rounded-[30px] border border-white/10">
        <img
          src="/e33.jpg"
          alt="Nissan R33 GT-R"
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
    Nissan Skyline R33 là một trong những mẫu xe thể thao Nhật Bản
    mang tính biểu tượng nhất của thập niên 90, thường xuyên xuất hiện
    trong các bộ phim đua xe bom tấn và văn hóa JDM trên toàn thế giới.
  </p>

  <p>
    Tại Việt Nam, mẫu xe này gần như không xuất hiện trên thị trường.
    Hiện chỉ có duy nhất một chiếc Skyline R33 được ghi nhận đang lăn bánh,
    khiến nó trở thành món đồ sưu tầm cực kỳ giá trị đối với giới mê xe.
  </p>

  <p>
    Chủ nhân của chiếc xe từng rao bán với mức giá khoảng 3,3 tỷ đồng,
    ngang ngửa nhiều mẫu xe thể thao hiện đại như BMW Z4, Audi TT
    hay Ford Mustang.
  </p>

  <p>
    Điều khiến Skyline R33 trở nên đặc biệt không chỉ nằm ở yếu tố hiếm,
    mà còn đến từ cảm giác lái thuần chất cơ khí và nền tảng động cơ nổi tiếng
    đã làm nên tên tuổi của dòng Skyline huyền thoại.
  </p>

  <p>
    Xe được trang bị động cơ RB20DET 6 xi-lanh thẳng hàng dung tích 2.0L
    tăng áp, sản sinh công suất khoảng 212 mã lực cùng mô-men xoắn cực đại
    264 Nm.
  </p>

  <p>
    Khối động cơ này kết hợp cùng hộp số sàn 6 cấp mang lại cảm giác lái
    chân thật và cực kỳ phấn khích, điều mà nhiều mẫu xe hiện đại ngày nay
    khó có thể tái hiện được.
  </p>

  <p>
    Dù thông số không quá vượt trội theo tiêu chuẩn hiện đại, RB20DET lại nổi tiếng
    nhờ khả năng nâng cấp mạnh mẽ và độ bền cực cao, trở thành nền tảng yêu thích
    của cộng đồng chơi xe JDM.
  </p>

  <p>
    Chiếc Skyline R33 tại Việt Nam còn được nâng cấp với hàng loạt phụ kiện hiệu năng
    nhập khẩu như nắp capo carbon, cốp sau carbon và bodykit lấy cảm hứng từ phiên bản GT-R.
  </p>

  <p>
    Hệ thống ống xả Nismo kết hợp cùng bộ mâm Enkei CN28 kích thước 18 inch
    giúp chiếc xe mang ngoại hình đậm chất đường phố Nhật Bản.
  </p>

  <p>
    Khoang lái cũng được thay đổi theo phong cách xe đua với ghế thể thao
    carbon Eddystar siêu nhẹ, dây đai an toàn Takata 4 điểm và vô lăng AMD
    tháo rời.
  </p>

  <p>
    Ngoài ra, xe còn sở hữu nhiều chi tiết quen thuộc trong giới tuner Nhật Bản
    như cần số Bride, bao tay phanh Momo và bộ pedal thể thao Nismo,
    tạo nên không gian lái đầy cảm xúc cho người cầm lái.
  </p>

  <p>
    Sau hơn 30 năm xuất hiện, Nissan Skyline R33 không chỉ là một chiếc xe thể thao,
    mà còn là biểu tượng của thời kỳ hoàng kim JDM, nơi cảm giác lái, âm thanh động cơ
    và văn hóa độ xe trở thành một phần không thể thay thế của thế giới xe hơi.
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