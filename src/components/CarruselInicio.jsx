import Dormilona from '../images/momilona.jpg'
import Nojada from '../images/nojada.jpg'
import Oda from '../images/oda.jpg'
import Video1 from '../multimedia/cejitas.mp4'
import Video2 from '../multimedia/gluuuu.mp4'
import Video3 from '../multimedia/jaguelin.mp4'
import Video4 from '../multimedia/pipipi.mp4'
import Video5 from '../multimedia/rum.mp4'
import Video6 from '../multimedia/waos.mp4'

const CarruselInicio = () => {
    return (
        <>

            <h1 className='text-center font-family-base text-danger'>
                Felices 10 Meses mi Princesa Hermosa
            </h1>

            <div id="myCarousel" className="carousel slide text-center" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Dormilona} classNameName="d-block mx-auto" width="20%" ></img>
                    </div>
                    <div className="carousel-item">
                        <img src={Nojada} classNameName="d-block mx-auto" width="20%" ></img>
                    </div>
                    <div className="carousel-item">
                        <img src={Oda} classNameName="d-block mx-auto" width="20%" ></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>

            <br /><br /><br />

            <h1 className='text-center font-family-base text-danger'>
                Por mas momentos asi mi pincesa hermosa
            </h1>

            <div className='d-flex justify-content-center'>

                <div>
                    <video controls width="250" height="auto" src={Video1} type="video/mp4" />
                </div>

                <div>
                    <video controls width="250" height="auto" src={Video2} type="video/mp4" />
                </div>

                <div>
                    <video controls width="250" height="auto" src={Video3} type="video/mp4" />
                </div>

            </div>

            <div className='d-flex justify-content-center'>
                <div>
                    <video controls width="250" height="auto" src={Video4} type="video/mp4" />
                </div>

                <div>
                    <video controls width="250" height="auto" src={Video5} type="video/mp4" />
                </div>

                <div>
                    <video controls width="250" height="auto" src={Video6} type="video/mp4" />
                </div>
            </div>

            <h1 className='text-center font-family-base text-danger'>
                Te amo mucho mi amor lindo
            </h1>
        </>
    )
}
export default CarruselInicio;

