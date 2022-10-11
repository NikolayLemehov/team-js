import { Select } from './Select.class';
import { countries } from '../variables/countries';
// import "./select/styles.scss";

export const select = new Select('#select', {
  placeholder: 'Choose country',

  data: countries,
  onSelect(item) {
    console.log('Selected Item', item);
  },
});

window.s = select;
