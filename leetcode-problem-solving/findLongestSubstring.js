/**
 * Sliding Window - findLongestSubstring
 * Write a function called findLongestSubstring,
 * which accepts a string and returns the length of the longest substring
 * with all distinct characters.
 */

function findLongestSubstring(s) {
    let left = 0, maxLength = 0, uniqueChar = new Set() // 📋 Define the left pointer, maxLength & uniqueChar

    for (let right = 0; right < s.length; right++) { // 📋 Loop until the end of the array. right in place of i is the right pointer.
        
        while (uniqueChar.has(s[right])) { // 📋 Run a while loop as long the current element exists in unique char set.
            uniqueChar.delete(s[left]) // 📋 Remove the very left char from the set.
            left++; // 📋 Move left one step.
        }
            
        uniqueChar.add(s[right]); // 📋 Add the current char into the set
        maxLength = Math.max(maxLength, right - left + 1); // 📋 Update maxLength
    }
    
        
    return maxLength; // 📋 Return the maxLength;
}

// console.log(findLongestSubstring('')) // 0
// console.log(findLongestSubstring('rithmschool')) // 7
// console.log(findLongestSubstring('thisisawesome')) // 6
// console.log(findLongestSubstring('thecatinthehat')) // 7
// console.log(findLongestSubstring('bbbbbb')) // 1
// console.log(findLongestSubstring('longestsubstring')) // 8
// console.log(findLongestSubstring('thisishowwedoit')) // 6

// 📌 Problem solving approach.
// 1️⃣ Understand the problem.
// 2️⃣ Concrete example.
// 3️⃣ Break it down.
// 4️⃣ Solve & simplify.
// 5️⃣ Look back & refactor.

// ✅ Time complexity: O(n);
