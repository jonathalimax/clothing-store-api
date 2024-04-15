import { IsNotEmpty, IsNumber, Min } from "class-validator";

export class CreateStockDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    quantity: number

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    productId: number

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    sizeId: number

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    colorId: number
}