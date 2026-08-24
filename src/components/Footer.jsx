import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#020716] text-gray-300 px-6 sm:px-10 lg:px-14 pt-14 pb-9">
      <div className="max-w-[1200px] mx-auto">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              {/* Logo */}
              <div className="w-10 h-10 rounded-full bg-[#ed9400] flex items-center justify-center">
                <div className="w-5 h-5 bg-[#7045d8] border border-white flex items-center justify-center text-white text-xs">
                  <img src="/logos.jpg" alt="" />
                </div>
              </div>

              <div>
                <h2 className="text-white text-[19px] font-bold">
                  Augraha Community
                </h2>

                <p className="text-[#f5a000] text-[9px] font-bold tracking-[3px]">
                  CHURCH
                </p>
              </div>
            </div>

            <p className="mt-7 max-w-[285px] text-[#a9c0dc] text-sm leading-7">
              A Christ-centered church family committed
              to faithful preaching, genuine fellowship,
              and loving service.
            </p>
          </div>

         {/* Quick Links */}
<div>
  <h3 className="text-white text-[15px] font-bold mb-5">
    Quick Links
  </h3>

  <div className="space-y-3">
    <Link
      to="/"
      className="block text-sm text-[#c9d8eb] hover:text-[#f5a000] transition"
    >
      Home
    </Link>

    <Link
      to="/about/statement-of-faith"
      className="block text-sm text-[#f5a000] hover:text-[#ffb52e] transition"
    >
      Statement of Faith
    </Link>

    <Link
      to="/about/our-leaders"
      className="block text-sm text-[#c9d8eb] hover:text-[#f5a000] transition"
    >
      Our Leaders
    </Link>

    <Link
      to="/sermons"
      className="block text-sm text-[#c9d8eb] hover:text-[#f5a000] transition"
    >
      Sermons
    </Link>
  </div>
</div>

{/* Ministries */}
<div>
  <h3 className="text-white text-[15px] font-bold mb-5">
    Ministries
  </h3>

  <div className="space-y-3">
    <Link
      to="/ministries/ladies-bible-studies"
      className="block text-sm text-[#c9d8eb] hover:text-[#f5a000] transition"
    >
      Ladies Bible Studies
    </Link>

    <Link
      to="/mens-bible-studies"
      className="block text-sm text-[#c9d8eb] hover:text-[#f5a000] transition"
    >
      Men's Bible Studies
    </Link>

    <Link
      to="/pastoral-internship"
      className="block text-sm text-[#c9d8eb] hover:text-[#f5a000] transition"
    >
      Pastoral Internship
    </Link>

    <Link
      to="/sunday-school"
      className="block text-sm text-[#c9d8eb] hover:text-[#f5a000] transition"
    >
      Sunday School
    </Link>
  </div>
</div>

          {/* Visit Us */}
          <div>
            <h3 className="text-white text-[15px] font-bold mb-5">
              Visit Us
            </h3>

            <div className="text-[#a9c0dc] text-sm space-y-2">
              <p>123 Church Street</p>
              <p>City, State 00000</p>

              <div className="pt-3">
                <p>Sunday Worship: 10:30 AM</p>
                <p>Wednesday Bible Study: 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-[#1a2638] mt-12 pt-6">
          <div className="flex flex-col sm:flex-row justify-between gap-3 text-xs text-[#7086a5]">
            <p>
              © Faith Community Baptist Church. All rights reserved.
            </p>

            <p>
              Built with faith, purpose &amp; community.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;