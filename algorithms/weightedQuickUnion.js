class WeightedQuickUnion {
  constructor(n) {
    this.data = [];
    this.size = [];

    for (let i = 0; i < n; i++) {
      this.data[i] = i;
      this.size[i] = 1;
    }
  }

  root(n) {
    let root = this.data[n];
    while (this.data[root] !== root) {
      root = this.data[root];
    }
    return root;
  }

  union(p, q) {
    const rootp = this.root(p);
    const rootq = this.root(q);
    const sizep = this.size[rootp];
    const sizeq = this.size[rootq];

    if (sizep < sizeq) {
      this.data[rootp] = rootq;
      this.size[rootq] += this.size[rootp];
    } else {
      this.data[rootq] = rootp;
      this.size[rootp] += this.size[rootq];
    }
  }

  isConnected(p, q) {
    return this.root(p) === this.root(q);
  }
}

/*

algorithm: weighted quick union

initialize: O(N)
union: O(log N)
find(isConnected): O(log N)

*/

//
// To improve: weighted quick union with path compression

// root(n) {
//   while (this.data[n] !== n) {
//     this.data[n] = this.data[this.data[n]];
//     n = this.data[n];
//   }
//   return n;
// }

// make each other node in path point to it's grandparents while traversing the tree, thereby halving path length
