(function () {
    const logo = document.querySelector(".brand");
    if (!logo) return;

    const originalHref = logo.getAttribute("href") || "index.html";
    const dialog = document.createElement("dialog");
    dialog.className = "profile-dialog";
    dialog.id = "founder-profile";
    dialog.setAttribute("aria-labelledby", "founder-profile-title");

    const card = document.createElement("div");
    card.className = "profile-dialog-card";

    const header = document.createElement("header");
    header.className = "profile-dialog-header";

    const brand = document.createElement("div");
    brand.className = "profile-brand-lockup";
    const mark = document.createElement("span");
    mark.className = "profile-brand-mark";
    mark.setAttribute("aria-hidden", "true");
    mark.textContent = "Z";
    const brandCopy = document.createElement("span");
    brandCopy.className = "profile-brand-copy";
    const brandName = document.createElement("strong");
    brandName.textContent = "ZeroKB";
    const tagline = document.createElement("span");
    tagline.textContent = "Learn • Practice • Master";
    brandCopy.append(brandName, tagline);
    brand.append(mark, brandCopy);

    const iconButton = document.createElement("button");
    iconButton.className = "profile-icon-close";
    iconButton.type = "button";
    iconButton.setAttribute("aria-label", "Close founder profile");
    iconButton.autofocus = true;
    iconButton.textContent = "×";
    header.append(brand, iconButton);

    const eyebrow = document.createElement("p");
    eyebrow.className = "profile-eyebrow";
    eyebrow.textContent = "ABOUT ZEROKB";

    const title = document.createElement("h2");
    title.id = "founder-profile-title";
    title.textContent = "Founder Profile";

    const name = document.createElement("p");
    name.className = "profile-founder-name";
    name.textContent = "Suryansh Maddheshiya";

    const role = document.createElement("span");
    role.className = "profile-role";
    role.textContent = "Student";

    const founder = document.createElement("p");
    founder.className = "profile-founder-caption";
    founder.textContent = "Founder of ZeroKB";

    const footer = document.createElement("footer");
    footer.className = "profile-dialog-actions";
    const closeButton = document.createElement("button");
    closeButton.className = "profile-close-button";
    closeButton.type = "button";
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", function () { dialog.close(); });

    const returnLink = document.createElement("a");
    returnLink.className = "profile-return-link";
    returnLink.href = originalHref;
    returnLink.textContent = "Open original page";
    footer.append(closeButton, returnLink);

    card.append(header, eyebrow, title, name, role, founder, footer);
    dialog.append(card);
    document.body.append(dialog);

    logo.setAttribute("aria-haspopup", "dialog");
    logo.setAttribute("aria-controls", dialog.id);
    logo.addEventListener("click", function (event) {
        event.preventDefault();
        if (!dialog.open) dialog.showModal();
    });
    iconButton.addEventListener("click", function () { dialog.close(); });
    dialog.addEventListener("click", function (event) {
        if (event.target === dialog) dialog.close();
    });
})();
