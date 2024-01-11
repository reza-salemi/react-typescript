type HasName = { name: string };
type HasAge = { age: number };

type hasNameOrAge = HasName | HasAge;

const a: hasNameOrAge = { name: "Mohammad Reza" };
const b: hasNameOrAge = { age: 27 };

const c: hasNameOrAge = { name: "Salemi", age: 27 };

type HasNameAndAge = HasName & HasAge;

const d: HasNameAndAge = { name: "Salemi", age: 27 };
