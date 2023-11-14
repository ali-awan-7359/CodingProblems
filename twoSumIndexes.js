function sum(nums, target) {
     for (var i = 0; i < nums.length; i++){
            for (var j = i + 1; j < nums.length; j++){
                if(nums[i] + nums[j]===target){
                    return [i, j];
                }
            }
    }
    return null;
}
var num = [3,2,4]
//give me the two numbers in the given array that adds up to the target that is 9
console.log(sum(num, 6));

