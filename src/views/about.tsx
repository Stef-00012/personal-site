export default function About() {


    return (
        <div className="flex justify-center items-center min-h-screen px-4">
            <div className="bg-base-100 shadow-xl rounded-box p-6 max-w-2xl w-full">
            <h1 className="my-4 font-bold sm:mx-4 flex justify-between text-2xl items-center mb-10">
				<span>About</span>
				<a href="#home" className="btn btn-soft btn-accent">
					<span className="icon-[tabler--arrow-back] size-5" /> Back
				</a>
			</h1>
                <div className="text-base-content mockup-code bg-base-200 p-4">
                    <pre>
                        Bonjour! I'm Steve, a <em>homosexually flamboyant</em> fellow thriving in the romantic streets of Paris.
                        When I’m not enjoying the finer things in life like anime (I'm obsessed with <em>My Little Sister Can't be This Cute!</em>),
                        I like to engage in my perfectly normal hobbies (for a Frenchman)—like eating soap and turning Toyota Camrys into modern art by hugging lamp posts.
                        Want to see more of my chaotic energy? <a href="#" className="link link-primary">Check out my OnlyFans</a>.
                    </pre>
                </div>
            </div>
        </div>

    )
}