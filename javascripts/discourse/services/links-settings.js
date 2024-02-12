import Service from "@ember/service";

export default class SocialLinksClickable extends Service {
  get defaultSettings() {
    return [
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
        name: "X",
        icon: "temporary-twitter-x",
        link: {
          value: settings.twitter_custom_field_name,
          base: "https://twitter.com/",
          baseregex: "^http(s)?://(www.)?twitter.com/",
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
        name: "Email",
        icon: "envelope",
        link: {
          value: settings.email_custom_field_name,
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
        name: "YouTube",
        icon: "fab-youtube",
        link: {
          value: settings.youtube_custom_field_name,
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
        name: "Twitch",
        icon: "fab-twitch",
        link: {
          value: settings.twitch_custom_field_name,
        },
      },
      {
        name: "Tiktok",
        icon: "fab-tiktok",
        link: {
          value: settings.tiktok_custom_field_name,
          base: "https://tiktok.com/",
          baseregex: "^http(s)?://(www.)?tiktok.com/",
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
