import { IsString } from 'class-validator';
export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true }) // each: true will validate each item in the array
  readonly flavors: string[];
}
