import App from "../layouts/App"
import './Profile.css'
export default function Profile() {
    return (

        <App>
            <div className="container-fluid">
                <div
                    id="carouselExampleSlidesOnly"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner pt-10">
                        <div className="carousel-item active">
                            <img src="/static/img/desa.jpg" className="mt-3 d-block w-100 " id="foto-utama" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/static/img/suramadu.jpeg" className="mt-3 d-block w-100" id="foto-utama" alt="..." />
                        </div>
                        <div className="carousel-item">
                        </div>
                    </div>
                </div>

                <div>
                    <div className="container mx-auto d-block">
                        <h1 className="mt-4"> Visi dan Misi</h1>
                        <img className=" img-fluid" src="static/img/alam.jpg" alt="" id="foto-sm-bawah" />

                        <h3 className="mt-30">Visi</h3>
                        <p>Visi adalah tujuan, masa depan, cita-cita, hal yang ingin dilakukan. Misi adalah langkah, bentuk atau cara serta bagaimana untuk mewujudkannya.</p>
                        <h3>Misi</h3>
                        <p>1.Visi adalah gambaran besar atau gambaran secara keseluruhan apa yang diinginkan. Misi adalah Penjabaran apa yang akan dilakukan untuk mencapai atau mewujudkan visi.</p>
                        <p>2.Visi adalah gambaran besar atau gambaran secara keseluruhan apa yang diinginkan. Misi adalah Penjabaran apa yang akan dilakukan untuk mencapai atau mewujudkan visi.</p>
                        <p>3.Visi adalah gambaran besar atau gambaran secara keseluruhan apa yang diinginkan. Misi adalah Penjabaran apa yang akan dilakukan untuk mencapai atau mewujudkan visi.</p>
                        <p>4.Visi adalah gambaran besar atau gambaran secara keseluruhan apa yang diinginkan. Misi adalah Penjabaran apa yang akan dilakukan untuk mencapai atau mewujudkan visi.</p>
                    </div>
                </div>
            </div>
        </App>
    )
}