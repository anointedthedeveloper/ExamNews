import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, MessageCircle, Coffee, Moon, Sun, Layout, ChevronDown, Plus, Minus } from "lucide-react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = ({ theme, toggleTheme, isSidebarOpen, toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    {
      name: "JAMB",
      path: "/jamb",
      dropdown: [
        { name: "JAMB 2026 Updates", path: "/jamb" },
        { name: "Registration Guide", path: "/jamb-registration" },
        { name: "CBT Centers", path: "/jamb-centers" },
        { name: "Syllabus", path: "/jamb-syllabus" },
        { name: "Check Result", path: "/check-jamb-result" },
      ]
    },
    {
      name: "Exams",
      dropdown: [
        { name: "WAEC", path: "/waec" },
        { name: "NECO", path: "/neco" },
        { name: "Post-UTME", path: "/post-utme" },
      ]
    },
    { name: "Brochure", path: "/jamb-brochure" },
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
    <header className="navbar" ref={menuRef}>
      <div className="navbar-container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            className="sidebar-toggle-btn" 
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--text-main)', 
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center', 
              padding: '10px', 
              borderRadius: '10px', 
              transition: 'all 0.2s', 
              background: isSidebarOpen ? 'rgba(22, 163, 74, 0.1)' : 'transparent' 
            }}
          >
            <Layout size={20} style={{ color: isSidebarOpen ? 'var(--accent-main)' : 'var(--text-muted)' }} />
          </button>
          <Link to="/" className="navbar-logo" style={{ marginLeft: '4px' }}>
          <img src={logo} alt="Exam News" className="logo-image" />
          <span className="logo-text">ExamNews</span>
        </Link>
        </div>

        <nav className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, idx) => (
            <div 
              key={link.name} 
              className="nav-item-container"
              onMouseEnter={() => !isOpen && setActiveDropdown(idx)}
              onMouseLeave={() => !isOpen && setActiveDropdown(null)}
            >
              <div className="nav-link-wrapper">
                {link.path ? (
                  <Link
                    to={link.path}
                    className="navbar-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <span className="navbar-link cursor-pointer">{link.name}</span>
                )}
                
                {link.dropdown && (
                  <button 
                    className="dropdown-toggle-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveDropdown(activeDropdown === idx ? null : idx);
                    }}
                  >
                    {isOpen ? (
                      activeDropdown === idx ? <Minus size={18} className="plus-icon" /> : <Plus size={18} className="plus-icon" />
                    ) : (
                      <ChevronDown size={14} className={`chevron ${activeDropdown === idx ? 'rotate' : ''}`} />
                    )}
                  </button>
                )}
              </div>

              {link.dropdown && (isOpen ? activeDropdown === idx : activeDropdown === idx) && (
                <div className="navbar-dropdown">
                  {link.dropdown.map(subItem => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className="dropdown-link"
                      onClick={() => {
                        setIsOpen(false);
                        setActiveDropdown(null);
                      }}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
          
          {/* Mobile Theme Toggle */}
          <button 
            className="navbar-link theme-toggle-mobile" 
            onClick={() => {
              toggleTheme();
              setIsOpen(false);
            }}
            style={{ alignItems: 'center', gap: '8px', width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {theme === 'light' ? <><Moon size={16} /> Dark Mode</> : <><Sun size={16} /> Light Mode</>}
          </button>
        </nav>

        <div className="navbar-actions">
          <button 
            className="theme-toggle theme-toggle-desktop" 
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
