import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsDefined, IsEmail, IsOptional } from 'class-validator';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('usuarios')
export class Usuario {

  @IsOptional()
  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  id: number;

  @ApiProperty()
  @IsDefined({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @IsEmail()
  @Column({ length: 145, nullable: false, unique: true })
  email: string;

  @ApiProperty()
  @IsDefined({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @Column({ length: 255, nullable: false })
  senha: string;

  @ApiProperty()
  @IsDefined({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @Column({ name: 'email_verificado', type: 'smallint', nullable: false, default: 0 })
  emailVerificado: number;

  @ApiProperty()
  @IsDefined({ groups: [CREATE] })
  @IsOptional({ groups: [UPDATE] })
  @Column({ name: 'codigo_recuperacao', type: 'int', nullable: true })
  codigoRecuperacao: number;

  @ApiProperty()
  @IsOptional()
  @Column({ type: 'smallint', nullable: false, default: 0 })
  status: number;

  @CreateDateColumn({ name: 'dt_cadastro', nullable: false })
  dtCadastro: Date;

  @CreateDateColumn({ name: 'dt_alteracao', nullable: false })
  dtAlteracao: Date;
}
