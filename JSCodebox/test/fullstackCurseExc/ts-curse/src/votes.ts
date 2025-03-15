function log(prefix: any) {
  return (target: any): void => {
    console.log(`${prefix} - ${target}`);
  };
}

@log('Test')
export abstract class Languages {
  constructor(
    private _name: string,
    private _votes: number,
  ) {}

  vote(): void {
    this._votes++;
  }

  get name(): string {
    return this._name;
  }

  get votes(): number {
    return this._votes;
  }
}

class Lang extends Languages {
  constructor(_name: string, _votes: number = 0) {
    super(_name, _votes);
  }
}

class Lang1 extends Languages {
  constructor(_name: string, _votes: number = 0) {
    super(_name, _votes);
  }
}

class Lang2 extends Languages {
  constructor(_name: string, _votes: number = 0) {
    super(_name, _votes);
  }
}

const ts = new Lang('Typescript');
const py = new Lang1('Python');
const php = new Lang2('PHP');
ts.vote();
ts.vote();
ts.vote();
py.vote();
py.vote();
php.vote();
console.log('Qual sua linguagem de programação favorita?');
console.log(ts.name, ts.votes);
console.log(py.name, py.votes);
console.log(php.name, php.votes);

export default 1;
