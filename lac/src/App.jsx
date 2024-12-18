import React, { useState } from "react";
import HouseholdPopup from "./HouseholdPopup";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <h1>Household Information Dashboard</h1>
      <button onClick={() => setShowPopup(true)} className="show-popup-btn">
        Show Household Information
      </button>

      {showPopup && <HouseholdPopup closePopup={() => setShowPopup(false)} />}
    </div>
  );
}

export default App;
