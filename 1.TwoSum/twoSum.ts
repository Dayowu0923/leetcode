function twoSum(nums: number[], target: number): number[] {
    const map: { [key: number]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        const targetResult = target - nums[i];
        //如果這一個key存在就return
        if (map[targetResult] !== undefined) {
            return [map[targetResult] , i];
        }
        //不存在就把這個key存起來，對應array的index
        else
        {
             map[nums[i]] = i;
        }
    }
};