import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import logo from "../public/amason-white.png";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Cart from "./Cart";
import Link from "next/link";
import { useRouter } from "next/router";

const user = {
	imageUrl: "https://e7.pngegg.com/pngimages/981/645/png-clipart-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-thumbnail.png",
};
const navigation = [
	{ id: 3, name: "Home", href: "/", current: false },
	{ id: 1, name: "Services", href: "/Services", current: false },
	{ id: 2, name: "Purchases", href: "/Purchases", current: false },
];
const userNavigation = [{ id: 1, name: "Help", href: "/help" }];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
	let token;
	let name;
	let email;
	if (typeof window !== "undefined") {
		token = localStorage.getItem("token");
		name = localStorage.getItem("name");
		email = localStorage.getItem("email");
	}
	const logout = () => {
		if (typeof window !== "undefined") {
			localStorage.setItem("token", "");
			localStorage.setItem("name", "");
			localStorage.setItem("email", "");
			alert("succesfully logged out!");
			router.push("/");
		}
	};
	const [open, setOpen] = useState(false);
	const router = useRouter();

	//logic to change the current propertie on navBar
	navigation.map((route) => {
		let url;
		route.current = false;

		if (router.pathname === "/") {
			url = "Home";
		} else {
			url = router.pathname.slice(1, 11);
		}

		if (url === route.name) {
			route.current = true;
		}
	});
	const handleClose = () => setOpen(false);

	return (
		<>
			<div className="min-h-full">
				<Disclosure
					as="nav"
					className="bg-gray-800 text"
				>
					{({ open }) => (
						<>
							<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
								<div className="flex h-16 items-center justify-between">
									<div className="flex items-center">
										<div className="flex-shrink-0">
											<Link href="/">
												<Image
													className="h-8 w-24"
													src={
														logo
													}
													alt="amason"
												/>
											</Link>
										</div>
										<div className="hidden md:block">
											<div className="ml-10 flex items-baseline space-x-4">
												{navigation.map(
													(
														item
													) => (
														<Link
															key={
																item.id
															}
															href={
																item.href
															}
															className={classNames(
																item.current
																	? "bg-gray-900 text-white"
																	: "text-gray-300 hover:bg-gray-700 hover:text-white",
																"px-3 py-2 rounded-md text-sm font-medium"
															)}
															aria-current={
																item.current
																	? "page"
																	: undefined
															}
														>
															{
																item.name
															}
														</Link>
													)
												)}
											</div>
										</div>
									</div>
									<div className="hidden md:block">
										<div className="ml-4 flex items-center md:ml-6">
											{/* Profile dropdown */}
											<Menu
												as="div"
												className="relative ml-3"
											>
												<div>
													<Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
														<span className="sr-only">
															Open
															user
															menu
														</span>
														<img
															className="h-8 w-8 rounded-full"
															src={
																user.imageUrl
															}
															alt=""
														/>
													</Menu.Button>
												</div>
												<Transition
													as={
														Fragment
													}
													enter="transition ease-out duration-100"
													enterFrom="transform opacity-0 scale-95"
													enterTo="transform opacity-100 scale-100"
													leave="transition ease-in duration-75"
													leaveFrom="transform opacity-100 scale-100"
													leaveTo="transform opacity-0 scale-95"
												>
													<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
														{userNavigation.map(
															(
																item
															) => (
																<Menu.Item
																	key={
																		item.id
																	}
																>
																	{({
																		active,
																	}) => (
																		<a
																			href={
																				item.href
																			}
																			className={classNames(
																				active
																					? "bg-gray-100"
																					: "",
																				"block px-4 py-2 text-sm text-gray-700"
																			)}
																		>
																			{
																				item.name
																			}
																		</a>
																	)}
																</Menu.Item>
															)
														)}
														{token ? (
															<Menu.Item
																onClick={
																	logout
																}
																as="a"
																className={
																	"hover:bg-gray-100 cursor-pointer block px-4 py-2 text-sm text-gray-700"
																}
															>
																Log
																out
															</Menu.Item>
														) : (
															<>
																<Link href="/auth/Login">
																	<Menu.Item
																		as="a"
																		className={
																			"hover:bg-gray-100 cursor-pointer block px-4 py-2 text-sm text-gray-700"
																		}
																	>
																		Sign
																		Up
																	</Menu.Item>
																</Link>
																<Link href="/auth/Register">
																	<Menu.Item
																		as="a"
																		className={
																			"hover:bg-gray-100 cursor-pointer block px-4 py-2 text-sm text-gray-700"
																		}
																	>
																		Register
																	</Menu.Item>
																</Link>
															</>
														)}
													</Menu.Items>
												</Transition>
											</Menu>
										</div>
									</div>
									<button
										type="button"
										onClick={() =>
											token ? (
												setOpen(
													true
												)
											) : (
												<>
													(
													{router.push(
														"/auth/Login"
													)}
													{alert(
														"You are not logged in, YET!"
													)}

													)
												</>
											)
										}
										className="absolute right-14 bg-gray-900 p-2 rounded-md md:right-16 lg:right-24 xl:right-28"
									>
										<AiOutlineShoppingCart className="text-white text-2xl" />
									</button>
									<div className="-mr-2 flex md:hidden">
										{/* Mobile menu button */}
										<Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
											<span className="sr-only">
												Open
												main
												menu
											</span>
											{open ? (
												<XMarkIcon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											) : (
												<Bars3Icon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											)}
										</Disclosure.Button>
									</div>
								</div>
							</div>
							<Disclosure.Panel className="md:hidden">
								<div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
									{navigation.map(
										(
											item
										) => (
											<Disclosure.Button
												key={
													item.id
												}
												as="a"
												href={
													item.href
												}
												className={classNames(
													item.current
														? "bg-gray-900 text-white"
														: "text-gray-300 hover:bg-gray-700 hover:text-white",
													"block px-3 py-2 rounded-md text-base font-medium"
												)}
												aria-current={
													item.current
														? "page"
														: undefined
												}
											>
												{
													item.name
												}
											</Disclosure.Button>
										)
									)}
								</div>
								<div className="border-t border-gray-700 pt-4 pb-3">
									<div className="flex items-center px-5">
										<div className="flex-shrink-0">
											<img
												className="h-10 w-10 rounded-full"
												src={
													user.imageUrl
												}
												alt=""
											/>
										</div>
										<div className="ml-3">
											<div className="text-base font-medium leading-none text-white">
												{name ||
													"Profile"}
											</div>
											<div className="text-sm font-medium leading-none text-gray-400">
												{email ||
													"example@gmail.com"}
											</div>
										</div>
									</div>
									<div className="mt-3 space-y-1 px-2">
										{userNavigation.map(
											(
												item
											) => (
												<Disclosure.Button
													key={
														item.id
													}
													as="a"
													href={
														item.href
													}
													className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
												>
													{
														item.name
													}
												</Disclosure.Button>
											)
										)}
										{token ? (
											<Disclosure.Button
												onClick={
													logout
												}
												as="a"
												className="cursor-pointer block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
											>
												Log
												out
											</Disclosure.Button>
										) : (
											<>
												<Link href="/auth/Login">
													<Disclosure.Button
														as="a"
														className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
													>
														Sign
														Up
													</Disclosure.Button>
												</Link>
												<Link href="/auth/Register">
													<Disclosure.Button
														as="a"
														className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
													>
														Register
													</Disclosure.Button>
												</Link>
											</>
										)}
									</div>
								</div>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
			<Cart open={open} handleClose={handleClose} />
		</>
	);
}
