import type TypeItInstance from "typeit";

export default function handleTyping(
	instance: TypeItInstance,
	hideLoading: () => void,
) {
	instance
		.options({
			lifeLike: true,
			speed: 10,
		})
		.type(
			'<span class="text-success">stef@Life</span>: <span class="text-secondary">/</span> $ ',
			{ instant: true, delay: 500 },
		)
		.type(
			"echo \"Press Shift or the 'Skip Animation' button to skip this animation\"",
			{ delay: 200 },
		)
		.options({
			speed: 100,
		})
		.break({ instant: true })
		.type("Press Shift or the 'Skip Animation' button to skip this animation", {
			instant: true,
		})
		.break({ instant: true })
		.type(
			'<span class="text-success">stef@Life</span>: <span class="text-secondary">/</span> $ ',
			{ instant: true, delay: 2000 },
		)
		.type("clear", { delay: 100 })
		.break({ instant: true })
		.delete(() => null, { instant: true })
		.type(
			'<span class="text-success">stef@Life</span>: <span class="text-secondary">/</span> $ ',
			{ instant: true, delay: 500 },
		)
		.type("whereis love")
		.break({ instant: true })
		.type("love:", { instant: true })
		.break({ instant: true })
		.type(
			'<span class="text-success">stef@Life</span>: <span class="text-secondary">/</span> $ ',
			{ instant: true, delay: 2000 },
		)
		.type("cat love")
		.break({ instant: true })
		.type("cat: love: No such file or directory", { instant: true })
		.break({ instant: true })
		.type(
			'<span class="text-success">stef@Life</span>: <span class="text-secondary">/</span> $ ',
			{ instant: true, delay: 4000 },
		)
		.type(":(", { delay: 1000 })
		.options({ speed: 1000 })
		.delete(2, { delay: 500 })
		.options({ speed: 50 })
		.type("sudo rm -rf --no-preserve-root /", { delay: 300 })
		.break({ instant: true })
		.type("[sudo] password for stef: ", { instant: true, delay: 800 })
		.break({ instant: true })
		.type("^C", { instant: true, delay: 200 })
		.type("^C", { instant: true })
		.pause(1500)
		.type("sudo: a password is required", { instant: true })
		.break({ instant: true, delay: 300 })
		.type(
			'<span class="text-success">stef@Life</span>: <span class="text-secondary">/</span> $ ^C',
			{ instant: true, delay: 300 },
		)
		.break({ instant: true })
		.type(
			'<span class="text-success">stef@Life</span>: <span class="text-secondary">/</span> $ ',
			{ instant: true, delay: 500 },
		)
		.type("ssh website@stefdp.com")
		.break({ instant: true })
		.type(
			"The authenticity of host 'stefdp.com (173.208.244.6)' can't be established.",
			{ instant: true },
		)
		.type(
			"ECDSA key fingerprint is SHA256:Bhvy0+Nafdu90JBR2OzKySye7vmFcgqPPnDo4ywMDV9.",
			{ instant: true },
		)
		.break({ instant: true })
		.type(
			"Are you sure you want to continue connecting (yes/no/[fingerprint])? ",
			{ instant: true, delay: 500 },
		)
		.type("yes", { delay: 200 })
		.break({ instant: true })
		.type(
			"Warning: Permanently added 'stefdp.com,173.208.244.6' (ECDSA) to the list of known hosts.",
			{ instant: true },
		)
		.break({ instant: true })
		.type("website@stefdp.com's password: ", { instant: true, delay: 500 })
		.type("****", { delay: 150 })
		.type("***", { delay: 500 })
		.delete(2)
		.type("***", { delay: 400 })
		.type("*****")
		.break({ instant: true })
		.type("website@stefdp.com: ~/ $ ", { instant: true, delay: 500 })
		.type("sudo atp install stfe", { delay: 300 })
		.type("-website -y")
		.options({ speed: 25 })
		.move(-11)
		.options({ speed: 50 })
		.delete(2)
		.type("ef")
		.options({ speed: 25 })
		.move(-13)
		.options({ speed: 50 })
		.delete(2)
		.type("pt")
		.options({ speed: 25 })
		.move(null, { to: "END" })
		.options({ speed: 80 })
		.break({ instant: true })
		.type("[sudo] password for website: ", { instant: true, delay: 800 })
		.type("***", { delay: 150 })
		.type("*****", { delay: 500 })
		.delete(1)
		.type("*", { delay: 400 })
		.type("***")
		.options({ speed: 50 })
		.break({ instant: true })
		.type("Reading package lists... Done", { instant: true })
		.break({ instant: true, delay: 100 })
		.type("Building dependency tree", { instant: true })
		.break({ instant: true, delay: 70 })
		.type("Reading state information... Done", { instant: true })
		.break({ instant: true, delay: 150 })
		.type("The following NEW packages will be installed:", { instant: true })
		.break({ instant: true, delay: 120 })
		.type(
			"nextjs reactjs tailwindcss googletagmanager highlightjs highlightjs-atom-one-theme analytics octokit typeit react-tooltip react-carousel",
			{ instant: true },
		)
		.break({ instant: true, delay: 140 })
		.type("0 upgraded, 8 newly installed, 0 to remove and 0 not upgraded.", {
			instant: true,
		})
		.break({ instant: true, delay: 90 })
		.type("Need to get 548 kB of archives.", { instant: true })
		.break({ instant: true, delay: 50 })
		.type(
			"After this operation, 2.4 MB of additional disk space will be used.",
			{ instant: true },
		)
		.break({ instant: true, delay: 130 })
		.type('<span style="color: #b89a28;">0% [Working]</span>', {
			instant: true,
			delay: 350,
		})
		.delete(12, { instant: true })
		.type('<span style="color: #b89a28;">0% [Waiting for headers]</span>', {
			instant: true,
			delay: 100,
		})
		.delete(24, { instant: true, delay: 100 })
		.type(
			"Get:1 https://stefdp.com/download googletagmanager stef-website next react react-dom tailwindcss highlightjs highlightjs-atom-one-theme iconify axios daisyui analytics typeit-react react-use-lanyard [548 kB]",
			{ instant: true },
		)
		.break({ instant: true, delay: 560 })
		.type("Fetched 548 kB in 1s (1972 kB/s)", { instant: true })
		.break({ instant: true, delay: 300 })
		.type("Selecting previously unselected package stef-website.", {
			instant: true,
		})
		.break({ instant: true })
		.type("(Reading database ... ", { instant: true })
		.type("45%", { instant: true, delay: 150 })
		.delete(3, { instant: true })
		.type("80%", { instant: true, delay: 200 })
		.delete(3, { instant: true })
		.type("41938 files and directories currently installed.)", {
			instant: true,
		})
		.break({ instant: true, delay: 400 })
		.type("Preparing to unpack .../stef-website_latest.deb ...", {
			instant: true,
		})
		.break({ instant: true })
		.type("Unpacking stef-website (latest) ...", { instant: true })
		.break({ instant: true, delay: 450 })
		.type("Setting up stef-website (latest) ...", { instant: true })
		.break({ instant: true, delay: 300 })
		.type("Processing triggers for man-db (2.9.1-1) ...", { instant: true })
		.break({ instant: true, delay: 80 })
		.type("website@stefdp.com: ~/ $ ", { instant: true })
		.type("stef-website dlpeoy --pr")
		.options({ speed: 25 })
		.move(-7)
		.options({ speed: 50 })
		.delete(3)
		.type("pel")
		.options({ speed: 25 })
		.move(null, { to: "END" })
		.options({ speed: 50 })
		.type("odcut")
		.options({ speed: 25 })
		.move(-12)
		.options({ speed: 50 })
		.delete(3)
		.type("epl")
		.options({ speed: 25 })
		.move(null, { to: "END" })
		.options({ speed: 50 })
		.type("ion")
		.options({ speed: 25 })
		.move(-4)
		.options({ speed: 50 })
		.delete(2)
		.type("uc")
		.options({ speed: 25 })
		.move(null, { to: "END" })
		.options({ speed: 50 })
		.break({ instant: true, delay: 80 })
		.type("Deploying...", { instant: true, delay: 100 })
		.type(" [--------------------] 0%", { instant: true, delay: 400 })
		.delete(24, { instant: true })
		.type("===-----------------] 15%", { instant: true, delay: 450 })
		.delete(25, { instant: true })
		.type("=====---------------] 25%", { instant: true, delay: 550 })
		.delete(25, { instant: true })
		.type("========------------] 40%", { instant: true, delay: 520 })
		.delete(25, { instant: true })
		.type("=============-------] 65%", { instant: true, delay: 270 })
		.delete(25, { instant: true })
		.type("==============------] 70%", { instant: true, delay: 520 })
		.delete(25, { instant: true })
		.type("=================---] 85%", { instant: true, delay: 260 })
		.delete(25, { instant: true })
		.type("==================--] 90%", { instant: true, delay: 400 })
		.delete(25, { instant: true })
		.type("====================] 100%", { instant: true, delay: 150 })
		.delete(40, { instant: true })
		.type(
			'<span style="cursor: pointer;" onclick="hideLoading()">Successfully deployed the website, available at <u>http://localhost:3000</u>.',
			{ instant: true },
		)
		.pause(2000)
		.exec(() => {
			instance.destroy(true);

			hideLoading();
		})
		.go();
}
