import './js/module/select';
import './js/module/eventlist';
import './js/module/pagination';
import './js/module/searchForm';
import './js/animation/header';
import { renderEventsWithPagination } from './js/module/renderEventsWithPagination';
import { Notify } from 'notiflix';

renderEventsWithPagination().catch(e => Notify.failure(e.message));
