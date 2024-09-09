import * as React from "react"
import Seo from "../components/seo"
import "../components/layout.css"
import { StaticImage } from "gatsby-plugin-image"
import "../components/css-pages/sobrenosotros.css"
import Halt2 from "../components/header/halt2"
import Footer from "../components/footer/Footer"
import BtnUp from "../components/buttons/BtnUp"
import BtnBack from "../components/buttons/BtnBack"

const Sobrenosotros = () => (
  <>
    <Halt2></Halt2>
    <div className="tab">
      <ul className="tabs">
        <li>
          <a className="subrayar" href="#bienvenida">
            ¿Qué es Patrimonio Nacional?
          </a>
        </li>
        <li>
          <a className="subrayar" href="#conoce">
            Conoce nuestra historia
          </a>
        </li>
        <li>
          <a className="subrayar" href="#consejo">
            Monumentos más destacados
          </a>
        </li>
        <li>
          <a className="subrayar" href="#actos">
            Actos e Instituciones
          </a>
        </li>
      </ul>
    </div>
    <div className="container">
      <h1 className="titulo" id="bienvenida">
        ¿QUÉ ES PATRIMONIO NACIONAL?
      </h1>
      <p className="parrafo">
        Somos una institución histórico-cultural única en el mundo. Cuidamos de
        más de 1.000 inmuebles, 170.000 piezas artísticas y 18.000 hectáreas de
        espacios verdes de gran riqueza medioambiental. Y lo hacemos con una
        doble misión: preservar y dar a conocer este valiosísimo legado y
        facilitar a la jefatura del Estado la labor representativa que le otorga
        nuestra Constitución.
      </p>
      <p className="parrafo">
        Esta web es una ventana a todo este conjunto de bienes y a las
        actividades culturales, educativas y científicas que organizamos para su
        difusión. Una ventana a los 19 palacios reales, reales monasterios y
        casas de campo en seis comunidades autónomas diferentes. A los parques
        naturales como el Monte de El Pardo o el Bosque de Riofrío. A los 6.500
        cuadros firmados, entre otros, por El Greco, Caravaggio o Velázquez. A
        la programación de nuestros conciertos. A nuestros talleres. A nuestras
        publicaciones.
      </p>
      <h1 className="titulo" id="conoce">
        CONOCE NUESTRA HISTORIA
      </h1>
      <StaticImage
        src="../images/sobrenosotros/palacio.png"
        alt="Vista de Palacio Real"
      />
      <p className="parrafo">
        Patrimonio Nacional es un organismo público regulado por una Ley
        específica de 1982, Ley 23/1982, de 16 de junio, heredera de una larga
        serie de disposiciones entre las cuales cabe destacar las leyes de 1865,
        1869, 1876, 1932 y 1940, aparte de las ordenanzas anteriores al siglo
        XIX. En definitiva, esta entidad estatal constituye el núcleo esencial y
        más importante del antiguo Real Patrimonio, o Patrimonio de la Corona,
        denominado Patrimonio de la República por la Ley de 1932, y con su
        nombre actual por las leyes de 1940 y 1982.
      </p>
      <h3 className="subtitulo">Doble función: Constitucional y Cultural</h3>
      <p className="parrafo">
        La función de este organismo público, dependiente del Ministerio de la
        Presidencia, Relaciones con las Cortes y Memoria Democrática es doble:
        el apoyo a la Jefatura del Estado para la alta representación que la
        Constitución y las leyes le atribuyen, y la puesta a disposición de los
        ciudadanos del patrimonio histórico-artístico a través de su uso con
        fines culturales, científicos y docentes. Es importante destacar la
        unidad de sus bienes, ligados por un proceso de creación continuo,
        especialmente intenso entre el siglo XVI y el XIX, y que ha dado lugar a
        conjuntos donde las piezas muebles y obras de arte están ligadas a los
        inmuebles, y todo a la historia política y cultural de España. La
        coherencia de este conjunto, y las interrelaciones entre espacios,
        objetos y memoria que en él se producen, otorgan a este Patrimonio su
        primordial valor cultural e histórico
      </p>
      <h3 className="subtitulo">Palacios y Estaciones del año</h3>
      <p className="parrafo">
        Los reyes, como en la inmensa mayoría de las diferentes cortes europeas
        de la Edad Moderna, vivían mucho tiempo fuera de la capital. Cada parte
        del año la pasaban en uno de los Reales Sitios en torno a Madrid:
        primavera en Aranjuez, verano en Valsaín y La Granja, otoño en El
        Escorial, invierno en El Pardo y en Madrid. Esta villa era sede oficial
        de la corte, pero realmente la vida del poder transcurría al ritmo de
        las estaciones en todos estos escenarios donde a su servicio se aunaban
        bosques y cazaderos, parques y jardines, palacios, colecciones y
        urbanismo.
      </p>
      <h3 className="subtitulo">Desde la Edad Media hasta hoy</h3>
      <p className="parrafo">
        El proceso creativo de este patrimonio se produce desde el principio de
        la Edad Media y arranca de la definición de los reinos que se fueron
        definiendo en la Península: una larga serie tanto de palacios como de
        edificios religiosos vinculados a la respectiva monarquía de cada reino
        -los reales patronatos, como las Huelgas- jalonan la representatividad
        de la monarquía en cada uno de los territorios que, como resultado de un
        largo proceso de uniones dinásticas, terminó por concretarse al inicio
        de la Edad Moderna en la Monarquía de España. Algunos palacios
        medievales han subsistido, bien como conventos -Tordesillas-, bien como
        sedes de la soberanía en la respectiva ciudad capital de cada antiguo
        reino -la Almudaina en Mallorca-.
      </p>
      <p className="parrafo">
        Sobre ese sustrato medieval, la configuración definitiva de los Reales
        Sitios se produce bajo los Austrias y los Borbones, a partir de la
        instalación de la capital en Madrid por Felipe II en 1561 y su fundación
        de El Escorial en 1563. Los bosques, jardines y cultivos, sobre todo en
        Aranjuez fueron perfeccionados por Felipe V, creador de La Granja de San
        Ildefonso, y por Fernando VI y Carlos III, que hizo de cada Real Sitio
        una pequeña ciudad modelo, a la par que ampliaba los palacios. La
        perfección ornamental de las residencias y de las colecciones reales
        alcanzó su grado máximo bajo Carlos IV, con aportaciones importantes en
        el siglo XIX. Bajo el reinado de Fernando VII y el fin del antiguo
        régimen se distingue por primera vez de manera clara entre bienes del
        Estado y bienes de este conjunto vinculado a la Corona llamado Real
        Patrimonio.
      </p>
      <p className="parrafo">
        Será en 1865, con la primera ley que lo regula, cuando nazca
        oficialmente la institución “Patrimonio de la Corona” bajo el reinado de
        Isabel II. Este nuevo régimen jurídico tratará de ajustar todo ese
        conjunto de bienes patrimoniales, vinculados a la Corona, a la nueva
        realidad económica, política y social. Diferenciando así entre bienes
        vinculados a la Corona, que sirven para la representación del poder y
        para la vida cotidiana de sus majestades, que tienen que seguir unidos,
        que son del Estado, y entre el patrimonio privado de los monarcas, que
        procede de los bienes que previamente se consideraban libres, o de su
        lista civil. La Ley de 1932 defendió la unidad de este conjunto de
        bienes y definió por primera vez la doble función, cultural y
        representativa, de este “Patrimonio de la República”, nombre que se
        transformó en “Nacional” por la de 1940, que esencialmente sigue el
        patrón de la anterior. Por tanto, el uso de los palacios para la
        representación oficial del Jefe del Estado se produjo tanto bajo la
        Segunda República como durante la dictadura franquista, a la par que se
        desarrollaba su función cultural.
      </p>
      <p className="parrafo">
        La Ley 23/1982, de 16 de junio, del Patrimonio Nacional, norma jurídica
        que en la actualidad regula esta entidad, reconoce a la institución como
        organismo público responsable de los bienes de titularidad del Estado
        que proceden del legado de la Corona española, y gestor de los derechos
        de las Reales Fundaciones y Patronatos, y tiene como fines principales
        el servicio a la Jefatura del Estado para la alta representación que la
        Constitución y las leyes le atribuyen, así como la puesta a disposición
        de los ciudadanos del patrimonio histórico-artístico que gestiona, a
        través de su uso con fines culturales, científicos y docentes. La
        naturaleza diversa de los bienes y la compatibilidad de usos de los
        mismos hace que la labor de servicio público a la que se debe Patrimonio
        Nacional sea amplia y compleja. Este singular conjunto integrado de
        bienes históricos es uno de los más importantes entre los de las
        antiguas cortes de Europa, y su actual doble uso público, cultural y
        representativo, es el resultado de un largo proceso histórico, que hace
        de Patrimonio Nacional una institución única en el mundo.
      </p>
      <h1 className="titulo" id="consejo">
        MONUMENTOS MÁS DESTACADOS
      </h1>
      <h3 className="subtitulo">PALACIO DE ARANJUEZ</h3>
      <StaticImage
        src="../images/sobrenosotros/palacioaranjuez.jpeg"
        alt="Palacio de Aranjuez Vista Nevada"
      />
      <p className="parrafo"></p>
      <h3 className="subtitulo">LA GRANJA DE SAN ILDEFONSO</h3>
      <StaticImage
        src="../images/sobrenosotros/lagranjasanildefonso.jpg"
        alt="Gerente Patrimonio Nacional"
      />
      <p className="parrafo"></p>
      <h1 className="titulo" id="actos">
        ACTOS OFICIALES E INSTITUCIONALES
      </h1>
      <p className="parrafo">
        Cada año los Palacios y Monasterios del Patrimonio Nacional acogen actos
        oficiales presididos por S.M. el Rey de España. Las Ceremonias de Estado
        conservan su carácter histórico y el protocolo tradicional. Entre las
        más importantes se encuentran las recepciones de gala a los Jefes de
        Estado que visitan nuestro país, o la presentación de cartas
        credenciales ante S.M. el Rey por los nuevos Embajadores extranjeros
        acreditados en España. En el Palacio Real de Madrid, residencia oficial
        del monarca, también se celebran las Audiencias Militares, el Acto del
        Relevo Solemne de la Guardia Real, las recepciones al Cuerpo Diplomático
        acreditado en España, la Pascua Militar o la Recepción del 12 de
        octubre, día de la Fiesta Nacional.
      </p>
      <p className="parrafo">
        Además, los Reyes presiden, en el Palacio Real de Madrid, encuentros con
        el mundo de la cultura y las letras, y en el Palacio Real de Aranjuez la
        reunión anual del Patronato del Instituto Cervantes. Por su parte, la
        entrega de los Premios Nacionales del Deporte, el concurso “¿Qué es un
        rey para ti?” y los Premios Internacionales de Investigación tienen
        lugar en el Palacio Real de El Pardo; en la Iglesia del Monasterio de
        Yuste se celebra, a su vez, el acto de entrega del premio internacional
        europeo Carlos V, el 9 de mayo, con ocasión del Día de Europa. A estos
        actos se suman las reuniones anuales de los diferentes Patronatos de las
        Fundaciones Princesa de Asturias, Princesa de Girona, Cotec y Elcano.
      </p>
      <p className="parrafo">
        Fundaciones Princesa de Asturias, Princesa de Girona, Cotec y Elcano. A
        lo largo de los años, Patrimonio Nacional y la Casa de S.M. El Rey han
        colaborado en actos de gran relevancia histórica, como la recepción
        extraordinaria que tuvo lugar en el Palacio Real de Madrid con motivo de
        la Proclamación del Rey Don Felipe VI (19 de junio de 2014) o la
        Abdicación de S.M. El Rey Don Juan Carlos I (18 de junio de 2014). Otros
        actos de importancia internacional en este lugar fueron la Presidencia
        de España en la Conferencia de Paz, celebrada en Madrid en 1991, el
        Consejo de la Unión Europea (1989, 1995, 2001 y 2010), la firma del Acta
        de Adhesión a la UE (1985), y la segunda Cumbre Iberoamericana de Jefes
        de Estado y de Gobierno (1992).
      </p>
    </div>
    <BtnUp></BtnUp>
    <BtnBack></BtnBack>
    <Footer></Footer>
  </>
)

export const Head = () => <Seo title="Sobre nosotros" />
export default Sobrenosotros
