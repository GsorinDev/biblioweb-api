export class CreateResourceDto {
  readonly title: string;
  readonly quantity: number;
  readonly available: boolean;
  readonly description: string;
  readonly genres: number[];
  readonly authors: number[];
  readonly typeOfResource: number;
}
