export type ValidClassName = string | false | undefined;

export function classNames(...classNames: ValidClassName[]): {
  className: string;
} {
  return {
    className: classNames.filter((c) => !!c).join(" "),
  };
}
