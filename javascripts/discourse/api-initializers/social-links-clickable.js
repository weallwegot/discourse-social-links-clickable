import { apiInitializer } from "discourse/lib/api";
import SocialLinksClickable from "../components/social-links-clickable";

export default apiInitializer("1.13.0", (api) => {
  // Render the SocialLinksClickable component in the specified outlets
  api.renderInOutlet("user-post-names", SocialLinksClickable);
  api.renderInOutlet("user-card-post-names", SocialLinksClickable);

  // Modify the user-card-contents component to include a custom property
  api.modifyClass("component:user-card-contents", {
    pluginId: "social-links-clickable",

    // Adding a custom property to the user-card-contents component
    hasLocationOrWebsite: true,
  });
});
