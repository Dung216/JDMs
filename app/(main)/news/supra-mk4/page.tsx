import Link from "next/link";

export default function SupraMK4Page() {
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
          TOYOTA SUPRA MK4
        </h1>

        <div className="mt-6 h-2 w-32 bg-red-500"></div>
      </div>

      {/* IMAGE */}
      <div className="mb-16 overflow-hidden rounded-[30px] border border-white/10">
        <img
          src="/MK4.png"
          alt="Supra MK4"
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
          Ra mắt vào năm 1993, Toyota Supra thế hệ thứ 4 là một trong những
          chiếc xe thể thao Nhật Bản thành công nhất mọi thời đại...
        </p>

        <p>
          Chính vì thế, Tyler Graff, một người mê xe và mê độ xe đến từ
          Colorado đã mua được một chiếc như thế với giá chỉ 8.000 Đô...
        </p>

        <p>
          Cánh lướt gió ở đầu xe được gắn trực tiếp vào phần khung bên trong
          thay vì bắt ốc trên cản...
        </p>

        <p>
          Bên dưới nắp ca-pô, động cơ 2JZ-GE được cải tiến với bộ tăng áp...
        </p>

        <p>
          Xe sử dụng bộ tăng áp Garrett GTX4294R, nhờ đó có thể dễ dàng đạt
          công suất lên đến bốn chữ số...
        </p>

        <p>
          Ngoài chiếc Supra Mk4 này, Tyler còn sở hữu một chiếc Supra A90
          Launch Edition...
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