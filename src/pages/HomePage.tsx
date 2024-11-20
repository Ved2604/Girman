import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";

const HomePage = () => {
  const [searchterm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && searchterm.trim()) {
      navigate(`/search?searchterm=${encodeURIComponent(searchterm)}`);
    }
  }

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between py-4 shadow-sm px-40">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8">
            <img
              src={logo}
              alt="Girman Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h2>
            <span className="text-xl font-semibold">Girman</span>
          </h2>
          <span className="text-xs text-gray-600 mt-auto mb-1">
            TECHNOLOGIES
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a href="/search" className="text-blue-500 font-medium">
            SEARCH
          </a>
          <a
            href="https://girmantech.com/"
            className="text-gray-700 font-medium"
          >
            WEBSITE
          </a>
          <a
            href="https://www.linkedin.com/company/girmantech/"
            className="text-gray-700 font-medium"
          >
            LINKEDIN
          </a>
          <a
            href="mailto:contact@girmantech.com"
            className="text-gray-700 font-medium"
          >
            CONTACT
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-4 pt-32">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-16 h-16 bg-blue-500 rounded">
            <img
              src={logo}
              alt="Girman Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-4xl font-semibold">Girman</span>
        </div>

        {/* Search Input */}
        <div className="w-full max-w-xl">
          <Input
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={searchterm}
            type="text"
            placeholder="Enter Name"
            className="w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
