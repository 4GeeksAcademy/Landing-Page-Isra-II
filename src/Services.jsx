import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="container mt-5">
      <h2>Mis Servicios</h2>
      <div className="row justify-content-center m-4">
        <div className="col-9 ">
          Mis actuaciones están diseñadas para cautivar y sorprender. Ya sea que
          prefieras la magia cercana e interactiva de la cartomagia o los
          misterios profundos del mentalismo, hay algo en mi repertorio para
          todos.
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="service-item card mb-4 shadow-sm">
            <img
              src="src/assets/big_crop_mago-profesional.png"
              className="card-img-top services-img"
              alt="Eventos Corporativos"
            />
            <div className="card-body">
              <h3 className="card-title">Eventos Corporativos</h3>
              <p className="card-text">
                Magia profesional y elegante para tus eventos empresariales.
              </p>
              <button className="btn btn-primary">Reservar</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="service-item card mb-4 shadow-sm">
            <img
              src="src/assets/cuentas-7.jpg"
              className="card-img-top services-img"
              alt="Sesión de Cartomagia Privada"
            />
            <div className="card-body">
              <h3 className="card-title">Sesión de Cartomagia Privada</h3>
              <p className="card-text">
                Cartomagia sorprendente en un entorno íntimo, recomendado para
                reuniones de entre 20 y 30 personas.
              </p>
              <button className="btn btn-primary">Reservar</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="service-item card mb-4 shadow-sm">
            <img
              src="src/assets/Mentalism.jpg"
              className="card-img-top services-img"
              alt="Sesión de Mentalismo Privada"
            />
            <div className="card-body">
              <h3 className="card-title">Sesión de Mentalismo Privada</h3>
              <p className="card-text">
                Sumérgete en el fascinante mundo del mentalismo con una sesión
                privada diseñada para desafiar tu percepción y sorprender a tu
                mente. Ideal para grupos pequeños que buscan una experiencia
                única e inolvidable.
              </p>
              <button className="btn btn-primary">Reservar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
