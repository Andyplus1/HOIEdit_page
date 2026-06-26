const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const id = anchor.getAttribute("href");
    const target = id && document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll(".video-card[data-youtube-id]").forEach((card) => {
  if (!["http:", "https:"].includes(window.location.protocol)) return;

  const videoId = card.getAttribute("data-youtube-id");
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
  iframe.title = "HOI-Edit project video";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allowFullscreen = true;

  const frame = document.createElement("div");
  frame.className = "video-frame";
  frame.appendChild(iframe);
  card.replaceWith(frame);
});
