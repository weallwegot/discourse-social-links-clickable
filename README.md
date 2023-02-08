# discourse-social-links-clickable
make social links clickable on user cards theme component

Based on Conversation on [Meta](https://meta.discourse.org/t/link-custom-user-field-to-external-website/41218)
Heavily Inspired By & Copied From [Namati User Card Profile Theme](https://github.com/LeoMcA/namati-user-card-profile-theme)

#### Notes

- Any users that don't include a value for an entry will not have the corresponding icon shown on their user card/profile
- Facebook, Instagram & Twitter custom user fields only expect the user names (no "@" included), the name gets appended to the base URL, but will try to detect if the user puts in a URL as well.
- I'd recommend making the Custom User Fields that will have icons *NOT* show on the User Card since it will then feel a bit redundant to have the text & the clickable icons. Just my personal opinion though, this theme component does not automatically hide them.

#### Site Settings

Each custom field name entry should line up with what you call the customized user field in your discourse instance.
By default the theme-component will expect the names to be as shown below, but you can of course change them.
Strings are case-sensitive.
```
facebook_custom_field_name: 'Facebook'
instagram_custom_field_name: 'Instagram'
twitter_custom_field_name: 'Twitter'
linkedin_custom_field_name: 'LinkedIn Profile'
youtube_custom_field_name: 'Youtube'
discord_custom_field_name: 'Discord'
steam_custom_field_name: 'Steam'
twitch_custom_field_name: 'Twitch'
soundcloud_custom_field_name: 'Soundcloud'
spotify_custom_field_name: 'Spotify'
bandcamp_custom_field_name: 'Bandcamp'
email_custom_field_name: 'Email'
tiktok_custom_field_name: 'Tiktok'
telegram_custom_field_name: 'Telegram'
```
You can also customize the color of the icons.
```
icon_color: 'black'
```

### Known Issues

[Tiktok font awesome icon is not rendering.](https://meta.discourse.org/t/easy-responsive-footer/95818/132)
