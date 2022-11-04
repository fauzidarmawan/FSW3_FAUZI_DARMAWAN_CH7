import React,{useCallback, useState, useEffect} from "react"
import './css/style.css'
import './css/mobil.css'
function Mobil(){
    const [cars, setCars] = useState([]);
    const [driverType, setDriverType] = useState('')
    const [date, setDate] = useState('');
    const [time, setTime] = useState('')
    const [capacity, setCapacity] = useState(0);
    const [displayCars, setDisplayCars] = useState([]);

    const populateCars = useCallback((cars) => {
        return cars.map((car) => {
            const isPositive = getRandomInt(0, 1) === 1;
            const timeAt = new Date();
            const mutator = getRandomInt(1000000, 100000000);
            const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator));
            return {
                ...car,
                availableAt,
                
            };
        });
    }, []);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
        .then((response)=> response.json())
        .then((data)=>{
            const newData = populateCars(data)
            setCars(newData);
        })
        .catch((err)=>{
        console.log(err)
        })
    },[populateCars]);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const handleSearchCar = () => {
        const dateTime = new Date(`${date} ${time}`);
            const filtercars = cars.filter((item)=>(item.capacity >= capacity && item.availableAt <= dateTime && item.available === true));
            setDisplayCars(filtercars);
        
    }

    const handleReset = () => {
        setDisplayCars([]);
        setDate('');
        setTime('');
        setCapacity('');
        setDriverType('');
        
    }
  return(
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Chalenge 1</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="style2.css" />
  <link rel="stylesheet" href="owl.carousel.min.css" />
  <link rel="stylesheet" href="owl.theme.default.css" />
  <link rel="stylesheet" href="mobil.css" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    .testimonial {\n        font-family: 'Helvetica';\n        font-style: normal;\n        text-align: center;\n        color: #000000;\n        margin-top: 100px;\n        padding-top: 100px;\n    }\n\n    .owl-carousel .item {\n\n        justify-content: center;\n\n    }\n\n    .testimonial-h1 {\n        font-weight: 700;\n        font-size: 24px;\n        line-height: 36px;\n    }\n\n    .testimonial-p {\n        font-weight: 300;\n        font-size: 14px;\n        line-height: 20px;\n    }\n\n    .item {\n        max-width: 619px;\n        text-align: center;\n        justify-content: center;\n        font-size: 2rem;\n        margin: 10px;\n        min-height: 270px;\n        background: #F1F3FF;\n        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);\n        border-radius: 8px;\n        min-height: 280px;\n    }\n\n\n    .testimonial-foto {\n        max-width: 80px;\n        height: 80px;\n        margin-top: 100px;\n        margin-left: 1000px;\n    }\n\n    .bintang {\n        max-width: 16px;\n    }\n\n    .testi {\n        padding-top: 12%;\n    }\n\n    .testi-paragraf {\n        width: 80%;\n    }\n\n    .testimonial-hasil {\n        max-width: 415px;\n        min-height: 80px;\n        font-family: 'Helvetica';\n        font-style: normal;\n        font-weight: 300;\n        font-size: 14px;\n        line-height: 20px;\n        color: #000000;\n        flex: none;\n        order: 1;\n        flex-grow: 0;\n        text-align: left;\n        padding-top: 10px;\n    }\n\n    .testimonial-name {\n        flex: none;\n        font-size: 14px;\n        font-family: 'Helvetica';\n        font-weight: bold;\n        text-align: left;\n        max-width: 300px;\n    }\n\n    .kiri,\n    .kanan {\n        background-color: white;\n    }\n\n    .owl-theme .owl-nav [class*=owl-] {\n        color: #FFF;\n        font-size: 14px;\n        background: #ffffff;\n        display: inline-block;\n        cursor: pointer;\n\n    }\n"
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
              <a href="/"><button className="btn btn-success header-button">
                Mulai Sewa Mobil
              </button></a>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 ">
            <img src="../../img/img_car.jpg" alt="" className=" w-100" />
          </div>
        </div>
      </div>
    </header>
  </section>
  <section className="container-lg justify-content-center ">
    <div className="row d-flex ms-auto me-auto" id="c">
      <div className="col-lg col-md-6 col-sm-6 col-xs-12 p-2">
        <label className="pb-2">Tipe Driver</label>
        <select className="f w-100" id="" required="">
          <option  hidden="" value={driverType}>
            Pilih Tipe Driver
          </option>
          <option value="true">Dengan Supir</option>
          <option value="true">Tanpa Supir</option>
        </select>
      </div>
      <div className="col-lg col-md-6 col-sm-6 col-xs-12 p-2">
        <label className="pb-2">Tanggal</label>
        <input type="date" id="filterDate" className="f" required onChange={(e)=>setDate(e.target.value)}
          value={date}/>
      </div>
      <div className="col-lg col-md-6 col-sm-6 col-xs-12 p-2">
        <label className="pb-2">Waktu Jemput/Ambil</label>
        <input type="time" id="filterTime" className="f" required onChange={(e)=>setTime(e.target.value)}
          value={time} />
      </div>
      <div
        className="col-lg col-md-6 col-sm-6 col-xs-12 p-2"
        style={{ minWidth: "201px" }}
      >
        <label className="pb-2">Jumlah Penumpang</label>
        <input
          type="number"
          className="f"
          id="filterCapacity"
          placeholder="Jumlah Penumpang"
          required onChange={(e)=>setCapacity(e.target.value)}
          value={capacity}
        />
      </div>
      <div
        className="col-lg p-2 pt-4"
        style={{
          display: "inline-block",
          alignSelf: "flex-end",
          height: "100%"
        }}
      >
        <button className="btn btn-success" type="button" id="load-btn" onClick={handleSearchCar}>
          Cari Mobil Anda
        </button>
        <button type="reset" className="btn btn-primary" onClick={handleReset}> 
          reset
        </button>
      </div>
    </div>
  </section>
  <section className="container-lg">
    <div
      className="row row-cols-auto justify-content-center ms-auto me-auto d-flex cars-content"
      id="cc"
    >
      {
                    displayCars.length > 0 ? (
                        displayCars.map((item)=>(
                            <div className="card kartu col-4" style={{maxWidth: "20rem", marginRight:'30px', marginBottom: '50px'}} key={item.id}>
                                <img src= {item.image} className="card-img-top img-fluid" alt={item.image} style={{height: '190px', objectFit: 'cover'}} />
                                <div style={{padding:"28.17px"}}>
                                    <p className="judul-card">{item.manufacture} / {item.model}</p>
                                    <h5 className="card-title">Rp.{item.rentPerDay}/Hari</h5>
                                    <p className="" style={{minHeight:"100px"}}>{item.description}</p>
                                    <div className="my-2"><i className="bi bi-people me-2"></i>{item.capacity} Orang</div>
                                    <div className="my-2"><i className="bi bi-gear me-2"></i> {item.transmission}</div>
                                    <div className="my-2"><i className="bi bi-calendar4 me-2"> {item.year}</i></div>
                                    <a href="##" className="btn btn-success text-white w-100 mt-2 fw-bold mt-4" style={{fontSize: "14px"}}>Pilih Mobil</a>      
                                </div>
                            </div>    
                        ))) : <h1>Mobil tidak ditemukan</h1>
                }
    </div>
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

export default Mobil;