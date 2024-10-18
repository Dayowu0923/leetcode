function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let i = 0, j = 0;
    const temp: number[] = [];
    //遍歷兩個陣列 依小到大存入temp
     while (i < nums1.length || j < nums2.length) {
        if (i < nums1.length && (j >= nums2.length || nums1[i] < nums2[j])) {
            temp.push(nums1[i]);
            i++;
        } else {
            temp.push(nums2[j]);
            j++;
        }
    }
    
    if(temp.length % 2 != 0)
    {
        return temp[Math.floor(temp.length / 2)]
    }
    else
    {
        const midIndex1 = temp.length / 2 - 1;
        const midIndex2 = temp.length / 2;
        return (temp[midIndex1] + temp[midIndex2]) / 2;
    }

};