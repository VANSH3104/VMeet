"use client"
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const AllTemp = () => {
  const [name, setName] = useState('');
  const [education, setEducation] = useState('');
  const [color, setColor] = useState('#000000'); // Default text color
  const [bgColor, setBgColor] = useState('#ffffff'); // Default background color
  const [font, setFont] = useState('Arial');
  const [layout, setLayout] = useState('single'); // Default layout

  const downloadPDF = () => {
    const input = document.getElementById('cv-preview');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('cv.pdf');
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-md p-4">
        <h1 className="text-xl">CV Maker</h1>
        
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />
        
        <input
          type="text"
          placeholder="Your Education"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          className="border p-2 w-full"
        />
        
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="mt-4"
        />
        
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          className="mt-4"
        />
        
        <select
          value={font}
          onChange={(e) => setFont(e.target.value)}
          className="border p-2 w-full mt-4"
        >
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>

        <select
          value={layout}
          onChange={(e) => setLayout(e.target.value)}
          className="border p-2 w-full mt-4"
        >
          <option value="single">Single Column</option>
          <option value="double">Two Columns</option>
        </select>

        <button
          onClick={downloadPDF}
          className="bg-blue-500 text-white mt-4 p-2"
        >
          Download PDF
        </button>
      </div>

      {/* CV Preview Section */}
      <div
        id="cv-preview"
        className="w-full max-w-md p-4 border mt-4"
        style={{
          color,
          backgroundColor: bgColor,
          fontFamily: font,
          display: layout === 'single' ? 'block' : 'flex', // Adjust layout
        }}
      >
        {layout === 'single' ? (
          <div>
            <h2>{name}</h2>
            <h3>Education:</h3>
            <p>{education}</p>
          </div>
        ) : (
          <div className="flex justify-between w-full">
            <div className="flex-1">
              <h2>{name}</h2>
            </div>
            <div className="flex-1">
              <h3>Education:</h3>
              <p>{education}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTemp;
