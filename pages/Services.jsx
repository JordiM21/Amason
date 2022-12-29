import Image from "next/image";
import React from "react";
import Security from "../public/Security.png";
import Adress from "../public/Adress.png";
import Payment from "../public/Payment.png";
import Prime from "../public/Prime.png";
import Mobile from "../public/Mobile.png";
import Call from "../public/Call.png";
import Contact from "../public/Contact.png";
import Gift from "../public/Gift.png";
import Orders from "../public/Orders.png";
import Link from "next/link";

const Services = () => {
	return (
		<div>
			<h1 className="m-4 text-xl font-bold text-teal-700">
				Services we Offer
			</h1>
			<div className="flex justify-center flex-wrap lg:m-8">
				<Link
					className="p-2 cursor-pointer hover:shadow-xl shadow-md flex items-center justify-center my-8 mx-auto w-md border border-gray-400 rounded-md"
					href={"/Purchases"}
				>
					<Image
						width={"60px"}
						height={"60px"}
						src={Orders}
					></Image>
					<div className="p-4">
						<h1 className="font-semibold text-lg">
							Your Orders
						</h1>
						<p>
							Track, return or buy
							things again
						</p>
					</div>
				</Link>
				<div className="p-2 cursor-pointer hover:shadow-xl shadow-md flex items-center justify-center my-8 mx-auto max-w-md border border-gray-400 rounded-md">
					<Image
						width={"60px"}
						height={"60px"}
						src={Security}
					></Image>
					<div className="p-4">
						<h1 className="font-semibold text-lg">
							Login & Security
						</h1>
						<p>
							Edit login, name, and
							mobile number
						</p>
					</div>
				</div>
				<div className="p-2 cursor-pointer hover:shadow-xl shadow-md flex items-center justify-center my-8 mx-auto max-w-md border border-gray-400 rounded-md">
					<Image
						width={"60px"}
						height={"60px"}
						src={Prime}
					></Image>
					<div className="p-4">
						<h1 className="font-semibold text-lg">
							Prime
						</h1>
						<p>
							View benefits and
							payment settings
						</p>
					</div>
				</div>
				<div className="p-2 cursor-pointer hover:shadow-xl shadow-md flex items-center justify-center my-8 mx-auto max-w-md border border-gray-400 rounded-md">
					<Image
						width={"60px"}
						height={"60px"}
						src={Adress}
					></Image>
					<div className="p-4">
						<h1 className="font-semibold text-lg">
							Your Addresses
						</h1>
						<p>
							Edit addresses and
							delivery preferences for
							orders and gifts
						</p>
					</div>
				</div>
				<div className="p-2 cursor-pointer hover:shadow-xl shadow-md flex items-center justify-center my-8 mx-auto max-w-md border border-gray-400 rounded-md">
					<Image
						width={"60px"}
						height={"60px"}
						src={Payment}
					></Image>
					<div className="p-4">
						<h1 className="font-semibold text-lg">
							Your Payments
						</h1>
						<p>
							Manage payment methods
							and settings, view
							balances and offers
						</p>
					</div>
				</div>
				<div className="p-2 cursor-pointer hover:shadow-xl shadow-md flex items-center justify-center my-8 mx-auto max-w-md border border-gray-400 rounded-md">
					<Image
						width={"60px"}
						height={"60px"}
						src={Gift}
					></Image>
					<div className="p-4">
						<h1 className="font-semibold text-lg">
							Gift Cards
						</h1>
						<p>
							View balance or reedem a
							card for a special
							person
						</p>
					</div>
				</div>
				<div className="p-2 cursor-pointer hover:shadow-xl shadow-md flex items-center justify-center my-8 mx-auto max-w-md border border-gray-400 rounded-md">
					<Image
						width={"60px"}
						height={"60px"}
						src={Contact}
					></Image>
					<div className="p-4">
						<h1 className="font-semibold text-lg">
							Message Centre
						</h1>
						<p>
							View your Amason and
							Marketplace Seller
							Messages
						</p>
					</div>
				</div>
				<div className="p-2 cursor-pointer hover:shadow-xl shadow-md flex items-center justify-center my-8 mx-auto max-w-md border border-gray-400 rounded-md">
					<Image
						width={"60px"}
						height={"60px"}
						src={Call}
					></Image>
					<div className="p-4">
						<h1 className="font-semibold text-lg">
							Contact Us
						</h1>
						<p>
							Contact our Customer
							Service via Phone or
							Chat
						</p>
					</div>
				</div>
				<div className="p-2 cursor-pointer hover:shadow-xl shadow-md flex items-center justify-center my-8 mx-auto w-md border border-gray-400 rounded-md">
					<Image
						width={"60px"}
						height={"60px"}
						src={Mobile}
					></Image>
					<div className="p-4">
						<h1 className="font-semibold text-lg">
							Amason Mobile App
						</h1>
						<p>Download the Amazon App</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
