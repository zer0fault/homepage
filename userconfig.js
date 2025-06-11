// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato, lycia
const preferredLightTheme = mocha;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Clinton",
    scale: "F",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "USA",
      timezone: "America/Chicago",
      format: "h:i",
      icon_color: palette.mauve,
    },
  ],
  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://github.com/zer0fault",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "austin",
      background_url: "src/img/banners/banner_18.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "Ubuntu Wiki",
              url: "https://ubuntu.com/blog/tag/ubuntu-wiki",
              icon: "brand-wikipedia",
              icon_color: palette.red,
            },
            {
              name: "Youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: palette.mauve,
            },
            {
              name: "Reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.flamingo,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "Gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.red,
            },
            {
              name: "Sheets",
              url: "https://docs.google.com/spreadsheets",
              icon: "table",
              icon_color: palette.flamingo,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/banner_15.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "Github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.red,
            },
            {
              name: "ChatGPT",
              url: "https://chatgpt.com",
              icon: "brand-openai",
              icon_color: palette.mauve,
            },
            {
              name: "Stack Overflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.flamingo,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "Kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.red,
            },
            {
              name: "Leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.mauve,
            },
            {
              name: "Exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.flamingo,
            },
            {
              name: "Chess",
              url: "https://chess.com",
              icon: "chess",
              icon_color: palette.lavender,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/banner_08.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "Art",
              url: "https://www.reddit.com/r/Art/",
              icon: "brush",
              icon_color: palette.red,
            },
            {
              name: "Cozy",
              url: "https://www.reddit.com/r/CozyPlaces/",
              icon: "bed",
              icon_color: palette.mauve,
            },
            {
              name: "Food",
              url: "https://www.reddit.com/r/FoodPorn/",
              icon: "burger",
              icon_color: palette.flamingo,
            },
            {
              name: "Dread",
              url: "https://www.reddit.com/r/unixporn",
              icon: "shield-checkered",
              icon_color: palette.lavender,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.red);
