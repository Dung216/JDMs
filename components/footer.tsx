import React from 'react';
import { 
  FacebookFilled, 
  InstagramFilled,
  MailOutlined 
} from '@ant-design/icons';

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] text-[#000000] py-16 px-6 lg:px-20 font-sans border-t border-[#ffffff]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Cột 1 */}
        <div className="space-y-4">
          <h2 className="text-[#000000] text-2xl font-extrabold uppercase italic tracking-tighter">
            Japanese Domestic Market
          </h2>
          <p className="text-gray-500 text-xs leading-relaxed max-w-83 uppercase font- italic tracking-tighter">
        Engines that challenge "monsters" on the other side of the globe, unleashing the pure sound 
        of raw power and creating a unique mechanical symphony—where every press of the accelerator 
        and every gear shift blends perfectly into the soul of JDM machines.
          </p>
        </div>

        {/* Cột 2 */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg uppercase tracking-wide text-[#F12B3F]">
            contact
          </h3>
          <ul className="space-y-2 text-sm text-black">
            <li>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dang216dang@gmail.com"
                className="hover:text-[#df2531] transition-colors flex items-center gap-2"
              >
                <MailOutlined className="text-xs" /> H.Dũng
              </a>
            </li>
            <li>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=phambac8526@gmail.com"
                className="hover:text-[#df2531] transition-colors flex items-center gap-2"
              >
                <MailOutlined className="text-xs" /> X.Bắc
              </a>
            </li>
            <li className="hover:text-gray-500 transition-colors cursor-default">
              Bien Hoa, Dong Nai, VietNam
            </li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg uppercase tracking-wide text-[#F12B3F]">About us</h3>

          <div className="flex gap-6 text-2xl">

        {/* Facebook */}
        <a 
            href="https://www.facebook.com/dung.hoang.216" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black hover:text-[#1877F2] transition-all duration-300 hover:scale-110"
        >
            <FacebookFilled />
        </a>

        {/* Instagram */}
        <a 
            href="https://www.instagram.com/_h.duqx/"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black hover:text-red-500 transition-all duration-300 hover:scale-110"
        >
            <InstagramFilled />
        </a>

        </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#ffffff]/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-6 text-[10px] text-black uppercase tracking-widest font-bold">
           <span>Terms of Service</span>
           <span>Privacy Policy</span>
        </div>
        <p className="text-[12px] text-black uppercase tracking-widest">
          Copyright © 2026 H.Dũng & X.Bắc
        </p>
      </div>
    </footer>
  );
}