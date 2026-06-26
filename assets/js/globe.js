/* ===========================================================
   ForEd Academy — Interactive globe (globe.gl / three.js)
   Arcs spread from Baku to study-abroad destinations.
   =========================================================== */
function initGlobe() {
  const el = document.getElementById("globe");
  if (!el || typeof Globe === "undefined") {
    if (el) el.classList.add("globe-failed");
    return;
  }

  const BAKU = { lat: 40.4093, lng: 49.8671, name: "Baku" };
  const DESTINATIONS = [
    { lat: 51.5074, lng: -0.1278,  name: "London" },
    { lat: 38.9072, lng: -77.0369, name: "Washington" },
    { lat: 52.52,   lng: 13.405,   name: "Berlin" },
    { lat: 50.8503, lng: 4.3517,   name: "Brussels" },
    { lat: 39.9334, lng: 32.8597,  name: "Ankara" },
    { lat: 47.4979, lng: 19.0402,  name: "Budapest" },
    { lat: 45.4215, lng: -75.6972, name: "Ottawa" },
    { lat: -35.28,  lng: 149.13,   name: "Canberra" },
    { lat: 59.3293, lng: 18.0686,  name: "Stockholm" },
    { lat: 39.9042, lng: 116.4074, name: "Beijing" },
    { lat: 41.9028, lng: 12.4964,  name: "Rome" },
    { lat: 37.5665, lng: 126.978,  name: "Seoul" }
  ];

  const arcs = DESTINATIONS.map(d => ({
    startLat: BAKU.lat, startLng: BAKU.lng,
    endLat: d.lat, endLng: d.lng
  }));

  const points = [
    { ...BAKU, size: 1.1, color: "#F2A62E", home: true },
    ...DESTINATIONS.map(d => ({ ...d, size: 0.5, color: "#3FC2D2", home: false }))
  ];

  const rings = [
    { lat: BAKU.lat, lng: BAKU.lng, color: "#F2A62E", maxR: 6, speed: 2.2, period: 1000 },
    ...DESTINATIONS.map(d => ({ lat: d.lat, lng: d.lng, color: "#3FC2D2", maxR: 3, speed: 1.6, period: 2200 }))
  ];

  const sizeOf = () => {
    const r = el.getBoundingClientRect();
    return { w: r.width || el.offsetWidth, h: r.height || 520 };
  };

  let world;
  try {
    const { w, h } = sizeOf();
    world = Globe()(el)
      .width(w).height(h)
      .backgroundColor("rgba(0,0,0,0)")
      .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
      .bumpImageUrl("https://unpkg.com/three-globe/example/img/earth-topology.png")
      .showAtmosphere(true)
      .atmosphereColor("#1C97A8")
      .atmosphereAltitude(0.2)

      .arcsData(arcs)
      // Directional gradient: amber at Baku (start) -> teal at destination (end)
      .arcColor(() => ["rgba(242,166,46,0.9)", "rgba(63,194,210,0.85)"])
      .arcStroke(0.5)
      .arcAltitudeAutoScale(0.5)
      .arcDashLength(0.4)
      .arcDashGap(0.6)
      .arcDashInitialGap(0)
      .arcDashAnimateTime(2400)

      .pointsData(points)
      .pointLat("lat").pointLng("lng")
      .pointColor("color")
      .pointAltitude(0.012)
      .pointRadius(d => d.size * 0.45)

      .ringsData(rings)
      .ringMaxRadius("maxR")
      .ringPropagationSpeed("speed")
      .ringRepeatPeriod("period");

    // Rings fade out as they propagate (rgba alpha -> 0)
    const hexToRgb = (hex) => {
      const v = hex.replace("#", "");
      return [parseInt(v.slice(0,2),16), parseInt(v.slice(2,4),16), parseInt(v.slice(4,6),16)];
    };
    world.ringColor(d => {
      const [r,g,b] = hexToRgb(d.color);
      return tt => `rgba(${r},${g},${b},${1 - tt})`;
    });

    // Initial view centred on Baku so it reads clearly as the origin
    world.pointOfView({ lat: BAKU.lat, lng: BAKU.lng, altitude: 2.1 }, 0);

    // Auto-rotate
    const controls = world.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.55;
    controls.enableZoom = false;
    controls.enablePan = false;

    // Slightly bluish point material glow via renderer tweak
    world.pointResolution(8);

    // Resize handling
    const onResize = () => {
      const { w, h } = sizeOf();
      world.width(w).height(h);
    };
    window.addEventListener("resize", onResize, { passive: true });

    // Pause rotation on hover for a more deliberate feel
    el.addEventListener("mouseenter", () => controls.autoRotate = false);
    el.addEventListener("mouseleave", () => controls.autoRotate = true);

    // expose for debugging / screenshot pausing
    window.__foredGlobe = world;

  } catch (err) {
    console.warn("Globe failed to initialise:", err);
    el.classList.add("globe-failed");
  }
}
