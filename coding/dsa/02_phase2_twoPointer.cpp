#include<bits/stdc++.h>
using namespace std;

void reverseArr(vector<int> &arr) {
    int left=0;
    int right = arr.size()-1;
    while (left<right)
    {
        swap(arr[left++],arr[right--]);
    }

    for(int a: arr) cout << a <<", ";
    cout << endl;

    reverse(arr.begin(),arr.end());
    for (int a : arr)
        cout << a << ", ";

    cout<<endl;
    
}


bool isPallidrome(string s) {
    int left=0;
    int right=s.size()-1;

    while(left<right) {
        if(s[left] != s[right]) return false;
        left++;
        right--;
    }
    return true;
}

bool twoSumInSortedArr(vector<int>&arr, int target) {
    int left=0;
    int right=arr.size()-1;

    while(left<right) {
        if(arr[left]+arr[right] == target) {
            return true;
        }
        else if(arr[left]+arr[right] < target) {
            left++;

        }
        else if (arr[left] + arr[right] > target)
        {
            right--;
        }
    }
    return false;
}

void removeDupfromSortedArr(vector<int>arr) {

}

int main() {
    vector<int> arr = {1,2,3,4,5,6,7,8,9};


    // reverseArr(arr);
//    cout<<( isPallidrome("madam")) <<endl;;
//     cout<<(isPallidrome("mayur")) <<endl;
    cout << (twoSumInSortedArr(arr,17)) << endl;
}