const items = [
  {
    id: "spotify",
    label: "Spotify.app",
    menuTitle: "Spotify Portal",
    icon: "assets/icons/app.svg",
    type: "link",
    x: "right",
    y: 72,
    eyebrow: "SIGNAL DETECTED",
    title: "Stream the transmission.",
    body: "The clean exit from the desktop. Open the signal in the outside world.",
    links: [
      { label: "LA BOIX SPOTIFY", href: "https://open.spotify.com/artist/2ecmFLQHjkBncMCGZ5yQKx" },
      { label: "SALVA SPOTIFY", href: "https://open.spotify.com/artist/0JQaXh3HoqpI68C2pYUbNW" },
      { label: "SPOTIFY ARTIST 03", href: "https://open.spotify.com/artist/49nsDhtufKEYcLkIYv5cln" },
    ],
  },
  {
    id: "bandcamp",
    label: "Bandcamp.folder",
    menuTitle: "Bandcamp Folder",
    icon: "assets/icons/folder.svg",
    type: "link",
    x: "right",
    y: 112,
    eyebrow: "OBJECT AVAILABLE",
    title: "Buy the object.",
    body: "A folder for the artifact, the download, the evidence, the trace.",
    links: [{ label: "OPEN BANDCAMP", href: "https://theemikeb.bandcamp.com/" }],
  },
  {
    id: "videos",
    label: "Videos.mov",
    menuTitle: "Video Evidence",
    icon: "assets/icons/video.svg",
    type: "link",
    x: "right",
    y: 152,
    eyebrow: "VIDEO_EVIDENCE_001",
    title: "Watch the evidence.",
    body: "Moving image fragments will live here.",
    links: [{ label: "OPEN YOUTUBE", href: "https://www.youtube.com/@LaBoixOfficial" }],
  },
  {
    id: "socials",
    label: "Socials.alias",
    menuTitle: "Social Trace",
    icon: "assets/icons/app.svg",
    type: "link",
    x: "right",
    y: 192,
    eyebrow: "FOLLOW THE TRACE",
    title: "Follow the trace.",
    body: "The alias points outward.",
    links: [
      { label: "LA BOIX INSTAGRAM", href: "https://www.instagram.com/laboixlaboix/" },
      { label: "THEE MIKE B INSTAGRAM", href: "https://www.instagram.com/theemikebdj/?hl=en" },
      { label: "SALVA INSTAGRAM", href: "https://www.instagram.com/salvabeats/" },
      { label: "SOUNDCLOUD", href: "https://soundcloud.com/theemikebdj" },
      { label: "YOUTUBE", href: "https://www.youtube.com/@LaBoixOfficial" },
    ],
  },
  {
    id: "about",
    label: "About.txt",
    menuTitle: "About File",
    icon: "assets/icons/file.svg",
    type: "text",
    x: "right",
    y: 232,
    eyebrow: "READ ME BEFORE LEAVING",
    title: "LA BOIX is not a homepage.",
    body: "It is a misplaced transmission, a damaged folder, a room inside the machine. Double click nothing. Follow the signal. Leave through the object.",
  },
  {
    id: "alla-grande",
    label: "Alla Grande EP",
    menuTitle: "Alla Grande EP",
    icon: "assets/icons/folder.svg",
    type: "artwork",
    x: "right",
    y: 72,
    eyebrow: "FOLDER OPENED",
    title: "Alla Grande EP",
    body: "A folder recovered from the bright part of the system.",
    image: "assets/images/alla-grande.webp",
    imageAlt: "Alla Grande EP artwork",
  },
  {
    id: "coconut",
    label: "Coconut",
    menuTitle: "Coconut",
    icon: "assets/icons/folder.svg",
    type: "text",
    x: "right",
    y: 112,
    eyebrow: "FOLDER OPENED",
    title: "Coconut",
    body: "A sealed folder. Contents pending.",
  },
  {
    id: "pasteque",
    label: "Pastequé",
    menuTitle: "Pastequé",
    icon: "assets/icons/folder.svg",
    type: "text",
    x: "right",
    y: 152,
    eyebrow: "FOLDER OPENED",
    title: "Pastequé",
    body: "A sealed folder. Contents pending.",
  },
  {
    id: "pill-popper-remix",
    label: "Pill Popper Remix",
    menuTitle: "Pill Popper Remix",
    icon: "assets/icons/folder.svg",
    type: "text",
    x: "right",
    y: 192,
    eyebrow: "FOLDER OPENED",
    title: "Pill Popper Remix",
    body: "A sealed folder. Contents pending.",
  },
  {
    id: "black-razz",
    label: "Black Razz",
    menuTitle: "Black Razz",
    icon: "assets/icons/folder.svg",
    type: "text",
    x: "right",
    y: 232,
    eyebrow: "FOLDER OPENED",
    title: "Black Razz",
    body: "A sealed folder. Contents pending.",
  },
  {
    id: "dumb-and-dumber",
    label: "Dumb & Dumber",
    menuTitle: "Dumb & Dumber",
    icon: "assets/icons/file.svg",
    type: "text",
    x: "right",
    y: 272,
    eyebrow: "FILE OPENED",
    title: "Dumb & Dumber",
    body: "A file waiting for audio, artwork, or a link.",
  },
  {
    id: "what-is-love",
    label: "What Is Love?",
    menuTitle: "What Is Love?",
    icon: "assets/icons/file.svg",
    type: "artwork",
    x: "right",
    y: 112,
    eyebrow: "FILE OPENED",
    title: "What Is Love?",
    body: "The file opens and refuses to explain itself.",
    image: "assets/images/whatislove.webp",
    imageAlt: "What Is Love artwork",
  },
  {
    id: "baby-wants-to-ride",
    label: "Baby Wants To Ride",
    menuTitle: "Baby Wants To Ride",
    icon: "assets/icons/file.svg",
    type: "artwork",
    x: "right",
    y: 152,
    eyebrow: "FILE OPENED",
    title: "Baby Wants To Ride",
    body: "A file with headlights on inside the machine.",
    image: "assets/images/baby-wants.webp",
    imageAlt: "Baby Wants To Ride artwork",
  },
  {
    id: "ladies-room",
    label: "Ladies Room",
    menuTitle: "Ladies Room",
    icon: "assets/icons/file.svg",
    type: "text",
    x: "right",
    y: 312,
    eyebrow: "FILE OPENED",
    title: "Ladies Room",
    body: "A file waiting for audio, artwork, or a link.",
  },
];

