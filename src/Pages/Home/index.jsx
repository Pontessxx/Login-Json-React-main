import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
const index = () => {
  return (
    <>
    <section className='home-sec'>
      <div className="max-home">
        <div className="home-div">
          {/* <h2>Global Soluction 2023 - Engenharia de Software</h2> */}
          <div className='card-imagem'>
            <img src="https://livecoins.com.br/wp-content/uploads/2021/08/blockchain-hospital.jpg" alt="imagem-home" />
          </div>
          <div className='box-baixo'>
            <h2>Health ID</h2>
            <p>Uma inovadora solução de acesso a registros médicos, integra criptografia e usabilidade para oferecer aos profissionais de saúde uma plataforma eficiente e segura, impulsionando a excelência clínica.</p>
          </div>
          <div className='box-btn-info'>
            <Link to ='/register'>Mais informações</Link>
          </div>
        </div>
        <div className='box-direito'>
          <div className="box-um">
            <h3>O que é a solução? </h3>
            <p>A solução é uma plataforma inteligente de gestão de registros médicos.</p>
          </div>
          <hr />
          <div className="box-dois">
            <h3>O que ela fará? </h3>
            <p>Ela simplificará o acesso, proporcionando uma interface amigável e segura.</p>
          </div>
          <hr />
          <div className="box-tres">
            <h3>Como funcionará? </h3>
            <p>Funcionará integrando criptografia e chaves únicas para garantir confidencialidade, eficiência e excelência clínica.</p>
          </div>
        </div>
      </div>
      <div className="max-vants">
        <h1>Vantagens</h1>
        <div className='box-vants'>
        <div className="box-um">
            <div className='card-imagem'>
            <img src="https://www.athenium.com/wp-content/uploads/2020/05/BLOG_teamthink_Scalability-for-Growth_1219_featured-img-compressor.png" alt="imagem-home" />
            </div>
            <div className="text">
                <h3>Eficiência Operacional</h3>
                <p>Acesso rápido e seguro a registros médicos, otimizando o fluxo de trabalho.</p>
            </div>
        </div>
        <div className="box-um">
            <div className='card-imagem'>
            <img src="https://th.bing.com/th/id/OIP.hRLjMvG0oZH9O00tiaV7UgHaHa?pid=ImgDet&rs=1" alt="imagem-home" />
            </div>
            <div className="text">
                <h3>Confidencialidade Reforçada</h3>
                <p>Criptografia avançada e chaves únicas asseguram a proteção integral dos dados.</p>
            </div>
        </div>
        <div className="box-um">
            <div className='card-imagem'>
            <img src="https://png.pngtree.com/png-clipart/20221007/original/pngtree-user-experience-png-image_8663882.png" alt="imagem-home" />
            </div>
            <div className="text">
                <h3>Experiência do Usuário Aprimorada</h3>
                <p>Interface intuitiva para profissionais de saúde, facilitando a utilização eficaz.</p>
            </div>
        </div>
    </div>
      </div>
    </section>
  </>
  )
}

export default index