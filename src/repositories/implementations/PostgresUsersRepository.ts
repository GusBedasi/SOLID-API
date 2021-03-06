import { IUsersRespository } from "../IUSersRepository";
import { User } from '../../entities/User';

export class PostgresUsersRepository implements IUsersRespository {
  private users: User[] = []

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email)
    
    return user
  }

  async save(user: User): Promise<void>{
    this.users.push(user)
  }

  async getAllUsers(): Promise<User[]> {
    return this.users
  }
}