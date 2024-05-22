import { SignIn } from '@clerk/nextjs'

export default function SigninPage() {
  return (
    <div>
      <SignIn signUpUrl="/sign-up" />
    </div>
  )
}
