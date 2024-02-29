import type { NavItems } from "./types";

export const NAV_ITEMS: NavItems = {
	home: {
		path: "/",
		title: "𝐀𝐜𝐜𝐞𝐮𝐢𝐥",
	},
	blog: {
		path: "/blog",
		title: "𝐁𝐥𝐨𝐠",
	},
	tags: {
		path: "/tags",
		title: "𝐌𝐨𝐭𝐬 𝐜𝐥é𝐬",
	},
	media: {
		path: "/media",
		title: "𝐘𝐨𝐮𝐭𝐮𝐛𝐞",
	},
	about: {
		path: "/about",
		title: "𝐀 𝐏𝐫𝐨𝐩𝐨𝐬",
	},
};

export const SITE = {
	// Your site's detail?
	name: "",
	title: "Crypto Afrique Futur",
	description: "",
	url: "https://criptohub.netlify.app/",
	githubUrl: "https://github.com/Nit-harley",
	listDrafts: true,
	image:
		"/assets/logo.png",
	// YT video channel Id (used in media.astro)
	ytChannelId: "",
	// Optional, user/author settings (example)
	// Author: name
	author: "NGUEMBHYT Nit Harley", // Example: Fred K. Schott
	// Author: Twitter handler
	authorLinkedin: "NGUEMBHYT Nit Harley", // Example: FredKSchott
	// Author: Image external source
	authorImage: "/assets/image.png", // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg, https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png
	// Author: Bio
	authorBio:
		"La technologie Blockchain va changer le monde, chez Crypto Afrique Futur, nous ferrons de vous des acteurs majeurs de cette révolution !"
}
// Ink - Theme configuration
export const PAGE_SIZE = 5;
export const USE_POST_IMG_OVERLAY = false;
export const USE_MEDIA_THUMBNAIL = true;

export const USE_AUTHOR_CARD = true;
export const USE_SUBSCRIPTION = false; /* works only when USE_AUTHOR_CARD is true */

export const USE_VIEW_STATS = false;
