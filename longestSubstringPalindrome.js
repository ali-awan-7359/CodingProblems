function longestPalindromicSubstring(s) {
    if (s.length === 0) {
        return "";
    }

    let maxLength = 1;
    let start = 0;

    for (let i = 1; i < s.length; i++) {
        //odd length palindrome
        let left = i - 1;
        let right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1;
                start = left;
            }
            left--;
            right++;
        }

        //even length palindrome
        left = i - 1;
        right = i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1;
                start = left;
            }
            left--;
            right++;
        }
    }

    return s.substr(start, maxLength);
}

console.log(longestPalindromicSubstring("abcabcbbefghi")); // Output: "bcb"
