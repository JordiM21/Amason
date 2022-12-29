import Link from "next/link";
import React, { useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getPurchasesThunk } from "../store/slices/purchasesSlice";

const Purchases = () => {
	const purchases = useSelector((state) => state.purchases);

	let token;
	if (typeof window !== "undefined") {
		token = localStorage.getItem("token");
	}
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPurchasesThunk());
	}, []);
	return (
		<div className="m-4">
			<h1>PURCHASES</h1>
			<div className="text-sm text-gray-500 flex items-center gap-1">
				<Link
					className="hover:text-orange-500"
					href="/#/"
				>
					Home
				</Link>{" "}
				<AiOutlineRight />
				<Link
					className="hover:text-orange-500"
					href="/Purchases"
				>
					Purchases
				</Link>
			</div>
			<div>
				{token ? (
					purchases.length >= 1 ? (
						purchases?.map((purchase) => (
							<div className="border my-8 p-4 rounded-md shadow-md ">
								<p className="text-xs">
									{purchase.createdAt.slice(
										0,
										10
									)}
								</p>
								{purchase.cart.products.map(
									(
										product
									) => (
										<div className="bg-gray-100 p-2 m-2 cursor-pointer hover:bg-gray-200 hover:shadow-md transition .5s ease-in">
											<p className="text-center text-xs">
												{
													product.brand
												}
											</p>
											<h4 className="text-lg font-semibold">
												{
													product.title
												}
											</h4>
											<h6 className="quantity">
												{
													product
														.productsInCart
														.quantity
												}{" "}
												x
												${" "}
												{
													product.price
												}{" "}
												c/u
											</h6>
											<h4 className="text-end">
												Total
												Order
												=
												$
												{product
													.productsInCart
													.quantity *
													product.price}
											</h4>
										</div>
									)
								)}
							</div>
						))
					) : (
						<div>
							<h1>
								Welcome New
								User!
							</h1>
							<div>
								Seems that you
								have no
								purchases so,
								why don't you
								try to add some
								cool things to
								your cart and
								buy them?,{" "}
								<Link
									className="text-teal-600 cursor-pointer hover:underline"
									href="/"
								>
									Let's go
									Shopping!
								</Link>
							</div>
						</div>
					)
				) : (
					<div>
						Actually this is empty, but you
						know why?. Well, the answer is
						really easy. You're not logged
						in! Yes! That easy so, you just
						have to{" "}
						<Link
							className="text-teal-500"
							href="/auth/Login"
						>
							Log in
						</Link>{" "}
						if you already have an acoount
						or if you don't have it yet,
						don't worries, you can create
						one really quick and start
						shopping here{" "}
						<Link
							className="text-teal-500"
							href="/auth/Register"
						>
							Register
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Purchases;
