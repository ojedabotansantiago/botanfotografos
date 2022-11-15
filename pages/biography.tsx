import Header from '../components/header';
import Image from 'next/image';
import images from '../public/logoBotanBlanco.jpg';
export default function Biography() {
  return (
    <>
      <Header />
      <div className='card mgt-large py-5'>
        <div className='card-image'>
          <figure className='image mt-6'>
            <Image src={images} alt='Placeholder image' />
          </figure>
        </div>
        <div className='card-content'>
          <div className='media'>
            <div className='media-left'>
              <figure className='image is-48x48'>
                <Image src={images} alt='Placeholder image' />
              </figure>
            </div>
            <div className='media-content'>
              <p className='title is-4'>BOTÁN FOTÓGRAFOS</p>
              <p className='subtitle is-6'>@Botán</p>
            </div>
          </div>

          <div className='content'>
            <p>
              “Para ver una buena corrida de toros no había que ir a la plaza, había que acodarse en el estudio de Botán, en su laboratorio, y ver desfilar, uno
              tras otro, derechazos, naturales, recortes, desplantes, y, lo que es mejor, había que ver sus toros.
            </p>
            <p className='has-text-weight-bold'>
              ...Cargado con su equipo, se le veía por todas las fiestas de España, esperando su oportunidad de novillero de la cámara. Y la oportunidad legó
              una y otra tarde en que no hizo faena mala nunca, porque sus encuadres, las luces, la oportunidad del gesto, hicieron de sus imágenes toda una
              galería irrepetible”.
            </p>
            <p>Álvaro López Alonso, “Fernando Botán, maestro de periodistas” Corrida de la Prensa, 1996.</p>
            <p>
              Una cámara fotográfica comprada en vacaciones por Fernando Botán Mon a mediados de los años 50 del siglo pasado, fue el detonante que inició una
              de las generaciones mas importantes de fotógrafos taurinos, encabezados por Fernando Botán Castillo, su hijo, que rápido tomó el relevo al frente
              de la firma.
            </p>
            <p>
              Empleado de La Editorial Católica, el Abuelo Botán, ya cincuentón, y que era un tipo avispado, de los de entonces, (ni nos imaginamos que hubiera
              sido de empezar con 20 años!) empezó a publicar sus primeras fotografías en el Diario “Ya”, cabecera propiedad de la citada editorial. La amistad
              que tenía con el periodista especialista en el turf español, le llevo a cubrir, con su flamante Leica, las carreras de caballos celebradas en El
              Hipódromo de la Zarzuela madrileño. Pero su afición por la Fiesta Nacional, acabó desviando su atención fotográfica hacia su gran pasión: La
              Tauromaquia. Desde sus inicios hasta la actualidad, Toros y caballos han sido los dos pilares fotográficos fundamentales de la firma Botán.
            </p>
            <p>
              Rápidamente, padre e hijo, se abren camino entre los grandes fotógrafos taurinos de la época (Arjona, Cano, Jesús Rodríguez, Cuevas, Lendínez,
              etc...), recorriendo juntos las plazas de la geografía española. Pronto centraron, casi exclusivamente, toda la atención en su querida Plaza de
              las Ventas, sin olvidarse de la entrañable “Chata” del madrileño barrio de Carabanchel, a donde el abuelo Botán estuvo acudiendo prácticamente
              hasta el día en el que fue cerrada, y donde, de su mano, a modo de novilleros en busca de su oportunidad, se fogueaban los fotógrafos noveles que
              se iban incorporando a la Agencia.
            </p>
            <p>
              Revistas especializadas, agencias, prensa nacional y extranjera, pronto se fijaron en sus trabajos, solicitando su colaboración, y como
              consecuencia, sus instantáneas dieron la vuelta al mundo durante muchos años. Esta labor les llevó a recibir numerosos reconocimientos y premios,
              destacando los concedidos por WORLD PRESS PHOTO en 1972 (3er premio con la fotografía “Peligro Toro Volador” en la que un toro salta por encima de
              un torero en la Plaza de Aranjuez) y en 1973 ( 1er premio con la fotografía mas icónica de la casa y conocida como “La Pirueta” , en la que un
              toro da una vuelta de campana en la Real Maestranza de Sevilla).
            </p>
            <p className='is-italic'>
              “Elevar la fotografía taurina por encima de las imágenes galardonadas en estos certámenes, por lo general de guerras y tragedias, nos llena de
              orgullo” (F.Botán).
            </p>
            <p>
              Pioneros en la edición de libros fotográficos, publicaron año tras año sus queridas “Crónicas Taurinas Gráficas”, junto con otros monográficos
              sobre varios matadores o “La Tragedia de la Fiesta” (libro de cabecera para muchos cirujanos taurinos). La buena organización del archivo
              fotográfico taurino, les llevo a colaborar y documentar gráficamente numerosos libros o a ilustrar los últimos tomos de la enciclopedia{' '}
              <p className='is-italic'> “El Cossío”.</p>
            </p>
            <p>
              El 24 agosto de 1983, las agencias de prensa dieron la noticia: Fernando Botán había muerto, muchos pensaron en el padre...Lamentablemente no fue
              así; a la edad de 48 años nos dejo prematuramente, quien fue sin duda, uno de los mejores fotógrafos taurinos de la historia de la tauromaquia,
              “un tipo simpático, muy querido por todos, afable y cariñoso, un tipo con cara de “boxeador arrepentido...” como le calificaba Barquerito en la
              necrológica de Diario 16, con motivo de su fallecimiento. Cinco años mas tarde, en enero de 1988, fallecería Fernando Botán Mon a los 79 años de
              edad.
            </p>
            <p>
              La labor de estos, fue continuada por su hija Carmen Botán, pero la mayor aportación de los Botán, es la de haber creado escuela, aportando buenos
              profesionales al reporterismo taurino como lo son Santos Martín (Santi), Domingo Álvarez y su yerno Santiago Ojeda, actual responsable de la
              digitalización ,conservación, promoción y comercialización de archivo histórico.
            </p>
            <a>@Botan</a>
            <time dateTime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </>
  );
}
