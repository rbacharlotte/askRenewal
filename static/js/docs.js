const passwordLabels = {
  "windows-login": "Windows login password",
  "ms365-login": "Microsoft 365 password",
  "five9-login": "Five9 password",
  "enabled-password": "Enabled+ password",
  "ensemble-password": "Ensemble password",
  "culture-suite-password": "CultureSuite password",
  "rforce-password": "rForce / rSuite password"
};

const softwareLabels = {
  "ms-365-apps": "Microsoft 365 apps",
  enabled: "Enabled+",
  "rforce/rSuite": "rForce / rSuite",
  ensemble: "Ensemble",
  five9: "Five9",
  other: "Other software"
};

const faqCategories = [
  {
    title: "Password",
    items: Object.entries(passwordSupport).map(([key, support]) => ({
      ...support,
      title: passwordLabels[key] || key
    }))
  },
  {
    title: "Software",
    items: Object.entries(softwareSupport).map(([key, support]) => ({
      ...support,
      title: softwareLabels[key] || key
    }))
  },
  { title: "Hardware", items: [{ ...responses.hardware, title: "Computer, phone, or peripherals" }] },
  { title: "Email", items: [{ ...responses.email, title: "Email and Outlook" }] },
  { title: "Network", items: [{ ...responses.network, title: "Wi-Fi, internet, and VPN" }] },
  {
    title: "Other",
    items: [
      { ...responses.other, title: "General IT issue" },
      { ...softwareSupport.other, title: "Other software issue" }
    ]
  }
];

const categoriesElement = document.getElementById("faq-categories");
const searchElement = document.getElementById("faq-search");
const countElement = document.getElementById("faq-count");
const emptyElement = document.getElementById("faq-empty");

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function textFromMarkup(markup) {
  const parser = document.createElement("div");
  parser.innerHTML = markup || "";
  return parser.textContent || "";
}

function matchesSearch(category, item, query) {
  if (!query || category.title.toLowerCase().includes(query)) return true;

  const searchableText = [
    item.title,
    ...(item.troubleshooting || []),
    item.turnaround || "",
    textFromMarkup(item.text)
  ].join(" ").toLowerCase();

  return searchableText.includes(query);
}

function renderFaqItem(item) {
  const steps = item.troubleshooting || [];
  const stepList = steps.length
    ? `<ol class="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-gray-700">${steps.map((step) => `<li>${step}</li>`).join("")}</ol>`
    : "";
  const turnaround = item.turnaround
    ? `<p class="mt-4 text-sm text-gray-600"><span class="font-semibold text-gray-800">Expected turnaround:</span> ${escapeHtml(item.turnaround)}</p>`
    : "";

  return `<details class="faq-item rounded-md border border-gray-200 bg-white">
    <summary class="accordion-summary flex cursor-pointer items-center justify-between gap-4 px-4 py-3 font-semibold text-gray-800 hover:bg-gray-50">${escapeHtml(item.title)}</summary>
    <div class="border-t border-gray-100 px-4 pb-4 pt-1">
      <h4 class="mt-3 text-sm font-semibold text-gray-900">Troubleshooting steps</h4>
      ${stepList}
      ${turnaround}
      <div class="mt-4 rounded-md bg-gray-50 p-3 text-sm leading-6 text-gray-700">
        <h4 class="mb-1 font-semibold text-gray-900">Contact</h4>
        <div>${item.text || "Contact Internal IT for help."}</div>
      </div>
    </div>
  </details>`;
}

function renderFaqs() {
  const query = searchElement.value.trim().toLowerCase();
  let visibleCount = 0;

  categoriesElement.innerHTML = faqCategories.map((category, index) => {
    const categoryMatches = category.title.toLowerCase().includes(query);
    const visibleItems = category.items.filter((item) => matchesSearch(category, item, query));
    if (!visibleItems.length) return "";

    visibleCount += visibleItems.length;
    const open = query || index === 0 ? " open" : "";

    return `<details class="faq-category overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm"${open}>
      <summary class="accordion-summary flex cursor-pointer items-center justify-between gap-4 px-4 py-4 font-semibold text-gray-900 hover:bg-gray-50">
        <span>${escapeHtml(category.title)} <span class="ml-1 text-sm font-normal text-gray-500">(${visibleItems.length})</span></span>
      </summary>
      <div class="space-y-2 border-t border-gray-100 bg-gray-50 p-3">
        ${visibleItems.map(renderFaqItem).join("")}
      </div>
    </details>`;
  }).join("");

  countElement.textContent = `${visibleCount} ${visibleCount === 1 ? "FAQ" : "FAQs"}`;
  emptyElement.classList.toggle("hidden", visibleCount !== 0);

  categoriesElement.querySelectorAll('a[target="_blank"]').forEach((link) => {
    link.rel = "noopener noreferrer";
  });
}

searchElement.addEventListener("input", renderFaqs);
renderFaqs();