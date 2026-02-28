import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, MessageCircle, Coffee, Moon, Sun } from "lucide-react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Close search on scroll or route change
  useEffect(() => {
    const handleScroll = () => setShowSearch(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { label: "JAMB Brochure", path: "/jamb-brochure" },
    { label: "WAEC Timetable 2026", path: "/waec-timetable-2026" },
    { label: "NECO Updates", path: "/neco" },
    { label: "Admission Status", path: "/admission-status" },
    { label: "Post-UTME", path: "/post-utme" },
  ];

  const filteredSuggestions = searchQuery
    ? searchSuggestions.filter(s => s.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : searchSuggestions.slice(0, 6);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setShowSearch(false);
      setIsOpen(false);
    }
  };

  const handleSuggestionClick = (path) => {
    navigate(path);
    setSearchQuery("");
    setShowSearch(false);
    setIsOpen(false);
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
            <MessageCircle size={16} /> WhatsApp
          </a>
          <Link
            to="/support"
            className="navbar-link navbar-support"
            onClick={() => setIsOpen(false)}
          >
            <Coffee size={16} /> Support
          </Link>
        </nav>

        <div className="navbar-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <div 
            className={`navbar-search ${showSearch ? 'active' : ''}`} 
            onClick={() => setShowSearch(!showSearch)}
          >
            <Search size={20} />
          </div>

          <button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {showSearch && (
        <div className="search-dropdown">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="What are you looking for?"
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
