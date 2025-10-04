import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <img
            src="/assets/logo-footer.png"
            alt="Westampton logo"
            className="h-10 mb-2"
          />
          <p className="text-sm text-[#D1D1D1]">
            Westampton Solutions Limited — Market entry and advisory services
            across Sub-Saharan Africa.
          </p>
        </div>

        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-3 text-sm text-[#D1D1D1] space-y-2">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#resources">Resources / Blog</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Legal</h5>
          <ul className="mt-3 text-sm text-[#D1D1D1] space-y-2">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 border-t border-[#2A2A2A] pt-4 text-center text-sm text-[#AFAFAF]">
        © {new Date().getFullYear()} Westampton Solutions Limited. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
