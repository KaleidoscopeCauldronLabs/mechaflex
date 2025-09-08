import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

/* --------------------------------------------------------------------------
 * Globals
 * -------------------------------------------------------------------------- */
let scene, renderer, controls, model, ambientLight, directionalLight, directionalBackLight, pmrem, canvas;
let camera = new THREE.PerspectiveCamera();
const fileLocation = "./models/full.glb";

/* --------------------------------------------------------------------------
 * Scene / Camera / Renderer Setup
 * -------------------------------------------------------------------------- */
const backgroundInput = document.getElementById("backgroundColor");
const backgroundColor = new THREE.Color(backgroundInput.value);
backgroundInput.addEventListener("input", () => {scene.background = new THREE.Color(backgroundInput.value)});
function initScene() {
    scene = new THREE.Scene();
    scene.background = backgroundColor;

    renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true,});
    // Cap device pixel ratio for mobile performance
    const DPR_CAP = 1.3;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, DPR_CAP));

    //renderer.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", () => {
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        camera.aspect = canvas.clientWidth/canvas.clientHeight;
        camera.updateProjectionMatrix();
    })
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.5;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputEncoding = THREE.sRGBEncoding;
    canvas = renderer.domElement;
    canvas.classList.add("main-canvas");
    const container = document.getElementById("canvas-container");
    container.appendChild(canvas);
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    camera = new THREE.PerspectiveCamera(60,canvas.clientWidth / canvas.clientHeight, 1, 5000);
    camera.position.set(0, 10, 20);

    pmrem = new THREE.PMREMGenerator(renderer);
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
}

/* --------------------------------------------------------------------------
 * Lighting
 * -------------------------------------------------------------------------- */
function initLighting() {
    ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.target.position.set(0, 0, 0)
    directionalLight.position.set (50, 50, 0)
    scene.add(directionalLight)

    directionalBackLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalBackLight.target.position.set(0, 0, 0)
    directionalBackLight.position.set (-50, -50, 0)
    scene.add(directionalBackLight)

}

/* --------------------------------------------------------------------------
 * Model Loading
 * -------------------------------------------------------------------------- */
const sel = document.getElementById("versionSelect")
const loadingManager = new THREE.LoadingManager();
function loadModel(url) {
    // Use the shared manager so the overlay tracks this too
    const loader = new GLTFLoader(loadingManager);

    loader.load(
        url,
        (gltf) => {
            model = gltf.scene.children[0];
            // Fix orientation & center
            model.rotation.x -= Math.PI / 2;
            centerModel();
            applyVersionVisibility(sel.value);

            scene.add(model);

            // Mesh settings
            model.traverse((obj) => {
                if (!obj.isMesh) return;
                obj.castShadow = true;
                obj.receiveShadow = true;
                if (obj.material.map) obj.material.map.anisotropy = 16;

                const mats = Array.isArray(obj.material)
                    ? obj.material
                    : [obj.material];
                mats.forEach((m) => {
                    if (!m) return;
                    if ("roughness" in m) m.roughness = 0.9;
                    if ("metalness" in m) m.metalness = 0;
                });
            });

            // Frame and apply colors
            frameModel();
            applyCurrentColors();

            // Warm up shaders so first frame looks crisp before we hide loader
            renderer.compile(scene, camera);
            window.model = model;
            dumpMeshNames();
        },
        // Fine-grained % for GLB fetch (if server provides totals)
        undefined,
        (err) => {
        }
    );
}
function centerModel() {
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);

    box.setFromObject(model);
    const yMin = box.min.y;

    model.position.y -= (yMin) - mm(10);
}

/* --------------------------------------------------------------------------
 * Framing
 * -------------------------------------------------------------------------- */
function frameModel() {
    if (!model) return;
    const box = new THREE.Box3().setFromObject(model);
    const sphere = box.getBoundingSphere(new THREE.Sphere());
    const center = sphere.center;
    const radius = Math.max(sphere.radius, 0.001);

    controls.target.copy(center);
    camera.position.set(center.x+100, center.y, center.z + radius * 2.2);
    camera.near = Math.max(0.01, radius / 100);
    camera.far = Math.max(1000, radius * 10);
    camera.updateProjectionMatrix();
    controls.update();
}

/* --------------------------------------------------------------------------
 * Component Classification
 * -------------------------------------------------------------------------- */
function nodePath(obj) {
    const parts = [];
    for (let n = obj; n; n = n.parent) parts.push(n.name || "(unnamed)");
    return parts.reverse().join(" / ");
}
function getComponentName(obj) {
    return (nodePath(obj) || "").trim();
}
function classifyByComponent(objOrName) {
    const compName =
        typeof objOrName === "string" ? objOrName : getComponentName(objOrName);
    if (compName.includes("frame")) {
        if (compName.includes("frankie")) {
            return "frame-frankie"
        }
        if (compName.includes("miles")) {
            return "frame-miles"
        }
        return "frame"
    }
    if (compName.includes("armor")) {
        if (compName.includes("frankie")) {
            return "armor-frankie"
        }
        if (compName.includes("miles")) {
            return "armor-miles"
        }
        return "armor"
    }
    if (compName.includes("brown")) {
        return "brown"
    }
    if (compName.includes("gray")) {
        return "gray"
    }
    return "other"
}




