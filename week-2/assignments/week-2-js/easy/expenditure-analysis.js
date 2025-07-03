function calculateTotalSpentByCategory(transactions) {
  const spentByCategory = {};
  transactions.forEach((transaction) => {
    const { category, price } = transaction;
    if (category in spentByCategory) {
      spentByCategory[category] += price;
    } else {
      spentByCategory[category] = price;
    }
  });
  console.log(spentByCategory);
  const result = [];
  for (const category in spentByCategory) {
    result.push({ category, totalSpent: spentByCategory[category] });
  }
  return result;
}

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: "Clothing",
    itemName: "T-Shirt",
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: "Electronics",
    itemName: "Headphones",
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: "Clothing",
    itemName: "Jeans",
  },
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);
