class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const diffToIndex = new Map();

        for(let i=0; i<nums.length; i++) {
            const diff = target - nums[i];
            const index = diffToIndex.get(diff);

            if(index !== undefined) {
                return [index, i];
            }

            diffToIndex.set(nums[i], i);
            
        }

        return [];
    }
}
