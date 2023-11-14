function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let left = 0;
    let charIndexMap = {};

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= left) {
            // If the current character is repeated and its index is within the current window,
            // move the left pointer to the right of the previous occurrence of the character.
            left = charIndexMap[currentChar] + 1;
        }

        // Update the index of the current character in the map
        charIndexMap[currentChar] = right;

        // Update the maximum length
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};


console.log(lengthOfLongestSubstring("abcabcbbefghi")); // Output: 3
