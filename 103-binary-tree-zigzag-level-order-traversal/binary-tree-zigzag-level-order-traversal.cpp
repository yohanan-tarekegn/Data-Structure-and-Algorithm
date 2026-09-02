/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
        if (root == nullptr) return {};

        vector<vector<int>> res;
        queue<TreeNode*> que;
        que.push(root);
        bool l=true;

        while (!que.empty()) {
            int levelSize = que.size(); // Snapshot number of nodes in current level
            vector<int> currentLevel(levelSize);

            for (int i = 0; i < levelSize; ++i) {
                TreeNode* temp = que.front();
                que.pop();

                int index=!l?i:(levelSize-1-i);
                currentLevel[index]=temp->val;

                if (temp->right != nullptr)  que.push(temp->right);
                if (temp->left != nullptr) que.push(temp->left);
            }
            l=!l;

            res.push_back(currentLevel); // Push full level at once
        }

        return res;
    }

    
};