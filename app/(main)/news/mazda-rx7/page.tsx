import Link from "next/link";

export default function MazdasRX7Page() {
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
          MAZDA RX7 GEN 1
        </h1>

        <div className="mt-6 h-2 w-32 bg-red-500"></div>
      </div>

      {/* IMAGE */}
      <div className="mb-16 overflow-hidden rounded-[30px] border border-white/10">
        <img
          src="/rx7.jpg"
          alt="RX7 GEN 1"
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
            Tiếng gầm rú của động cơ quay và tiếng rít của lốp xe trên
            đường phố Tokyo đã biến Fast and Furious: Tokyo Drift thành
            một tác phẩm kinh điển ngay lập tức, nhưng chính phong thái
            cực kỳ ngầu của Han khi ngồi sau tay lái chiếc Mazda RX-7
            được độ bởi VeilSide mới thực sự chiếm trọn sự chú ý.
        </p>

        <p>
            Giờ đây, hơn 18 năm sau khi bộ phim ra mắt, một trong những
            chiếc xe biểu tượng của bộ phim đã tìm được chủ nhân mới
            sẵn sàng trả mức giá đáng kinh ngạc 1,2 triệu đô la tại
            phiên đấu giá Goodwood danh giá của Bonhams.
        </p>

        <p>
            Chiếc RX-7 đời 1992 đặc biệt này đại diện cho lịch sử điện
            ảnh về ô tô ở đỉnh cao. Vai diễn Han Seoul-Oh của Sung Kang
            đã biến một nhân vật đua xe đường phố bình thường thành một
            hiện tượng văn hóa, một người được yêu mến đến mức loạt phim
            đã hồi sinh anh ta từ cõi chết trong các phần phim sau này.
        </p>

        <p>
            Chiếc xe mà ông ấy lái cũng trở nên huyền thoại không kém,
            với bộ body kit VeilSide Fortune đặc trưng đã biến chiếc
            RX-7 thế hệ thứ ba vốn đã tuyệt đẹp thành một cỗ máy trông
            như vừa bước ra từ truyện tranh manga.
        </p>

        <p>
            Điều khiến thương vụ này trở nên đặc biệt đáng chú ý là
            chiếc RX-7 này không chỉ đẹp mã để chụp cận cảnh. Mặc dù
            chủ yếu được sử dụng cho các cảnh tĩnh và cảnh nội thất chi
            tiết hơn là các cảnh drift nghẹt thở, nó vẫn là một cỗ máy
            hoạt động hoàn hảo.
        </p>

        <p>
            Động cơ tăng áp hai rotor đã được các chuyên gia về động cơ
            rotor RE-Amemiya phục chế hoàn toàn, sản sinh công suất khoảng
            280 mã lực trong một chiếc xe chỉ nặng khoảng 1.222 kg.
        </p>

        <p>
            Điều đáng kinh ngạc hơn nữa là hệ thống khí nitơ oxit nguyên
            bản vẫn được lắp đặt và sẵn sàng kết nối lại, chờ đợi chủ
            nhân mới thể hiện khả năng lái xe điêu luyện của mình.
        </p>

        <p>
            Bộ body kit VeilSide Fortune là một kiệt tác của văn hóa độ
            xe đầu những năm 2000, giúp tăng thêm gần tám inch chiều rộng
            cho dáng vẻ vốn đã hầm hố của chiếc RX-7.
        </p>

        <p>
            Chỉ có phần mái và cửa hậu là giữ nguyên từ chiếc Mazda
            nguyên bản, còn tất cả các chi tiết khác đều được thay thế
            bằng những đường nét khí động học ấn tượng của VeilSide.
        </p>

        <p>
            Lớp sơn màu cam ánh ngọc trai bắt sáng theo cách khiến nó
            trở nên vô cùng quyến rũ trên màn ảnh, trong khi cánh gió
            sau khổng lồ và các khe thông gió bên hông tạo cho nó một
            diện mạo gần như khác biệt hoàn toàn so với một chiếc FD
            nguyên bản.
        </p>

        <p>
            Vụ bán đấu giá phá kỷ lục này đã đưa chiếc RX-7 trong phim
            Tokyo Drift vào hàng ngũ những chiếc xe hàng đầu trong các
            cuộc đấu giá xe hơi phim ảnh.
        </p>

        <p>
            Nó gần như ngang bằng với mức giá 1,357 triệu đô la được trả
            cho chiếc R34 Skyline của Paul Walker và gấp hơn hai lần mức
            giá mà chiếc Supra của anh ấy trong bộ phim gốc đạt được.
        </p>

        <p>
            Đối với thế hệ lớn lên cùng Fast & Furious, chiếc RX-7 này
            không chỉ đơn thuần là một đạo cụ điện ảnh. Nó là một biểu
            tượng của văn hóa xe hơi Nhật Bản, đại diện cho thời kỳ hoàng
            kim của phong trào JDM và nghệ thuật độ xe đường phố.
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