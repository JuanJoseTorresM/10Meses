import Inicio from '../images/inicio.jpg'
import Cumple from '../images/cumple.jpg'
import Momilon1 from '../images/momilonx2.jpg'
import Cumple2 from '../images/lindos.jpg'
import Lindosx2 from '../images/lindosx2.jpg'
import Ajua from '../images/ajua.jpg'
import Momilon2 from '../images/momilon.jpg'
import Maslindos from '../images/maslindos.jpg'
import Ruta from '../images/ruta.jpg'


const Album = () => {
    return (
        <>
            <main>

                <section classNameName="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light text-danger">¿Por donde Empezar?</h1>
                            <p className="lead text-body-primary">Hemos vivido tantas cosas juntos que ni se por donde empezar mi amor, solo le doy las gracias a Dios por haberme puesto en tu camino, porque sin ti no se donde estaria mi angelito.</p>

                        </div>
                    </div>
                </section>

                <div className="album py-5 bg-body-tertiary">
                    <div className="container">

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src={Inicio} width="100%" ></img>
                                    <div className="card-body">
                                        <p className="card-text">Esta fue nuestra primera foto, cuando fuimos a ver Peaches Peaches Peaches. Y me di cuenta de la niña de la que me estaba enamorando.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src={Cumple} width="100%" ></img>
                                    <div className="card-body">
                                        <p className="card-text">Este ha sido uno de los dias mas felices de mi vida, gracias a ti volvi a tener un cumpleaños bonito y con alguien para celebrarlo.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src={Momilon1} width="100%" ></img>
                                    <div className="card-body">
                                        <p className="card-text">Esta fue de las primeras veces que nos arrunchamos juntitos y me quede momido poque me di cuenta que eres mi lugar seguro y en quien puedo confiar siempre.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src={Cumple2} width="100%" ></img>
                                    <div className="card-body">
                                        <p className="card-text">Esta fue en tu primer cumpleaños conmigo, ese dia me pude dar cuenta lo mucho que me aprecia tambien tu familia y lo mucho que quieren verte feliz conmigo.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src={Lindosx2} width="100%" ></img>
                                    <div className="card-body">
                                        <p className="card-text">Este tambien es un recuerdo muy bonito poque despues de que mi ama se me fue volvi a pasar un diciembre bonito y prendimos velitas juntos y en especial una por mi mami.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src={Ajua} width="100%" ></img>
                                    <div className="card-body">
                                        <p className="card-text">Esta fue la primera vez que nuestros papas salieron juntitos y nos tuuvieron en cuenta para algo que es una tradicion para tu familia y pasamos un dia muy bonito.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src={Momilon2} width="100%" ></img>
                                    <div className="card-body">
                                        <p className="card-text">Este fue nuestro primer viajesito juntos y que momimos un ratito juntitos antes de ir a celebrar tu cumpleaños mi amor dindo.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src={Maslindos} width="100%" ></img>
                                    <div className="card-body">
                                        <p className="card-text">Este fue el dia que fuimos a isla morada y siento yo que sacamos nuestra fotito mas linda y mas especial.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src={Ruta} width="100%" ></img>
                                    <div className="card-body">
                                        <p className="card-text">Esta fotito es de nuestra primera rutita navideña y no sabes como he llorado haciendo esto.</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </main>

            <section classNameName="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <p className="lead text-body-primary"> Y con tantas fotos que quedan no puedo resumir todo lo que hemos vivido juntos, tanto cosas buenas como malas. Y yo solo espero poderte decir si acepto en un altar para estar con la niña mas preciosa por el resto de mi vida.</p>
                        <br />
                        <br />
                        
                    </div>
                </div>
            </section>

          

        </>
    )
}
export default Album;