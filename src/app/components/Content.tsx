"use client";
import React, { useState } from "react";
import ContactForm from "./ContactForm";

const ScreenSwitcher: React.FC = () => {
  // State om bij te houden welk scherm wordt weergegeven
  const [currentScreen, setCurrentScreen] = useState<number>(1);

  // Functie om het scherm te wisselen
  const switchScreen = () => {
    setCurrentScreen(currentScreen === 2 ? 1 : currentScreen + 1); // Van 1 naar 7 schermen, terug naar 1
  };

  // Bereken de progressie (1/7, 2/7, etc.)
  const progress = (currentScreen / 7) * 100; // Veronderstel 7 schermen

  return (
    <div className="relative">
      {/* Progress Bar bovenaan */}
      <div className="absolute md:w-[17.875rem] h-[1rem] bg-white rounded-[9.5px] mt-[0.75rem] ml-[12.313rem]">
        <div
          className="h-full bg-secondary rounded-[9.5px]"
          style={{
            width: `${(progress / 100) * 17.875}rem`, // Verhoogt de breedte op basis van de voortgang
            transition: "left 0.3s ease-in-out",
          }}
        ></div>
      </div>

      {/* Bolletje */}
      <div
        className="absolute top-0 md:w-[2.5rem] h-[2.5rem] rounded-full bg-secondary"
        style={{
          margin: `0 11.5rem 0 12.875rem`, // Margins zoals opgegeven
          left: `calc(${(progress / 100) * 17.875}rem - 1.25rem)`, // Verplaatst het bolletje op basis van de voortgang
          transition: "left 0.3s ease-in-out", // Voeg een overgang toe voor het bolletje
        }}
      ></div>

      {/* Container voor de schermen */}
      <div className="flex justify-center items-center md:w-[90rem] bg-red-100">
        {/* Scherm 1 */}
        {currentScreen === 1 && (
          <div>
            <div className="md:w-[69.375rem] h-[53.5rem] m-[1.25rem_0_2.25rem] p-[4rem] pt-[4rem] pb-[5rem] pr-[5.938rem] pl-[2.5rem] rounded-[10px] bg-primary-light">
              <ContactForm />
            </div>
            <button
              onClick={switchScreen}
              className=" p-2 bg-blue-500 text-white rounded"
            >
              Wissel van scherm
            </button>
          </div>
        )}

        {/* Scherm 2 */}
        {currentScreen === 2 && (
          <div>
            <div className="md:w-[69.375rem] h-[31.688rem] m-[1.25rem_0_2.25rem] p-[4rem] pt-[4rem] pb-[5rem] pr-[5.938rem] pl-[2.5rem] rounded-[10px] bg-primary-light">
              <h1>Scherm 2</h1>
              <p>Dit is het tweede scherm.</p>
            </div>
            <button
              onClick={switchScreen}
              className="mt-4 p-2 bg-blue-500 text-white rounded"
            >
              Wissel van scherm
            </button>
          </div>
        )}
      </div>

      {/* Knop om het scherm te wisselen */}
    </div>
  );
};

export default ScreenSwitcher;
