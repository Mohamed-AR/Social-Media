// Sidebar
const menuItems = document.querySelectorAll(".menu-item");

// Messages
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

//  Theme

const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
var root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");
// ================= Sidebar =====================
// Remove Active Class From All Menu Items
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// ================= Messages ======================
// Searches Chats
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};

// Search Chat
messageSearch.addEventListener("keyup", searchMessage);

// hightlight messages card when messages menu item is clicked

messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// Theme Display Customization

// Opens Modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};

// Closes Modal
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

// close Modal
themeModal.addEventListener("click", closeThemeModal);

theme.addEventListener("click", openThemeModal);

// Remove Active Class From SPans Or font size selectors

//
const fontSizesSlider = document.getElementById("font-size-slider");
const allowedFontSizes = {
  1: { fontSize: 10, topLeft: 5.4, topRight: 5.4 },
  2: { fontSize: 13, topLeft: 5.4, topRight: -7 },
  3: { fontSize: 16, topLeft: -2, topRight: -17 },
  4: { fontSize: 19, topLeft: -5, topRight: -25 },
  5: { fontSize: 22, topLeft: -12, topRight: -35 },
};

fontSizesSlider.onclick = function (event) {
  if (!event.target.classList.value.includes("font-size-")) {
    return;
  }
  /* Chosen font size from the slider */
  event.target.classList.forEach((className) => {
    if (className.includes("font-size-")) {
      const fontSizeIndex = className.slice(-1);
      root.style.setProperty(
        "----sticky-top-left",
        allowedFontSizes[fontSizeIndex].topLeft + "rem"
      );
      root.style.setProperty(
        "----sticky-top-right",
        allowedFontSizes[fontSizeIndex].topRight + "rem"
      );
      document.querySelector("html").style.fontSize =
        allowedFontSizes[fontSizeIndex].fontSize + "px";
    }
  });

  const currentActive = document.querySelector("#font-size-slider .active");
  [];
  if (currentActive) currentActive.classList.remove("active");
  event.target.classList.add("active");
};

// Remove Active class from colors

const changeActiveColorClass = () => {
  colorPalette.forEach((color) => {
    color.classList.remove("active");
  });
};

// Change Primary Colors

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primary;
    // Remove Active class from colors
    changeActiveColorClass();

    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// Theme Background Values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Changes Background color

const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

// Change background colors
bg1.addEventListener("click", () => {
  // add active class
  bg1.classList.add("active");
  // remove active class
  bg2.classList.remove("active");
  bg3.classList.remove("active");
  //   remove customized changes from local storage
  window.location.reload();
});

bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  // add active class
  bg2.classList.add("active");
  // remove active class from the others
  bg1.classList.remove("active");
  bg3.classList.remove("active");
  changeBG();
});

bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  // add active class
  bg3.classList.add("active");
  // remove active class from the others
  bg1.classList.remove("active");
  bg2.classList.remove("active");
  changeBG();
});
