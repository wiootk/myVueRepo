import Button from './button/index.js';
const components = [Button];
//全局引入
const install = function(Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name,component));
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
//导出 全局+按需加载
export default {install,Button};