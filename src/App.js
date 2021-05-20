import React from 'react';
import "./scss/styles.scss";
import Curso from './Curso'

/* Reglas JSX

1.- Toda etiqueta debe cerrarse
2.- Los componentes deben devolver un solo elmento padre
3.- Apoyarse de los Fragments cuando necesito devolver 2 elementos
4.- Fragment => <> hijos </>
5.- img siempre se cierra
6.- class => className
7.- for => htmlFor
*/

const cursos = [
  {
    "title": "React desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "price": 30,
    "profesor": "Jeampieer Limahuaya"
  }, {
    "title": "Html desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png",
    "price": 50,
    "profesor": "Greta Tarazona"
  }, {
    "title": "Python desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/8e6ca04d-3961-4f90-8e97-8ec1384c8363.png",
    "price": 20,
    "profesor": "Alfonso Juárez"
  }, {
    "title": "Ruby desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/440bf729-4f2b-49a6-a0c7-7cf65a8bd31b.png",
    "price": 90,
    "profesor": "JUanito Pérez"
  }
]


const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" alt="banner" src="https://images.unsplash.com/photo-1621359729283-c83f6d0da708?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"/>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Título del banner</p>
          <p> Tu futuro te está esperando</p>
          <a href="https://www.facebook.com/photo?fbid=2844145465873829&set=a.1378298709125186" target= "_blank" rel="noreferrer" className="button">Suscribirse</a>
        </div>
      </div>
    </div>
  </div>

  <div className="ed-grid m-grid-3">
    {
      cursos.map( curso => <Curso title={curso.title} image={curso.image} price={curso.price} profesor={curso.profesor} /> )
    }
  </div>
  </>
)


export default App;
