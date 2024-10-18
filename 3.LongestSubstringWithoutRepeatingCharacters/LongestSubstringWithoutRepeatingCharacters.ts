function lengthOfLongestSubstring(s: string): number {
  const temp: string[] = []  //空陣列
   let maxStringCount = 0  //最大長度
   for(let i = 0 ; i < s.length ; i++)
   {
        const indexTemp = temp.indexOf(s[i]) // 找看看字串有沒有出現
        if (indexTemp !== -1) 
        {
            temp.splice(0, indexTemp + 1) // 不等於 -1 代表存在，把這個字元以前的都切分掉
        }
        temp.push(s[i])
        maxStringCount = Math.max(maxStringCount, temp.length)
   }
   return maxStringCount 
};