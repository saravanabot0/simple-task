let fruits = [
  { id: 1, fruitName: "Apple",price:300, fruitImg: "./fruits/1.png" },
  { id: 2, fruitName: "Banana",price:200, fruitImg: "./fruits/2.png" },
  { id: 3, fruitName: "Papaya",price:250, fruitImg: "./fruits/3.png" },
  { id: 4, fruitName: "Mango",price:350, fruitImg: "./fruits/4.png" },
  { id: 5, fruitName: "Grapes",price:150, fruitImg: "./fruits/9.png" },
  { id: 6, fruitName: "Jack Fruit",price:500, fruitImg: "./fruits/11.png" },
  { id: 7, fruitName: "Guava",price:220, fruitImg: "./fruits/12.png" },
  { id: 8, fruitName: "Sapota",price:100, fruitImg: "./fruits/13.png" },
  { id: 9, fruitName: "Avocado",price:240, fruitImg: "./fruits/14.png" },
  { id: 10, fruitName: "Orange",price:210, fruitImg: "./fruits/15.png" },
  { id: 11, fruitName: "Kiwi",price:130, fruitImg: "./fruits/6.png" },
  { id: 12, fruitName: "Water Melon",price:340, fruitImg: "./fruits/7.png" },
  { id: 13, fruitName: "Custed Apple",price:250, fruitImg: "./fruits/8.png" },
  { id: 14, fruitName: "Green Apple",price:330, fruitImg: "./fruits/5.png" },
  { id: 15, fruitName: "Musk Melon",price:380, fruitImg: "./fruits/10.png" },
  { id: 16, fruitName: "Pine Apple",price:260, fruitImg: "./fruits/16.png" },
  { id: 17, fruitName: "Pomegranate",price:180, fruitImg: "./fruits/17.png" },
  { id: 18, fruitName: "Mango",price:100, fruitImg: "./fruits/18.png" },
];

let container = document.getElementById("productContainer"),
userInput = document.getElementById("search");

function searchPro() {
    container.innerHTML = "";
    console.log(userInput.value);
  
    fruits.filter((item)=>{
        return item.fruitName.toLowerCase().startsWith(userInput.value);
    }).forEach((data)=> {
        console.log(data,"%%%%%%%%%")
        container.innerHTML += `
        <div class="productCard">
            <img src=${data.fruitImg} />
            <h1> ${data.fruitName} </h1>
            <h2> RS.${data.price} </h2> 
            <button> Add to Cart </button>
        </div>
        `
    });
}

searchPro();

// data.forEach(function(item,i){
//     container.innerHTML += `
//     <div class="productCard">
//         <img src=${item.fruitImg} />
//         <h1> ${item.fruitName} </h1>
//         <h2> RS.300 </h2> 
//         <button> Add to Cart </button>
//     </div>
//     `
// })
