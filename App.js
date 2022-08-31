import "./App.css";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row mid">
          <div className="box dark">
            <h1 className="heading">Cennet</h1>
          </div>
          <div className="box">
            <h1 className="heading hidden-small">Mahallesi</h1>
          </div>
          <p className="subheading">Dizi &amp; Oyuncular </p>
        </div>
        <div className="row">
          <div className="box">
            <span className="number"></span>
            <h2 className="name hidden-small">Melek</h2>
            <ul className="movies">
              <li>
                11 Haziran
                <br />
                2004
              </li>
              <li>
                9 Haziran
                <br />
                2007
              </li>
              <li>
                Show TV
                <br />
              </li>
            </ul>
          </div>
          <div
            className="box dark image"
            style={{
              backgroundImage:
                'url("https://im.showtv.com.tr/5/4678/melek-baykal-500x500.png?v=1459261140")',
            }}
          >
            <h2 className="name">
              <span className="hidden-big">Melek</span> Baykal
            </h2>
          </div>
        </div>
        <div className="row">
          <div
            className="box dark image"
            style={{
              backgroundImage:
                'url("https://i.idefix.com/pimages/Content/Uploads/ArtistImages/artist__173029.jpg")',
            }}
          >
            <h2 className="name">
              Müjdat <span className="hidden-big">Gezen</span>
            </h2>
          </div>
          <div className="box">
            <span className="number"></span>
            <h2 className="name hidden-small">Gezen</h2>
            <ul className="movies">
              <li>
                3<br />
                Sezon
              </li>
              <li>
                119
                <br />
                Bölüm
              </li>
              <li>
                Balat
                <br />
                İstanbul
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="box">
            <span className="number"></span>
            <h2 className="name hidden-small">Özkan</h2>
            <ul className="movies">
              <li>
                Cennet Mahallesi, 11 Haziran 2004 ile 9 Haziran 2007 tarihleri
                arasında Show TV'de yayınlanmış olan komedi türündeki Türk
                televizyon dizisi. 3 sezondan oluşan dizi, 119. bölümü ile
                ekranlara veda etti. 1981 yılında yayınlanan Gırgıriye filminin
                dizi versiyonudur.
                <br />
              </li>
              <li>
                <br />
              </li>
            </ul>
          </div>
          <div
            className="box dark image"
            style={{
              backgroundImage:
                'url("https://www.filmler.com/wp-content/uploads/2020/10/zEhhOvyQn3pKeFa4fVPziEWHyvG.jpg")',
            }}
          >
            <h2 className="name">
              <span className="hidden-big">Özkan</span> UGur
            </h2>
          </div>
        </div>
        <div className="row">
          <div
            className="box dark image"
            style={{
              backgroundImage:
                'url("https://cdns-images.dzcdn.net/images/artist/18e24b719d589b7113669eb5915a5a47/500x500.jpg")',
            }}
          >
            <h2 className="name">
              {" "}
              <span className="hidden-big">Alisan</span>
            </h2>
          </div>
          <div className="box">
            <span className="number"></span>
            <h2 className="name hidden-small">Alisan</h2>
            <ul className="movies">
              <li>
                Futbolcu
                <br />
                Albertino
              </li>
              <li>
                Laz
                <br />
                idris
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="box">
            <span className="number"></span>
            <h2 className="name hidden-small">cagla</h2>
            <ul className="movies">
              <li>
                Victoria's Secret
                <br />
                Manken olmak yerine Cennet Mahallesi'ni seçmiştir.
              </li>
            </ul>
          </div>
          <div
            className="box dark image"
            style={{
              backgroundImage:
                'url("https://mediacat.com/wp-content/uploads/2019/12/cagla-sikel-easyfishoil-reklami.jpg")',
            }}
          >
            <h2 className="name">
              <span className="hidden-big">cagla </span>sikel
            </h2>
          </div>
        </div>
        <div className="row">
          <div
            className="box dark image"
            style={{
              backgroundImage:
                'url("https://m.media-amazon.com/images/M/MV5BNGI0MDZmZWMtOThhOS00NTMwLTllYzItMTgwZWNjYzMwMDk4XkEyXkFqcGdeQXVyMjc2Mzk3ODA@._V1_.jpg")',
            }}
          >
            <h2 className="name">
              zeki <span className="hidden-big">alasya</span>
            </h2>
          </div>
          <div className="box">
            <span className="number"></span>
            <h2 className="name hidden-small">alasya</h2>
            <ul className="movies">
              <li>
                5 tane salih ile çalışmıştır.
                <br />
              </li>
              <li>
                Salih (1)
                <br />
                1-4
              </li>
              <li>
                Salih (2)
                <br />
                5-6
              </li>
              <li>
                Salih (3)
                <br />
                7-18
              </li>
              <li>
                Salih(4)
                <br />
                19-28
              </li>
              <li>
                Salih (5)
                <br />
                30-119
              </li>
            </ul>
          </div>
        </div>
        <div className="row small">
          <div className="box" />
          <div className="box dark" />
          <p className="subheading">cennet mah &amp; oyuncuları</p>
        </div>
      </div>

      <div className="floating-text">
        <AiOutlineInstagram></AiOutlineInstagram>{" "}
        <a
          href="https://www.instagram.com/burakfevzikar/"
          target="_blank"
          rel="noreferrer"
        >
          BURAK FEVZİ KAR
        </a>
      </div>
    </div>
  );
}

export default App;
