import React, { useState } from "react";
import "./App.css";

const HouseholdPopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  const householdData = [
    {
      id: 1,
      name: "Tika Ram Kumar Chheteri",
      sex: "Male",
      relation: "HOH",
      maritalStatus: "Widowed",
      nationality: "Bhutanese",
      fatherCID: "1128293839",
      fatherName: "Dal Bdr Rai",
    },
    {
      id: 2,
      name: "Pushkar Chheteri",
      sex: "Female",
      relation: "Member",
      maritalStatus: "Married",
      nationality: "Bhutanese",
      fatherCID: "1128293839",
      fatherName: "Dal Bdr Rai",
    },
    {
      id: 3,
      name: "Tika Ram Kumar Chheteri",
      sex: "Male",
      relation: "Member",
      maritalStatus: "Married",
      nationality: "Bhutanese",
      fatherCID: "1128293839",
      fatherName: "Dal Bdr Rai",
    },
    {
      id: 4,
      name: "Pushkar Chheteri",
      sex: "Female",
      relation: "Member",
      maritalStatus: "Single",
      nationality: "Bhutanese",
      fatherCID: "1128293839",
      fatherName: "Dal Bdr Rai",
    },
    {
      id: 5,
      name: "Tika Ram Kumar Chheteri",
      sex: "Male",
      relation: "Member",
      maritalStatus: "Married",
      nationality: "Bhutanese",
      fatherCID: "1128293839",
      fatherName: "Dal Bdr Rai",
    },
    {
      id: 6,
      name: "Pushkar Chheteri",
      sex: "Female",
      relation: "Member",
      maritalStatus: "Married",
      nationality: "Bhutanese",
      fatherCID: "1128293839",
      fatherName: "Dal Bdr Rai",
    },
    {
      id: 7,
      name: "Tika Ram Kumar Chheteri",
      sex: "Male",
      relation: "Member",
      maritalStatus: "Married",
      nationality: "Bhutanese",
      fatherCID: "1128293839",
      fatherName: "Dal Bdr Rai",
    },
  ];

  return (
    <div className="App">
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-header">
              <h3>Household Information</h3>
              <button className="close-btn" onClick={closePopup}>
                &times;
              </button>
            </div>
            <div className="popup-body">
              <p>
                <strong>Household No:</strong>13029384
                <strong>Dzongkhag:</strong>Sarpang  
                <strong>Gewog:</strong>Gelephug  
                <strong>Village:</strong>Gakiling
                <strong>House No:</strong>Pha-7-114
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Sl No.</th>
                    <th>Name</th>
                    <th>Sex</th>
                    <th>Relation to HOH</th>
                    <th>Marital Status</th>
                    <th>Nationality</th>
                    <th>Father's CID</th>
                    <th>Father's Name</th>
                  </tr>
                </thead>
                <tbody>
                  {householdData.map((person) => (
                    <tr key={person.id}>
                      <td>{person.id}</td>
                      <td>{person.name}</td>
                      <td>{person.sex}</td>
                      <td>{person.relation}</td>
                      <td>{person.maritalStatus}</td>
                      <td>{person.nationality}</td>
                      <td>{person.fatherCID}</td>
                      <td>{person.fatherName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HouseholdPopup;