const iconGrid = document.querySelector("#iconGrid");
const windowLayer = document.querySelector("#windowLayer");
const windowMenu = document.querySelector("#windowMenu");
const desktop = document.querySelector("#desktop");

let highestZ = 20;
const openWindows = new Map();

function buildDesktop() {
  items.forEach((item) => {
    const icon = document.createElement("button");
    icon.className = "desktop-icon";
    icon.type = "button";
    icon.dataset.id = item.id;
    icon.innerHTML = `<img src="${item.icon}" alt="" /><span>${item.label}</span>`;
    icon.addEventListener("click", () => openWindow(item.id));
    iconGrid.appendChild(icon);

    const menuButton = document.createElement("button");
    menuButton.type = "button";
    menuButton.dataset.action = "open";
    menuButton.dataset.id = item.id;
    menuButton.textContent = item.menuTitle;
    windowMenu.appendChild(menuButton);
  });

  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action]");
    if (!target) return;

    const action = target.dataset.action;
    const id = target.dataset.id;

    if (action === "open" && id) openWindow(id);
    if (action === "close-all") closeAllWindows();
  });
}

function openWindow(id) {
  const item = items.find((entry) => entry.id === id);
  if (!item) return;

  if (openWindows.has(id)) {
    focusWindow(openWindows.get(id));
    return;
  }

  const win = document.createElement("article");
  win.className = `desktop-window ${item.type === "artwork" ? "artwork-window" : ""}`;
  win.dataset.windowId = id;
  win.style.zIndex = ++highestZ;

  const position = getWindowPosition(item);
  win.style.left = `${position.x}px`;
  win.style.top = `${position.y}px`;

  win.innerHTML = `
    <div class="window-titlebar">
      <button class="window-close" type="button" aria-label="Close ${item.menuTitle}">×</button>
      <span class="window-title">${item.menuTitle}</span>
    </div>
    <div class="window-content">
      ${renderWindowContent(item)}
    </div>
  `;

  const closeButton = win.querySelector(".window-close");
  closeButton.addEventListener("pointerdown", (event) => event.stopPropagation());
  closeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    closeWindow(id);
  });

  win.addEventListener("mousedown", () => focusWindow(win));
  makeDraggable(win, win.querySelector(".window-titlebar"));

  windowLayer.appendChild(win);
  clampWindow(win);
  openWindows.set(id, win);
  focusWindow(win);
}

