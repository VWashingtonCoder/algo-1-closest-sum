export function closest(nums: number[], target: number): number {
  // stores the closest sum
  let closestSum = Number.MAX_VALUE;

  // Run three loops for each element of the closest sum triplets
  for (let a = 0; a < nums.length; a++) {
    for (let b = a + 1; b < nums.length; b++) {
      for (let c = b + 1; c < nums.length; c++) {
        // update closest sum
        const currentClosestSum = Math.abs(target - closestSum);
        const testClosestSum = Math.abs(target - (nums[a] + nums[b] + nums[c]));

        if (currentClosestSum > testClosestSum)
          closestSum = nums[a] + nums[b] + nums[c];
      }
    }
  }

  return closestSum;
}

module.exports = { closest };
