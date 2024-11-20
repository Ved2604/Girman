import { Search } from "lucide-react";

import { useSearchParams } from "react-router-dom";
import users from "@/constants/users_list";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NotFound from "@/components/ui/NotFound";
import ContactCard from "@/components/ui/ContactCard";
import logo from "../assets/Logo.png";

// NotFound Component

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [searchterm, setSearchterm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const queryTerm = searchParams.get("searchterm")?.toLowerCase() || "";
    setSearchterm(queryTerm);
  }, [searchParams]);

  const urlSearchTerm = searchParams.get("searchterm")?.toLowerCase() || "";
  const filteredContacts = users.filter(
    (contact) =>
      `${contact.first_name} ${contact.last_name}`
        .toLowerCase()
        .includes(urlSearchTerm) ||
      contact.city.toLowerCase().includes(urlSearchTerm)
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchterm(e.target.value);
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
          <div className="w-8 h-8 bg-blue-500 rounded">
            <img
              src={logo}
              alt="Girman Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-semibold">Girman</span>
          <span className="text-xs text-gray-600 mt-auto mb-1">
            TECHNOLOGIES
          </span>
        </div>
        {/* Search Bar */}
        <div className="relative w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchterm}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Search contacts..."
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </nav>

      {/* Contact Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8">
        {filteredContacts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContacts.map((contact, index) => (
              <ContactCard contact={contact} key={index} />
            ))}
          </div>
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};

export default SearchPage;
