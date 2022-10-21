import { Serie } from './serie.js';
import { series } from './data.js';

function insertSeries(series: Serie[]): void {
    const tbody: HTMLElement = document.getElementById('series')!;
    series.map(s => {
        const tr: HTMLElement = document.createElement('tr');
        const html: string = `<td> ${s.id} </td>
                              <td> ${s.name} </td>
                              <td> ${s.channel} </td>
                              <td> ${s.seasons} </td>`
        tr.innerHTML = html
        tbody.appendChild(tr)
    })
}