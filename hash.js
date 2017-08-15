 /**
  *  Homework 08 - Hash Table
  *
  *  Problem: Hash Table
  *
  *  Prompt: Create a hash table class using separate chaining.
  *
  *  The HashTable will have the following properties:
  *
  *         storage:  {Array} - an array of arrays.
  *         buckets:  {Integer} - the maximum number of buckets that your
  *                   storage can contain. Initially set to 8.
  *           size:   {Integer} count of key-value pairs in the storage
  *
  *  The HashTable will also have the following methods:
  *
  *           hash:   Method that takes a key and bucket number and provides a
  *                   hashed value. The dbjb2 hashing function has been
  *                   provided.
  *
  *                   Input:      key {String}
  *                   Input:      buckets {Integer}
  *                   Output:     index {Integer}
  *
  *         insert:   Method that adds a key-value pair into the storage. If the
  *                   key already exists, the value should be updated. Use
  *                   separate chaining to handle collisions.
  *
  *                   Input:      key {String}
  *                   Input:      value {String}
  *                   Output:     {Undefined}
  *
  *            get:   Method that given a key, return its corresponding value.
  *                   If the key does not exist, return null.
  *
  *                   Input:      key {String}
  *                   Output:     value {String}
  *
  *         remove:   Method that takes a key as its input, and looks for the
  *                   and removes the key-value pair from the bucket.
  *
  *                   Input:      key {String}
  *                   Output:     {Undefined}
  *
  *         resize:   If the load factor reaches a critical 0.75 or higher,
  *                   double the number of buckets. If the load factor is 0.25
  *                   or less, half the number of buckets. Make sure the number
  *                   of buckets do not fall below 8 and re-index all key-value
  *                   pairs if bucket size is changed.
  *
  *                   Input:      key {String}
  *                   Output:     {Undefined}
  *
  *  Input: N/A
  *  Output: A HashTable instance
  */

'use strict';


class HashTable {
  constructor() {
    this.buckets = 8;
    this.size = 0;
    this.storage = new Array(this.buckets);
    for (let i = 0; i< this.buckets; i++){
      this.storage[i] = [];
    }
  }


  // Time Complexity: O(N) for key length
  // Auxiliary Space Complexity: O(N) for key length
  hash(key, buckets) {
    let hash = 5381;
    for (let i = 0; i < key.length; i++) {
      let char = key.charCodeAt(i);
      hash = ((hash << 5) + hash) + char;
    }
    return hash % buckets;
  }


  // Amortized Time Complexity (amortized):  O(N) for the number of elements inthe hash bucket
  // Auxiliary Space Complexity (amortized): O(N) for size of key + value
  insert(key, value, resizeFlag) {
    resizeFlag = resizeFlag || false;

    if (this.get(key) === null){
      let bucketIdx = this.hash(key, this.buckets);
      this.storage[bucketIdx].push([key,value]);
      if (resizeFlag !== true) this.size ++;
    } else{
      let bucketIdx = this.hash(key,this.buckets);
      let i=0;

      while (this.storage[bucketIdx][i][0] !== key && i < this.storage[bucketIdx].length){
      i++;
      }
      this.storage[bucketIdx][i][1] = value;
    }

    if (resizeFlag !== true){
      this.resize();
    }
  }

  // Time Complexity: O(N) for size of hash bucket
  // Auxiliary Space Complexity: constant space
  get(key) {
    // get idx for bucket
    // iterate through storeKeys for idx within bucket
    // retreive value in storage at those indexes.
    let bucketIdx = this.hash(key,this.buckets);
    let i=0;
    if (this.storage[bucketIdx].length === 0) return null;

    while (i < this.storage[bucketIdx].length && this.storage[bucketIdx][i][0] !== key){
      i++;
    }

    if (i === this.storage[bucketIdx].length) {
      return null;
    }
    return this.storage[bucketIdx][i][1];


  }


  // Amortized Time Complexity (amortized): O(N) for size of has bucket of key
  // Auxiliary Space Complexity (amortized): constant
  remove(key) {
    if (this.get(key) === null) return null;

    let bucketIdx = this.hash(key, this.buckets);
    let i=0;
    while (this.storage[bucketIdx][i][0] !== key && i < this.storage[bucketIdx].length){
      i++;
    }

    if (key === this.storage[bucketIdx][i][0]){
      this.storage[bucketIdx].splice(i,1);
      this.size --;
      this.resize();
      return;
    } else{
      return null;
    }
  }


  // Time Complexity: O(N) for number of keys/values.
  // Auxiliary Space Complexity: O(N) but i could rewrite it to pop and get it constant
  resize() {
    let newBuckets = this.buckets;
    let load = this.size / this.buckets;
    
    if (load <= 0.25 && this.buckets > 8){
      newBuckets = this.buckets / 2;
    } else if (load >= 0.75){
      newBuckets = this.buckets * 2;
    }

    if (newBuckets === this.buckets) return;

    let oldStorage = this.storage;
    let oldBuckets = this.buckets;

    this.buckets = newBuckets;

    this.storage = new Array(this.buckets);
    for (let i = 0; i< this.buckets; i++){
      this.storage[i] = [];
    }

    for (let i = 0; i < oldStorage.length; i++){
      for (let j = 0 ; j < oldStorage[i].length; j++){
        this.insert(oldStorage[i][j][0], oldStorage[i][j][1], true);
      }
    }

  }

  debug(){
    debugger;
  }
}
