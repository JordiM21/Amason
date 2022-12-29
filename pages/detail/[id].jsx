import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getProductThunk } from "../../store/slices/productSlice";
import { addToCartThunk } from "../../store/slices/cartSlice";
import { BsStarFill, BsStarHalf, BsFillLockFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";

const productDetail = () => {
	const date = new Date();
	let day = (date.getDate() + 3).toString();
	let newDay = (date.getDate() + 1).toString();
	let month = (date.getMonth() + 1).toString();

	const router = useRouter();
	const { id } = router.query;

	const allProducts = useSelector((state) => state.products);
	const [productsDetail, setProductsDetail] = useState({});
	const [suggestedProduct, setSuggestedProduct] = useState([]);
	const [itemAmount, setItemAmount] = useState("1");
	const dispatch = useDispatch();

	useEffect(() => {
		//guardamos en product lo que pase la condicion del find           este find es de useParams
		const findProduct = allProducts.find(
			(productItem) => Number(productItem.id) === Number(id)
		);
		setProductsDetail(findProduct);

		//filtramos los productos con igual id en categoria    este es el que itera por allProducts ** y este es el obtenido anteriormente en el find, significa en el producto que estamos actualmente
		const filteredProducts = allProducts.filter(
			(productItem) =>
				productItem?.category.id ===
				findProduct?.category.id
		);
		setSuggestedProduct(filteredProducts);
	}, [allProducts, id]);

	useEffect(() => {
		dispatch(getProductThunk());
	}, []);

	const addToCart = () => {
		alert("Adding Product to cart");
		const item = {
			id: productsDetail.id,
			quantity: itemAmount,
		};
		dispatch(addToCartThunk(item));
	};

	const [indexImg, setIndexImg] = useState(0);

	return (
		<div className="m-4">
			<div>
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
						href="/"
					>
						{productsDetail?.category?.name}
					</Link>
					<AiOutlineRight />
					<p className="hover:text-orange-500 cursor-pointer">
						{productsDetail?.title}
					</p>
				</div>
				<div className="flex justify-between mb-4">
					<h2 className="text-2xl lg:text-4xl font-semibold">
						{productsDetail?.title}
					</h2>
					<div className="flex text-yellow-400 items-center lg:mr-10">
						<BsStarFill className="md:text-2xl" />
						<BsStarFill className="md:text-2xl" />
						<BsStarFill className="md:text-2xl" />
						<BsStarFill className="md:text-2xl" />
						<BsStarHalf className="md:text-2xl" />
					</div>
				</div>
				<div className="lg:flex lg:flex-row">
					<div className="gap-0 m-0 p-0 min-h-80 aspect-1 aspect-h-1 w-full lg:w-1/2 rounded-md group-hover:opacity-75 lg:h-80">
						<img
							src={
								productsDetail
									?.productImgs?.[
									indexImg
								]
							}
							className="h-full w-full object-contain object-center lg:h-full lg:w-full"
						></img>
						<div className="flex justify-center gap-10">
							<img
								className="w-28 h-28 shadow-lg rounded-md object-contain cursor-pointer hover:opacity-80"
								src={
									productsDetail
										?.productImgs?.[0]
								}
								onMouseEnter={() =>
									setIndexImg(
										0
									)
								}
								onClick={() =>
									setIndexImg(
										0
									)
								}
							></img>
							<img
								className="w-28 h-28 shadow-lg rounded-md object-contain cursor-pointer hover:opacity-80"
								src={
									productsDetail
										?.productImgs?.[1]
								}
								onMouseEnter={() =>
									setIndexImg(
										1
									)
								}
								onClick={() =>
									setIndexImg(
										1
									)
								}
							></img>
							<img
								className="w-28 h-28 shadow-lg rounded-md object-contain cursor-pointer hover:opacity-80"
								src={
									productsDetail
										?.productImgs?.[2]
								}
								onMouseEnter={() =>
									setIndexImg(
										2
									)
								}
								onClick={() =>
									setIndexImg(
										2
									)
								}
							></img>
						</div>
					</div>
					<div className="rounded-md p-3 m-4 px-16 border border-black border-opacity-25">
						<p className="bolder text-lg">
							Buy New Brand
						</p>
						<p className="text-red-600 font-bold">
							Reduced Price
						</p>
						<div className="flex text-lg gap-3">
							<p className="text-red-600">
								-10%
							</p>
							<p className="font-bold">
								{
									productsDetail?.price
								}{" "}
								$
							</p>
						</div>
						<p className="text-gray-500 text-sm">
							Recomended Price:{" "}
							<span className="line-through">
								{Math.floor(
									productsDetail?.price
								) +
									Math.floor(
										productsDetail?.price *
											0.1
									)}
								.00 $
							</span>
						</p>
						<p>
							Delivery standard fee:
							+6,92$ arrives{" "}
							<strong>
								{day}-{month}
							</strong>
						</p>
						<p>
							Faster Delivery arrives
							on{" "}
							<strong>
								{newDay}-{month}
							</strong>{" "}
							fee: +32,59$. <br /> Be
							sure to purchase in no
							more than
							<span className="text-green-600">
								{" "}
								2 hours 52
								minutes
							</span>
						</p>
						<div className="text-teal-700 flex items-center gap-2">
							<ImLocation2 />
							<p>
								Choose your
								location
							</p>
						</div>
						<div className="flex flex-col gap-5">
							<label htmlFor="amount">
								In Stock.
							</label>
							<span className="flex items-center gap-2">
								<p>amount: </p>
								<input
									id="amount"
									min={1}
									max={9}
									type={
										"number"
									}
									onChange={(
										e
									) =>
										setItemAmount(
											e
												.target
												.value
										)
									}
									value={
										itemAmount
									}
									placeholder="input"
									className="w-10 border border-gray-300 p-1"
								></input>
							</span>
							<button
								onClick={
									addToCart
								}
								className="hover:opacity-90 py-3 bg-yellow-400 rounded-xl"
							>
								Add to Cart
							</button>
							{/* <button>Buy Now</button> */}
							<div className="flex gap-2 text-gray-600">
								<BsFillLockFill />
								<p>
									Safe
									Purchase
								</p>
							</div>
							<div className="flex-col flex w-72 my-1 mx-auto">
								<p>
									Delivered
									by{" "}
									<span className="ml-24 text-gray-700">
										Amason
									</span>
								</p>
								<p>
									Stored
									for{" "}
									<span className="ml-24 text-gray-700">
										Amason
									</span>
								</p>
								<p className="mt-8">
									Exchanges
									and
									refunds
									:{" "}
									<span className="text-blue-600">
										You
										can
										easily
										ask
										for
										a
										refund
										no
										longer
										than
										15
										days
										after
										you
										received
										the
										product
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="m-4">
					<h3 className="text-lg font-bold ">
						Other sellers on Amason
					</h3>
					<p>
						Compare{" "}
						<span className="font-semibold">
							Used
						</span>{" "}
						options from (7) for <br />{" "}
						{productsDetail?.price -
							productsDetail?.price *
								0.5}{" "}
						$
					</p>
					<p className="text-gray-600 text-sm">
						+ 9,92 $ delivery fee
					</p>
					<hr />
					<p>
						Compare{" "}
						<span className="font-semibold">
							New
						</span>{" "}
						options from (24) for <br />{" "}
						{Math.floor(
							productsDetail?.price
						) +
							Math.floor(
								productsDetail?.price
							) *
								0.2}{" "}
						$
					</p>
					<p className="text-gray-600 text-sm">
						+ 9,92 $ delivery fee
					</p>
					<hr />
				</div>

				<div className="m-4">
					Available for a lower price in{" "}
					<Link
						href="/"
						className="text-teal-600 cursor-pointer"
					>
						another sellers (private)
					</Link>{" "}
					Who doesn't give safe delivery with Free
					Amason Prime
				</div>
				<div className="m-4">
					<h2 className="text-lg font-bold">
						Product Details
					</h2>
					<p>{productsDetail?.description}</p>
				</div>
				<h2 className="text-xl font-bold">
					You might also like
				</h2>
				<p className="text-xs text-gray-500">
					{suggestedProduct[0]?.category.name}
				</p>
				<div className="flex flex-wrap justify-evenly">
					{suggestedProduct.map((product) => (
						<Link
							href={
								"/detail/" +
								product.id
							}
							className="max-w-xl cursor-pointer transition .5s ease-in hover:shadow-xl shadow-md flex flex-col m-2 p-4 lg:w-64 w-52"
						>
							<img
								className="max-h-24 object-contain md:max-h-32 lg:max-h-48"
								src={
									product
										.productImgs[0]
								}
							></img>
							<h1 className="text-teal-500 hover:text-orange-500 hover:underline">
								{product.title}{" "}
								|
								<span>
									{" "}
									{product.description.slice(
										0,
										80
									)}
								</span>
							</h1>
							<div className="flex text-yellow-400 items-center">
								<BsStarFill />
								<BsStarFill />
								<BsStarFill />
								<BsStarFill />
								<BsStarHalf />
							</div>
							<p className="text-gray-500 text-sm">
								{Math.floor(
									Math.random() *
										1000
								)}{" "}
								Reviews
							</p>
							<p className="text-red-700">
								${" "}
								{product.price}
							</p>
							<p className="text-gray-600 text-xs">
								<span className="line-through">
									{Math.floor(
										product.price
									) +
										Math.floor(
											product.price
										) *
											0.1}
								</span>
								(10% off)
							</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default productDetail;
