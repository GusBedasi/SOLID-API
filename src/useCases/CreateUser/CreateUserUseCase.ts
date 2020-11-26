import { IUsersRespository } from '../../repositories/IUSersRepository';
import { IMailProvider } from '../../providers/IMailProvider';
import { CreateUserRequestDTO } from './CreateUserDTO';
import { User } from '../../entities/User';

export class CreateUserUseCase {
  constructor(
    private usersRespository: IUsersRespository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: CreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRespository.findByEmail(data.email)

    if(userAlreadyExists){
      throw new Error('User already exists')
    }

    const user = new User(data)

    await this.usersRespository.save(user)

    this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'Equipe do Meu App',
        email: 'equipe@meuapp.com'
      },
      subject: 'Seja Bem-vindo a plataforma',
      body: '<p>Voce ja pode fazer login na nossa plataforma!</p>'
    })
  }
}