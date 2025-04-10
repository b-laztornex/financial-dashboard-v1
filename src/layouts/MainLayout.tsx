import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  HomeIcon,
  ArrowsRightLeftIcon,
  UserIcon,
  ChartBarIcon,
  CreditCardIcon,
  HandRaisedIcon,
  WrenchScrewdriverIcon,
  LightBulbIcon,
  Cog6ToothIcon,
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

const MainLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", path: "/dashboard", icon: HomeIcon },
    { label: "Transactions", path: "/transactions", icon: ArrowsRightLeftIcon },
    { label: "Accounts", path: "/accounts", icon: UserIcon },
    { label: "Investments", path: "/investments", icon: ChartBarIcon },
    { label: "Credit Cards", path: "/credit-cards", icon: CreditCardIcon },
    { label: "Loans", path: "/loans", icon: HandRaisedIcon },
    { label: "Services", path: "/services", icon: WrenchScrewdriverIcon },
    { label: "My Privileges", path: "/privileges", icon: LightBulbIcon },
    { label: "Settings", path: "/settings", icon: Cog6ToothIcon },
  ];

  return (
    <div className="min-h-screen flex">
      <aside className="hidden md:block bg-gray-100 p-4 w-[20%]">
        <ul className="space-y-2">
          {navItems.map((item, index) => {
            const isEnabled = index === 0 || index === navItems.length - 1;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center p-2 rounded hover:bg-gray-200 text-sm ${
                    isEnabled
                      ? ""
                      : "text-gray-400 opacity-50 pointer-events-none"
                  }`}
                >
                  <item.icon
                    style={{ width: "25px", height: "25px" }}
                    className="mr-3"
                  />
                  <span className="ml-2">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
      <div className="flex-1 flex flex-col">
        <nav className="bg-white border-b border-blue-200 p-4">
          <div className="flex items-center justify-between w-full flex-wrap gap-4">
            <div className="flex-shrink-0">
              <h1 className="text-base font-semibold text-gray-800 whitespace-nowrap">
                Overview
              </h1>
            </div>

            <div className="flex items-center flex-wrap justify-end flex-grow gap-3 sm:gap-4 min-w-0">
              <div className="relative flex-grow min-w-[120px] max-w-[200px]">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-500" />
                <input
                  type="text"
                  placeholder="Search for something"
                  className="pl-10 pr-4 py-1 text-sm placeholder-blue-400 bg-gray-100 rounded-full focus:outline-none w-full"
                />
              </div>

              <div className="bg-gray-100 p-2 rounded-full cursor-pointer">
                <Cog6ToothIcon className="w-5 h-5 text-blue-600" />
              </div>

              <div className="bg-gray-100 p-2 rounded-full cursor-pointer">
                <BellIcon className="w-5 h-5 text-blue-600" />
              </div>

              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/75.jpg"
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-2">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      onClick={() => setMobileMenuOpen(false)}
                      to={item.path}
                      className="flex items-center p-2 rounded hover:bg-blue-50 text-sm text-gray-800"
                    >
                      <item.icon className="w-[25px] h-[25px] mr-3" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
