import { TableFilterContext } from "./table-filter-context";
import { TableFilterSortMeta } from "./table-filter-sort-meta";

export class TableFilter
{
    Filters: Map<string, TableFilterContext[]>;
    First: number;
    Rows: number;
    SortField: string;
    SortOrder: number;
    MultiSortMeta: TableFilterSortMeta[];
}