/* --------------------------------------------------------------------------
 * Color and Type Application
 * -------------------------------------------------------------------------- */
const armorInput = document.getElementById("armorColor");
const frameInput = document.getElementById("frameColor");

[armorInput, frameInput].forEach((input) => {
    input.addEventListener("input", applyCurrentColors);
});

function applyCurrentColors() {
    if (!model) return;

    const armorColor = new THREE.Color(armorInput.value);
    const frameColor = new THREE.Color(frameInput.value);

    model.traverse((obj) => {
        if (!obj.isMesh) return;
        const cls = classifyByComponent(obj);
        let chosen = null;

        switch (cls) {
            case "armor":
            case "armor-frankie":
            case "armor-miles":
                chosen = armorColor;
                break;

            case "frame":
            case "frame-frankie":
            case "frame-miles":
                chosen = frameColor;
                break;

            case "brown":
                chosen = new THREE.Color('#775c50');
                break;

            case "gray":
                chosen = new THREE.Color('#919294');
                break;

            default:
                return;
        }

        const materials = Array.isArray(obj.material)
            ? obj.material
            : [obj.material];
        materials.forEach((m) => {
            if (m && m.color) {
                m.color.copy(chosen);
                switch (cls) {
                case "armor":
                    m.metalness = 0;
                    m.roughness = .5;
                    break;
                case "frame":
                    m.metalness = 0;  
                    m.roughness = 0.9;
                    break;
                case "brown":
                    m.metalness = 0;  
                    m.roughness = 1;
                    break;  
                case "gray":
                    m.metalness = 0;
                    m.roughness = 0.9;
                    break;  
                }
            }
        });
    });
}

sel.addEventListener("change", () => {
    applyVersionVisibility(sel.value);
});
// Extract suffix version from the class returned by classifyByComponent
// Returns: 'sf' | 'hf' | 'uhf' | null
function getClassVersion(cls) {
    if (!cls) return null;
    if (cls.endsWith("-frankie")) return "frankie";
    if (cls.endsWith("-miles")) return "miles";
    return null;
}
// Show only meshes that match ACTIVE_VERSION; non-versioned always visible
function applyVersionVisibility(version) {
    if (!model) return;
    model.traverse((o) => {
        if (!o.isMesh) return;
        const cls = classifyByComponent(o);
        const ver = getClassVersion(cls);
        // Visible if: no version tag OR matches current selection
        o.visible = ver === null || ver === version;
    });
}


/* --------------------------------------------------------------------------
 * Animation Loop
 * -------------------------------------------------------------------------- */
let running = true;
document.addEventListener(
    "visibilitychange",
    () => {
        running = document.visibilityState === "visible";
    },
    { passive: true }
);

function animate() {
    requestAnimationFrame(animate);
    if (!running) return;
    // spotLight.position.set(
    //     camera.position.x + 1,
    //     camera.position.y + 1,
    //     camera.position.z + 1
    // );
    controls.update();
    renderer.render(scene, camera);
}

/* --------------------------------------------------------------------------
 * Init
 * -------------------------------------------------------------------------- */
initScene();
initLighting();
//addVersionDropdown();
loadModel(fileLocation);

/* --------------------------------------------------------------------------
 * Helpers
 * -------------------------------------------------------------------------- */
// Mobile-only tap-to-slide bottom sheet
(function setupMobileSheetToggle() {
    const panel =
        document.getElementById("controls-panel") ||
        document.querySelector(".controls-panel");
    const grabber = panel?.querySelector(".panel-grabber");
    if (!panel || !grabber) return;

    const mq = window.matchMedia("(max-width: 640px)");

    function isClosed() {
        return panel.classList.contains("closed");
    }
    function setOpen(open) {
        panel.classList.toggle("closed", !open);
        grabber.setAttribute("aria-expanded", String(open));
        grabber.textContent = open ? "Hide Controls" : "Show Controls";
    }
    function syncForViewport() {
        if (!mq.matches) {
            setOpen(true);
        } else {
            if (!grabber.dataset._init) setOpen(false);
        }
        grabber.dataset._init = "1";
    }

    grabber.addEventListener(
        "click",
        () => {
            if (!mq.matches) return; // ignore on desktop
            setOpen(isClosed());
        },
        { passive: true }
    );

    mq.addEventListener
        ? mq.addEventListener("change", syncForViewport)
        : mq.addListener(syncForViewport); // Safari fallback
    window.addEventListener("resize", syncForViewport, { passive: true });

    syncForViewport();
})();


// "Do It Right" button (resets color back to default Gray and Green)
document.getElementById("doitright")?.addEventListener("click", () => {
    try {
        applyCurrentColors(true);
    } catch (err) { }
});

const mm = (n) => n / 1000;
// world-down expressed in the mesh's *parent* space
function localDownDir(obj) {
    if (!obj.parent) return new THREE.Vector3(0, 1, 0);
    const parentRot = new THREE.Matrix4().extractRotation(obj.parent.matrixWorld);
    const invParentRot = new THREE.Matrix4().copy(parentRot).invert();
    return new THREE.Vector3(0, 1, 0).applyMatrix4(invParentRot).normalize();
}



animate();