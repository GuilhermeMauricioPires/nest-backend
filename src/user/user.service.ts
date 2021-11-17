import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly repository: Repository<User>) { }

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.repository.create(createUserDto)
    return this.repository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<User> {
    return this.repository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.repository.preload({
      id: id,
      ...updateUserDto,
    });
    if(!user){
      throw new NotFoundException(`Usuário ${id} não encontrado`);
    }
    return this.repository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return this.repository.remove(user);
  }
}
