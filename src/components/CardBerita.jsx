import {RiCalendar2Fill, RiUser2Fill} from "react-icons/ri";

export default function CardBerita(){
    return(
        <>
            <div className="card shadow-sm border-light">
                <img src="/static/kepala-desa.png" className="card-img-top img-berita" alt="..." />
                <div className="card-body">
                    <h5 className="card-title mb-0">Kenalan dengan Kepala Desa</h5>
                    <div className="meta my-2 d-flex align-items-center gap-1">
                        <div className="author bg-light p-1 rounded-3 d-flex align-items-center gap-2">
                            <RiUser2Fill className="icon-berita"/>
                            Muhammad Rois
                        </div>
                        <div className="author bg-light p-1 rounded-3 d-flex align-items-center gap-2">
                            <RiCalendar2Fill className="icon-berita"/>
                            22 Januari 2020
                        </div>
                    </div>
                    <p className="text-deskripsi">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </>
    )
}
