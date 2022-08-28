import './Beranda.css'
import App from '../layouts/App'
export default function Beranda() {
    return (
        <App>
            <div className='semua-beranda'>
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner" id='foto-slide' >
                        <div className="carousel-item active">
                            <img src="/static/img/desa.jpg" id='suramadu' className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/static/img/suramadu.jpeg" id='suramadu' className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/static/img/alam.jpg" id='suramadu' className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div>
                    <h1 id='nama-foto'>selamat datang di web desa</h1>
                </div>
            </div>

            {/* card title */}
            <div className='beranda container'>
                <div className="card mb-3" id='card'>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="/static/img/ri.png" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Website Desa</h5>
                                <p className="card-text">
                                    Website resmi desa, kec tanah merah kab bangkalan jawa timur.media komunikasi dan transparansi pemerintah untuk seluruh masyarakat desa rongdurin
                                </p>
                                <p className="card-text">
                                    <a href="/"><button className='tombol-desa'>Profil desa  </button></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}

            <div className='bagian-statis'>
                <h2 className='statis-desa'>Statistic Desa</h2>
                <p>berikut adalah statistic demografi desa kami</p>
            </div>


            {/* MENU ITEM    */}
            <div className="menu-statis-desa">
                <a href="/">
                    <img id='menu-foto' src="/static/img/pekerjaan.png" alt="" />
                </a>

                <a href="/">
                    <img id='menu-foto' src="/static/img/pendidikan.png" alt="" />
                </a>

                <a href="/">
                    <img id='menu-foto' src="/static/img/agama.png" alt="" />
                </a>

                <a href="/">
                    <img id='menu-foto' src="/static/img/usia.png" alt="" />
                </a>
            </div>

            {/*  */}

            {/* agenda */}
            <div>
                <div className="agenda">
                    <h2>Agenda</h2>
                    <p className='semua-agenda'>Semua agenda</p>
                </div>

                <div className="judul-agenda">
                    <div className="agenda-menu">
                        <div className="card mb-3" style={{ maxWidth: 540 }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img id='desa-menu' src="/static/img/alam.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 id='agenda-judul' className="card-title">Judul agenda A</h5>
                                        <p className="card-text">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="agenda-menu">
                        <div className="card mb-3" style={{ maxWidth: 540 }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img id='desa-menu' src="/static/img/desa.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 id='agenda-judul' className="card-title">Judul agenda B</h5>
                                        <p className="card-text">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* berita */}
            <div className="berita">
                <div className="agenda">
                    <h2>Berita</h2>
                    <p className='semua-agenda'>Semua berita</p>
                </div>

                <div className="semua-card-berita">
                    <div className="card-berita" >
                        <div className="card" style={{ width: "18rem" }}>
                            <img id='berita-foto' src="/static/img/desa.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 id='judul-berita' className="card-title">Judul Berita A </h5>
                                <p id='card-text' className="card-text">
                                    Some quick example text to build on
                                </p>
                            
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="card-berita">
                        <div className="card" id='card2' style={{ width: "18rem" }}>
                            <img id='berita-foto'  src="/static/img/suramadu.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 id='judul-berita' className="card-title">Judul Berita B </h5>
                                <p id='card-text' className="card-text">
                                    Some quick example text to build on
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="card-berita">
                        <div className="card" id='card3' style={{ width: "18rem" }}>
                            <img id='berita-foto'  src="/static/img/alam.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 id='judul-berita' className="card-title">Judul Berita C </h5>
                                <p id='card-text' className="card-text">
                                    Some quick example text to build on
                                </p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
}
