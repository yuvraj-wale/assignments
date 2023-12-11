/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// --> first-attempt (brute-force)
function calculateTotalSpentByCategory(transactions) {

  let output_list=[];
  let temp={};

  for (let i=0; i<transactions.length; i++) {
    console.log(transactions[i]['category']);
    if (transactions[i]['category'] in temp) {
      temp[transactions[i]['category']]+=transactions[i]['price'];
    } else {
      temp[transactions[i]['category']]=transactions[i]['price'];
    }
  }

  let key_list=Object.keys(temp);
  let value_list=Object.values(temp);

  for (let j=0; j<key_list.length; j++) {
    let temp2={};
    temp2['category']=key_list[j];
    temp2['totalSpent']=value_list[j];
    output_list[j]=temp2;
  }

  return output_list;
}

// function main() {
//   const transaction = 
//   [
//     {
//       id: 1,
//       timestamp: 1656076800000,
//       price: 10,
//       category: 'Food',
//       itemName: 'Pizza',
//     },
//     {
//       id: 2,
//       timestamp: 1656259600000,
//       price: 20,
//       category: 'Food',
//       itemName: 'Burger',
//     },
//     {
//       id: 3,
//       timestamp: 1656019200000,
//       price: 15,
//       category: 'Clothing',
//       itemName: 'T-Shirt',
//     },
//     {
//       id: 4,
//       timestamp: 1656364800000,
//       price: 30,
//       category: 'Electronics',
//       itemName: 'Headphones',
//     },
//     {
//       id: 5,
//       timestamp: 1656105600000,
//       price: 25,
//       category: 'Clothing',
//       itemName: 'Jeans',
//     },
//   ];
//   /*[
//     {
//       id: 1,
//       timestamp: 1656076800000,
//       price: 10,
//       category: 'Food',
//       itemName: 'Pizza',
//     },
//     {
//       id: 2,
//       timestamp: 1656105600000,
//       price: 20,
//       category: 'Food',
//       itemName: 'Burger',
//     },
//     {
//       id: 3,
//       timestamp: 1656134400000,
//       price: 30,
//       category: 'Food',
//       itemName: 'Sushi',
//     },
//   ];
//   */

//   let output = calculateTotalSpentByCategory(transaction);
//   console.log(output);
// }

// if (require.main === module) {
//   main();
// }

module.exports = calculateTotalSpentByCategory;
