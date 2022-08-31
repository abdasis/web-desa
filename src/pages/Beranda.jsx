import './Beranda.css'
import App from '../layouts/App'
import {RiBookmark2Fill, RiBriefcase2Fill, RiCommunityLine} from "react-icons/ri";
import {FaBookMedical, FaMosque} from "react-icons/fa";
import CardBerita from "../components/CardBerita";
export default function Beranda() {
    return (
        <App>
            <div className="container py-4">
                <div className="row align-items-center box-banner rounded-3">
                    <div className="col-md-6 col-sm-12 p-md-5 p-sm-2">
                        <h1>Selamat Datang Di Desa Rongdurin</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum, cumque dolore doloremque ducimus eaque esse explicabo ipsam maxime molestias necessitatibus nostrum nulla placeat qui quidem soluta vel veritatis voluptatum?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eos laudantium molestiae porro, quod rem veniam. Deserunt distinctio, eaque earum fuga impedit laboriosam laudantium, nulla porro quam quis ratione, voluptates?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae error explicabo modi, perferendis ratione voluptates voluptatum? Alias magni ratione velit. Accusamus ad cumque dolorem quasi repellat, veniam vitae voluptate!

                        </p>
                        <button className="btn btn-primary mt-3">
                            Selengkapnya
                        </button>
                    </div>
                    <div className="col-md-6">
                        <img src="/static/kepala-desa.png" id='kepala-desa-photo' className="img-fluid p-5" alt=""/>
                    </div>
                </div>
            </div>

            {/* card title */}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 mb-3">
                        <div className="card shadow-none bg-transparent border-0 p-4">
                            <div className="box-content row justify-content-center align-items-center">
                                <div className="img-box col-md-3 d-grid align-items-center">
                                    <img src="/static/logo-bangkalan.png" className="img-fluid h-50 mx-auto rounded-start" alt="..." />
                                </div>
                                <div className="diskripsi-box col-md-7">
                                    <div className="card-body">
                                        <p>
                                            Website resmi desa, kec tanah merah kab bangkalan jawa timur.media komunikasi dan transparansi pemerintah untuk seluruh masyarakat desa rongdurin
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid autem commodi dignissimos distinctio ducimus facilis fuga fugiat, incidunt labore minus mollitia nihil numquam obcaecati odio provident quisquam sit unde!
                                        </p>
                                        <a href="/"><button className='btn btn-primary rounded-3'>Profil desa  </button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}

            <div className='container text-center'>
                <h2 className='text-center'>Statistic Desa</h2>
                <p className="text-center">berikut adalah statistic demografi desa kami</p>

                <div className="statistic-box row gy-2 mt-5">
                    <div className="col-md-3 ">
                        <div className="box-icon bg-red-lt rounded-3 text-white p-4">
                            <RiBriefcase2Fill className="icon-statistic"/>
                            <h1>Pekerjaan</h1>
                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <div className="box-icon bg-info-lt rounded-3 text-white p-4">
                            <RiCommunityLine className="icon-statistic"/>
                            <h1>Pendidikan</h1>
                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <div className="box-icon bg-warning-lt rounded-3 text-white p-4">
                            <FaMosque className="icon-statistic"/>
                            <h1>Agama</h1>
                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <div className="box-icon bg-success-lt rounded-3 text-white p-4">
                            <FaBookMedical className="icon-statistic"/>
                            <h1>Usia Penduduk</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}

            {/* berita */}
            <div className="my-5">
                <div className="container berita-terbaru">
                    <h2 className="d-flex align-items-center gap-2 widget-title">
                        <RiBookmark2Fill/>
                        Berita Terbaru
                    </h2>
                    <p className='text-muted'>Dapatkan informasi terbaru di desa kami</p>

                    <div className="berita-terbaru-box">
                        <div className="row justify-content-start gy-4">
                            <div className="col-md-4">
                                <CardBerita/>
                            </div>
                            <div className="col-md-4">
                                <CardBerita/>
                            </div>
                            <div className="col-md-4">
                                <CardBerita/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </App>
    );
}
