import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import logo from "../../public/amason.png";
import Image from "next/image";

const Login = () => {
	const { register, handleSubmit, reset } = useForm();
	const router = useRouter();

	const submit = (data) => {
		axios.post(
			"https://e-commerce-api.academlo.tech/api/v1/users/login",
			data
		)
			.then((res) => {
				if (typeof window !== "undefined") {
					localStorage.setItem(
						"name",
						res.data.data.user.firstName
					);
					localStorage.setItem(
						"token",
						res.data.data.token
					);
					localStorage.setItem(
						"email",
						res.data.data.user.email
					);
				}
				console.log(res.data.data);
				alert("succesfuly authenticated");
				router.push("/#/");
			})
			.catch((error) => {
				if (error.response?.status === 404) {
					alert("Invalid User");
				} else {
					console.log(error.response);
				}
			});
		reset({
			email: "",
			password: "",
		});
	};

	return (
		<div className="login-card">
			<h1>Bienvenido</h1>
			<div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="w-full max-w-md space-y-8">
					<div>
						<Image
							className="h-16 w-36 my-0 mx-auto"
							src={logo}
							alt="amason"
						/>
						<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
							Log in to your account
						</h2>
						<div className="mt-2 text-center text-sm text-gray-600">
							Or{" "}
							<Link
								href="/auth/Register"
								className="font-medium text-indigo-600 hover:text-indigo-500"
							>
								Create a new
								account
							</Link>
						</div>
					</div>
					<form
						onSubmit={handleSubmit(submit)}
						className="mt-8 space-y-6"
					>
						<input
							type="hidden"
							name="remember"
							defaultValue="true"
						/>
						<div className="-space-y-px rounded-md shadow-sm">
							<div>
								<label
									htmlFor="email-address"
									className="sr-only"
								>
									Email
									address
								</label>
								<input
									{...register(
										"email"
									)}
									id="email-address"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									placeholder="Email address"
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="sr-only"
								>
									Password
								</label>
								<input
									{...register(
										"password"
									)}
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									placeholder="Password"
								/>
							</div>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
								/>
								<label
									htmlFor="remember-me"
									className="ml-2 block text-sm text-gray-900"
								>
									Remember
									me
								</label>
							</div>

							<div className="text-sm">
								<a
									onClick={() =>
										alert(
											"Ouch, Im sorry for that, i highly recomended you to create another one! No worries, innactive accounts will be automatically removed from our database."
										)
									}
									className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500"
								>
									Forgot
									your
									password?
								</a>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								<span className="absolute inset-y-0 left-0 flex items-center pl-3">
									<LockClosedIcon
										className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
										aria-hidden="true"
									/>
								</span>
								Sign in
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
