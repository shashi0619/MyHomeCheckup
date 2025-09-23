import React from "react";

const WhatsApp = () => {
  return (
    <div className="fixed bottom-24 animate-bounce  right-6 z-50">
      <a
        href="https://api.whatsapp.com/send?phone=+919871878989&text=Hello%20there%20from%20HydCivil%20team%20%23HydCivil"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/whatsapp11.png"
          alt="whatsapp"
          className="h-12 w-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        />
      </a>
    </div>
  );
};

export default WhatsApp;
