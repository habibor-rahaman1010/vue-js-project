//api call by use axios...

// import axios from "axios";
// export const mydata = () => {
//   return axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((response) => response);
// };


// //api call by use javaScript defailt fetch...
// export const mydata = () => {
//   return fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
//         .then((res) => res.json())   
// };


//api call by use javaScript defailt fetch...
const mydata = () => {
    return fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then((res) => res.json())
    .then((data) => data)
}


//api call by use javaScript defailt fetch...
const allFoods = () => {
    return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=f')
    .then((res) => res.json())
    .then((data) => data)
}

export{mydata, allFoods}