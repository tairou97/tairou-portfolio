import React from "react";

const Contact = () => {
  return (
    <div className="flex h-screen w-full  justify-center items-center text-blue-500 font-bold text-4xl">
      <h1>Contact</h1>
      <p>
        Möchten Sie mit mir in Kontakt treten oder mehr über meine Arbeit
        erfahren? Zögern Sie nicht, mich zu kontaktieren. Sie können mich per
        E-Mail unter{" "}
        <a
          href="mailto:tairou97-mouhamed@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <button className="bg-blue-200 hover:bg-blue-700 hover:text-white px-6 rounded-md">
            Mail
          </button>
        </a>
        erreichen oder sich über
        <a
          href="www.linkedin.com/in/tairou-mouhamed-744955160"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-200 hover:bg-blue-700 hover:text-white px-6 rounded-md">
            Linkedin
          </button>
        </a>
        mit mir verbinden.
      </p>
    </div>
  );
};

export default Contact;
