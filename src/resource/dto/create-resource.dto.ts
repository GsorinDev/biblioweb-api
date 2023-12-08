import { ApiProperty } from '@nestjs/swagger';

export class CreateResourceDto {
  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly quantity: number;

  @ApiProperty()
  readonly available: boolean;

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly genres: number[];

  @ApiProperty()
  readonly authors: number[];

  @ApiProperty()
  readonly typeOfResource: number;
}
