import Service from "@ember/service";

export default class SocialLinksClickable extends Service {
  get defaultSettings() {
        return [
      {
        name: "Email",
        icon: "envelope",
        link: {
          value: settings.email_custom_field_name,
        },
      },
      {
        name: "Facebook",
        icon: "fab-facebook",
        link: {
          value: settings.facebook_custom_field_name,
          base: "https://www.facebook.com/",
          baseregex: "^http(s)?://(www.)?facebook.com/",
        },
      },
      {
        name: "Instagram",
        icon: "fab-instagram",
        link: {
          value: settings.instagram_custom_field_name,
          base: "https://www.instagram.com/",
          baseregex: "^http(s)?://(www.)?instagram.com/",
        },
      },
      {
        name: "Threads",
        icon: "fab-threads",
        link: {
          value: settings.threads_custom_field_name,
          base: "https://www.threads.net/@",
          baseregex: "^http(s)?://(www.)?threads.net/@",
        },
      },
      {
        name: "X",
        icon: "fab-x-twitter",
        link: {
          value: settings.X_custom_field_name,
          base: "https://x.com/",
          baseregex: "^http(s)?://(www.)?x.com/",
        },
      },
      {
        name: "Mastodon",
        icon: "fab-mastodon",
        link: {
          value: settings.mastodon_custom_field_name,
        },
      },
      {
        name: "Tiktok",
        icon: "fab-tiktok",
        link: {
          value: settings.tiktok_custom_field_name,
          base: "https://tiktok.com/@",
          baseregex: "^http(s)?://(www.)?tiktok.com/@",
        },
      },
      {
        name: "Discord",
        icon: "fab-discord",
        link: {
          value: settings.discord_custom_field_name,
        },
      },
      {
        name: "Steam",
        icon: "fab-steam",
        link: {
          value: settings.steam_custom_field_name,
        },
      },
      {
        name: "YouTube",
        icon: "fab-youtube",
        link: {
          value: settings.youtube_custom_field_name,
          base: "https://youtube.com/@",
          baseregex: "^http(s)?://(www.)?youtube.com/@", 
        },
      },
      {
        name: "Twitch",
        icon: "fab-twitch",
        link: {
          value: settings.twitch_custom_field_name,
          base: "https://www.twitch.tv/",
          baseregex: "^http(s)?://(www.)?twitch.tv/", 
        },
      },
      {
        name: "Telegram",
        icon: "fab-telegram",
        link: {
          value: settings.telegram_custom_field_name,
          base: "https://t.me/",
          baseregex: "^(https://)?t.me/",
        },
      },
      {
        name: "LinkedIn",
        icon: "fab-linkedin-in",
        link: {
          value: settings.linkedin_custom_field_name,
        },
      },
      {
        name: "Soundcloud",
        icon: "fab-soundcloud",
        link: {
          value: settings.soundcloud_custom_field_name,
          base: "https://soundcloud.com/",
          baseregex: "^http(s)?://(www.)?soundcloud.com/",
        },
      },
      {
        name: "Spotify",
        icon: "fab-spotify",
        link: {
          value: settings.spotify_custom_field_name,
          base: "https://open.spotify.com/artist/",
          baseregex: "^http(s)?://(www.)?open.spotify.com/artist/",
        },
      },
      {
        name: "Bandcamp",
        icon: "fab-bandcamp",
        link: {
          value: settings.bandcamp_custom_field_name,
        },
      },
      {
        name: "Bluesky",
        icon: "fab-bluesky",
        link: {
          value: settings.bluesky_custom_field_name,
          base: "https://bsky.app/profile/",
          baseregex: "^http(s)?://(www.)?bsky.app/profile/",
        },
      },
      {
        name: "Github",
        icon: "fab-github",
        link: {
          value: settings.github_custom_field_name,
          base: "https://github.com/",
          baseregex: "^http(s)?://(www.)?github.com/",
        },
      },
     {
        name: "Strava",
        icon: "fab-strava",
        link: {
          value: settings.strava_custom_field_name,
          base: "https://strava.com/athletes/",
          baseregex: "^http(s)?://(www.)strava.com/athletes/",
        },
      },   
    ];
  }

  fieldOptions(model) {
    const userFields = model?.user_fields;

    if (userFields === undefined) {
      return null;
    }

    return this.defaultSettings
      .map((field) => {
        const base = field.link.base || "";
        const baseregex = field.link.baseregex || "";

        const siteUserField = model.site?.user_fields.filterBy(
          "name",
          field.link.value
        )[0];

        if (siteUserField && userFields[siteUserField.id]) {
          const socialLinkValue = userFields[siteUserField.id];
          field.href =
            (RegExp(baseregex).test(socialLinkValue)
              ? socialLinkValue
              : base + socialLinkValue) || "";
        } else {
          return null;
        }

        return field;
      })
      .compact();
  }
}
