#include<bits/stdc++.h>
using namespace std;

vector<vector<int>> optimizeBookings(vector<vector<int>> bookings) {
    sort(bookings.begin(), bookings.end()); //Sort by start time
    vector<vector<int>> finalbookings;
    int n=bookings.size();
    if(!n) return {}; //Empty list of bookings
    int st=bookings[0][0], en=bookings[0][1];
    for(int i=1;i<n;i++) {
        if(bookings[i][0]<=en) {
            en=max(en, bookings[i][1]); //Merge the bookings
        } else {
            finalbookings.push_back({st, en}); //Add the merged booking
            st=bookings[i][0];
            en=bookings[i][1];
        }
    }
    finalbookings.push_back({st, en});
    return finalbookings;   //Return the final list of bookings
}
signed main() {
    cout<<"Choose any one of the following options:\n 1. Dynamic input(Enter -1 to stop) \n 2. Specify the number of bookings and enter them\n 3. Enter any other number to exit\n";
    int choice; 
    cin>>choice;
    vector<vector<int>> bookings;
    if(choice == 1) {
        int st,en;
        while(true) {
            cin>>st;
            if(st==-1) break; //Stop taking input
            cin>>en;
            if(st>en) {
                cout<<"Invalid booking\n";
                return 0;
            }
            bookings.push_back({st, en}); //Add the booking
        }
    } 
    else if(choice == 2) {
        int n; //Number of bookings
        cin >> n;
        if(n<0) {
            cout<<"Invalid number of bookings\n";
            return 0;
        }
        for(int i=0;i<n;i++) {
            int st, en;
            cin >> st >> en;
            if(st>en) {
                cout<<"Invalid booking\n";
                return 0;
            }
            bookings.push_back({st, en});   //Add the booking
        }
    }
    else {
        cout<<"Invalid choice\n";
        return 0;
    }
    vector<vector<int>> finalbookings=optimizeBookings(bookings); //Optimize the bookings
    cout<<"[";
    for(auto x:finalbookings) { //Print the optimized bookings
        cout << "[" << x[0] << ", " << x[1] << "]" << (x==finalbookings.back()?"":", ");
    }
    cout<<"]";
    return 0;
}


Testcase 1: choice 1 : bookings: [[1,3],[4,6],[8,12]] : output: [[1, 3], [4, 6], [8, 12]] //Non-overlapping bookings
Testcase 2: choice 1 : bookings: [[1,3],[2,4],[5,7]] : output: [[1, 4], [5, 7]] //Overlapping bookings
Testcase 3: choice 1 : bookings: [[1,3],[3,6]] : output: [[1, 6]] //Touching bookings
Testcase 4: choice 1 : bookings: [] : output: [] //Empty list of bookings
Testcase 5: choice 2 : n = -1 : output: Invalid number of bookings
Testcase 6: choice 2 : n = 2, bookings: [[3,7], [7,4]] //Invalid booking
Testcase 7: choice 2 : n = 3, bookings: [[6,18], [2,4], [17,45]]: output: [[2, 4], [6, 45]] //Non-overlapping bookings
Testcase 8: choice 2 : n = 0, bookings: [] : output: [] //Empty list of bookings