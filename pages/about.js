import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from 'next/image'
import about1 from "../images/about_1.svg";
import about2 from "../images/about_1.svg";
import work1 from "../images/works1.png";
import work2 from "../images/works2.png";
import work3 from "../images/works3.png";
import work4 from "../images/works4.png";
  
const About = () => {
  return (
    <>
        <Header/>
          <header class="py-5">
            <div class="container px-5">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                <div class="text-center my-5">
                    <h1 class="fw-bolder mb-3">Tentang Kami</h1>
                    <p class="text-muted mb-4">PT Metamorfosa Teknologi Berdikari (Metalit) merupakan talent platform yang menyediakan talent IT dengan skill standar industri masa kini. Kami melakukan hal ini dengan cara menghubungkan para pencari kerja dengan perusahaan-perusahaan pemberi kerja yang membutuhkan skill talent di bidang IT dengan pemberian pelatihan khusus baik hard skill maupun soft skill</p>
                </div>
                </div>
            </div>
            </div>
        </header>

        <section class="py-5 bg-light">
            <div class="container px-5 my-5">
                <div class="row gx-5 align-items-center text-center">
                    <div class="col-lg-8">
                        <h2 class="fw-bolder mb-3">Visi Kami</h2>
                        <p class="text-muted mb-4">Menghasilkan talent IT yang siap kerja dengan skill yang mengikuti standar industri dan menggunakan teknologi masa kini.</p>
                    </div>
                    <div class="col-lg-4">
                        <Image class="img-fluid rounded mb-5 mb-lg-0" src={about1}/>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-5">
            <div class="container px-5 my-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-4">
                        <Image class="img-fluid rounded mb-5 mb-lg-0" src={about2}/>
                    </div>

                    <div class="col-lg-8">
                        <h2 class="fw-bolder mb-4 text-center">Misi Kami</h2>
                        <div class="row gx-5 row-cols-1 row-cols-md-2">
                            <div class="col mb-5 h-100">
                                <div class="feature mb-2">
                                    <Image class="img95" src={work1}/>
                                </div>
                                <h2 class="h5">Pelatihan</h2>
                                <p class="mb-0">Memberikan pelatihan menggunakan metode dan teknologi sesuai dengan standar industri masa kini.</p>
                            </div>

                            <div class="col mb-5 h-100">
                                <div class="feature mb-2">
                                    <Image class="img95" src={work2}/>
                                </div>
                                <h2 class="h5">Kerjasama dengan perusahaan</h2>
                                <p class="mb-0">Menjalin kerja sama dengan perusahaann untuk menyalurkan para pencari kerja</p>
                            </div>

                            <div class="col mb-5 mb-md-0 h-100">
                                <div class="feature mb-2">
                                    <Image class="img95" src={work3}/>
                                </div>
                                <h2 class="h5">Mengikuti Perkembangan</h2>
                                <p class="mb-0">Metalit berusaha untuk selalu up to date dengan perkambangan teknologi dalam industri IT</p>
                            </div>

                            <div class="col h-100">
                                <div class="feature mb-2">
                                    <Image class="img95" src={work4}/>
                                </div>
                                <h2 class="h5">Pengembangan Platform</h2>
                                <p class="mb-0">Platform Metalit akan selalu berkembang sesuai dengan kebutuhan pengguna</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
        <Footer/>
    </>
  )
}
  
export default About