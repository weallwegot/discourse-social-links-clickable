import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import icon from "discourse-common/helpers/d-icon";

export default class SocialLinksClikable extends Component {
  @service linksSettings;

  get userModel() {
    return this.args.outletArgs.user || this.args.outletArgs.model;
  }

  get list() {
    return this.linksSettings.fieldOptions(this.userModel);
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
          >{{icon field.icon}}</a>
        {{/if}}
      {{/each}}
    </div>
  </template>
}
