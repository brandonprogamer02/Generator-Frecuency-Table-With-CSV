document.addEventListener('DOMContentLoaded', async () => {
     const data = await getDataAPI();
     document.getElementById('main').appendChild(document.createElement('br'));
     data.forEach((el, index) => {
          if (true) {
               const table = document.createElement('table');
               table.className = 'table table-striped border my-3';
               const thead = document.createElement('thead');
               const tbody = document.createElement('tbody');
               thead.innerHTML = `
               <tr>
               <th colspan="4" class="text-center">${Object.keys(el)[0]}</th>
               </tr>
               <tr>
               <th>Respuestas</th>
               <th>fi</th>
               <th>Fi</th>
               <th>fr</th>
               <th>f%</th>
               </tr>`;
               el[Object.keys(el)].forEach(x => {
                    const f = x[Object.keys(x)];
                    const tbodyTr = document.createElement('tr');
                    const answer = document.createElement('td')
                    answer.innerText = Object.keys(x)[0];
                    tbodyTr.appendChild(answer);
                    // to iterate keys
                    for (let we in f) {
                         const tbodyTd = document.createElement('td');
                         tbodyTd.innerText = f[we];
                         tbodyTr.appendChild(tbodyTd);
                         tbody.appendChild(tbodyTr);
                    }
                    
               });
               table.appendChild(thead);
               table.appendChild(tbody);
               document.getElementById('main').appendChild(table);
               document.getElementById('main').appendChild(document.createElement('br'));
               document.getElementById('main').appendChild(document.createElement('br'));
          }
     });



});

async function getDataAPI() {
     const res = await fetch('/api');
     const data = await res.json();
     return (data);
}