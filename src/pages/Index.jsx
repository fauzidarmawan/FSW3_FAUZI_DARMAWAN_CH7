import React from "react";
import { Helmet } from "react-helmet";
import './css/style.css'

function Index(){

  return(
    <>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    .testimonial{\n    font-family: 'Helvetica';\n    font-style: normal;\n    text-align: center;\n    color: #000000;\n    margin-top: 100px;\n    padding-top: 100px;\n  }   \n  \n  .owl-carousel .item {\n  \n    justify-content: center;\n  \n  }\n  \n  .testimonial-h1{\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 36px;\n  }\n  \n  .testimonial-p{\n    font-weight: 300;\n    font-size: 14px;\n    line-height: 20px;\n  }\n  \n  .item {\n  max-width: 619px;\n    text-align: center;\n    justify-content: center;\n    font-size: 2rem;\n    margin: 10px;\n    min-height: 270px;\n  background: #F1F3FF;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 8px;\n  min-height: 280px;\n  }\n  \n  \n  .testimonial-foto{\n    max-width: 80px;\n    height: 80px;\n    margin-top: 100px;\n    margin-left: 1000px;\n  }\n  \n  .bintang{\n    max-width: 16px;\n  }\n  \n  .testi{\n    padding-top: 12%;\n  }\n  \n  .testi-paragraf{\n    width: 80%;\n  }\n  \n  .testimonial-hasil{\n    max-width: 415px;\n  min-height: 80px;\n  font-family: 'Helvetica';\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 20px;\n  color: #000000;\n  flex: none;\n  order: 1;\n  flex-grow: 0;\n  text-align: left;\n  padding-top: 10px;\n  }\n  \n  .testimonial-name{\n    flex: none;\n  font-size: 14px;\n  font-family: 'Helvetica';\n  font-weight: bold;\n  text-align: left;\n  max-width: 300px;\n  }\n  \n  .kiri,.kanan{\n    background-color: white;\n  }\n  \n  .owl-theme .owl-nav [class*=owl-]{\n    color: #FFF;\n    font-size: 14px;\n    background: #ffffff;\n    display: inline-block;\n    cursor: pointer;\n  \n  }\n"
    }}
  />
  <section>
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-lg my-1 ">
        <a className="navbar-brand logo" href="##">
          Binar Rental
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="offcanvas offcanvas-end"
          data-bs-scroll="true"
          tabIndex={-1}
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div className="offcanvas-header">
            <h5 className="navbar-judul">BCR</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-lg-auto mb-2 ms-0">
              <li className="nav-item pe-4">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#ourService"
                >
                  Our Service
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className="nav-link active" href="#whyus">
                  Why Us
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className="nav-link active" href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className="nav-link active" href="#faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item pe-4 my-2 my-lg-0">
                <a href="##">
                  <button type="button" className="btn btn-success nav-button">
                    Register
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </section>
  <section>
    <header
      className="header container-fluid"
      style={{ backgroundColor: "#F1F3FF" }}
    >
      <br />
      <br />
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-6 col-sm-12  mt-5">
            <div className=" as ">
              <h1 className="jh1 mb-xl-3">
                Sewa &amp; Rental Mobil Terbaik di Kawasan Jakarta{" "}
              </h1>
              <p className="jp pe-4  w-75">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam
              </p>
              <br />
              <a href="/mobil">
                <button className="btn btn-success header-button">
                  Mulai Sewa Mobil
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 ">
            <img src="../../img/img_car.jpg" alt="" className=" w-100" />
          </div>
        </div>
      </div>
    </header>
  </section>
  <section>
    <header className="header container-fluid">
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <br />
            <br />
            <img
              src="../../img/img.jpg"
              alt=""
              className="col-sub1-image"
              width="252px"
              height="228px"
            />
          </div>
          <div className="col-lg-6 col-sm-12  mt-5">
            <h3
              style={{
                fontWeight: "700px",
                fontSize: "24px",
                fontFamily: "Arial, Helvetica, sans-serif",
                lineHeight: "36px"
              }}
            >
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h3>
            <p
              style={{
                fontWeight: "300px",
                fontSize: "14px",
                fontFamily: "Arial, Helvetica, sans-serif",
                lineHeight: "20px"
              }}
            >
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <p
              style={{
                fontWeight: "300px",
                fontSize: "14px",
                fontFamily: "Arial, Helvetica, sans-serif",
                lineHeight: "20px"
              }}
            >
              <img src="../../img/Vector.png" alt="" />
              Sewa Mobil Dengan Supir di Bali 12 Jam
            </p>
            <p
              style={{
                fontWeight: "300px",
                fontSize: "14px",
                fontFamily: "Arial, Helvetica, sans-serif",
                lineHeight: "20px"
              }}
            >
              <img src="../../img/Vector.png" alt="" />
              Sewa Mobil Lepas Kunci di Bali 24 Jam
            </p>
            <p
              style={{
                fontWeight: "300px",
                fontSize: "14px",
                fontFamily: "Arial, Helvetica, sans-serif",
                lineHeight: "20px"
              }}
            >
              <img src="../../img/Vector.png" alt="" />
              Sewa Mobil Jangka Panjang Bulanan
            </p>
            <p
              style={{
                fontWeight: "300px",
                fontSize: "14px",
                fontFamily: "Arial, Helvetica, sans-serif",
                lineHeight: "20px"
              }}
            >
              <img src="../../img/Vector.png" alt="" />
              Gratis Antar - Jemput Mobil di Bandara
            </p>
            <p
              style={{
                fontWeight: "300px",
                fontSize: "14px",
                fontFamily: "Arial, Helvetica, sans-serif",
                lineHeight: "20px"
              }}
            >
              <img src="../../img/Vector.png" alt="" />
              Layanan Airport Transfer / Drop In Out
            </p>
          </div>
        </div>
      </div>
    </header>
  </section>
  <section id="Why Us">
    <br />
    <br />
    <div className="container-lg">
      <div className="row">
        <br />
        <br />
        <br />
        <h3
          style={{
            fontWeight: "700px",
            fontSize: "24px",
            fontFamily: "Arial, Helvetica, sans-serif",
            lineHeight: "36px"
          }}
        >
          Why Us?
        </h3>
        <p
          style={{
                fontWeight: "300px",
                fontSize: "14px",
                fontFamily: "Arial, Helvetica, sans-serif",
                lineHeight: "20px"
              }}
        >
          Mengapa harus pilih Binar Car Rental?
        </p>
      </div>
      <div style={{ marginRight: "70px" }} className="row">
        <div className="col-3">
          <div className="card" style={{ width: "250px" }}>
            <div className="card-body">
              <img src="../../img/ok.png" alt="" />
              <h5 className="card-title">Mobil Lengkap</h5>
              <p className="card-text">
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ width: "250px" }}>
            <div className="card-body">
              <img src="../../img/icon1.png" alt="" />
              <h5 className="card-title">Harga Murah</h5>
              <p className="card-text">
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ width: "250px" }}>
            <div className="card-body">
              <img src="../../img/icon2.png" alt="" />
              <h5 className="card-title">Layanan 24 Jam</h5>
              <p className="card-text">
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ width: "250px" }}>
            <div className="card-body">
              <img src="../../img/icon3.png" alt="" />
              <h5 className="card-title">Sopir Profesional</h5>
              <p className="card-text">
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <section>
      <h3 style="text-align: center; font-weight: 700;font-size: 24px; font-family: Arial, Helvetica, sans-serif; line-height: 36px;">Testimonial</h3>
      <p style="text-align: center;font-weight: 300;font-size: 14px; font-family: Arial, Helvetica, sans-serif; line-height: 20px;">Berbagai review positif dari para pelanggan kami</p>
   </section> */}
  <section className="testimonial" id="testimonial">
    <h1 className="testimonial-h1 text-center">Testimonial</h1>
    <p className="testimonial-p">
      Berbagai review positif dari para pelanggan kami
    </p>
    <div className="owl-carousel owl-theme">
      <div className="item">
        <div className="row">
          <div className="col-sm-3 col-xs-12">
            <img
              src="../../img/poto2.png"
              alt=""
              className="testimonial-foto ms-sm-5 d-inline ms-auto me-auto"
            />
          </div>
          <div className="col-sm-9 testi col-xs-12">
            <div className="d-flex flex-row justify-content-sm-start justify-content-center">
              <img src="../../img/star1.jpg" alt="" className="bintang " />
              <img src="../../img/star1.jpg" alt="" className="bintang " />
              <img src="../../img/star1.jpg" alt="" className="bintang " />
              <img src="../../img/star1.jpg" alt="" className="bintang " />
              <img src="../../img/star1.jpg" alt="" className="bintang " />
            </div>
            <div className="testi-paragraf d-block ms-auto me-auto ms-sm-0 me-sm-0">
              <p className="testimonial-hasil">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p className="testimonial-name">John Dee 32, Bromo</p>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="row">
          <div className="col-sm-3 col-xs-12">
            <img
              src="../../img/poto2.png"
              alt=""
              className="testimonial-foto ms-sm-5 d-inline ms-auto me-auto"
            />
          </div>
          <div className="col-sm-9 testi col-xs-12">
            <div className="d-flex flex-row justify-content-sm-start justify-content-center">
              <img src="../../img/star1.jpg" alt="" className="bintang " />
              <img src="../../img/star1.jpg" alt="" className="bintang " />
              <img src="../../img/star1.jpg" alt="" className="bintang " />
              <img src="../../img/star1.jpg" alt="" className="bintang " />
              <img src="../../img/star1.jpg" alt="" className="bintang " />
            </div>
            <div className="testi-paragraf d-block ms-auto me-auto ms-sm-0 me-sm-0">
              <p className="testimonial-hasil">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p className="testimonial-name">John Dee 32, Bromo</p>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="row">
          <div className="col-sm-3 col-xs-12">
            <img
              src="../../img/poto1(1).png"
              alt=""
              className="testimonial-foto ms-sm-5 d-inline ms-auto me-auto"
            />
          </div>
          <div className="col-sm-9 testi col-xs-12">
            <div className="d-flex flex-row justify-content-sm-start justify-content-center">
              <img src="../../img/star1.jpg" alt="" className="bintang " />
              <img src="../../img/star1.jpg" alt="" className="bintang " />
              <img src="../../img/star1.jpg" alt="" className="bintang " />
              <img src="../../img/star1.jpg" alt="" className="bintang " />
              <img src="../../img/star1.jpg" alt="" className="bintang " />
            </div>
            <div className="testi-paragraf d-block ms-auto me-auto ms-sm-0 me-sm-0">
              <p className="testimonial-hasil">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </p>
              <p className="testimonial-name">John Dee 32, Bromo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="slider_nav position-absolute">
      <img src="../../img/kiri.png" alt="" className="kiri" />
      <img src="../../img/kanan.png" alt="" className="kanan" />
    </div>
    <Helmet>
    <script type="text/javascript">{`
    /* eslint-env jquery */
        $('.owl-carousel').owlCarousel({
            loop: true,

            rtl: false,
            lazyLoad: true,
            navText: [$('.kiri'), $('.kanan')],
            nav: [$('.nav-slider')],

            nav: true,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 2,
                    margin: 100
                },
                600: {
                    items: 1,
                    stagePadding: 28,
                    margin: 100
                },
                800: {
                    items: 1,
                    stagePadding: 130,
                    margin: 100
                },
                1000: {
                    items: 1,
                    stagePadding: 230,
                    margin: 100
                },
                1200: {
                    items: 1,
                    stagePadding: 280
                },
                1400: {
                    items: 1,
                    margin: 100,
                    stagePadding: 440
                },
                1600: {
                    items: 1,
                    margin: 10,
                    stagePadding: 490
                },
                1800: {
                    items: 1,
                    margin: 100,
                    stagePadding: 650
                }
            }
        })
    `}</script>
    </Helmet>
  </section>
  <section>
    <div
      style={{ backgroundColor: "blue", border: "blue" }}
      className="container-sm"
    >
      <div className="row">
        <h3
          style={{
            textAlign: "center",
            color: "#F1F3FF",
            fontWeight: "700px",
            fontSize: "36px",
            fontFamily: "Arial, Helvetica, sans-serif",
            lineHeight: "54px"
          }}
        >
          <br /> Sewa Mobil di (Lokasimu) Sekarang
        </h3>
        <p
          style={{
            paddingLeft: "30%",
            paddingRight: "30%",
            textAlign: "center",
            color: "#F1F3FF",
            fontWeight: "300px",
            fontSize: "14px",
            fontFamily: "Arial, Helvetica, sans-serif",
            lineHeight: "20px"
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <br />
        <br />
        <br />
        <br />
        <center>
          <button
            type="button"
            style={{
              maxWidth: "150px",
              fontWeight: "700px",
              fontSize: "14px",
              fontFamily: "Arial, Helvetica, sans-serif",
              lineHeight: "20px",
              backgroundColor: "rgb(12, 179, 12)",
              color: "aliceblue"
            }}
          >
            {" "}
            Mulai Sewa Mobil
          </button>
        </center>
      </div>
      <br />
      <br />
    </div>
    <br />
    <br />
  </section>
  <section>
    <div className="container-lg">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <br />
          <br />
          <h3
            style={{
              fontWeight: "700px",
              fontSize: "24px",
              fontFamily: "Arial, Helvetica, sans-serif",
              lineHeight: "36px"
            }}
          >
            Frequently Asked Question
          </h3>
          <p
            style={{
              fontWeight: "300px",
              fontSize: "14px",
              fontFamily: "Arial, Helvetica, sans-serif",
              lineHeight: "20px"
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Apa saja syarat yang dibutuhkan?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Berapa hari minimal sewa mobil lepas kunci?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Apakah Ada biaya antar-jemput?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Bagaimana jika terjadi kecelakaan
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
  </section>
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="col-md-3 col-sm-12">
          <p>Our services</p>
          <p>Why Us</p>
          <p>Testimonial</p>
          <p>FAQ</p>
        </div>
        <div className="col-md-3 col-sm-12">
          <p>Connect with us</p>
          <img src="../../img/f.png" alt="" />
          <img src="../../img/i.png" alt="" />
          <img src="../../img/t.png" alt="" />
          <img src="../../img/m.png" alt="" />
          <img src="../../img/p.png" alt="" />
        </div>
        <div className="col-md-3 col-sm-12">
          <p>Copyright Binar 2022</p>
          <h3>Rental Binar Car</h3>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default Index