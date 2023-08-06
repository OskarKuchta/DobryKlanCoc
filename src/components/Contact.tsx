import React from "react";

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="contact">
      <h2 className="contact__header">Kontakt z nami: </h2>
      <div className="contact__first">
        <i className="fa-brands fa-discord contact__first--icon"></i>
        <a
          className="contact__first--link"
          href="https://discord.gg/AaJ6qcw6Zs"
          target="blank"
        >
          Główny discord klanu
        </a>
      </div>
      <div className="contact__second">
        <i className="fa-brands fa-square-facebook contact__second--icon"></i>
        <a
          className="contact__second--link"
          href="https://discord.gg/AaJ6qcw6Zs"
          target="blank"
        >
          Administrator strony
        </a>
      </div>
    </footer>
  );
};

export default Contact;
