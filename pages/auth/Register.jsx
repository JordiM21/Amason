import axios from "axios";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import logo from "../../public/amason.png";
import Image from "next/image";

const Register = () => {
	const { register, handleSubmit, reset } = useForm();

	const router = useRouter();
	const submit = (data) => {
		axios.post(
			"https://e-commerce-api.academlo.tech/api/v1/users",
			data
		)
			.then((res) => {
				alert(
					"Great! you have an account now, you just have to log in and start shopping, have fun!"
				);
				router.push("/auth/Login");
			})
			.catch((error) => {
				if (error.response?.status === 404) {
					alert(
						"Invalid Information, please check the info you send"
					);
					console.log(error.response);
				} else {
					alert("something went wrong");
					console.log(error.response);
				}
			});
		reset({
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			phone: "",
			role: "",
		});
	};
	return (
		<div className=" mt-10 flex justify-center sm:mt-0">
			<div className="md:gap-6 flex flex-col items-center">
				<div className="mt-10 w-full max-w-md space-y-8">
					<Image
						className="h-16 w-36 my-0 mx-auto"
						src={logo}
						alt="amason"
					/>
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
						Create an account
					</h2>
					<div className="mt-2 text-center text-sm text-gray-600">
						Already have an account?
						<br />{" "}
						<Link
							href="/auth/Login"
							className="font-medium text-indigo-600 hover:text-indigo-500"
						>
							Log in Here
						</Link>
					</div>
				</div>
				<div className="mt-5 md:col-span-2 md:mt-0">
					<form onSubmit={handleSubmit(submit)}>
						<div className="overflow-hidden shadow sm:rounded-md">
							<div className="bg-white px-4 py-5 sm:p-6">
								<div className="grid grid-cols-6 gap-6">
									<div className="col-span-6 sm:col-span-3">
										<label
											htmlFor="firstName"
											className="block text-sm font-medium text-gray-700"
										>
											First
											name
										</label>
										<input
											{...register(
												"firstName"
											)}
											type="text"
											name="firstName"
											id="firstName"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>

									<div className="col-span-6 sm:col-span-3">
										<label
											htmlFor="lastName"
											className="block text-sm font-medium text-gray-700"
										>
											Last
											name
										</label>
										<input
											{...register(
												"lastName"
											)}
											type="text"
											name="lastName"
											id="lastName"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>

									<div className="col-span-6 sm:col-span-4">
										<label
											htmlFor="email"
											className="block text-sm font-medium text-gray-700"
										>
											Email
											address
										</label>
										<input
											{...register(
												"email"
											)}
											type="email"
											name="email"
											id="email"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>

									<div className="col-span-6 sm:col-span-2">
										<label
											htmlFor="password"
											className="block text-sm font-medium text-gray-700"
										>
											Password
										</label>
										<input
											{...register(
												"password"
											)}
											type="text"
											name="password"
											id="password"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
										<p className="text-xs text-gray-500">
											More
											than
											8
											integers
										</p>
									</div>
									<div className="col-span-6 sm:col-span-3 lg:col-span-3">
										<label
											htmlFor="phone"
											className="block text-sm font-medium text-gray-700"
										>
											Phone
											Number
										</label>
										<input
											{...register(
												"phone"
											)}
											type="text"
											name="phone"
											id="phone"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
										<p className="text-xs text-gray-500">
											Insert
											10
											numbers
										</p>
									</div>
									<div className="col-span-6 sm:col-span-3 lg:col-span-3">
										<label
											htmlFor="country"
											className="block text-sm font-medium text-gray-700"
										>
											Country
										</label>
										<input
											type="text"
											name="country"
											id="country"
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
										/>
									</div>
								</div>
								<p className="text-center text-xs text-gray-600">
									Don't
									forget
									your
									credentials,
									you are
									going to
									need
									them
									later
								</p>
							</div>
							<div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
								<button
									type="submit"
									className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								>
									Save
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
