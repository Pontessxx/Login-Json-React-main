// Home.jsx
import React from 'react';
import './HomeLof.scss'
import { useState } from 'react';

const Home = () => {
  const handleLogout = () => {
    // Limpar dados da sessão
    sessionStorage.clear();

    // Redirecionar para a tela de registro
    window.location.href = '/register'; // ou use o react-router-dom para navegação programática
  };

  // Obter informações do usuário da sessão
  const userEmail = sessionStorage.getItem('userEmail');
  const userName = sessionStorage.getItem('userName');
  
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const procuraNoDadosJson = async () => {
    try {
      const responsePacientes = await fetch("http://localhost:3001/pacientes");
      const responseExames = await fetch("http://localhost:3001/exames");

      const dadosJsonPacientes = await responsePacientes.json();
      const dadosJsonExames = await responseExames.json();

      // console.log("Resposta da API Pacientes:", dadosJsonPacientes);
      // console.log("Resposta da API Exames:", dadosJsonExames);

      if (dadosJsonPacientes && dadosJsonPacientes.length > 0) {
        const resultadosPesquisa = dadosJsonPacientes.filter((paciente) =>
          paciente.nome.toLowerCase().includes(searchInput.toLowerCase())
        );

        // console.log("Resultados da pesquisa Pacientes:", resultadosPesquisa);

        if (resultadosPesquisa.length > 0) {
          const resultadosComExames = resultadosPesquisa.map((paciente) => {
            const examesDoPaciente = paciente.exames.map((exameId) =>
              dadosJsonExames.find((exame) => exame.id === exameId)
            );

            return {
              ...paciente,
              exames: examesDoPaciente,
            };
          });

          // console.log("Resultados com Exames:", resultadosComExames);

          setSearchResults(resultadosComExames);
        } else {
          alert("Nenhum paciente encontrado com base na pesquisa.");
        }
      } else {
        alert("Dados inválidos ou não encontrados");
      }
    } catch (error) {
      alert("Erro ao buscar dados:", error);
    }
  };

  return (
    <>
      <section className="home-log">

        <div className='cabecalho'>
          <h2>Welcome to Home</h2>
          <div className='user-div'>
            {userName && userEmail ? (
              <p>
                Logged in as <span>{userName} ({userEmail})</span>
              </p>
            ) : null}
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
        <div className="input_pesquisa">
          <h2>Pesquisar paciente: </h2>
          <input
            type="text"
            placeholder="Pesquise pelo paciente"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={procuraNoDadosJson}>Pesquisar</button>
        </div>
        <div className="resultados-pesquisa">
          <h2>Resultados da Pesquisa:</h2>
          <div className="list">
              <ul>
              {searchResults.map((paciente) => (
                  <li key={paciente.id}>
                  <p>Nome: {paciente.nome}</p>
                  <p>Idade: {paciente.idade}</p>
                  <p>Exames:</p>
                  <ul>
                      {paciente.exames.map((exame) => (
                      <li key={exame.id}>
                          <p>Tipo: {exame.tipo}</p>
                          <p>Resultado: {exame.resultado}</p>
                      </li>
                      ))}
                  </ul>
                  </li>
              ))}
              </ul>
            </div>
        </div>
      </section>
    </>
  );
};

export default Home;
