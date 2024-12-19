// Importa as funções necessárias da biblioteca @testing-library/react para renderizar componentes e buscar elementos na tela
import { render, screen } from '@testing-library/react';

// Importa o componente App que será testado
import App from './App';

// Define o teste
test('renders learn react link', () => {
  // 1. Renderiza o componente App, inserindo-o no DOM para ser testado
  render(<App />);

  // 2. Busca um elemento na tela que tenha o texto "learn react" (ignorando diferenças de maiúsculas e minúsculas)
  const linkElement = screen.getByText(/learn react/i); // A função getByText usa uma expressão regular para encontrar o texto

  // 3. Verifica se o linkElement (elemento encontrado) está presente no DOM (se ele existe na tela)
  expect(linkElement).toBeInTheDocument(); // A asserção espera que o linkElement esteja presente na tela
});
