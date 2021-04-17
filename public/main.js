// //Print the age from the api
// const https = require('https');

// https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
//   let {statusCode} = resp
//   let contentType = resp.headers['content-type']
//   resp.setEncoding('utf-8')
//   let data = '';

//   // parse json data here...
//   resp.on('data', (d) => {
//     data += [d]
//   })

//     resp.on('end', () => {
//     let parsedData = data.split(",")
//     .filter(data =>!data.indexOf(" age="))
//     .map(data => data.replace(" age=",""))
//     .map(data => parseInt(data))
//     .filter(data => {
//      return (data >= 50);
//     }).length
//     console.log(parsedData);
//   })
//   resp.on("error", (e) => {
//     console.log("error", e)
//   })
// })
// function arrayMatching(arrayString){
//     arrayString = JSON.parse(arrayString);
//     let firstArray = JSON.parse(arrayString[0]);
//     let secondArray = JSON.parse(arrayString[1]);
//     let condition = !firstArray || firstArray.length != secondArray.length || !secondArray.length || !firstArray.length;
//     if(condition){
//     return false;
//     }
//     let finalSumArray = [];
//     for(let i=0; i<firstArray.length; i++){
//     finalSumArray.push(firstArray[i]+secondArray[i]);
//     }
//     return finalSumArray.join("-");
// }
//     arrayMatching('["[1, 2, 5, 6]", "[5, 2, 8, 11]"]');
//     console.log(arrayMatching('["[1, 2, 5, 6]", "[5, 2, 8, 11]"]'));
    

const companies = [
    { name:"One", category:"finance", start:"1981", end:"2003" },
    { name:"Two", category:"retail", start:"1991", end:"2003" },
    { name:"Three", category:"auto", start:"1981", end:"2008" },
    { name:"Four", category:"finance", start:"1992", end:"2007" },
    { name:"Five", category:"auto", start:"1999", end:"2003" },
    { name:"Six", category:"finance", start:"1981", end:"2005" },
    { name:"Seven", category:"auto", start:"2000", end:"2003" },
    { name:"Eight", category:"retail", start:"1998", end:"2003" },
    { name:"Nine", category:"finance", start:"1988", end:"2003" }
]

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,55,25,64,32]

//For loop
// for(let i=0;i<companies.length;i++){
//     console.log(companies[i]);
// }

//forEach
// companies.forEach(function (company){
//     console.log(company)
// })

//filter using for loop
// for(let i=0;i<companies.length;i++)
// {
//     if(companies[i].start<1995){
//         console.log(companies[i])
//     }
//     else{
//         console.log("Started after 2000")
//     }
// }

//filter using for loop who can drink
// let canDrink=[];
// for(let i=0;i<ages.length;i++){
//     if(ages[i]>=21){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink)

//filter using filter function
// const canDrink=ages.filter(function(age){
//     if(age>=21){
//         return true;
//     }
// })
// console.log(canDrink)

//filter using arrow function
// const canDrink=ages.filter(age => age>=21)
// console.log(canDrink)

//filter using for loop retail companies ARROW FUNCTION
// const retailCompanies= companies.filter(company =>company.category === 'retail');
// console.log(retailCompanies)

//filter using for loop retail companies
//  const retailCompanies= companies.filter(function(company){
//     if(company.category === 'retail'){
//        return true
//     }
// });
//  console.log(retailCompanies)

//Get 80's company 
// const EightiesCo = companies.filter(function(company)
// {
//     if(company.start>=1980 && company.start<=1989){
//         return true
//     }
// })
// console.log(EightiesCo)

//lasted more than ten years
// const lastedTen = companies.filter(function (company){
//     if(company.end-company.start>=10){
//         console.log(company);
//     }
// })

// const lastedTen = companies.filter(company=> company.end-company.start>=10);
//    console.log(lastedTen);
  

//MAP Function
//Array of company name
// const coNameArr=companies.map(function(company){
//     return company.name;
// })
// console.log(coNameArr)


// const coNameArr=companies.map(company=> company.name)
// console.log(coNameArr)

// const testMap=companies.map(company => {
//     return '${company.name} [${company.start} -${company.end}]';
// } )
// console.log(testMap)

//sort
// const sortedCompanies = companies.sort((a,b) =>
//    ( (a.start > b.start) ? 1 : -1)
// ) 
// console.log(sortedCompanies);

//REduce
const ageSum=ages.reduce((total,age)=>total+age,0)
console.log(ageSum)