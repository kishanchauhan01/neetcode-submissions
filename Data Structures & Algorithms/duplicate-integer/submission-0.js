class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const countNo = new Map();

        countNo.set(nums[0], 1);

        for (let i = 1; i < nums.length; i++) {
            if (countNo.has(nums[i])) {
                return true;
            }

            countNo.set(nums[i], 1);
        }

        return false;
    }
}
