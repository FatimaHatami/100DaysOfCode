import React from "react";
import Order from "./Order";

const Footer = () => {
  const currentHour = new Date().getHours();
  const openingHour = 9;
  const closingHour = 22;
  const isOpen = currentHour > openingHour && currentHour < closingHour;
  return (
    <footer>
      {isOpen ? (
        <Order closingHour={closingHour} openingHour={openingHour} />
      ) : (
        <p>
          We're happy to welcome you between {openingHour}:00 and {closingHour}
          :00. Come back soon!
        </p>
      )}
    </footer>
  );
};

export default Footer;
