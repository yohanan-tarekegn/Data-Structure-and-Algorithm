class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        if (root == nullptr) return {};

        vector<vector<int>> res;
        queue<TreeNode*> que;
        que.push(root);

        while (!que.empty()) {
            int levelSize = que.size(); // Snapshot number of nodes in current level
            vector<int> currentLevel;

            for (int i = 0; i < levelSize; ++i) {
                TreeNode* temp = que.front();
                que.pop();

                currentLevel.push_back(temp->val);

                if (temp->left != nullptr)  que.push(temp->left);
                if (temp->right != nullptr) que.push(temp->right);
            }

            res.push_back(currentLevel); // Push full level at once
        }

        return res;
    }
};