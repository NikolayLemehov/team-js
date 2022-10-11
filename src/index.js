import './js/module/select';
import './js/module/eventlist';
import './js/module/pagination';
import './js/module/searchForm';
import { renderEventsWithPagination } from './js/module/renderEventsWithPagination';

const startLoading = () => console.log('start loading');
const stopLoading = () => console.log('stop loading');

const renderData = { startLoading, stopLoading };

renderEventsWithPagination(renderData).catch(console.log);
