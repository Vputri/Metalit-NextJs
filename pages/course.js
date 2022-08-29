import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

const Course = () => {
  return (
    <>
        <Header/>
        <section class="py-5">
            <div class="container px-5">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                    <div class="text-center my-5">
                        <h2 class="fw-bolder mb-3">Bergabung dengan kami</h2>
                        <p class="text-muted mb-4">Kuasai hard skill dan soft skill dengan mengikuti 12 minggu pelatihan bersama Metalit, dan dapatkan materi standar industri dengan harga terjangkau</p>
                    </div>

                    <div class="biru text-white">
                        <form class="py-5 px-5" method="post">  
                            <h3 class="mb-5 text-center">Daftarkan diri Anda</h3>
                            <div class="form-group row">
                                <label for="id_nama" class="col-sm-4 col-form-label">Nama</label>
                                <div class="col-sm-8">
                                    <input 
                                        type="text"
                                        name="nama" 
                                        required maxlength="255" 
                                        id="id_nama" 
                                        class="form-control mb-3"
                                    />
                                </div>
                            </div>

                            <div class="form-group row mb-2">
                                <label for="id_email" class="col-sm-4 col-form-label">Email</label>
                                <div class="col-sm-8">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        required="" 
                                        id="id_email" 
                                        class="form-control mb-3"
                                    />
                                </div>
                            </div>

                            <fieldset class="form-group mb-2">
                                <div class="row">
                                    <legend class="col-form-label col-sm-4 pt-0">Jenis Kelamin</legend>
                                    <div class="col-sm-8">
                                        <div class="form-check">
                                            <input 
                                                class="form-check-input" 
                                                type="radio" 
                                                name="gender" 
                                                value="1" 
                                                required="" 
                                                id="id_0"/>
                                            <label class="form-check-label" for="id_0">Laki-laki</label>
                                        </div>
                                        <div class="form-check">
                                            <input 
                                                class="form-check-input" 
                                                type="radio" 
                                                name="gender" 
                                                value="2" 
                                                required="" id="id_1"
                                            />
                                            <label class="form-check-label" for="id_1">Perempuan</label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <div class="form-group row mb-2">
                                <label for="id_hp" class="col-sm-4 col-form-label">Nomor Handphone</label>
                                <div class="col-sm-8">
                                    <input 
                                        type="text" 
                                        name="hp" 
                                        maxlength="20" 
                                        required="" 
                                        id="id_hp" 
                                        class="form-control mb-3"
                                    />
                                </div>
                            </div>

                            <div class="form-group row mb-2">
                                <label 
                                    for="id_pendidikan" 
                                    class="col-sm-4 col-form-label"
                                >
                                    Pendidikan Terakhir
                                </label>
                                <div class="col-sm-8">
                                    <input 
                                        type="text" 
                                        name="study" 
                                        maxlength="20" 
                                        required="" 
                                        id="id_pendidikan" 
                                        class="form-control mb-3"
                                    />
                                </div>
                            </div>

                            <div class="form-group row mb-2">
                                <label for="id_jurusan" class="col-sm-4 col-form-label">Jurusan</label>
                                <div class="col-sm-8">
                                    <input 
                                        type="text" 
                                        name="jurusan" 
                                        maxlength="20" 
                                        required="" 
                                        id="id_jurusan" 
                                        class="form-control mb-3"/>
                                </div>
                            </div>

                            <div class="form-group row mb-2">
                                <label 
                                    for="id_jurusan" 
                                    class="col-sm-4 col-form-label"
                                >
                                    Alasan Bergabung
                                </label>
                                <div class="col-sm-8">
                                    <textarea 
                                        name="reason" 
                                        cols="40" 
                                        rows="10" 
                                        required="" 
                                        id="id_alasan" 
                                        class="form-control mb-3"
                                    >
                                    </textarea>
                                </div>
                            </div>

                            <div class="d-flex justify-content-end">
                                <button 
                                    type="submit" 
                                    value="Kirim" 
                                    class="btn btn-light"
                                >
                                    Kirim
                                    </button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <Header/>
    </>
  )
}
  
export default Course