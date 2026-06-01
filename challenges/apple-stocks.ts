/*

Consider an array `prices` that represents the price
variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that returns the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).

Return 0 if no profit is possible.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use two pointers to keep track of the indices of buy & sell,
calculating profit along as you iterate through the array.

*/

const highestProfit = (prices: number[]): number => {
  if (prices.length < 2) return 0;
  
  let minPrice = prices[0]; // buy pointer
  let maxProfit = 0;
  
  for (let i of prices) {
    const profit = i - minPrice;
    maxProfit = Math.max(maxProfit, profit);
    minPrice = Math.min(minPrice, i);
  }
  
  return maxProfit;
};
export default highestProfit;
