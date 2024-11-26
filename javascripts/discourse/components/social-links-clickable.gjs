import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import icon from "discourse-common/helpers/d-icon"; // Assuming this helper is valid.

export default class SocialLinksClickable extends Component {
  @service linksSettings;

  get userModel() {
    // Safely fetch the user model from the outlet arguments.
    return this.args.outletArgs?.user || this.args.outletArgs?.model;
  }

  get list() {
    // Get field options and fallback to an empty array if null or undefined.
    return this.linksSettings.fieldOptions(this.userModel) || [];
  }



  <template>
    <div class="iconic-user-fields">
      {{#each this.list as |field|}}
        {{#if field.icon}}
          <a
            href="{{field.href}}"
            rel="nofollow"
            target="_blank"
            title="{{field.name}}"
          >
            {{icon field.icon}}
          </a>
        {{/if}}
      {{/each}}
    </div>
  </template>
}
