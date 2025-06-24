import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNotEmpty, IsNumber, } from "class-validator"

export class CreateCreateSocialDto {
    @ApiProperty({
        example: "1",
        description: "creators's id"
    })
    @IsNumber()
    @IsNotEmpty()
    creatorId: number

    @ApiProperty({
        example: "1",
        description: "social's id"
    })
    @IsNumber()
    @IsNotEmpty()
    socialId: number

    @ApiProperty({
        example: "user1",
        description: "User's name"
    })
    @IsString()
    @IsNotEmpty()
    url: string
}
