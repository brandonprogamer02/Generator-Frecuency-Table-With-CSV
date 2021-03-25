module.exports = function generateHTML(data) {

     let tables = ``;
     data.forEach((element, index) => {
          const table = generateATable(element);
          tables += `${table} \n`;

     });
     const marcado = `
     <!DOCTYPE html>
     <html lang="en">
     <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>App to Probabiliy</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
               integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
     </head>
     
     <body>
          <div class="content">
               <div class="row border vh-100">
                    <div class="col-12 d-flex justify-content-center">
                         <form action="/upload" method="post" enctype="multipart/form-data" id="form">
                              <input type="file" name="avatar" id='input-upload' />
                              <button>Upload</button>
                         </form>
                    </div>
                    <div class="col-12  d-flex justify-content-center">
     
                         <div class="" id="main">
                              ${tables}
                         </div>
                    </div>
               </div>
          </div>
     </body>
     
     </html>

     `
     return marcado;
}

function generateATable(data) {
     // generating thead
     const questionKey = Object.keys(data);
     const thead_tr_0 = `
     <tr>
     <th colspan="4" class="text-center">${questionKey}</th>
     <tr/>
     `;
     const thead_tr_1 = `
     <tr>
     <th>Respuestas</th>
     <th>fi</th>
     <th>Fi</th>
     <th>fr</th>
     <th>f%</th>
     </tr>`;

     let thead = `
     <thead> 
          ${thead_tr_0}
          ${thead_tr_1}
     </thead>`
     // generating tbody
     let tbody = `<tbody>`
     data[questionKey].forEach((f, index) => {

          let tr = `<tr>`;
          const keyQuestion = Object.keys(f);
          const question = `<td>${keyQuestion}</td>`
          const absoluteAcumulateFrecuency = `<td> ${f[keyQuestion].absoluteAcumulateFrecuency} </td>`;
          const absoluteFrecuency = `<td> ${f[keyQuestion].absoluteFrecuency} </td>`;
          const relativeFrecuency = `<td> ${f[keyQuestion].relativeFrecuency} </td>`;
          const relatetivePorcentualFrecuency = `<td> ${f[keyQuestion].relatetivePorcentualFrecuency} </td>`;
          tr += question;
          tr += absoluteFrecuency;
          tr += absoluteAcumulateFrecuency;
          tr += relativeFrecuency;
          tr += relatetivePorcentualFrecuency;
          tr += '</tr>';
          tbody += tr;

     })
     tbody += `<tbody>`;
     const table = `
          <table class = "table table-stripped border my-3">
               ${thead} \n ${tbody}
          </table>
     `;
     return table;
}