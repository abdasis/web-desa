import {RiFacebookFill, RiInstagramLine, RiYoutubeFill} from "react-icons/ri";
import "./Footer.css";
export default function Footer(){
    return(
        <>
            <footer className="footer mt-auto py-4 bg-dark">
                <div className="container">
                    <div className="row gap-2 justify-content-around">
                        <div className="col-md-4">
                            <div className="widget">
                                <div className="widget-title">
                                    <h1 className="text-white">Tentang Desa</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias consequuntur, dolorem doloremque ducimus eos itaque, laboriosam, maxime optio rem unde vero voluptate. Accusamus assumenda eaque ex, harum rem unde?</p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <a href="facebook.com">
                                        <div className="social-icon">
                                            <RiFacebookFill/>
                                        </div>
                                    </a>
                                    <a href="facebook.com">
                                        <div className="social-icon">
                                            <RiInstagramLine/>
                                        </div>
                                    </a>
                                    <a href="facebook.com">
                                        <div className="social-icon">
                                            <RiYoutubeFill/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="widget">
                                <div className="widget-title">
                                    <h1 className="text-white">Agenda Terbaru</h1>
                                </div>
                                <div className="widget-content">
                                    Belum ada data
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="widget">
                                <div className="widget-title">
                                    <h1 className="text-white">Contact Us</h1>
                                </div>
                                <div className="widget-content">
                                    Belum ada data
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
