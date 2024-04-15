import { IsDecimal, IsDefined, IsNotEmpty, IsNumber, IsString, MaxLength, Min } from 'class-validator'

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    @MaxLength(200)
    description: string

    @IsNotEmpty()
    @IsDefined()
    @IsDecimal({ decimal_digits: '1,2' })
    @Min(0)
    price: number

    @IsDecimal()
    @Min(0)
    promotionalPrice: number
}
