$(document).ready(function() {
    $('#btnCalcular').click(function() {
        const homens = parseInt($('#homens').val());
        const mulheres = parseInt($('#mulheres').val());
        const criancas = parseInt($('#criancas').val());

        const carneBovina = homens * 0.5 + mulheres * 0.3 + criancas * 0.2;
        const frango = homens * 0.2 + mulheres * 0.2 + criancas * 0.1;
        const linguiça = homens * 0.2 + mulheres * 0.2 + criancas * 0.2;
        const refrigerante = homens * 0.3 + mulheres * 0.4 + criancas * 0.2;
        const cerveja = homens * 0.8 + mulheres * 0.5;

        const listaCompras = `<h2>Lista de Compras:</h2>
            <ul>
                <li><strong>Carne Bovina:</strong> ${carneBovina.toFixed(2)} Kg</li>
                <li><strong>Frango:</strong> ${frango.toFixed(2)} Kg</li>
                <li><strong>Linguiça:</strong> ${linguiça.toFixed(2)} Kg</li>
                <li><strong>Refrigerante:</strong> ${refrigerante.toFixed(1)} Litros</li>
                <li><strong>Cerveja:</strong> ${cerveja.toFixed(1)} Litros</li>
            </ul>`;

        $('#resultados').html(listaCompras);
    });
});
