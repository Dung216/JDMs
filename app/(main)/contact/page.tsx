export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white/20 flex items-center justify-center px-6">
      
      <div className="w-full max-w-[800px]">

        {/* TITLE */}
        <div className="mb-10">
          <h1
            className="
              text-5xl
              font-black
              uppercase
              italic
              text-white
              tracking-wide
            "
          >
            Contact Us
          </h1>
        </div>

        {/* CONTENT */}
        <div
          className="
            bg-[#111]
            rounded-[30px]
            p-10
            text-white
            text-lg
            leading-10
          "
        >
          {/* ADDRESS */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold uppercase mb-4">
              Address
            </h2>

            <p className="text-gray-300">
              Đại học Lạc Hồng, Biên Hòa, Đồng Nai.
            </p>
          </div>

          {/* CONTACT 1 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold uppercase mb-4">
              Bắc
            </h2>

            <p>
              <span className="font-bold text-white">Email:</span>{" "}
              phambac8526@gmail.com
            </p>

            <p>
              <span className="font-bold text-white">Phone:</span>{" "}
              0902073457
            </p>
          </div>

          {/* CONTACT 2 */}
          <div>
            <h2 className="text-2xl font-bold uppercase mb-4">
              Dũng
            </h2>

            <p>
              <span className="font-bold text-white">Email:</span>{" "}
              dung216dang@gmail.com
            </p>

            <p>
              <span className="font-bold text-white">Phone:</span>{" "}
              0814129540
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}