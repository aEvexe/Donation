import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNotEmpty, } from "class-validator"

export class CreateCategoryDto{
    @ApiProperty({
        example: "user1",
        description: "User's name"
    })
    @IsString()
    @IsNotEmpty()
    name: string;
}