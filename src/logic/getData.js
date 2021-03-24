const e = require("express");

function eliminateDuplicates(arr) {
     var i,
          len = arr.length,
          out = [],
          obj = {};

     for (i = 0; i < len; i++) {
          obj[arr[i]] = 0;
     }
     for (i in obj) {
          out.push(i);
     }
     return out;
}

const getCountOfEachAnswer = (array) => {
     const f = [];
     const rrt = eliminateDuplicates(array);
     rrt.forEach(el => {
          var count = 0;
          array.forEach(f => {
               if (f === el) count++;
          })
          f.push({ [el]: count });
     });
     return f;
}

exports.getStadisticData = (finalArray, totalEncuested) => {
     let stadisticData = finalArray.map(el => {
          // validation for it only show the first row
          const question = Object.keys(el);
          let previousAbsoluteAcumulateFrecuency = el[question][0][Object.keys(el[question][0])];
          // let previousAbsoluteAcumulateFrecuency = 0;

          const f = el[question].map((answer, index) => {
               const key = Object.keys(answer);
               const retorno = {
                    [key]: {
                         absoluteFrecuency: answer[key],
                         absoluteAcumulateFrecuency: answer[key],
                         relativeFrecuency: answer[key] / totalEncuested,
                         relatetivePorcentualFrecuency: `${Math.round(answer[key] / totalEncuested * 100)}%`

                    }
               }
               if (index !== 0) {
                    retorno[key].absoluteAcumulateFrecuency = answer[key] + previousAbsoluteAcumulateFrecuency
               }

               previousAbsoluteAcumulateFrecuency = retorno[key].absoluteAcumulateFrecuency;
               return retorno;
          });

          return {
               [question]: f
          };

     });

     return stadisticData;

}


exports.getQuestionsAndAnswerRepeat = (_data) => {
     // getting the 20 questions
     const firstRow = _data[0];
     const finalArray = [];
     let i = 0;

     // to iterate each question  of first row
     for (let question in firstRow) {
          // we don't select the first question that is bad 
          if (i != 0) {
               const newf = _data.map(row => row[question]);
               // to iterate raw data for to get count occurrence of each answer of this one question
               const answerCount = getCountOfEachAnswer(newf);
               const obj = { [question]: answerCount }
               finalArray.push(obj);
          }
          i++;

     }
     return finalArray;
}