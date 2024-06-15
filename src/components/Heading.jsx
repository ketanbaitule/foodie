import { oswald } from  "@/style/font.ts"

export function PrimaryHeading({ children }) {
  return <h1 className={`${oswald.className} text-6xl font-bold text-primary p-3`}>{children}</h1>;
}

export function SecondaryHeading({ children }) {
  return <h2 className={`${oswald.className} text-3xl font-medium text-primary p-2`}>{children}</h2>;
}