import { ApiProperty } from "@nestjs/swagger";

export class CreateTypeOfResourceDto {
  @ApiProperty()
  readonly name: string;
}
