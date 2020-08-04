# discourse-social-links-clickable
make social links clickable on user cards theme component

Based on Conversation on [Meta](https://meta.discourse.org/t/link-custom-user-field-to-external-website/41218)
Heavily Inspired By & Copied From [Namati User Card Profile Theme](https://github.com/LeoMcA/namati-user-card-profile-theme)

#### Notes

- Any users that don't include a value for an entry will not have the corresponding icon shown on their user card/profile
- Instagram & Twitter custom user fields only expect the user names (no "@" included), the name gets appended to the base URL
- I'd recommend making the Custom User Fields that will have icons *NOT* show on the User Card since it will then feel a bit redundant to have the text & the clickable icons. Just my opinion though, the theme does not automatically hide them.

#### Site Settings

Each custom field name entry should line up with what you call the customized user field in your discourse instance.
By default the theme-component will expect the names to be as shown below, but you can of course change them.
Strings are case-sensitive.
```
instagram_custom_field_name: 'Instagram'
twitter_custom_field_name: 'Twitter'
linkedin_custom_field_name: 'LinkedIn Profile'
youtube_custom_field_name: 'Youtube'
```
