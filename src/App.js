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

const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" alt="banner" src="https://scontent.flim1-2.fna.fbcdn.net/v/t1.6435-9/141115726_2844145469207162_6878228424090213429_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=AukrupnyY18AX9tHiZg&_nc_ht=scontent.flim1-2.fna&oh=b27f51aed49462d9a3336c2c567df9df&oe=60CB76BC"/>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Título del banner</p>
          <p> Tu futuro te está esperando</p>
          <a href="https://www.facebook.com/photo?fbid=2844145465873829&set=a.1378298709125186" target= "_blank" rel="noreferrer" className="button">Suscribirse</a>
        </div>
      </div>
    </div>
  </div>

  <div className="ed-grid m-grid-3">
    <Curso />
    <Curso />
    <Curso />
    <Curso />
    <Curso />
    <Curso />
    <Curso />
  </div>
  </>
)


export default App;
