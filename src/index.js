import './js/module/eventlist';
import './js/module/pagination';
import './js/module/searchForm';
import {renderEventsWithPagination} from "./js/module/renderEventsWithPagination";

renderEventsWithPagination().catch(console.log)
