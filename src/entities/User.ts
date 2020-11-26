import { v4 as uuidv4 } from 'uuid'

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, 'id'>, id?: string){
    //Example:
    //this. name = name
    //this.email = email
    //this.password = password

    //Equivalent to the example above:
    Object.assign(this, props)
    if(!id){
      this.id = uuidv4()
    }
  }
}