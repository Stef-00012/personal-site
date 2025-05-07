// oneko.js: https://github.com/adryd325/oneko.js
// code by: https://github.com/kyrie25
// https://github.com/kyrie25/portfolio/blob/main/public/oneko.js

(async function oneko() {
	const nekoEl = document.createElement("div");
	let nekoPosX = 32;
	let nekoPosY = 32;
	let mousePosX = 0;
	let mousePosY = 0;
	let frameCount = 0;
	let idleTime = 0;
	let idleAnimation = null;
	let idleAnimationFrame = 0;
	let forceSleep = false;
	let grabbing = false;
	let grabStop = true;
	let nudge = false;
	let lastTapTimestamp = 0;
    let variant = "maia";

	const nekoSpeed = 10;
    const variants = [
        "classic",
        "dog",
        "maia",
        "tora",
        "vaporwave"
    ];
    
	const spriteSets = {
		idle: [[-3, -3]],
		alert: [[-7, -3]],
		scratchSelf: [
			[-5, 0],
			[-6, 0],
			[-7, 0],
		],
		scratchWallN: [
			[0, 0],
			[0, -1],
		],
		scratchWallS: [
			[-7, -1],
			[-6, -2],
		],
		scratchWallE: [
			[-2, -2],
			[-2, -3],
		],
		scratchWallW: [
			[-4, 0],
			[-4, -1],
		],
		tired: [[-3, -2]],
		sleeping: [
			[-2, 0],
			[-2, -1],
		],
		N: [
			[-1, -2],
			[-1, -3],
		],
		NE: [
			[0, -2],
			[0, -3],
		],
		E: [
			[-3, 0],
			[-3, -1],
		],
		SE: [
			[-5, -1],
			[-5, -2],
		],
		S: [
			[-6, -3],
			[-7, -2],
		],
		SW: [
			[-5, -3],
			[-6, -1],
		],
		W: [
			[-4, -2],
			[-4, -3],
		],
		NW: [
			[-1, 0],
			[-1, -1],
		],
	};

	function sleep() {
		forceSleep = !forceSleep;
		nudge = false;
		if (!forceSleep) {
			resetIdleAnimation();
			return;
		}

		const widget = document.querySelector(".time-widget");

		if (widget) {
			mousePosX = widget.getBoundingClientRect().right - 32;
			mousePosY = widget.getBoundingClientRect().top - 12;
			return;
		}
	}

	function create() {
        variant = new URLSearchParams(window.location.search).get("neko") || "maia";

		nekoEl.id = "oneko";
		nekoEl.style.width = "32px";
		nekoEl.style.height = "32px";
		nekoEl.style.position = "fixed";
		// nekoEl.style.pointerEvents = "none";
		nekoEl.style.cursor = "grab";
		nekoEl.style.backgroundImage = `url('/images/oneko/${variant}.gif')`;
		nekoEl.style.imageRendering = "pixelated";
		nekoEl.style.left = `${nekoPosX - 16}px`;
		nekoEl.style.top = `${nekoPosY - 16}px`;
		nekoEl.style.zIndex = "99";

		document.body.appendChild(nekoEl);

        window.addEventListener("onekoVariantChanged", (event) => {
            const newVariant = event.detail.variant;

            setVariant(newVariant);
        })

		window.addEventListener("mousemove", handleMove);
		window.addEventListener("touchmove", handleMove);

		window.addEventListener("resize", () => {
			if (forceSleep) {
				forceSleep = false;
				sleep();
			}
		});

		// Handle dragging of the cat
		nekoEl.addEventListener("mousedown", (e) => {
			e.preventDefault();
			if (e.button !== 0) return;
			handleOnekoClick(e);
		});

		nekoEl.addEventListener("touchstart", (e) => {
			e.preventDefault();

			const now = new Date().getTime();
			const timesince = now - lastTapTimestamp;
			if (timesince < 600) {
				sleep();
			}
			lastTapTimestamp = new Date().getTime();

			handleOnekoClick(e.touches[0]);
		});

		nekoEl.addEventListener("dblclick", sleep);

		nekoEl.addEventListener("contextmenu", (e) => {
			e.preventDefault();
		});

		window.onekoInterval = setInterval(frame, 100);
	}

	function getSprite(name, frame) {
		return spriteSets[name][frame % spriteSets[name].length];
	}

	function setSprite(name, frame) {
		const sprite = getSprite(name, frame);
		nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
	}

	function resetIdleAnimation() {
		idleAnimation = null;
		idleAnimationFrame = 0;
	}

	function idle() {
		idleTime += 1;

		// every ~ 20 seconds
		if (
			idleTime > 10 &&
			Math.floor(Math.random() * 200) === 0 &&
			idleAnimation == null
		) {
			const avalibleIdleAnimations = ["sleeping", "scratchSelf"];

			if (nekoPosX < 32) {
				avalibleIdleAnimations.push("scratchWallW");
			}

			if (nekoPosY < 32) {
				avalibleIdleAnimations.push("scratchWallN");
			}

			if (nekoPosX > window.innerWidth - 32) {
				avalibleIdleAnimations.push("scratchWallE");
			}

			if (nekoPosY > window.innerHeight - 32) {
				avalibleIdleAnimations.push("scratchWallS");
			}

			idleAnimation =
				avalibleIdleAnimations[
					Math.floor(Math.random() * avalibleIdleAnimations.length)
				];
		}

		if (forceSleep) {
			avalibleIdleAnimations = ["sleeping"];
			idleAnimation = "sleeping";
		}

		switch (idleAnimation) {
			case "sleeping":
				if (idleAnimationFrame < 8 && nudge && forceSleep) {
					setSprite("idle", 0);
					break;
				}

				if (nudge) {
					nudge = false;
					resetIdleAnimation();
				}

				if (idleAnimationFrame < 8) {
					setSprite("tired", 0);
					break;
				}

				setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
				if (idleAnimationFrame > 192 && !forceSleep) {
					resetIdleAnimation();
				}
				break;

			case "scratchWallN":
			case "scratchWallS":
			case "scratchWallE":
			case "scratchWallW":
			case "scratchSelf":
				setSprite(idleAnimation, idleAnimationFrame);
				if (idleAnimationFrame > 9) {
					resetIdleAnimation();
				}
				break;

			default:
				setSprite("idle", 0);
				return;
		}
		idleAnimationFrame += 1;
	}

	function frame() {
		frameCount += 1;

		if (grabbing) {
			grabStop && setSprite("alert", 0);
			
            return;
		}

		const diffX = nekoPosX - mousePosX;
		const diffY = nekoPosY - mousePosY;
		const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

		// Cat has to sleep on top of the progress bar
		if (
			forceSleep &&
			Math.abs(diffY) < nekoSpeed &&
			Math.abs(diffX) < nekoSpeed
		) {
			// Make the cat sleep exactly on the top of the progress bar
			nekoPosX = mousePosX;
			nekoPosY = mousePosY;
			nekoEl.style.left = `${nekoPosX - 16}px`;
			nekoEl.style.top = `${nekoPosY - 16}px`;

			idle();
			return;
		}

		if ((distance < nekoSpeed || distance < 48) && !forceSleep) {
			idle();
			return;
		}

		idleAnimation = null;
		idleAnimationFrame = 0;

		if (idleTime > 1) {
			setSprite("alert", 0);
			// count down after being alerted before moving
			idleTime = Math.min(idleTime, 7);
			idleTime -= 1;
			return;
		}

		direction = diffY / distance > 0.5 ? "N" : "";
		direction += diffY / distance < -0.5 ? "S" : "";
		direction += diffX / distance > 0.5 ? "W" : "";
		direction += diffX / distance < -0.5 ? "E" : "";
		
        setSprite(direction, frameCount);

		nekoPosX -= (diffX / distance) * nekoSpeed;
		nekoPosY -= (diffY / distance) * nekoSpeed;

		nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
		nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);

		nekoEl.style.left = `${nekoPosX - 16}px`;
		nekoEl.style.top = `${nekoPosY - 16}px`;
	}

	function handleMove(e) {
		if (forceSleep) return;

		mousePosX = e.clientX ?? e.touches[0].clientX;
		mousePosY = e.clientY ?? e.touches[0].clientY;
	}

	function handleOnekoClick(e) {
		grabbing = true;
		nekoEl.style.cursor = "grabbing";

		let startX = e.clientX ?? e.touches[0].clientX;
		let startY = e.clientY ?? e.touches[0].clientY;
		let startNekoX = nekoPosX;
		let startNekoY = nekoPosY;
		let grabInterval;

		const mousemove = (e) => {
			const clientX = e.clientX ?? e.touches[0].clientX;
			const clientY = e.clientY ?? e.touches[0].clientY;
			// console.log(clientX, clientY);

			const deltaX = clientX - startX;
			const deltaY = clientY - startY;
			const absDeltaX = Math.abs(deltaX);
			const absDeltaY = Math.abs(deltaY);

			// Scratch in the opposite direction of the drag
			if (absDeltaX > absDeltaY && absDeltaX > 10) {
				setSprite(deltaX > 0 ? "scratchWallW" : "scratchWallE", frameCount);
			} else if (absDeltaY > absDeltaX && absDeltaY > 10) {
				setSprite(deltaY > 0 ? "scratchWallN" : "scratchWallS", frameCount);
			}

			if (
				grabStop ||
				absDeltaX > 10 ||
				absDeltaY > 10 ||
				Math.sqrt(deltaX ** 2 + deltaY ** 2) > 10
			) {
				grabStop = false;
				clearTimeout(grabInterval);
				grabInterval = setTimeout(() => {
					grabStop = true;
					nudge = false;
					startX = clientX;
					startY = clientY;
					startNekoX = nekoPosX;
					startNekoY = nekoPosY;
				}, 150);
			}

			nekoPosX = startNekoX + clientX - startX;
			nekoPosY = startNekoY + clientY - startY;
			nekoEl.style.left = `${nekoPosX - 16}px`;
			nekoEl.style.top = `${nekoPosY - 16}px`;
		};

		const mouseup = () => {
			grabbing = false;
			nudge = true;
			nekoEl.style.cursor = "grab";

			resetIdleAnimation();
			window.removeEventListener("mousemove", mousemove);
			window.removeEventListener("mouseup", mouseup);
			window.removeEventListener("touchmove", mousemove);
			window.removeEventListener("touchend", mouseup);
		};

		window.addEventListener("mousemove", mousemove);
		window.addEventListener("mouseup", mouseup);
		window.addEventListener("touchmove", mousemove);
		window.addEventListener("touchend", mouseup);
	}

    function setVariant(newVariant) {
		let variantToSet = newVariant
		
		if (!variants.includes(variantToSet)) {
			variantToSet = "maia";
		}

		console.log(`Sucessfully loaded Oneko Variant: "${variantToSet}"`);

		nekoEl.style.backgroundImage = `url('/images/oneko/${variantToSet}.gif')`;
	}

	create();
})();
