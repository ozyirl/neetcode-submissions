class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        if(!nums.length){
            return []
        }

         const numMap = new Map<number, number>();
          const result = []
         for(let i = 0;i<nums.length;i++){
            let curr = nums[i]

            numMap.set(curr,(numMap.get(curr) || 0)+1);

         }
  

         return Array.from(numMap.entries())
         .sort((a,b)=>b[1] - a[1])
         .slice(0,k).map(([num])=> num);
    }
}
