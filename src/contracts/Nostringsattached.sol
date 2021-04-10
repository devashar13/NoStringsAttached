pragma solidity ^0.5.0;
string public name = "Nostringsattached";
struct Music{
    uint id;
    string hash;
    string description;
    uint tipAmount; 
    address payable author;
}