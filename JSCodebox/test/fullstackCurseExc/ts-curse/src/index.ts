export class Stack<T> {
  private count: number = 0;
  private elements: { [k: number]: T } = {};

  isEmpty(): boolean {
    return this.count === 0;
  }

  push(element: T): void {
    this.elements[this.count] = element;
    this.count++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;
    this.count--;
    const element = this.elements[this.count];
    delete this.elements[this.count];
    return element;
  }

  length(): number {
    return this.count;
  }

  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

// type predicate
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function sum<T>(...args: T[]): number {
  console.log('args - ', args);
  const result = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);
  return result;
}

console.log(sum(1, 2, 3));
console.log(sum('a', 'b', 'c'));
console.log(sum(...[1, 2, 3]));
