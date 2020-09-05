class QuickFind {
  constructor(n) {
    this.data = [];

    for (let i = 0; i < n; i++) {
      this.data[i] = i;
    }
  }

  union(p, q) {
    const pId = this.data[p];
    const qId = this.data[q];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === pId) {
        this.data[i] = qId;
      }
    }
  }

  isConnected(p, q) {
    return this.data[p] === this.data[q];
  }
}

/*

algorithm: quick-find

initialize: O(N)
union: O(N)
find(isConnected): O(1)

defect: union is too expensive

*/
