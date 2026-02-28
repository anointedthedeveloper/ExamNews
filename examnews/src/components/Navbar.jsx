import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, MessageCircle, Coffee, ArrowUp } from "lucide-react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "JAMB", path: "/jamb" },
    { name: "WAEC", path: "/waec" },
    { name: "NECO", path: "/neco" },
    { name: "Cut-Off Marks", path: "/cut-off-marks" },
    { name: "Admission", path: "/admission-status" },
  ];

  const searchSuggestions = [
    { label: "JAMB 2026 Registration", path: "/jamb-registration" },
    { label: "JAMB Updates", path: "/jamb" },
    { label: "Check JAMB Result", path: "/check-jamb-result" },
    { label: "JAMB CBT Centers", path: "/jamb-centers" },
    { label: "JAMB Syllabus", path: "/jamb-syllabus" },
    { label: "JAMB Cut-Off Marks", path: "/cut-off-marks" },
    { label: "WAEC Timetable 2026", path: "/waec-timetable-2026" },
    { label: "WAEC Portal", path: "/waec" },
    { label: "NECO Updates", path: "/neco" },
    { label: "NECO Timetable 2026", path: "/neco-timetable-2026" },
    { label: "Admission Status", path: "/admission-status" },
    { label: "Post-UTME", path: "/post-utme" },
    { label: "Support Us", path: "/support" },
  ];

  const filteredSuggestions = searchQuery
    ? searchSuggestions.filter(s => s.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : searchSuggestions;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setShowSearch(false);
    }
  };

  const handleSuggestionClick = (path) => {
    navigate(path);
    setSearchQuery("");
    setShowSearch(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Exam News" className="logo-image" />
          <span className="logo-text">ExamNews</span>
        </Link>

        <nav className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://whatsapp.com/channel/0029VbCDo9hAe5VxobKmxV07"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-link navbar-whatsapp"
            onClick={() => setIsOpen(false)}
          >
            <MessageCircle size={16} /> WhatsApp Updates
          </a>
          <Link
            to="/support"
            className="navbar-link navbar-support"
            onClick={() => setIsOpen(false)}
          >
            <Coffee size={16} /> Support Us
          </Link>
        </nav>

        <div className="navbar-actions">
          <div className="navbar-search" onClick={() => setShowSearch(!showSearch)}>
            <Search size={18} />
          </div>

          <button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {showSearch && (
        <div className="search-dropdown">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for JAMB, WAEC, NECO, Cut-off marks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button type="submit">Search</button>
          </form>
          <div className="search-suggestions">
            {filteredSuggestions.map((suggestion) => (
              <div
                key={suggestion.path}
                className="search-suggestion-item"
                onClick={() => handleSuggestionClick(suggestion.path)}
              >
                <Search size={14} />
                <span>{suggestion.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
