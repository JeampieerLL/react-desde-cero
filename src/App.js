import React from 'react';
import "./scss/styles.scss";
import Curso from './Curso'
import Banner from './Banner'
import Formulario from './Formulario'
import CourseGrid from './CourseGrid';

/* Reglas JSX

1.- Toda etiqueta debe cerrarse
2.- Los componentes deben devolver un solo elmento padre
3.- Apoyarse de los Fragments cuando necesito devolver 2 elementos
4.- Fragment => <> hijos </>
5.- img siempre se cierra
6.- class => className
7.- for => htmlFor
*/

/* const cursos = [
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
 */

const App = () => (
  <> 
  <Banner />
  {/* <Formulario name="EDteam" /> */}
  <CourseGrid />
  </>
)


export default App;