function renderWindowContent(item) {
  const links = item.links
    ? item.links.map((link) => `<a class="window-link" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")
    : "";

  const image = item.image
    ? `<img class="artwork" src="${item.image}" alt="${item.imageAlt || item.title}" onerror="this.replaceWith(createMissingImageNotice('${item.image}'))" />`
    : "";

  return `
    <p class="small-label">${item.eyebrow}</p>
    <h2>${item.title}</h2>
    <p>${item.body}</p>
    ${links}
    ${image}
  `;
}

function createMissingImageNotice(path) {
  const div = document.createElement("div");
  div.className = "placeholder-art";
  div.innerHTML = `<div><strong>Missing image</strong><br />Put the file here:<br />${path}</div>`;
  return div;
}

window.createMissingImageNotice = createMissingImageNotice;

function getWindowPosition(item) {
  const isMobile = window.matchMedia("(max-width: 700px)").matches;
  if (isMobile) return { x: 0, y: 0 };

  const width = item.type === "artwork" ? 540 : 480;
  const rightX = Math.max(12, window.innerWidth - width - 48);
  const y = Math.min(item.y || 72, Math.max(42, window.innerHeight - 360));
  return { x: item.x === "right" ? rightX : 260, y };
}

function clampWindow(win) {
  if (window.matchMedia("(max-width: 700px)").matches) return;

  const margin = 10;
  const menuOffset = 34;
  const maxLeft = Math.max(margin, window.innerWidth - win.offsetWidth - margin);
  const maxTop = Math.max(menuOffset, window.innerHeight - win.offsetHeight - margin);

  const currentLeft = parseFloat(win.style.left) || margin;
  const currentTop = parseFloat(win.style.top) || menuOffset;

  win.style.left = `${Math.min(Math.max(margin, currentLeft), maxLeft)}px`;
  win.style.top = `${Math.min(Math.max(menuOffset, currentTop), maxTop)}px`;
}

window.addEventListener("resize", () => {
  openWindows.forEach((win) => clampWindow(win));
});

function focusWindow(win) {
  win.style.zIndex = ++highestZ;
}

function closeWindow(id) {
  const win = openWindows.get(id);
  if (!win) return;
  win.remove();
  openWindows.delete(id);
}

function closeAllWindows() {
  [...openWindows.keys()].forEach(closeWindow);
}

function makeDraggable(win, handle) {
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let startLeft = 0;
  let startTop = 0;

  handle.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".window-close")) return;
    if (window.matchMedia("(max-width: 700px)").matches) return;
    isDragging = true;
    focusWindow(win);
    startX = event.clientX;
    startY = event.clientY;
    startLeft = parseFloat(win.style.left) || 0;
    startTop = parseFloat(win.style.top) || 0;
    handle.setPointerCapture(event.pointerId);
  });

  handle.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    const maxLeft = window.innerWidth - win.offsetWidth - 10;
    const maxTop = window.innerHeight - win.offsetHeight - 10;
    const nextLeft = Math.min(Math.max(10, startLeft + dx), Math.max(10, maxLeft));
    const nextTop = Math.min(Math.max(34, startTop + dy), Math.max(34, maxTop));
    win.style.left = `${nextLeft}px`;
    win.style.top = `${nextTop}px`;
  });

  handle.addEventListener("pointerup", (event) => {
    isDragging = false;
    try { handle.releasePointerCapture(event.pointerId); } catch (error) {}
  });
}

buildDesktop();
