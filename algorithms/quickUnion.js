class QuickUnion {
  constructor(n) {
    this.data = [];

    //set id of each object to itself
    for (let i = 0; i < n; i++) {
      this.data[i] = i;
    }
  }

  root(n) {
    let root = this.data[n];

    //chase parent pointers until reach root
    while (this.data[root] !== root) {
      root = this.data[root];
    }
    return root;
  }

  union(p, q) {
    const rootp = this.root(p);
    const rootq = this.root(q);
    //change root of p to point to root of q
    this.data[rootp] = rootq;
  }

  isConnected(p, q) {
    //check if p and q have the same root
    return this.root(p) === this.root(q);
  }
}

/*

algorithm: quick-union

initialize: O(N)
union: O(N)
find(isConnected): O(N)

defect: faster then quickfind but also too slow; the trees can get too tall; find too expensive

*/
