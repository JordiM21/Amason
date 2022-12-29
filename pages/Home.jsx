import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
	filterTitleThunk,
	filterByCategory,
	getProductThunk,
} from "../store/slices/productSlice.jsx";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";

const Home = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);
	const [searchByTitle, setSearchByTitle] = useState("");
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		dispatch(getProductThunk());
		axios.get(
			"https://e-commerce-api.academlo.tech/api/v1/products/categories"
		).then((res) => setCategories(res.data?.data.categories));
	}, []);

	const submit = () => {
		dispatch(filterTitleThunk(searchByTitle));
	};

	const random = (id) => {
		return Math.floor(Math.random(id) * 1000);
	};

	return (
		<div className="m-0 p-0">
			<div className=" absolute h-10 top-3 text-center lg:right-56 md:right-40 sm:right-36 right-40">
				<input
					className="p-1  h-10 sm:w-48  md:w-60 lg:w-96 w-40 rounded-l-md"
					type="text"
					placeholder="What are you looking for?"
					value={searchByTitle}
					onChange={(e) =>
						setSearchByTitle(e.target.value)
					}
				></input>
				<button
					type="button"
					onClick={submit}
					className="bg-orange-400 h-10 w-10 absolute place-items-center rounded-r-md"
				>
					<BiSearchAlt2 className="absolute top-2.5 left-3 text-xl" />
				</button>
			</div>
			<div className="bg-gray-800 flex justify-evenly py-2 opacity-95">
				<p
					onClick={() =>
						dispatch(getProductThunk())
					}
					className="text-gray-300 text-sm cursor-pointer"
				>
					All Products
				</p>
				{categories.map((category) => (
					<p
						onClick={() =>
							dispatch(
								filterByCategory(
									category.id
								)
							)
						}
						className="text-gray-300 text-sm cursor-pointer"
						key={category.id}
					>
						{category.name}
					</p>
				))}
			</div>
			<main>
				<div className="bg-white">
					<div className="mx-auto max-w-2xl py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
						<h2 className="text-2xl font-bold tracking-tight text-gray-900">
							Results
						</h2>
						<div className="mt-2 grid grid-cols-2 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
							{products.map(
								(product) => (
									<div
										key={
											product.id
										}
										className="cursor-pointer group relative shadow-lg transition ease-in 1s box-border hover:shadow-2xl"
									>
										<Link
											href={
												"/detail/" +
												product.id
											}
										>
											<div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-60">
												<img
													src={
														product
															.productImgs[0]
													}
													alt="product image"
													className="h-full w-full object-contain object-center lg:h-full lg:w-full"
												/>
											</div>
										</Link>
										<div className="p-2 mt-4 flex justify-between">
											<div>
												<Link
													href={
														"/detail/" +
														product.id
													}
												>
													<h3 className="text-gray-900 text-lg font-medium hover:text-orange-500 transition 1s ease">
														{
															product.title
														}
													</h3>
												</Link>
												<div className="flex text-yellow-400 items-center">
													<BsStarFill />
													<BsStarFill />
													<BsStarFill />
													<BsStarFill />
													<BsStarHalf />
													<p className="text-gray-500 text-xs">
														{random(
															product.id
														)}
													</p>
												</div>
												<p className="text-md font-medium text-gray-900">
													$
													{
														product.price
													}
												</p>
												<p className="text-sm text-gray-500">
													$
													{product.price -
														Math.floor(
															product.price *
																0.1
														)}{" "}
													<span className="bg-red-600 text-white">
														10%
														OFF
													</span>
													<br />
													with
													Subscribe
													&
													Save
													discount
												</p>
												<p className="text-sm text-blue-500">
													Free
													Delivering
												</p>
											</div>
										</div>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;
