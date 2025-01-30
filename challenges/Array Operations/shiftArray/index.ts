export const shiftArrayElements = (arr: number[], shift: number): number[] => {
  // if (shift === 0)
  //     return arr;
  // else if (shift > 0) {
  //     while (!(shift === 0)){
  //         let elem = arr.pop();
  //         arr.unshift(elem!);
  //         shift--;
  //     }
  // }
  // else {
  //        while (!(shift === 0)){
  //         let elem = arr.shift();
  //         arr.push(elem!);
  //         shift++;
  //     }
  // }
  // return arr;

  // const n = arr.length;
  // if (n === 0) return arr;

  // // Normalize the shift to handle cases where abs(shift) > arr.length
  // shift = ((shift % n) + n) % n;

  // // No shift needed if shift is 0
  // if (shift === 0) return arr;

  // // Splice and rearrange the array
  // const part1 = arr.splice(-shift); // Extract the last `shift` elements
  // return part1.concat(arr); // Combine the extracted part with the remaining array

  let nrr: number[] = [];
  shift = ((shift % arr.length) + arr.length) % arr.length;
  for (let i = 0; i < arr.length; i++) {
    nrr[(i + shift) % arr.length] = arr[i];
  }
  return nrr;
};
