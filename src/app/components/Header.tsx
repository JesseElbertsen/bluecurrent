import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="h-[9.5rem] max-w-[90rem] bg-red-100">
      <div className="flex justify-between items-center bg-primary h-[7.938rem] max-w-[90rem] pt-[3rem] pb-0 pl-0 pr-0">
        <Image
          src="/Images/powered-by.png"
          alt="Powered by"
          width={275}
          height={38}
          className="powered-by"
          style={{
            margin: "0 47.688rem 2.563rem 10.438rem",
            objectFit: "contain",
          }}
        />
        <Image
          src="/Images/blue-current-logo-blue-v-2.png"
          alt="Blue Current Logo"
          width={70}
          height={42}
          className="blue-current-logo"
          style={{
            margin: "0 10.313rem 2.313rem 0rem",
            objectFit: "contain",
          }}
        />
      </div>
    </header>
  );
}
