import * as Vue from 'vue'
import * as VueMaterial from 'vue-material'

Vue.use(VueMaterial.MdCore);
Vue.use(VueMaterial.MdAvatar);
Vue.use(VueMaterial.MdBackdrop);
Vue.use(VueMaterial.MdBottomBar);
Vue.use(VueMaterial.MdButton);
Vue.use(VueMaterial.MdButtonToggle);
Vue.use(VueMaterial.MdCard);
Vue.use(VueMaterial.MdCheckbox);
Vue.use(VueMaterial.MdDialog);
Vue.use(VueMaterial.MdDivider);
Vue.use(VueMaterial.MdIcon);
Vue.use(VueMaterial.MdInputContainer);
Vue.use(VueMaterial.MdLayout);
Vue.use(VueMaterial.MdList);
Vue.use(VueMaterial.MdMenu);
Vue.use(VueMaterial.MdRadio);
Vue.use(VueMaterial.MdSelect);
Vue.use(VueMaterial.MdSidenav);
Vue.use(VueMaterial.MdSpinner);
Vue.use(VueMaterial.MdSubheader);
Vue.use(VueMaterial.MdSwitch);
Vue.use(VueMaterial.MdTable);
Vue.use(VueMaterial.MdTabs);
Vue.use(VueMaterial.MdToolbar);
Vue.use(VueMaterial.MdTooltip);
Vue.use(VueMaterial.MdWhiteframe);

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'red',
  background: 'grey'
});
Vue.material.registerTheme({
  app: {
    primary: 'cyan'
  },
  about: {
    primary: 'indigo'
  },
  contact: {
    primary: 'teal'
  }
});
Vue.material.registerTheme('about', {
  primary: {
    color: 'indigo',
    hue: 'A200'
  },
  accent: {
    color: 'grey',
    hue: 300
  }
})
Vue.material.setCurrentTheme('default');
/* Vue.material.applyCurrentTheme('default'); */

