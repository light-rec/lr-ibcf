// Maximum number of elements allowed in the heap
const MAX_SIZE = 20;

/**
 * MinHeap class
 * Maintains a fixed-size min-heap for storing items with a similarity value.
 * Used to keep track of the top-N most similar items efficiently.
 */
class MinHeap {
    constructor() {
        this.heap = []; // Array to store heap elements
        this.size = 0;  // Current number of elements in heap
    }

    // Get index of parent node
    parent(i) { 
        return i === 0 ? 0 : Math.floor((i - 1) / 2); 
    }
    
    // Get index of left child
    left(i) { 
        return 2 * i + 1; 
    }
    
    // Get index of right child
    right(i) { 
        return 2 * i + 2; 
    }

    // Swap elements at indices i and j
    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    /**
     * Insert a new element into the heap
     * @param {Object} val - Object with a `similarity` property
     */
    insert(val) {
        if (this.size < MAX_SIZE) {
            // Heap not full â add element at the end and bubble up
            this.heap.push(val);
            this.size++;
            let i = this.size - 1;
            
            // Bubble up: maintain min-heap property
            while (i > 0 && this.heap[i].similarity < this.heap[this.parent(i)].similarity) {
                this.swap(i, this.parent(i));
                i = this.parent(i);
            }
        } else {
            // Heap full â replace root if new value is bigger than current min
            if (val.similarity > this.heap[0].similarity) {
                this.heap[0] = val;
                this.heapify(0); // Restore heap property
            }
        }
    }

    /**
     * Heapify (bubble down) from index i
     * Ensures min-heap property is maintained
     * @param {number} i - index to start heapify
     */
    heapify(i) {
        const l = this.left(i);
        const r = this.right(i);
        let smallest = i;
        
        // Compare with left child
        if (l < this.size && this.heap[l].similarity < this.heap[smallest].similarity) {
            smallest = l;
        }
        
        // Compare with right child
        if (r < this.size && this.heap[r].similarity < this.heap[smallest].similarity) {
            smallest = r;
        }
        
        // Swap and continue heapify if needed
        if (smallest !== i) {
            this.swap(i, smallest);
            this.heapify(smallest);
        }
    }

    /**
     * Remove and return the minimum element (root)
     * @returns {Object|null} - Minimum element or null if empty
     */
    extractMin() {
        if (this.size === 0) return null;
        
        const min = this.heap[0];
        this.heap[0] = this.heap[this.size - 1]; // Move last to root
        this.heap.pop(); // Remove last element
        this.size--;
        
        if (this.size > 0) {
            this.heapify(0); // Restore heap property
        }
        
        return min;
    }

    /**
     * Peek at the minimum element without removing it
     * @returns {Object|null} - Minimum element or null if empty
     */
    peekMin() {
        return this.size > 0 ? this.heap[0] : null;
    }

    /**
     * Clear the heap
     */
    clear() {
        this.heap = [];
        this.size = 0;
    }

    /**
     * Get current heap size
     * @returns {number} - Number of elements in heap
     */
    getSize() {
        return this.size;
    }

    /**
     * Get a copy of the heap array
     * @returns {Array} - Copy of heap elements
     */
    getHeap() {
        return [...this.heap]; // Prevent external modification
    }

    /**
     * Check if heap is empty
     * @returns {boolean} - True if heap is empty
     */
    isEmpty() {
        return this.size === 0;
    }
}

export default MinHeap;