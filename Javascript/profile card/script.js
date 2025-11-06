const $ = id => document.getElementById(id),
  nameI = $("nameInput"), roleI = $("roleInput"), bioI = $("bioInput"),
  imgI = $("imgInput"), avatar = $("avatar"),
  skillI = $("skillInput"), skills = $("skillsContainer"),
  card = $("profileCard"), details = $("detailsBlock");

const sync = () => {
  $("displayName").textContent = nameI.value.trim();
  $("displayRole").textContent = roleI.value.trim();
  $("displayBio").innerText = bioI.value;
};

[nameI, roleI, bioI].forEach(e => e.addEventListener("input", sync));

$("setImgBtn").onclick = () => {
  const url = imgI.value.trim();
  if (!url) return avatar.removeAttribute("src");
  const t = new Image();
  t.onload = () => (avatar.src = url, $("imgError").style.display = "none");
  t.onerror = () => ($("imgError").style.display = "block");
  t.src = url;
};

$("addSkillBtn").onclick = () => {
  const v = skillI.value.trim();
  if (!v) return;
  skills.insertAdjacentHTML("beforeend", <span class="skill">${v} <b>x</b></span>);
  skillI.value = "";
};

skills.onclick = e => e.target.tagName === "B" && e.target.parentElement.remove();
$("removeLastSkillBtn").onclick = () => skills.lastElementChild?.remove();

$("themeChoices").onclick = e => {
  if (!e.target.dataset.color) return;
  card.className = theme-${e.target.dataset.color};
  document.querySelectorAll(".theme-btn").forEach(b => b.classList.remove("active"));
  e.target.classList.add("active");
};

$("toggleDetailsBtn").onclick = () => details.classList.toggle("hidden");

$("saveBtn").onclick = () => {
  const data = {
    n: nameI.value, r: roleI.value, b: bioI.value,
    img: avatar.src, t: card.className,
    s: [...skills.children].map(x => x.firstChild.textContent)
  };
  localStorage.setItem("p", JSON.stringify(data));
};

$("loadBtn").onclick = () => {
  const d = JSON.parse(localStorage.getItem("p") || "{}");
  if (!d.n) return;
  Object.assign(nameI, { value: d.n }); Object.assign(roleI, { value: d.r });
  Object.assign(bioI, { value: d.b }); avatar.src = d.img; card.className = d.t;
  skills.innerHTML = d.s.map(x => <span class='skill'>${x} <b>x</b></span>).join("");
  sync();
};