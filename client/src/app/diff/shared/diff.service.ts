import { Injectable } from '@angular/core';

@Injectable()
export class DiffService {

  constructor() {
  }

  splitStringToArray(str) {
    return str.split('\n');
  }

  private getLCS(a, b) {
    const aSub = a.slice(0, a.length - 1);
    const bSub = b.slice(0, b.length - 1);

    if (a.length === 0 || b.length === 0) {
      return [];
    } else if (a[a.length - 1] === b[b.length - 1]) {
      return (this.getLCS(aSub, bSub)).concat(a[a.length - 1]);
    } else {
      const x = this.getLCS(a, bSub);
      const y = this.getLCS(aSub, b);
      return (x.length > y.length) ? x : y;
    }
  }

  findDiff(original, modified) {
    const result = [];
    const subsequence = this.getLCS(original, modified);

    while (subsequence.length > 0) {
      const sFirst = subsequence.shift();

      while (original.length > 0) {
        const oFirst = original.shift();

        if (oFirst === sFirst) {
          break;
        } else if (modified[0] === sFirst) {
          result.push({marker: '-', text: oFirst});
        } else {
          result.push({marker: '*', text: `${oFirst} | ${modified.shift()}`});
        }
      }

      while (modified.length > 0) {
        const mFirst = modified.shift();

        if (mFirst === sFirst) {
          break;
        } else {
          result.push({marker: '+', text: mFirst});
        }
      }

      result.push({marker: '', text: sFirst});
    }

    while (original.length > 0) {
      const oFirst = original.shift();

      if (modified[0] === undefined) {
        result.push({marker: '-', text: oFirst});
      } else {
        result.push({marker: '*', text: `${oFirst} | ${modified.shift()}`});
      }
    }

    while (modified.length > 0) {
      result.push({marker: '+', text: modified.shift()});
    }

    return result;
  }

}
