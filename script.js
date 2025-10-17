document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.risk-header');

    accordionItems.forEach(item => {
        item.addEventListener('click', () => {
            const isCurrentlyActive = item.classList.contains('active');

            // Cierra todos los items para que solo uno esté abierto a la vez
            accordionItems.forEach(innerItem => {
                innerItem.classList.remove('active');
                const content = innerItem.nextElementSibling;
                content.style.maxHeight = null;
                content.style.padding = "0 25px";
            });

            // Si el item clickeado no estaba activo, lo abre
            if (!isCurrentlyActive) {
                item.classList.add('active');
                const content = item.nextElementSibling;
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.padding = "25px";
            }
        });
    });
});