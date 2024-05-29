import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact py-5 text-center">
      <div className="container">
        <h2 className="mb-4">Contacto</h2>
        <form className="row g-3 justify-content-center">
          <div className="col-md-8">
            <input type="text" className="form-control" placeholder="Nombre" />
          </div>
          <div className="col-md-8">
            <input
              type="email"
              className="form-control"
              placeholder="Correo Electrónico"
            />
          </div>
          <div className="col-md-8">
            <textarea
              className="form-control"
              placeholder="Mensaje"
              rows="4"
            ></textarea>
          </div>
          <div className="col-md-8">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
