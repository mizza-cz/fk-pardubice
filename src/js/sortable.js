const tables = document.querySelectorAll('.sortable');

if (tables) {
    tables.forEach((table) => {
        const ths = table.getElementsByTagName('th');
        const tbody = table.getElementsByTagName('tbody')[0];
        const rows = tbody.getElementsByTagName('tr');

        for (let i = 0; i < ths.length; i++) {
            const th = ths[i];
            th.addEventListener('click', function () {
                const colIndex = i;
                const sortOrder = th.dataset.sortOrder === 'asc' ? 'desc' : 'asc';
                const sortElement = th.getAttribute('data-sort-by-el');
                th.dataset.sortOrder = sortOrder;

                const sortedRows = Array.from(rows).sort((a, b) => {
                    const aValue = !sortElement ? a.cells[colIndex].textContent : a.cells[colIndex].querySelector(sortElement).textContent;
                    const bValue = !sortElement ? b.cells[colIndex].textContent : b.cells[colIndex].querySelector(sortElement).textContent;
                    if (sortOrder === 'asc') {
                        return aValue.localeCompare(bValue);
                    } else {
                        return bValue.localeCompare(aValue);
                    }
                });

                while (tbody.firstChild) {
                    tbody.removeChild(tbody.firstChild);
                }

                sortedRows.forEach((row) => {
                    tbody.appendChild(row);
                });
            });
        }
    });
}
