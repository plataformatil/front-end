// Jest-DOM adiciona matchers personalizados para Jest, permitindo fazer asserções sobre nós do DOM.
// Isso permite realizar verificações mais específicas sobre o conteúdo e comportamento dos elementos no DOM.
// Por exemplo, você pode fazer asserções como:
// expect(element).toHaveTextContent(/react/i) para verificar se o 'element' contém o texto "react" (sem distinguir maiúsculas de minúsculas).
// Você pode aprender mais sobre o uso desses matchers personalizados aqui: https://github.com/testing-library/jest-dom

import '@testing-library/jest-dom';  // Importa o pacote jest-dom, que fornece matchers personalizados para facilitar asserções em testes de UI com Jest.
