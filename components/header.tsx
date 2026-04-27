import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const Navbar = () => {
    return (
      <section className="flex justify-between items-center bg-red-300 text-black px-7 py-5 font-bold">
        <div className="logo hover:opacity-80 transition">
        <nav>
          <Link href="/" className="logo">
            <Image
              src="/logo.png"
              alt="Logo công ty"
              width={100}
              height={100}
              priority/>
          </Link>
        </nav>
         </div>

        <div className="flex gap-10">
          <Link href='/' className="p-2 border rounded px-5">Trang chủ</Link>
          <Link href='/tintuc' className="p-2">Tin Tức</Link>
          <Link href='/engine' className="p-2">Engine</Link>
          <Link href='/sound' className="p-2">Sound</Link>
          <Link href='/contact' className="p-2">Contact</Link>
          <Link href='/login' className="p-2 border rounded px-5">Login</Link>
        </div>

      </section>
    );
  };

  return (
    <header>
      <Navbar />
    </header>
  );
}