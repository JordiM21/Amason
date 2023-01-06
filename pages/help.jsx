import React from "react";

export default function help() {
	return (
		<>
			<div className="min-h-full">
				<header className="bg-white shadow">
					<div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900">
							How this Web Works?
						</h1>
					</div>
				</header>
				<main>
					<div className="mx-auto max-w-7xl py-6 lg:px-8">
						<h2 className="text-center text-xl">
							Well, this web
							application is an
							ecommerce that is trying
							to clone{" "}
							<a
								href={
									"https://www.amazon.com"
								}
								target="_blank"
								className="text-teal-600 underline"
							>
								amazon
							</a>{" "}
							but, of course is with
							way too differente, WE
							HAVE AN S!
						</h2>
						<div className="flex justify-around my-10 mx-2  flex-wrap">
							<div>
								<h3 className="text-2xl text-teal-700">
									How was
									made
									this
									page?
								</h3>
								<p className="text-center text-gray-700 text-lg">
									Ok, here
									i am
									going to
									give you
									the
									exactly
									path i
									followed
									to
									create
									this
									page so
									let's
									get into
									it!
								</p>
								<ul className="list-disc">
									<li>
										Set
										the
										project
										with
										the
										frameworks,
										technologies
										and
										dependendies
										i'll
										use
										so,
										i
										created
										the
										project
										with
										nextJS
										template
										based
										on
										React
										using
										of
										course
										javascript
										as
										base
										technology.
										The
										dependencies
										i
										installed
										are:{" "}
										<span className="text-teal-600">
											react-icons
										</span>{" "}
										which
										is
										perfect
										when
										using
										react,{" "}
										<span className="text-teal-600">
											react-hook-form
										</span>{" "}
										That
										is
										also
										an
										amazing
										hook
										to
										manage
										forms,{" "}
										<span className="text-teal-600">
											Redux
										</span>{" "}
										which
										i
										used
										to
										storage
										the
										user
										information
										(we'll
										talk
										about
										this
										later),{" "}
										<span className="text-teal-600">
											Axios
										</span>{" "}
										In
										order
										to
										make
										the
										API
										calls,
										that
										are
										a
										lot
										by
										the
										way,{" "}
										<span className="text-teal-600">
											Tailwind
										</span>{" "}
										I
										have
										to
										say
										that
										i
										really
										love
										this
										Library
										for
										the
										way
										you
										can
										style
										your
										components
										and
										optimization
										that
										can
										apply
										on
										projects,{" "}
										<span className="text-teal-600">
											Postcss
										</span>{" "}
										This
										plugin
										is
										the
										most
										seamless
										way
										to
										integrate
										Tailwind
										with
										build
										tools
										like
										webpack
									</li>
									<li>
										Having
										this
										on
										mind
										let's
										talk
										about
										the
										provider
										of
										this
										amazing
										API,
										this
										API
										was
										built
										while
										studying
										on{" "}
										<span className="text-teal-600">
											Academlo
										</span>{" "}
										and
										the
										entire
										back
										end
										included
										relations
										and
										database
										was
										made
										with
										NodeJS,
										Express,
										PostgreSQL
										of
										course
										using
										javascript
									</li>
									<li>
										Now
										let's
										set
										up
										the
										redux
										with
										the
										store,
										slices,
										reducers
										in
										order
										to
										manage
										the
										events
										such
										as
										the
										API
										calls
										so
										i
										made
										the
										API
										calls
										with
										thunks
										in
										the
										slices
										and
										then
										doing
										the
										dispatch
										method
										calling
										them
										from
										the
										components
									</li>
									<li>
										So,
										in
										the
										structure
										of
										the
										page
										we
										have
										basicaly
										6
										pages
										that
										are:{" "}
										<span className="text-teal-600">
											Home,
											Purchases,
											Services,
											Login,
											Register
											and
											Help
										</span>{" "}
										which
										is
										of
										course
										where
										you
										are
										now.
										Ok,
										6
										Pages
										with
										different
										routes
										+
										5
										main
										components
										that
										are:{" "}
										<span className="text-teal-600">
											Cart,
											Footer,
											Header,
											LoadingScreen
											and
											NavBar
										</span>{" "}
									</li>
								</ul>
							</div>
							<div>
								<h3 className="text-2xl text-teal-700">
									What can
									you do
									here?
								</h3>
								<p className="text-center text-gray-700 text-lg">
									Next
									step
									i'll
									show all
									the
									features
									this
									page
									has,
									let's
									go!
								</p>
								<ul className="list-disc">
									<li>
										You
										can
										filter
										the
										products
										in
										the
										home
										page
										by
										category
										for
										example
										Kitchen,
										Tv's
										or
										smartphone
									</li>
									<li>
										You
										can
										also
										search
										in
										the
										Bar
										for
										a
										brand
										you
										like
										or
										the
										name
										of
										one
										product
										such
										as
										iPhone,
										Samsung
										or
										LG
									</li>
									<li>
										This
										things
										are
										the
										only
										things
										you
										can
										do
										without
										register
										BUT,
										if
										you
										want
										to
										have
										the
										entire
										experience
										let's
										go
										into
										the
										next
										feature
										that
										is
										creating
										an
										account!
										yes!
										your
										own
										account
										with
										your
										purchases
										and
										information,
										go
										to
										the
										page
										and
										register.
									</li>
									<li>
										After
										having
										an
										account
										just
										Login
										into
										the
										page
										to
										make
										sure
										you
										are
										already
										on
										the
										database
										and
										enjoy
										the
										next
										features
									</li>
									<li>
										adding
										products
										to
										the
										cart
										was
										never
										that
										easy!
										after
										you
										see
										the
										images
										and
										the
										information
										you
										can
										add
										as
										much
										products
										as
										you
										want
										to
										the
										cart
										and
										see
										it
										on
										real
										time
										whenever
										you
										want
									</li>
									<li>
										Finally
										you
										have
										the
										products
										you
										want
										on
										the
										cart,
										let's
										buy
										it!
										you
										can
										make
										the
										purchase
										but,
										chill
										out
										we
										are
										not
										gonna
										take
										any
										payments
										from
										your
										bank
										accounts
									</li>
									<li>
										You
										can
										also
										see
										the
										history
										of
										the
										purchases
										you've
										made
										on
										the
										purchases
										section,
										it's
										so
										cool!
									</li>
								</ul>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}
