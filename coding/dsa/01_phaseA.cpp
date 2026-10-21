#include<bits/stdc++.h>
using namespace std;

void smallestNum(vector<int>& arr) {
    int small = INT_MAX;

    for(int i=0; i<arr.size(); i++) {
        if(arr[i] < small) {
            small=arr[i];

        }
    }
    cout<< small <<endl;

    // 
    int min = *min_element(arr.begin(),arr.end());
    cout<<min <<endl;

}



int main(){
    vector<int> arr ={4,5,6,7,8,2,9,10,};
    smallestNum(arr);
     return 0;
}