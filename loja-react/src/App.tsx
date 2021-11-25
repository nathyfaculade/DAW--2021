import './App.css';
import imgCollection1 from "./assets/imagem/collection1.jpg";
import imgCollection2 from "./assets/imagem/collection2.jpg";
import imgCollection3 from "./assets/imagem/collection3.jpg";
import imgCollection4 from "./assets/imagem/collection4.jpg";

import './styles.css';

import { Collection } from './components/Collection';
import { Header } from './components/Header';
import { Brands } from './components/Brand';
function App() {
    const brands = [
        { alt: 'brand1', source: 'assets/images/brand1.png' },
        { alt: 'brand2', source: 'assets/images/brand2.png' },
        { alt: 'brand3', source: 'assets/images/brand3.png' },
        { alt: 'brand4', source: 'assets/images/brand4.png' }
    ]
    return (
        <header className="navbar navbar-expand navbar-light">
            <Header />
        </header>

        <main>
            <div className="container">

        <Collection />

     <div className= "carousel"></div>

        
                </div>
            </div>
            <div className="products">

        <div className="card">
            <img src="assets/images/product1.jpg"/>
            <div className="card-body"> 
                 <h5> Conjunto de casaco e calça preta</h5>
                <div className="details">
                    <div className="star-rating" >
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                    </div>
                    <div className="price">
                    <h3> R$600,00 </h3>
                    <p> 10 x R$ 60,00</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="card">
            <img src="assets/images/product2.jpg"/>
            <div className="card-body">
                <h5> Conjunto de casaco e calça preta</h5>
                <div className="details">
                    <div className="star-rating" >
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                    </div>
                    <div className="price">
                    <h3> R$600,00 </h3>
                    <p> 10 x R$ 60,00</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="card">
            <img src="assets/images/product3.jpg"/>
            <div className="card-body">
                <h5> Conjunto de casaco e calça preta</h5>
                <div className="details">
                    <div className="star-rating" >
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                    </div>
                    <div className="price">
                    <h3> R$600,00 </h3>
                    <p> 10 x R$ 60,00</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="card">
            <img src="assets/images/product4.jpg"/>
            <div className="card-body">
                <h5> Conjunto de casaco e calça preta</h5>
                <div className="details">
                    <div className="star-rating" >
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                    </div>
                    <div className="price">
                    <h3> R$600,00 </h3>
                    <p> 10 x R$ 60,00</p>
                    </div>
                </div>
            </div>
        </div>
             </div>
</div >

<div className="newsletter"/>
    <div className="container">
        <h2> Newsletter </h2>
        <p> Assine nossa Newsletter para recer promoções impertiveis e atualizações sobre ofertas especiais, novos produtos </p>
        <form>
            <input type="text" className="form-control form-control-lg" placeholder="Informe o seu email" />
            <button className="btn btn-primary btn-lg"> Inscreva-se</button>
        </form>
    </div>
</div >

        <div className="container">
            <Brands itens={ } />
        </div>

</main >

        <footer>
            <div className="container row">

<div className="col">
    <h5> Contato</h5>
    <ul>
        <li>+55 46 9 9817-3254</li>
        <li>Rua Av. Brasil, 922</li>
        <li>Pato Branco - PR</li>
    </ul>
</div>

<div className="col">
    <h5>Institucional</h5>
    <ul>
        <li> <a href="#"> Quem somos </a> </li>
        <li> <a href="#"> Nossas lojas </a></li>
        <li> <a href="#"> Pato Branco - PR </a> </li>
        <li> <a href="#"> Pato Branco - PR </a> </li>
    </ul>
</div>

<div className="col">
    <h5>Atendimento</h5>
    <ul>
        <li> <a href="#"> Atendiemnto </a> </li>
        <li> <a href="#"> Meus pedidos </a></li>
        <li> <a href="#"> Devoluções </a> </li>
        <li> <a href="#"> Assistência técnica </a></li>
        <li> <a href="#"> Política de privacidade </a> </li>
    </ul>
</div>
</div>
        </footer>

    );

}

export default App;
