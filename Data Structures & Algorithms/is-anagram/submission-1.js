class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false;
        }

        const countLen = new Map();

        for(const char of s) { // count the character length
            countLen.set(char, (countLen.get(char) || 0) + 1);
        }

        for(const char of t) {
            countLen.set(char, (countLen.get(char) || 0) -1);

            if(countLen.get(char) == 0) {
                countLen.delete(char);
            }
        }

        if(countLen.size != 0) return false;
        return true;
    }
}
