var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length==0) {
      return arrayMedian(nums2);
    }
    if(nums2.length==0) {
      return arrayMedian(nums1);
    }
    
    return findMedian(nums1, 0, nums1.length-1,
                     nums2, 0, nums2.length-1,
                     Math.floor((nums1.length+nums2.length)/2)); 
    
    function arrayMedian(ary) {
      if(ary.length==0)
        return 0;
      if(ary.length%2)
        return ary[Math.floor(ary.length/2)];
      return (ary[ary.length/2]+ary[ary.length/2-1])/2;
    }
    function safeGet(ary,idx) {
      if(idx>=0&&idx<ary.length)
        return ary[idx];
      return Number.MIN_VALUE;
    }
    
    function computeIndex(baseAry, baseBegin, baseEnd,
                       baseIndex,
                       otherAry, otherBegin, otherEnd) {
      var range = findInsertionPoint(
        otherAry, otherBegin, otherEnd,
        baseAry[baseIndex]);
      
      return {globalIndex: range[0]+1+baseIndex,
              index0: range[0],
              index1: range[1]}
    }
    
    function findInsertionPoint(nums, begin, end, v) {
      var L = begin
        , R = end
        , M;
      while(L<=R) {
        M = Math.floor((L+R)/2);
        if(nums[M] == v)
          return [M,M+1];
        if(nums[M] < v)
          L = M+1;
        else
          R = M-1;
      }
      
      return [R,L];
    }
    
    function findMedian(
       nums1, begin1, end1,
       nums2, begin2, end2,
        targetIndex
    ) {
         var queryIndex = Math.floor((begin1+end1)/2);
         var result = computeIndex(nums1, begin1, end1, 
                   queryIndex,
                   nums2, begin2, end2);
         if(result.globalIndex == targetIndex) {
           if((nums1.length+nums2.length)%2) {
             return nums1[queryIndex];
           }
           
           var anotherMedian = Math.max(
             safeGet(nums1, queryIndex-1),
             safeGet(nums2, result.index0)
           );
           
           return (nums1[queryIndex]+anotherMedian)/2;
         }
         
         if(targetIndex < result.globalIndex) {
           return findMedian(
             nums2, begin2, result.index0,           
             nums1, begin1, queryIndex-1,
             targetIndex
           )
         }
         
         return findMedian(
           nums2, result.index1, end2,
           nums1, queryIndex+1, end1,
           targetIndex
         )
       }
  };