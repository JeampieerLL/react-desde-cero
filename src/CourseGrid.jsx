import React from 'react'
import Curso from './Curso'

const cursos = [
    {
      "id":  1,
      "title": "React desde cero",
      "image": "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
      "price": 30,
      "profesor": "Jeampieer Limahuaya"
    }, {
      "id":  2,  
      "title": "Html desde cero",
      "image": "https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png",
      "price": 50,
      "profesor": "Greta Tarazona"
    }, {
      "id":  3,
      "title": "Python desde cero",
      "image": "https://edteam-media.s3.amazonaws.com/courses/small/8e6ca04d-3961-4f90-8e97-8ec1384c8363.png",
      "price": 20,
      "profesor": "Alfonso Juárez"
    }, {
      "id":  4,
      "title": "Ruby desde cero",
      "image": "https://edteam-media.s3.amazonaws.com/courses/small/440bf729-4f2b-49a6-a0c7-7cf65a8bd31b.png",
      "price": 90,
      "profesor": "JUanito Pérez"
    }
]

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        { cursos.map( curso => (
        <Curso 
            key={curso.id}
            id={curso.id} 
            title={curso.title}
            image={curso.image}
            price={curso.price}
            profesor={curso.profesor} />
        )) }
    </div>
)

export default CourseGrid