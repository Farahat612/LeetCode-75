# Python Accepted Submission

from heapq import heapify, heappop, heappush

class Solution(object):
    def totalCost(self, costs, k, candidates):
        """
        :type costs: List[int]
        :type k: int
        :type candidates: int
        :rtype: int
        """
        # Initialize an empty heap
        q = []
        
        # Get the length of the costs array
        n = len(costs)
        
        # Initialize pointers for the left and right segments
        i, j = candidates - 1, n - candidates
        
        # Add the first 'candidates' number of elements to the heap from the left side
        for h in range(candidates):
            q.append((costs[h], h))
        
        # Add the last 'candidates' number of elements to the heap from the right side
        for h in range(n - candidates, n):
            if h > i:
                q.append((costs[h], h))
        
        # Heapify the created heap
        heapify(q)
        
        # Initialize the total cost
        ans = 0
        
        # Perform k iterations to hire k workers
        for _ in range(k):
            # Get the lowest cost worker from the heap
            c, x = heappop(q)
            
            # Add the cost to the total cost
            ans += c
            
            # If the index of the worker is in the left segment
            if x <= i:
                # Move the left pointer to the right
                i += 1
                # If there are more elements to consider on the left side, add them to the heap
                if i < j:
                    heappush(q, (costs[i], i))
            
            # If the index of the worker is in the right segment
            if x >= j:
                # Move the right pointer to the left
                j -= 1
                # If there are more elements to consider on the right side, add them to the heap
                if i < j:
                    heappush(q, (costs[j], j))
        
        # Return the total cost
        return ans
