export class CreatePostDto {
  readonly name: string;
  readonly email: string;
  readonly message: string;
  readonly homePage: string;
  readonly userId: number;
  readonly childId: number | null;
}
