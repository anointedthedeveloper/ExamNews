import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MapPin, Search, Info, Navigation } from "lucide-react";
import "../styles/Components.css";

const JambCenters = () => {
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [selectedTown, setSelectedTown] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [fetchError, setFetchError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const centersPerPage = 20;

  const states = [
    "ABIA", "ADAMAWA", "AKWA IBOM", "ANAMBRA", "BAUCHI", "BAYELSA", "BENUE", "BORNO",
    "CROSS RIVER", "DELTA", "EBONYI", "EDO", "EKITI", "ENUGU", "FCT", "GOMBE",
    "IMO", "JIGAWA", "KADUNA", "KANO", "KATSINA", "KEBBI", "KOGI", "KWARA", "LAGOS",
    "NASARAWA", "NIGER", "OGUN", "ONDO", "OSUN", "OYO", "PLATEAU", "RIVERS", "SOKOTO",
    "TARABA", "YOBE", "ZAMFARA"
  ];

  // Sample centers data (in production, this would come from an API)
  const sampleCenters = [
    { sn: "1", state: "ABIA", town: "ABA", name: "MATER MISERICORDIAE HUMAN EMPOWERMENT COMPUTER SCHOOL, 4B OBOHIA RD, ABA, ABIA STATE" },
    { sn: "2", state: "ABIA", town: "UMUAHIA", name: "AMABLE NIGERIA LIMITED, OLD TIMBER ROAD, UMUAHIA, ABIA STATE" },
    { sn: "3", state: "ABIA", town: "UMUAHIA", name: "JAMB PROFESSIONAL TEST CENTRE (PTC), JAMB STATE OFFICE, NEAR UBAKALA JUNCTION, PORT HARCOURT/ENUGU EXPRESS WAY, UMUAHIA, ABIA STATE" },
    { sn: "4", state: "LAGOS", town: "IKEJA", name: "FEDERAL COLLEGE OF EDUCATION (TECHNICAL), AKOKA, YABA, LAGOS STATE" },
    { sn: "5", state: "LAGOS", town: "YABA", name: "UNIVERSITY OF LAGOS CBT CENTRE, AKOKA, YABA, LAGOS STATE" },
    { sn: "1002", state: "FCT", town: "KUBWA", name: "ADEOLA INTERNATIONAL SCHOOL, OPPOSITE (ARMY)VETERAN PLAZA, KUBWA, ABUJA, FCT", order: 1 },
    { sn: "1027", state: "FCT", town: "KUBWA", name: "PETER-HARVARD INTERNATIONAL SCHOOL CENTER NO 2, DR PETER AGUNLOYE DRIVE, OFF NEPA ROAD, PHASE 4 KUBWA, FCT-ABUJA", order: 2 },
    { sn: "1007", state: "FCT", town: "KUBWA", name: "ROSA-MYSTICA ACADEMY , PLOT MF 216 AVE MARIA COTTAGE, WATER BOARD ROAD (OFF LIBERTY JUNCTION), BYAZHIN, KUBWA, ABUJA, FCT", order: 3 },
    { sn: "1031", state: "FCT", town: "KUBWA", name: "FOMA ACADEMY CBT CENTRE, ICHAMA LANE, OFF NYSC ROAD, KUBWA VILLAGE, KUBWA ABUJA", order: 4 },
    { sn: "6", state: "FCT", town: "GWAGWALADA", name: "UNIVERSITY OF ABUJA CBT CENTRE, GWAGWALADA, FCT ABUJA" },
    { sn: "7", state: "OYO", town: "IBADAN", name: "UNIVERSITY OF IBADAN CBT CENTRE, IBADAN, OYO STATE" },
    { sn: "8", state: "ENUGU", town: "ENUGU", name: "UNIVERSITY OF NIGERIA NSUKKA CBT CENTRE, ENUGU CAMPUS, ENUGU STATE" },
  ];

  useEffect(() => {
    if (selectedState) {
      fetchCenters();
    }
  }, [selectedState]);

  const fetchCenters = async () => {
    if (!selectedState) return;
    
    setLoading(true);
    setFetchError("");
    
    try {
      const proxyUrl = 'https://api.allorigins.win/raw?url=';
      const targetUrl = encodeURIComponent('https://centres.jamb.gov.ng/public.php');
      
      const response = await fetch(proxyUrl + targetUrl);
      const html = await response.text();
      
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const rows = doc.querySelectorAll('table tr');
      
      const centersData = [];
      rows.forEach((row, index) => {
        if (index === 0) return;
        const cells = row.querySelectorAll('td');
        if (cells.length >= 4) {
          const state = cells[1]?.textContent?.trim();
          // Only add centers for selected state
          if (state === selectedState) {
            centersData.push({
              sn: cells[0]?.textContent?.trim(),
              state: state,
              town: cells[2]?.textContent?.trim(),
              name: cells[3]?.textContent?.trim()
            });
          }
        }
      });
      
      if (centersData.length > 0) {
        setCenters(centersData);
      } else {
        // Filter sample data by state
        const filtered = sampleCenters.filter(c => c.state === selectedState);
        setCenters(filtered);
        if (filtered.length === 0) {
          setFetchError("No centers found for this state. Data may not be available yet.");
        }
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching centers:', error);
      const filtered = sampleCenters.filter(c => c.state === selectedState);
      setCenters(filtered);
      setFetchError("Unable to fetch live data. Showing sample centers.");
      setLoading(false);
    }
  };

  const showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? '#16a34a' : type === 'error' ? '#dc2626' : '#0A3D91';
    notification.style.cssText = `position:fixed;top:20px;right:20px;background:${bgColor};color:white;padding:16px 24px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.2);z-index:9999;max-width:90%;animation:slideIn 0.3s ease-out;`;
    notification.innerHTML = `<div style="display:flex;align-items:center;gap:8px;"><strong>📍</strong><span>${message}</span></div>`;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease-in';
      setTimeout(() => notification.remove(), 300);
    }, 4000);
  };

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      showNotification('Geolocation is not supported by your browser.', 'error');
      return;
    }

    setLoading(true);
    showNotification('Detecting your location...', 'info');
    
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`,
            { headers: { 'User-Agent': 'ExamNewsApp/1.0' } }
          );
          
          if (!response.ok) throw new Error('Location service unavailable');
          
          const data = await response.json();
          const address = data.address || {};
          
          // Try multiple fields for state detection
          let detectedState = address.state || address.region || address.province;
          if (detectedState) {
            detectedState = detectedState.toUpperCase().replace(' STATE', '');
            
            // Map common variations to standard state names
            const stateMap = {
              'FEDERAL CAPITAL TERRITORY': 'FCT',
              'FCT ABUJA': 'FCT',
              'ABUJA': 'FCT',
              'AKWA-IBOM': 'AKWA IBOM',
              'CROSS-RIVER': 'CROSS RIVER'
            };
            
            // Check if it's a known variation
            if (stateMap[detectedState]) {
              detectedState = stateMap[detectedState];
            }
            
            // Match with available states
            const matchedState = states.find(s => 
              s === detectedState || 
              s.includes(detectedState) || 
              detectedState.includes(s)
            );
            
            if (matchedState) {
              setSelectedState(matchedState);
              
              // Try to detect town
              setTimeout(() => {
                const detectedTown = address.town || address.city || address.suburb || address.municipality;
                
                if (detectedTown) {
                  const townUpper = detectedTown.toUpperCase();
                  const stateCenters = sampleCenters.filter(c => c.state === matchedState);
                  const availableTowns = [...new Set(stateCenters.map(c => c.town))];
                  
                  if (availableTowns.includes(townUpper)) {
                    setSelectedTown(townUpper);
                    showNotification(`✓ Location: ${townUpper}, ${matchedState}`, 'success');
                  } else {
                    showNotification(`State: ${matchedState} detected. Select your town manually.`, 'info');
                  }
                } else {
                  showNotification(`State: ${matchedState} detected. Select your town.`, 'info');
                }
                setLoading(false);
              }, 500);
            } else {
              showNotification(`Location detected but state "${detectedState}" not in our list. Please select manually.`, 'error');
              setLoading(false);
            }
          } else {
            showNotification('Could not determine state from your location. Please select manually.', 'error');
            setLoading(false);
          }
        } catch (error) {
          console.error('Geolocation error:', error);
          showNotification('Location service error. Please select state manually.', 'error');
          setLoading(false);
        }
      },
      (error) => {
        let message = 'Location access denied.';
        if (error.code === 1) message = 'Please enable location permissions in your browser.';
        else if (error.code === 2) message = 'Location unavailable. Please select manually.';
        else if (error.code === 3) message = 'Location request timeout. Please try again.';
        
        showNotification(message, 'error');
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const filteredCenters = centers.filter(center => {
    const matchesState = !selectedState || center.state === selectedState;
    const matchesTown = !selectedTown || center.town === selectedTown;
    const matchesSearch = !searchQuery || 
      center.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.town?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesState && matchesTown && matchesSearch;
  }).sort((a, b) => {
    // Sort KUBWA centers by order field
    if (a.state === 'FCT' && a.town === 'KUBWA' && b.state === 'FCT' && b.town === 'KUBWA') {
      return (a.order || 999) - (b.order || 999);
    }
    return 0;
  });

  const towns = selectedState 
    ? [...new Set(centers.filter(c => c.state === selectedState).map(c => c.town))]
    : [];

  // Pagination
  const indexOfLastCenter = currentPage * centersPerPage;
  const indexOfFirstCenter = indexOfLastCenter - centersPerPage;
  const currentCenters = filteredCenters.slice(indexOfFirstCenter, indexOfLastCenter);
  const totalPages = Math.ceil(filteredCenters.length / centersPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedState, selectedTown, searchQuery]);

  return (
    <div>
      <Helmet>
        <title>JAMB CBT Centers Near Me 2026 - Find Accredited Centers</title>
        <meta name="description" content="Find JAMB accredited CBT centers near you. Search by state and town for 2026 registration and examination centers." />
        <link rel="canonical" href="https://examnews.work.gd/jamb-centers" />
      </Helmet>

      <section style={{background: '#16a34a', color: '#ffffff', padding: '48px 20px', textAlign: 'center'}}>
        <div className="container">
          <h1 style={{color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap'}}>
            <MapPin size={36}/> JAMB CBT Centers Near Me
          </h1>
          <p style={{fontSize: '1.125rem', color: '#e0e7ff'}}>Find official JAMB-approved registration and examination centers nationwide</p>
        </div>
      </section>

      <div className="container" style={{padding: '40px 20px'}}>
        <div className="card" style={{marginBottom: '32px', background: '#f0fdf4', borderColor: '#16a34a'}}>
          <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px'}}>
            <Search size={20} /> Search for Centers
          </h2>
          
          <button 
            onClick={getUserLocation}
            className="btn"
            disabled={loading}
            style={{marginBottom: '20px', display: 'inline-flex', alignItems: 'center', gap: '8px', opacity: loading ? 0.5 : 1}}
          >
            <Navigation size={18} /> {loading ? 'Detecting...' : 'Detect My Location'}
          </button>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px'}}>
            <div>
              <label style={{display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.875rem'}}>Select State</label>
              <select 
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setSelectedTown("");
                }}
                style={{width: '100%', padding: '10px', border: '1px solid #e5e7eb', fontSize: '1rem'}}
              >
                <option value="">All States</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.875rem'}}>Select Town</label>
              <select 
                value={selectedTown}
                onChange={(e) => setSelectedTown(e.target.value)}
                disabled={!selectedState}
                style={{width: '100%', padding: '10px', border: '1px solid #e5e7eb', fontSize: '1rem'}}
              >
                <option value="">All Towns</option>
                {towns.map(town => (
                  <option key={town} value={town}>{town}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.875rem'}}>Search Center Name</label>
              <input
                type="text"
                placeholder="Search by center name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{width: '100%', padding: '10px', border: '1px solid #e5e7eb', fontSize: '1rem'}}
              />
            </div>
          </div>

          <p style={{fontSize: '0.875rem', color: '#6b7280', margin: 0}}>
            {selectedState ? (
              <>Found <strong>{filteredCenters.length}</strong> centers in {selectedState}</>
            ) : (
              "Please select a state to view centers"
            )}
          </p>
          {fetchError && (
            <p style={{fontSize: '0.875rem', color: '#dc2626', marginTop: '8px'}}>{fetchError}</p>
          )}
        </div>

        {!selectedState ? (
          <div className="card" style={{textAlign: 'center', padding: '40px'}}>
            <p style={{fontSize: '1.125rem', marginBottom: '16px'}}>👆 Select your state above to view JAMB centers</p>
            <p style={{color: '#6b7280'}}>Or click "Use My Location" to auto-detect your state</p>
          </div>
        ) : loading ? (
          <div style={{textAlign: 'center', padding: '40px'}}>
            <p>Loading centers...</p>
          </div>
        ) : (
          <div>
            {filteredCenters.length === 0 ? (
              <div className="card" style={{textAlign: 'center', padding: '40px'}}>
                <p>No centers found. Try adjusting your filters.</p>
              </div>
            ) : (
              <>
                <div style={{display: 'grid', gap: '16px'}}>
                  {currentCenters.map((center, index) => (
                    <div key={index} className="card">
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px'}}>
                        <h3 style={{fontSize: '1.125rem', fontWeight: 600, color: '#16a34a', margin: 0}}>
                          {center.name}
                        </h3>
                        <span style={{background: '#f0fdf4', color: '#16a34a', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600}}>
                          #{center.sn}
                        </span>
                      </div>
                      <div style={{display: 'flex', gap: '16px', fontSize: '0.875rem', color: '#6b7280', flexWrap: 'wrap'}}>
                        <span><strong>State:</strong> {center.state}</span>
                        <span><strong>Town:</strong> {center.town}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '24px', flexWrap: 'wrap'}}>
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="btn btn-secondary"
                      style={{padding: '8px 16px', opacity: currentPage === 1 ? 0.5 : 1}}
                    >
                      Previous
                    </button>
                    <span style={{padding: '8px 16px', fontSize: '0.875rem'}}>
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="btn btn-secondary"
                      style={{padding: '8px 16px', opacity: currentPage === totalPages ? 0.5 : 1}}
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        <div className="info-alert" style={{marginTop: '32px'}}>
          <h3 style={{fontWeight: 600, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px'}}>
            <Info size={20} /> Important Notice
          </h3>
          <p style={{margin: 0, fontSize: '0.9375rem'}}>
            Only use JAMB accredited centers for registration. Avoid cyber cafes and unauthorized agents. 
            For the complete official list, visit: <a href="https://centres.jamb.gov.ng/public.php" target="_blank" rel="noopener noreferrer" style={{color: '#0A3D91', fontWeight: 600}}>centres.jamb.gov.ng</a>
          </p>
        </div>

        <div style={{marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
          <Link to="/jamb" className="btn">JAMB Registration Guide</Link>
          <Link to="/check-jamb-result" className="btn btn-secondary">Check JAMB Result</Link>
        </div>
      </div>
    </div>
  );
};

export default JambCenters;
