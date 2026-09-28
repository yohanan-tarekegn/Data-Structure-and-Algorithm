function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return [];

    // Tracks shortest-path predecessors for each word
    const parentMap = new Map<string, string[]>();
    
    let currentLevel = new Set<string>([beginWord]);
    let found = false;

    // Remove beginWord to avoid cycles
    wordSet.delete(beginWord);

    // STEP 1: BFS to find minimum depth and build parent pointers
    while (currentLevel.size > 0 && !found) {
        // Erase words in the current level from wordSet so lower levels cannot reuse them
        for (const word of currentLevel) {
            wordSet.delete(word);
        }

        const nextLevel = new Set<string>();

        for (const word of currentLevel) {
            const wordArr = word.split('');

            for (let i = 0; i < word.length; i++) {
                const originalChar = wordArr[i];

                for (let j = 0; j < 26; j++) {
                    const ch = String.fromCharCode(97 + j);
                    if (ch === originalChar) continue;

                    wordArr[i] = ch;
                    const candidate = wordArr.join('');

                    if (wordSet.has(candidate)) {
                        if (candidate === endWord) {
                            found = true;
                        }

                        if (!parentMap.has(candidate)) {
                            parentMap.set(candidate, []);
                        }
                        parentMap.get(candidate)!.push(word);
                        nextLevel.add(candidate);
                    }
                }
                wordArr[i] = originalChar; // Backtrack character swap
            }
        }

        currentLevel = nextLevel;
    }

    if (!found) return [];

    // STEP 2: DFS Backtracking from endWord back to beginWord
    const ans: string[][] = [];

    function backtrack(currWord: string, path: string[]) {
        if (currWord === beginWord) {
            ans.push([beginWord, ...path]);
            return;
        }

        const parents = parentMap.get(currWord);
        if (!parents) return;

        for (const parent of parents) {
            backtrack(parent, [currWord, ...path]);
        }
    }

    backtrack(endWord, []);
    return ans;
}