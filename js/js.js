function scrollContent(direction) {
    // Referencia o elemento que tem a barra de scroll horizontal
    const itemList = document.getElementById('item-list'); 
    
    // Define a quantidade de rolagem (pode ajustar este valor)
    const scrollAmount = 300; 

    if (direction === 'right') {
        itemList.scrollBy({ 
            left: scrollAmount, 
            behavior: 'smooth' // Rola de forma animada
        });
    } else if (direction === 'left') {
        // Para ir para a esquerda, usamos o valor negativo
        itemList.scrollBy({ 
            left: -scrollAmount, 
            behavior: 'smooth' 
        });
    }
}


// CODIGO PARA USAR NA BARRA DE PESQUISAR //

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
    const value = formatSring(event.target.value);

    // Seleciona todos os cards de item e o novo elemento de mensagem
    const items = document.querySelectorAll('.item-card:not(.no-results-card)'); // Seleciona apenas os cards de evento
    const noResultsMessage = document.getElementById('no-results-message');

    let hasResults = false;

    // 1. Esconde a mensagem de "Não Localizado" por padrão
    noResultsMessage.style.display = 'none';

    // 2. Itera sobre os cards de evento para verificar a pesquisa
    items.forEach(item => { 
        if (formatSring(item.textContent).indexOf(value) !== -1) {
            item.style.display = 'flex'; // Mostra o item se corresponder

            hasResults = true;
        } else {
            item.style.display = 'none'; // Esconde o item se não corresponder
        }
    });
    
    // 3. Verifica se encontrou resultados
    if (!hasResults && value.length > 0) { // Mostra a mensagem se não houver resultados E se a busca não estiver vazia
        noResultsMessage.style.display = 'flex'; // Mostra a caixa de "Não Localizado"
    }
});

function formatSring(value) {
    return value.toLowerCase().trim()
    .normalize('NFD') .replace(/[\u0300-\u036f]/g, '');
}

