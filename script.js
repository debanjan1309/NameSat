const imageDB = {
    A: ["https://science.nasa.gov/specials/your-name-in-landsat/images/a_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/a_1.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/a_2.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/a_3.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/a_4.jpg"],
    B: ["https://science.nasa.gov/specials/your-name-in-landsat/images/b_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/b_1.jpg"],
    C: ["https://science.nasa.gov/specials/your-name-in-landsat/images/c_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/c_1.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/c_2.jpg"],
    D: ["https://science.nasa.gov/specials/your-name-in-landsat/images/d_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/d_1.jpg"],
    E: ["https://science.nasa.gov/specials/your-name-in-landsat/images/e_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/e_1.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/e_2.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/e_3.jpg"],
    F: ["https://science.nasa.gov/specials/your-name-in-landsat/images/f_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/f_1.jpg"],
    G: ["https://science.nasa.gov/specials/your-name-in-landsat/images/g_0.jpg"],
    H: ["https://science.nasa.gov/specials/your-name-in-landsat/images/h_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/h_1.jpg"],
    I: ["https://science.nasa.gov/specials/your-name-in-landsat/images/i_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/i_1.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/i_2.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/i_3.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/i_4.jpg"],
    J: ["https://science.nasa.gov/specials/your-name-in-landsat/images/j_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/j_1.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/j_2.jpg"],
    K: ["https://science.nasa.gov/specials/your-name-in-landsat/images/k_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/k_1.jpg"],
    L: ["https://science.nasa.gov/specials/your-name-in-landsat/images/l_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/l_1.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/l_2.jpg"],
    M: ["https://science.nasa.gov/specials/your-name-in-landsat/images/m_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/m_1.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/m_2.jpg"],
    N: ["https://science.nasa.gov/specials/your-name-in-landsat/images/n_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/n_1.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/n_2.jpg"],
    O: ["https://science.nasa.gov/specials/your-name-in-landsat/images/o_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/o_1.jpg"],
    P: ["https://science.nasa.gov/specials/your-name-in-landsat/images/p_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/p_1.jpg"],
    Q: ["https://science.nasa.gov/specials/your-name-in-landsat/images/q_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/q_1.jpg"],
    R: ["https://science.nasa.gov/specials/your-name-in-landsat/images/r_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/r_1.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/r_2.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/r_3.jpg"],
    S: ["https://science.nasa.gov/specials/your-name-in-landsat/images/s_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/s_1.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/s_2.jpg"],
    T: ["https://science.nasa.gov/specials/your-name-in-landsat/images/t_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/t_1.jpg"],
    U: ["https://science.nasa.gov/specials/your-name-in-landsat/images/u_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/u_1.jpg"],
    V: ["https://science.nasa.gov/specials/your-name-in-landsat/images/v_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/v_1.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/v_2.jpg"],
    W: ["https://science.nasa.gov/specials/your-name-in-landsat/images/w_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/w_1.jpg"],
    X: ["https://science.nasa.gov/specials/your-name-in-landsat/images/x_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/x_1.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/x_2.jpg"],
    Y: ["https://science.nasa.gov/specials/your-name-in-landsat/images/y_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/y_1.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/y_2.jpg"],
    Z: ["https://science.nasa.gov/specials/your-name-in-landsat/images/z_0.jpg", "https://science.nasa.gov/specials/your-name-in-landsat/images/z_1.jpg"]
};

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const letterGap = 25; // NASA-style spacing
const starCanvas = document.getElementById("stars");
const sctx = starCanvas.getContext("2d");

let stars = [];
const STAR_COUNT = 180; // balance between beauty + performance

function resizeStars() {
    starCanvas.width = window.innerWidth;
    starCanvas.height = window.innerHeight;

    if (stars.length > 0) createStars();
}


window.addEventListener("resize", resizeStars);
resizeStars();

// 🎯 Random image selector
function getRandomImage(letter) {
    const arr = imageDB[letter];
    if (!arr) return null;
    return arr[Math.floor(Math.random() * arr.length)];
}

const baseWidth = 282;
const baseHeight = 676;

function generateImage() {
    const name = document.getElementById("nameInput").value.toUpperCase();
    const letters = name.replace(/\s/g, "").split("").filter(l => imageDB[l]);

    const loader = document.getElementById("loader");
    const canvasEl = document.getElementById("canvas");

    if (letters.length === 0) {
        alert("Enter valid letters only!");
        return;
    }

    loader.classList.remove("hidden");
    canvasEl.classList.remove("show");

    canvas.width = letters.length * baseWidth + (letters.length - 1) * letterGap;
    canvas.height = baseHeight;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    let loaded = 0;

    letters.forEach((letter, index) => {
        const img = new Image();

        // ✅ your requested logic
        img.crossOrigin = "anonymous";

        img.src = getRandomImage(letter);

        img.onload = () => {
            // 🔥 center crop (better visuals than stretch)
            const cropWidth = img.width * 0.5;
            const cropX = (img.width - cropWidth) / 2;

            ctx.drawImage(
                img,
                cropX, 0,
                cropWidth, img.height,
                index * (baseWidth + letterGap), 0,
                baseWidth, baseHeight
            );

            loaded++;

            if (loaded === letters.length) {
                loader.classList.add("hidden");

                fitCanvasToContainer(letters.length);

                setTimeout(() => {
                    canvasEl.classList.add("show");
                }, 100);
            }
        };

        img.onerror = () => {
            console.log("Image failed due to CORS:", img.src);

            loaded++;

            // ⚠️ still finish rendering if some fail
            if (loaded === letters.length) {
                loader.classList.add("hidden");

                fitCanvasToContainer(letters.length);

                canvasEl.classList.add("show");
            }
        };
    });
}



// ⬇ Download image
function downloadImage() {
    if (!canvas || canvas.width === 0) {
        alert("Generate the image first!");
        return;
    }

    try {
        const link = document.createElement("a");
        link.download = "generated-name.png";
        link.href = canvas.toDataURL("image/png");

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (err) {
        alert("Download failed due to CORS. Use local images or backend.");
    }
}

function fitCanvasToContainer(letterCount) {
    const containerWidth = 982.08;
    const containerHeight = 231.2;

    const actualWidth = letterCount * baseWidth + (letterCount - 1) * letterGap;
    const actualHeight = baseHeight;

    const scaleX = containerWidth / actualWidth;
    const scaleY = containerHeight / actualHeight;

    // 🔥 maintain aspect ratio
    const scale = Math.min(scaleX, scaleY);

    canvas.style.width = (actualWidth * scale) + "px";
    canvas.style.height = (actualHeight * scale) + "px";
}

function createStars() {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
            x: Math.random() * starCanvas.width,
            y: Math.random() * starCanvas.height,
            radius: Math.random() * 1.8,
            speed: Math.random() * 0.6 + 0.2,
            alpha: Math.random() * 0.8 + 0.2
        });
    }
}

function animateStars() {
    sctx.clearRect(0, 0, starCanvas.width, starCanvas.height);

    for (let star of stars) {
        sctx.beginPath();
        sctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        sctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        sctx.fill();

        // subtle downward drift (space motion illusion)
        star.y += star.speed;

        // recycle stars
        if (star.y > starCanvas.height) {
            star.y = 0;
            star.x = Math.random() * starCanvas.width;
        }
    }

    requestAnimationFrame(animateStars);
}

function initStars() {
    resizeStars();

    requestAnimationFrame(() => {
        createStars();
        animateStars();
    });
}


initStars();

window.addEventListener("resize", () => {
    resizeStars();
    createStars(); // regenerate to avoid stretching artifacts
});
