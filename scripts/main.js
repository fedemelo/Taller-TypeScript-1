"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function insertSeries(series) {
    const tbody = document.getElementById('series');
    series.map(s => {
        const tr = document.createElement('tr');
        const html = `<td> ${s.id} </td>
                              <td> ${s.name} </td>
                              <td> ${s.channel} </td>
                              <td> ${s.seasons} </td>`;
        tr.innerHTML = html;
        tbody.appendChild(tr);
    });
}
