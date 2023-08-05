import React from "react";

const Contact: React.FC = () => {
  return (
    <div id="contact" className="contact">
      <h2 className="contact__header">W razie pytań zapraszamy do kontaktu: </h2>
      <h3>
        Discord:{" "}
        <a className="contact--first"
          href="https://discord.com/channels/967750458858938418/973609130898108446"
          target="blank">
          Główny discord klanu
        </a>
      </h3>
    </div>
  );
};

export default Contact;
