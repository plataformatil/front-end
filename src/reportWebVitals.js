// Define a função 'reportWebVitals', que recebe um parâmetro 'onPerfEntry' 
// (uma função que será chamada para registrar os resultados de desempenho).
const reportWebVitals = onPerfEntry => {
  // Verifica se 'onPerfEntry' é uma função antes de prosseguir
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Importa dinamicamente o módulo 'web-vitals' e, ao carregá-lo, 
    // obtém as funções de medição de desempenho (CLS, FID, FCP, LCP, TTFB)
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Chama cada uma das funções de medição de desempenho, passando a função 'onPerfEntry' como parâmetro
      getCLS(onPerfEntry);  // Medição de 'Cumulative Layout Shift' (mudança de layout acumulada)
      getFID(onPerfEntry);  // Medição de 'First Input Delay' (atraso da primeira interação)
      getFCP(onPerfEntry);  // Medição de 'First Contentful Paint' (primeira pintura com conteúdo)
      getLCP(onPerfEntry);  // Medição de 'Largest Contentful Paint' (pintura do maior conteúdo)
      getTTFB(onPerfEntry); // Medição de 'Time to First Byte' (tempo até o primeiro byte da resposta)
    });
  }
};

// Exporta a função 'reportWebVitals' para ser utilizada em outros módulos
export default reportWebVitals;
