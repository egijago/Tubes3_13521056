const { Module } = require('module');
const PatternMatcher = require('./PatternMatcher');

class BM extends PatternMatcher {
    constructor(pattern) {
        super(pattern);
        /*
        (pre-)compute the jump count/ last-occurence
        */
        this.lastOccurence = new Map();
        for (let i = 0; i < pattern.length; i++) {
            this.lastOccurence.set(pattern[i], i);
        }
    };

    getLastOccurence(char) {
        /*
        function that return the value of last occurence/jump count that had been
        pre-computed when the pattern initialized
        */
        if (!this.lastOccurence.has(char)) {
            return -1;
        }
        return this.lastOccurence.get(char);
    }

    match(content) {
        /*
        match the pattern to given content using Boyer-Moore technique
        */
        let patternLength = this.pattern.length;
        let contentLength = content.length;
        
        if (patternLength >= contentLength) {
            return false;
        }
        content = content.toLowerCase();
        let pattern = this.pattern;
        let patternPointer = patternLength - 1;
        let contentPointer = patternLength - 1;
        do {
            if (pattern[patternPointer] === content[contentPointer]) {
                if (patternPointer == 0) {
                    return true;
                }
                /* Looking-Glass Technique */
                patternPointer--;
                contentPointer--;
            } else {
                /* Character Jump Technique */
                let lastOccurence = this.getLastOccurence(content[contentPointer])
                let jump = patternLength - Math.min(patternPointer, 1 + lastOccurence);
                contentPointer += jump;
                patternPointer = patternLength - 1;
            }
        } while (contentPointer <= contentLength - 1);

        return false;
    }
}

module.exports = BM;
