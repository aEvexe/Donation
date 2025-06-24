import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, IsBoolean } from "class-validator"

export class CreateAdminDto {
    @ApiProperty({
        example: "user1",
        description: "User's name"
    })
    @IsString()
    @IsNotEmpty()
    full_name: string;

    @ApiProperty({
        example: "user1@gmail.com",
        description: "User's email"
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        example: "user",
        description: "User's role"
    })
    role: string;

    @ApiProperty({
        example: "Uzbek!$t0n",
        description: "User's password"
    })
    password_hash: string;

    @ApiProperty({
        example: "true",
        description: "User's active or not"
    })
    @IsBoolean()
    is_active: boolean;
}
