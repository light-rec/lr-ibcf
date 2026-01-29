// Computes the dot product of two vectors represented as objects
function vectorDotProduct(vec1, vec2){
    let sum = 0;
    for(const key in vec1){
        // Only multiply if the key exists in both vectors
        if(vec2[key]){
            sum += vec1[key] * vec2[key];
        }
    }
    return sum; // Return the sum of products
}

// Computes the magnitude (length) of a vector
function vectorValue(vec){
    let sum = 0;
    for(let key in vec){
        const v = vec[key]; // Get the value of the current key
        sum += v * v;       // Add the square of the value
    }
    return Math.sqrt(sum); // Return the square root of the sum of squares
}

// Computes the cosine similarity between two vectors
export function cosineSimilarity(vec1, vec2){
    // Cosine similarity = dot product / (magnitude of vec1 * magnitude of vec2)
    return vectorDotProduct(vec1,vec2) / (vectorValue(vec1) * vectorValue(vec2));
}