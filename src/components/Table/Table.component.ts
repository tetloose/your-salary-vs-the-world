import DataTable, { type Api } from 'datatables.net-dt'
import { ComponentClass } from '@utilities/component-class.utilities'
import { result1, result2 } from './Table.data'
import type { DataTableType, TableDataProps, TableRow } from './Table.types'
import './Table.styles.scss'

export class Table extends ComponentClass {
  table?: HTMLTableElement
  dataTable?: Api
  tableData?: TableDataProps
  columns?: string[]
  dataset?: DataTableType
  source?: TableDataProps
  columnsAttr?: string

  constructor(module: HTMLElement) {
    super(module)

    this.table = module.querySelector('.js-dataTable') ?? undefined
    this.columns = this.getColumns()
    this.dataset = this.getDataset()
    this.source = module.dataset.source as TableDataProps
    this.columnsAttr = module.dataset.columns

    this.init()
    this.initObserver()
    this.load()
  }

  getColumns(): string[] | undefined {
    const { columnsAttr } = this

    return columnsAttr
      ? columnsAttr.split(',').map((col) => col.trim())
      : undefined
  }

  getDataset(): DataTableType {
    const { source } = this

    switch (source) {
      case 'result2':
        return result2
      case 'result1':
      default:
        return result1
    }
  }

  mapRowData(item: TableRow, index: number): (string | number | boolean)[] {
    const { columns } = this

    return columns && columns.length > 0
      ? [index + 1, ...columns.map((col) => item[col] ?? '')]
      : [index + 1, ...Object.values(item)]
  }

  init() {
    const { table, dataset } = this

    if (!table || !dataset) return

    const data = dataset.map((item, index) => this.mapRowData(item, index))

    this.dataTable = new DataTable(table, {
      data: data,
      pageLength: 10,
      lengthMenu: [
        [10, 25, 50, -1],
        [10, 25, 50, 'All']
      ],
      order: [[0, 'asc']],
      columnDefs: [
        {
          targets: 0,
          className: 'is-rank u-text-align-center'
        }
      ],
      language: {
        search: 'Search:',
        lengthMenu: 'Show _MENU_ entries',
        info: 'Showing _START_ to _END_ of _TOTAL_ entries',
        infoEmpty: 'Showing 0 to 0 of 0 entries',
        infoFiltered: '(filtered from _MAX_ total entries)',
        paginate: {
          first: 'First',
          last: 'Last',
          next: 'Next',
          previous: 'Previous'
        }
      }
    })
  }
}

export default (module: HTMLElement) => new Table(module)
