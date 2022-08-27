import './Header.css'

export default function Header() {
    return (
        <>
            <div className='semua-data'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <img src="gowes.jpg" alt="" />
                        <a className="navbar-brand" href="#">
                            Desa
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">


                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='semua-item'>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        Home
                                    </a>
                                </li>

                                {/* profil */}
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Profil
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                sejarah
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                visi & Misi
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                {/*  */}


                                {/* informasi */}
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Informasi
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Berita
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Agenda
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Produk Hukum
                                            </a>
                                        </li>
                                        <li>
                                            <a className='dropdown-item' href="#">
                                                Informasi Publik
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                {/*  */}


                                {/* demografis */}
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Demografis
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Administrasi
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Penduduk
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                wilayah
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                {/*  */}

                                {/* Media */}
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Media
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Galery foto 
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Galery video
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                {/*  */}

                                     {/* Publikasi */}
                                     <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Publikasi
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Pembangunan Desa
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Dana Desa
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                {/*  */}


                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Lapak
                                    </a>
                                </li>
                               
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Covid
                                    </a>
                                </li>
                    
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    );
}
