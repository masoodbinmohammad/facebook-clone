import { signIn } from "next-auth/client";
import Image from "next/image";

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="../public/images/facebook-logo.png"
        height={400}
        width={400}
        objectFit="contain"
        alt="login"
      />
      <h1
        className="p-5 bg-blue-500 rounded-full text-white text-center w-1/6 cursor-pointer"
        onClick={signIn}
      >
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;