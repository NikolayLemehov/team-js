import { Select } from './Select.class';
import { countries } from '../variables/countries';

export const select = new Select('#select', {
  placeholder: 'Choose country',

  data: countries,
  onSelect(item) {},
});

window.s = select;
