import Link from "next/link";
const Login = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-center md:bg-cover bg-[url('/login/4.jpg')]">
      <div className="bg-black bg-opacity-40 rounded-lg p-8 max-w-sm w-full mx-auto">
        <div className="text-center">
          <Link href="/">
            <img
              className="mx-auto h-20 w-auto"
              src="/fadas-logo-footer.webp"
              alt="Your Company"
            />
          </Link>
          <h2 className="mt-6 text-2xl font-bold text-slate-100">
            Sign in to your account
          </h2>
        </div>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-100"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-100"
              >
                Password
              </label>
            </div>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
