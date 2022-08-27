import './Beranda.css'
import App from'../layouts/App'
export default function Beranda() {
    return (
        <App>
            <div className='semua-beranda'>
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
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
         
        </App>
    );
}
