#include<bits/stdc++.h>
using namespace std;


void largestElement(vector<int> arr){
    if(arr.size() == 0) {
        cout << "Size should be larger than 1" << endl;
    }
    int largest = INT_MIN;
    for(int i=0; i< arr.size(); i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }
    cout<< largest <<endl;
}

void sumOfAllElement(vector<int> arr)
{
    if (arr.size() == 0)
    {
        cout << "Size should be larger than 1" << endl;
    }

    int sum = 0;
    for (int i = 0; i < arr.size(); i++)
    {
        sum+=arr[i];
    }

    cout << sum << endl;
}


void secondLargestSTL(vector<int> arr){
    sort(arr.begin(),arr.end());

    cout << arr[arr.size()-2];

}

void secondLargest(vector<int>arr) {
    int largest = INT_MIN;
    int secondLargest = INT_MIN;

    for(int i=0; i<arr.size();i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];

        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }

    cout << "SecondLargest: "<< secondLargest << endl;
    cout << "largest: "<< largest << endl;
}

void reverseArr(vector<int>arr) {
    int start=0;
    int end = arr.size()-1;

    while(start<=end) {
        swap(arr[start],arr[end]);
        start++;
        end--;
    }


    for(int i=0; i< arr.size();i++) {
        cout << arr[i] << " ";
    }
    cout <<endl;
}

void movesZeros(vector<int> arr) {
    int zero=0;

    for(int current=0;current < arr.size();current++) {
        if(arr[current] == 0 ) {
            // swap
        }
    }
}


