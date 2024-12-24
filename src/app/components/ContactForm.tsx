import React from "react";

export default function ContactForm() {
  return (
    <div className="flex flex-row justify-between">
      <div>div1</div>
      <div className="w-[31.25rem] h-[45.625rem] m-0 mb-[4.063rem] ml-[7.438rem] p-[3.063rem_4rem_1.563rem_2.375rem] rounded-lg shadow-lg shadow-[rgba(13,38,53,0.19)] border-[8px] border-white bg-white">
        <div>
          <span className="w-[3.125rem] h-[1.375rem] m-0 mr-[21.75rem] mb-[1rem] font-bold text-[1.125rem] text-[#003e5b]">
            Naam
          </span>
          <div className="w-[24.875rem] h-[3.313rem] my-4 px-[1.125rem] py-[0.938rem] pb-[0.875rem] rounded-lg border border-[#b1cde9] bg-[rgba(229,242,255,0.14)]">
            <input
              type="text"
              placeholder="Voornaam"
              className="w-[22.875rem] h-[1.5rem] font-sans text-[0.75rem] font-light leading-[2] tracking-normal text-[#6b9bc4]"
            />
          </div>
          <div className="w-[24.875rem] h-[3.313rem] mt-[0.625rem] mb-0 mx-0 px-[1rem] py-[1.125rem] pb-[1rem] pl-[0.875rem] rounded-lg border border-[var(--dodger-blue)] bg-white">
            <input
              type="text"
              placeholder="Achternaam"
              className="w-[23rem] h-[1.188rem] font-sans text-[1rem] font-light leading-normal tracking-normal text-[#58727e]"
            />
          </div>
        </div>

        {/* Contact Sectie */}
        <div>
          <h2 className="w-[4.313rem] h-[1.375rem] mr-[20.563rem] mt-[2rem] mb-4 ml-0 font-sans text-[1.125rem] font-bold leading-normal tracking-normal text-[#004767]">
            Contact
          </h2>
          <div className="w-[24.875rem] h-[3.313rem] my-4 pt-[0.938rem] pr-[1.125rem] pb-[0.875rem] pl-[0.875rem] rounded-lg border border-[#b1cde9] bg-[rgba(229,242,255,0.14)]">
            <input
              type="tel"
              placeholder="Telefoonnummer"
              className="w-[22.875rem] h-[1.5rem] font-sans text-[0.75rem] font-light leading-[2] tracking-normal text-[#6b9bc4]"
            />
          </div>
          <div className="w-[24.875rem] h-[3.313rem] mt-4 mb-[2rem] mx-0 pt-[0.938rem] pr-[1.125rem] pb-[0.875rem] pl-[0.875rem] rounded-lg border border-[#b1cde9] bg-[rgba(229,242,255,0.14)]">
            <input
              type="email"
              placeholder="E-mail"
              className="w-[22.875rem] h-[1.5rem] font-sans text-[0.75rem] font-light leading-[2] tracking-normal text-[#6b9bc4]"
            />
          </div>
        </div>

        {/* Adres Sectie */}
        <div>
          <span className="w-[3rem] h-[1.375rem] mr-[21.875rem] mb-4 font-sans text-[1.125rem] font-bold leading-normal tracking-normal text-[#005273]">
            Adres
          </span>
          <div className="w-[24.875rem] h-[3.313rem] my-4 pt-[0.938rem] pr-[1rem] pb-[0.875rem] pl-[1rem] rounded-lg border border-[#b1cde9] bg-[rgba(229,242,255,0.14)]">
            <input
              type="text"
              placeholder="Straatnaam + huisnr."
              className="w-[22.875rem] h-[1.5rem] font-sans text-[0.75rem] font-light leading-[2] tracking-normal text-[#6b9bc4]"
            />
          </div>

          <div className="flex">
            <input
              type="text"
              placeholder="Postcode"
              className="w-[9.5rem] h-[3.313rem] mr-4 pt-[0.938rem] pr-[1.688rem] pb-[0.875rem] pl-[0.875rem] rounded-lg border border-[#b1cde9] bg-[rgba(229,242,255,0.14)]"
            />
            <input
              type="text"
              placeholder="Plaats"
              className="w-[14.313rem] h-[3.313rem] ml-4 pt-[0.938rem] pr-[1.063rem] pb-[0.875rem] pl-[0.875rem] rounded-lg border border-[#b1cde9] bg-[rgba(229,242,255,0.14)]"
            />
          </div>
        </div>

        {/* Knoppen */}
        <div className="flex items-center justify-between mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Direct betalen →
          </button>
          <a href="#" className="text-blue-500 hover:underline">
            Stuur een offerte
          </a>
        </div>

        {/* Extra Tekst */}
        <p className="text-sm text-gray-500 mt-2">
          Betalen via iDEAL, Creditcard... etc.
        </p>
      </div>
    </div>
  );
}
