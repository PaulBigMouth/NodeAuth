// export interface AuthBody extends Body {
//   email: string;
//   password: string;
// }
export interface SignInBody extends Body {
  email: string;
  password: string;
}

export interface SignUpBody extends Body {
  email: string;
  password: string;
  role: string;
  secretKey?: string;
}
