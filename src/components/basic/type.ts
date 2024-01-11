interface Video1 {
  title: string;
  postedAt: Date;
  likes: number;
  sourceUrl: string;
}

type Video2 = {
  title: string;
  postedAt: Date;
  likes: number;
  sourceUrl: string;
};

type Video = {
  title: string;
  postedAt: Date;
};

interface ScheduleVideo1 {
  (video: Video, scheduledFor: Date): Promise<boolean>;
}

type ScheduleVideo2 = (video: Video, scheduledFor: Date) => Promise<boolean>;

interface User1 {
  name: string;
}

interface Admin1 extends User1 {
  type: "admin";
}

type User2 = {
  name: string;
};

type Admin2 = User2 & {
  type: "admin";
};

///////////////////

interface Admin3 extends User2 {
  type: "admin";
}

type Admin4 = User1 & {
  type: "admin";
};

interface Greeter {
  greet(): string;
}

class Person implements Greeter {
  constructor(private name: string) {}

  greet() {
    return `Hi I'm ${this.name}`;
  }
}

interface User {
  name: string;
}

interface User {
  age: number;
}

const employe: User = {
  name: "Mohammad",
  age: 12,
};
