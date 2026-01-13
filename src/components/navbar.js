import React, { useState, useEffect, useRef } from 'react';
import { Link, navigate } from "gatsby";
import { slugify } from "../utils/slugify";

export const NavBar = ({ setActiveComponent, nodes, setContentfulTmp }) => {
  const dropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const getCardbyItem = (item) => {
    setDropdownOpen(false)
    const slug = slugify(item.originalTitle)
    navigate(`/portfolio/${slug}`)
  }

  const handleNavClick = (component) => {
    if (setActiveComponent) {
      setActiveComponent(component);
      if (setContentfulTmp) setContentfulTmp(null);
    } else {
      navigate('/', { state: { activeComponent: component } });
    }
  }

  const DropDownLinks = () => {
    const [searchTerm, setSearchTerm] = useState('');

    let titlesOfPost = nodes.map((node) => {
      let originalTitle = node.title;
      let words = node.title.toLowerCase().split(' ');
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
      }
      let camelCaseTitle = words.join(' ');
      return { originalTitle, camelCaseTitle };
    });

    const filteredTitles = titlesOfPost.filter(title =>
      title.camelCaseTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="dropdown2" ref={dropdownRef}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            borderRadius: '20px',
            backgroundColor: '#F7F1EE',
            width: '75%',
            border: 'none',
            textAlign: 'center',
            marginTop: '10px',
            marginBottom: '10px',
            opacity: '0.8',
            border: '1px solid grey',
          }}
        />
        {(filteredTitles.length > 0 ? filteredTitles : titlesOfPost).map((title, index) => (
          <div key={index} onClick={() => getCardbyItem(title)}>
            {title.camelCaseTitle}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="navbar">
      <div onClick={() => handleNavClick("banner")}>About</div>
      <div
        style={{ alignItems: 'center', position: 'relative', marginLeft: '25px' }}>
        <div onClick={() => handleNavClick("portfolio")}>
          Portfolio
        </div>
        {dropdownOpen && (<DropDownLinks />)}
      </div>
      <div onClick={() => handleNavClick("info")}>Contact</div>
    </div>
  )
}
