import DataTable, { type Api } from 'datatables.net-dt'
import { ComponentClass } from '@utilities/component-class.utilities'
import { tableData } from './Table.data'
import './Table.styles.scss'

export class Table extends ComponentClass {
  table?: HTMLTableElement
  dataTable?: Api

  constructor(module: HTMLElement) {
    super(module)

    this.table = module.querySelector('.js-dataTable') ?? undefined
    this.init()
    this.load()
  }

  init() {
    const { table } = this

    if (!table) return

    const data = tableData[0].map((item, index) => {
      return [
        index + 1,
        item.country,
        item.average_annual_wages_usd,
        item.average_annual_hours_per_person,
        item.estimated_hourly_rate_usd
      ]
    })

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
          width: '80px',
          className: 'dt-center'
        },
        {
          targets: 1,
          className: 'dt-left'
        },
        {
          targets: [2, 3, 4],
          className: 'dt-right'
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
