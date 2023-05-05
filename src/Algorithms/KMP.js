const PatternMatcher = require('./PatternMatcher');

class KMP extends PatternMatcher{
    constructor(pattern) {
        super(pattern);

        /*
        (pre-)compute the border-function
        */
        this.border = new Array(pattern.length + 1);
        this.border[0] = -1;
        this.border[1] = 0;
        let i = 1;
        let prefixLen = 0;
        while (i < pattern.length) {
            if (pattern[prefixLen] == pattern[i]) {
                prefixLen++;
                i++;
                this.border[i] = prefixLen;
            } else if (prefixLen > 0) {
                prefixLen = this.border[prefixLen];
            } else {
                i++;
                this.border[i] = 0;
            }
        }
    }

    match(content) {
        /*
        match the pattern to given content using Knuth-Morris-Pratt technique
        */
        let patternLength = this.pattern.length;
        let contentLength = content.length;
        
        if (patternLength >= contentLength) {
            return false;
        }

        content = content.toLowerCase();
        let contentPointer = 0;
        let patternPointer = 0;
        let pattern = this.pattern;
        while (contentPointer < contentLength) {
            const currentCharMatch =pattern[patternPointer] === content[contentPointer]; 
            if (currentCharMatch) {
                patternPointer++;
                contentPointer++;
                const allPatternCorrect = patternPointer == patternLength
                if (allPatternCorrect) {
                    return true;
                }
            } else {
                patternPointer = this.border[patternPointer];
                if (patternPointer < 0) {
                    contentPointer++;
                    patternPointer++;  
                }
            }
        }
        return false;
    }
}


module.exports = KMP;
