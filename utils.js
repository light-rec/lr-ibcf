function vectorDotProduct(vec1, vec2){
    let sum = 0;
    for(const key in vec1){
        if(vec2[key]){
            sum += vec1[key] * vec2[key];
        }
    }
    return sum;
}

function vectorValue(vec){
    let sum = 0;
    for(let key in vec){
        const v = vec[key]
        sum += v * v;
    }
    return Math.sqrt(sum)
}

export function cosineSimilarity(vec1, vec2){
    return vectorDotProduct(vec1,vec2) / (vectorValue(vec1) * vectorValue(vec2))
}


