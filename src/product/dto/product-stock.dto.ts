import { CreateStockDto } from "src/stock/dtos/create-stock.dto";
import { CreateProductDto } from "./create-product.dto";

export class CreateProductStockDto {
    product: CreateProductDto
    stock: CreateStockDto[]
}