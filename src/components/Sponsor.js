import React from 'react';
import Klinik from '../assets/images/klinikkita.jpg';
import Undip from '../assets/images/Undip.png';
import Udinus from '../assets/images/logo-udinus.png';
import Unisbank from '../assets/images/Logo-unisbank.jpg';
import Javavalley from '../assets/images/pt-java-valley-technology.png';
import Orderdilla from '../assets/images/orderdilla.png';
import LogoG from '../assets/images/logo-G.png';
import Pemkot from '../assets/images/pemkot.png';
import Sandec from '../assets/images/sandec-logo.png';
import Smrgopengo from '../assets/images/smgopengo.png';
import Programmersmrg from '../assets/images/programmer-semarang.png';

const Sponsor = (props) => {
    return(
        <div>
            <section id="Sponsor" class="pb-5 border bg-white">
                <div class="container">
                    <div class="text-center">
                        <h3 class="text-capitalize my-4 pb-2">Sponsor & partner</h3>
                    </div>
                    <div class="col-12">
                        <a href="http://klinikita.co.id/">
                            <img class="d-block mx-auto" src={ Klinik } alt="Klinik Kita"  style={{ height: 183 }}/>
                        </a>
                    </div>

                    <div class="row align-items-center text-center my-4">
                        <div class="col-2">
                            <a href="https://www.undip.ac.id/language/id/">
                                <img src={ Undip } alt="Universitas Diponegoro" />
                            </a>
                        </div>
                        <div class="col-2">
                            <a href="http://www.dinus.ac.id/">
                                <img src={ Udinus } alt="Universitas Dian Nuswantoro" />
                            </a>
                        </div>
                        <div class="col-2">
                            <a href="https://www.unisbank.ac.id/">
                                <img src={ Unisbank } alt="Unis Bank" />
                            </a>
                        </div>
                        <div class="col-2">
                            <a href="http://www.java-valley.com/">
                                <img src={ Javavalley } alt="PT. Java Valley Technology" />
                            </a>
                        </div>
                        <div class="col-2">
                            <a href="https://www.dynamiclearningid.org/">
                                <img src={ Orderdilla } alt="Dynamic Learning" />
                            </a>
                        </div>
                        <div class="col-2">
                            <a href="https://www.go-mekanik.com/">
                                <img src={ LogoG } alt="Logo G" />
                            </a>
                        </div>
                    </div>
                    <div class="row align-items-center text-center mb-5">
                        <div class="col-2">
                            <a href="http://sdk.semarangkota.go.id/">
                                <img src={ Pemkot } alt="Pemkot Semarang" />
                            </a>
                        </div>
                        <div class="col-4">
                            <a href="http://www.sandec.org/">
                                <img src={ Sandec } alt="Sandec" style={{ height: 80 }} />
                            </a>
                        </div>
                        <div class="col-2">
                            <a href="https://www.facebook.com/SemarangOpenGo/">
                                <img src={ Smrgopengo } alt="Semarang Open Go" style={{ height: 130 }} />
                            </a>
                        </div>
                        <div class="col-4">
                            <a href="/">
                                <img src={ Programmersmrg } alt="Programmer Semarang" style={{ height: 50 }} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sponsor;