import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  HomeIcon,
  ClipboardDocumentCheckIcon,
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
      <aside
        className={`bg-gray-100 p-4 w-64 fixed inset-y-0 left-0 z-40 transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 md:block ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-6 pb-4">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <ClipboardDocumentCheckIcon className="w-6 h-6 text-gray-900" />
            <span className="text-xl font-bold text-indigo-900">Soar Task</span>
          </Link>
        </div>
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
                  <item.icon className="w-6 h-6 mr-3" />
                  <span className="ml-2">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>

      <div className="flex-1 flex flex-col">
        <nav className="bg-white border-b border-blue-200 p-4 relative z-30">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-blue-600"
                aria-label="Toggle Menu"
              >
                <Bars3Icon className="w-6 h-6" />
              </button>
              <h1 className="text-base font-semibold text-gray-800">
                Overview
              </h1>
            </div>

            <div className="hidden sm:flex items-center gap-4">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-500" />
                <input
                  type="text"
                  placeholder="Search for something"
                  className="pl-10 pr-4 py-2 rounded-full text-sm bg-gray-100 placeholder-blue-400 focus:outline-none"
                />
              </div>
              <div className="bg-gray-100 p-2 rounded-full">
                <Cog6ToothIcon className="w-5 h-5 text-blue-600" />
              </div>
              <div className="bg-gray-100 p-2 rounded-full">
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
        </nav>

        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
