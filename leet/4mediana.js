var findMedianSortedArrays = function(nums1, nums2) {
	var c = nums1.concat(nums2).sort(function(a,b) { return a-b})
	if (c.length%2) {
		return c[(c.length-1)/2]
	} else {
		return (c[(c.length/2)-1]+c[(c.length/2)])/2
	}
};

r = findMedianSortedArrays([1,2,5],[3,4])
r = findMedianSortedArrays([1,2],[3,4])
console.log(r)
