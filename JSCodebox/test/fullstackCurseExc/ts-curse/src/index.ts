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
