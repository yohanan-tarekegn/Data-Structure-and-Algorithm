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
    bool isSameTree(TreeNode* p, TreeNode* q) {
        if(q==nullptr)
        if(p!=nullptr)
        return false;
        else return true;
        if(p==nullptr)
        if(q!=nullptr)
        return false;
        else return true;
        queue<TreeNode*> que1;
        queue<TreeNode*> que2;
        que1.push(p);
        que2.push(q);
        while(que1.size()!=0&&que2.size()!=0){
            TreeNode *x=que1.front();
            que1.pop();
            TreeNode *y=que2.front();
            que2.pop();
            if(x->val==y->val){
                if(x->left!=nullptr)
                que1.push(x->left);
                if(x->right!=nullptr)
                que1.push(x->right);
                if(y->left!=nullptr)
                que2.push(y->left);
                if(y->right!=nullptr)
                que2.push(y->right);
                if(y->right==nullptr)
                if(x->right!=nullptr)
                return false;
                if(y->left==nullptr)
                if(x->left!=nullptr)
                return false;
                if(x->right==nullptr)
                if(y->right!=nullptr)
                return false;
                if(x->left==nullptr)
                if(y->left!=nullptr)
                return false;
            }
            else
            return false;
        }
        return true;
    }
};