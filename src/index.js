// Importa o React, necessário para definir componentes no React
import React from 'react';
// Importa o ReactDOM, necessário para renderizar o conteúdo React no DOM
import ReactDOM from 'react-dom/client';
// Importa o arquivo de estilos principais (index.css)
import './index.css';
// Importa o componente principal da aplicação, onde toda a estrutura será definida
import App from './App';
// Importa a função para medir o desempenho da aplicação
import reportWebVitals from './reportWebVitals';

// Cria o "root" (elemento onde a aplicação será montada) no DOM, buscando o elemento com o id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente 'App' dentro do elemento 'root' na página
root.render(
  // React.StrictMode ativa uma verificação adicional durante o desenvolvimento para destacar problemas potenciais
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// A função reportWebVitals pode ser utilizada para medir o desempenho da aplicação
// Você pode passar uma função de callback para registrar os resultados, como mostrado abaixo:
// reportWebVitals(console.log);

// Se preferir enviar os dados para um endpoint de análise, você pode configurar um
// serviço para coletar as métricas. Para mais detalhes, consulte:
// https://bit.ly/CRA-vitals
reportWebVitals();
