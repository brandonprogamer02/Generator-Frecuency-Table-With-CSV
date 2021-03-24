// import { getData, getStadisticData, getQuestionsAndAnswerRepeat } from '/getData.js'
const ref = require('./getData');

module.exports = async function main(csvData) {

     // this it to get all the questions with it answers and its quantity that repeat it
     const finalArray = ref.getQuestionsAndAnswerRepeat(csvData);
     // we are doing find the stadistic datas
     const stadisticData = ref.getStadisticData(finalArray, csvData.length);
     return stadisticData;
}
