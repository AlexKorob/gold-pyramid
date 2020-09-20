class BestWay {
  constructor(arr) {
    this.arr = arr;
    this.allWays = [];
  }
  getBestWay() {
    this.getAllWays(this.arr);
    return this.allWays.reduce((prev, current) =>
      prev[0] > current[0] ? prev : current
    );
  }
  getAllWays(arr, prevPos = null, prev = null, steps = []) {
    if (prev === null && prevPos === null) {
      this.getAllWays(
        arr.slice(1),
        (prevPos = 0),
        (prev = arr[0][0]),
        (steps = [0])
      );
      return;
    }
    if (arr.length === 0) {
      this.allWays.push([prev, steps]);
      return;
    }
    this.getAllWays(
      arr.slice(1),
      prevPos,
      (prev = arr[0][prevPos] + prev),
      (steps = steps.concat(prevPos))
    );
    this.getAllWays(
      arr.slice(1),
      (prevPos = prevPos + 1),
      (prev = arr[0][prevPos] - arr[0][prevPos - 1] + prev),
      (steps = steps.slice(0, steps.length - 1).concat(prevPos))
    );
  }
}

export default BestWay;
