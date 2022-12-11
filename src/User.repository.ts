import Database, { UserRequestDto } from './Database'

// NOTE: Make db public instead of private. This is required for the tests.
export class UserRepository {
  public readonly db = Database;

  public createUser(userData:UserRequestDto) {
    return this.db.create(userData)
  }
}
