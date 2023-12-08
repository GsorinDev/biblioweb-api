import { ApiProperty } from "@nestjs/swagger";

export class CreateAuthorDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly biography: string;
}
