import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'Guilherme'})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({example: 'teste@teste.com'})
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty({example: 'Florianópolis', description: 'Unidade local do usuário'})
    @IsString()
    @IsOptional()
    ul?: string;

    @ApiProperty({example: 'Santa Catarina', description: 'Superintendência do usuário'})
    @IsString()
    @IsOptional()
    superintendence?: string;

    @ApiProperty({example: 'DENIT', description: 'Perfil do usuário'})
    @IsString()
    @IsOptional()
    role?: string;

}
