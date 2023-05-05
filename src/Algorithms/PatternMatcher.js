class PatternMatcher {
    constructor(pattern) {
        this.pattern = pattern;
    }

    levenshteinDistance(content) {
        /*
        function to find lavenshteinDistance of transforming the pattern to 
        given content or otherwise
        */
        content = content.toLowerCase();
        const pattern = this.pattern;
        const patternLength = pattern.length;
        const contentLength = content.length;


        /*
        initiliazing DP table [i, j]: levenshtein-distance transforming the 
        pattern[i..end] to the content[j..end]
        */
        const distanceMatrix = [];
        /* 
        base case, when the pattern or content is "" thus the distance is the length 
        of string itself (the cost of deletion)
        */
        for (let i = 0; i <= patternLength; i++) {
            distanceMatrix[i] = [i];
        }
        for (let j = 0; j <= contentLength; j++) {
            distanceMatrix[0][j] = j;
        }
        
        /* 
        reccurence:
            suppose we want to evaluate the distance transforming pattern[i..end]
            to content[j..end]
            if the char at i and char at j is the same, when the cost is the cost 
                of transforming pattern[i-1..end] to content[j-1..end]
            if we delete char at i of the pattern, then the cost is 1 + distance
                from pattern[i-1..end] to content[j..end]
            if we insert char at i to the pattern, then the cost is 1 + distance
                from pattern[i..end] to content[j..end]
            if we substitute char at i to match char at j then the cost is 
                1 + distance from from pattern[i-1..end] to content[j-1..end]
        */
        for (let i = 1; i <= patternLength; i++) {
            for (let j = 1; j <= contentLength; j++) {
            const substitutionCost = pattern[i - 1] === content[j - 1] ? 0 : 1;
            distanceMatrix[i][j] = Math.min(
                distanceMatrix[i - 1][j] + 1,                       // deletion
                distanceMatrix[i][j - 1] + 1,                       // insertion
                distanceMatrix[i - 1][j - 1] + substitutionCost,    // substitution
            );
            }
        }
        const maxLength = Math.max(patternLength, contentLength);
        return (1 - distanceMatrix[patternLength][contentLength] / maxLength);
          
    }
}

module.exports = PatternMatcher;