import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact
        </h2>
        <p className="pb-5">
          Je suis a la recherche d'une alternance pour Ocotobre
          alors n'hésitez pas a me contactez pour avoir de plus amples information.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> florianlusson@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> 06.89.76.23.19
        </p>
      </div>
    </section>
  );
};

export default Contact;
