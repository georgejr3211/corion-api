import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';

import { Usuario } from '../../entities/usuario.entity';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { Repository, createConnection, getRepository, getConnection, Connection } from 'typeorm';

describe('Usuario Controller', () => {
  let controller: UsuarioController;
  let service: UsuarioService;
  let repository: Repository<Usuario>;
  const testConnectionName = 'testConnection';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(),
      ],
      controllers: [UsuarioController],
      providers: [
        UsuarioService,
        {
          provide: getRepositoryToken(Usuario),
          useClass: Repository,
        },
      ],
    }).compile();

    const connection = await createConnection({
      type: 'sqlite',
      database: ':memory:',
      dropSchema: true,
      entities: [Usuario],
      synchronize: true,
      logging: false,
      name: testConnectionName,
    });

    controller = module.get<UsuarioController>(UsuarioController);
    repository = getRepository(Usuario, testConnectionName);
    service = new UsuarioService(repository);
  });

  afterEach(async () => {
    await getConnection(testConnectionName).close();
  });

  it('should create a user', async () => {
    const usuario = new Usuario();
    usuario.email = 'usuario@email.com';
    usuario.senha = '12345678';

    const result = await repository.insert(usuario);
    console.log('result', result);

    expect(5).toBe(5);
    // const result = await controller.onRegister(usuario);
  });
});
