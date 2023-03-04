import { v4 as uuidv4 } from "uuid";

class User {
  public id: string;
  public name: string;

  public constructor(name?: string, id?: string) {
    this.name = name ?? "";
    this.id = id ?? uuidv4();
  }
}

export default User;
