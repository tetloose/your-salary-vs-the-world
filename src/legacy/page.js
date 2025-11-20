/* global $, SocialShareKit, ScrollHint */
import { landingOptions } from './landing-lib.js'

const jsonData = [
  [
    {
      country: 'Luxembourg',
      average_annual_wage: '71181',
      average_annual_wages_usd: '$89,767',
      local_currency: 'EUR',
      average_annual_hours_per_person: '1,462.0',
      estimated_hourly_rate_gbp: 48.69,
      estimated_hourly_rate_usd: '$61.61'
    },
    {
      country: 'Iceland',
      average_annual_wage: '69320',
      average_annual_wages_usd: '$87,421',
      local_currency: 'ISK',
      average_annual_hours_per_person: '1,448.0',
      estimated_hourly_rate_gbp: 47.87,
      estimated_hourly_rate_usd: '$60.58'
    },
    {
      country: 'United States',
      average_annual_wage: '63527',
      average_annual_wages_usd: '$80,115',
      local_currency: 'USD',
      average_annual_hours_per_person: '1,799.0',
      estimated_hourly_rate_gbp: 35.31,
      isHidden: true,
      estimated_hourly_rate_usd: '$44.68'
    },
    {
      country: 'Norway',
      average_annual_wage: '57070',
      average_annual_wages_usd: '$71,972',
      local_currency: 'NOK',
      average_annual_hours_per_person: '1,418.0',
      estimated_hourly_rate_gbp: 40.25,
      estimated_hourly_rate_usd: '$50.93'
    },
    {
      country: 'Austria',
      average_annual_wage: '56432',
      average_annual_wages_usd: '$71,167',
      local_currency: 'EUR',
      average_annual_hours_per_person: '1,435.0',
      estimated_hourly_rate_gbp: 39.33,
      estimated_hourly_rate_usd: '$49.77'
    },
    {
      country: 'Netherlands',
      average_annual_wage: '55654',
      average_annual_wages_usd: '$70,185',
      local_currency: 'EUR',
      average_annual_hours_per_person: '1,413.0',
      estimated_hourly_rate_gbp: 39.39,
      estimated_hourly_rate_usd: '$49.85'
    },
    {
      country: 'Denmark',
      average_annual_wage: '55130',
      average_annual_wages_usd: '$69,525',
      local_currency: 'DKK',
      average_annual_hours_per_person: '1,380.0',
      estimated_hourly_rate_gbp: 39.95,
      estimated_hourly_rate_usd: '$50.55'
    },
    {
      country: 'Australia',
      average_annual_wage: '53208',
      average_annual_wages_usd: '$67,101',
      local_currency: 'AUD',
      average_annual_hours_per_person: '1,651.0',
      estimated_hourly_rate_gbp: 32.23,
      estimated_hourly_rate_usd: '$40.78'
    },
    {
      country: 'Canada',
      average_annual_wage: '52502',
      average_annual_wages_usd: '$66,211',
      local_currency: 'CAD',
      average_annual_hours_per_person: '1,685.0',
      estimated_hourly_rate_gbp: 31.16,
      estimated_hourly_rate_usd: '$39.43'
    },
    {
      country: 'Germany',
      average_annual_wage: '52112',
      average_annual_wages_usd: '$65,719',
      local_currency: 'EUR',
      average_annual_hours_per_person: '1,342.6',
      estimated_hourly_rate_gbp: 38.81,
      estimated_hourly_rate_usd: '$49.11'
    },
    {
      country: 'France',
      average_annual_wage: '46853',
      average_annual_wages_usd: '$59,087',
      local_currency: 'EUR',
      average_annual_hours_per_person: '1,500.0',
      estimated_hourly_rate_gbp: 31.24,
      estimated_hourly_rate_usd: '$39.53'
    },
    {
      country: 'New Zealand',
      average_annual_wage: '46068',
      average_annual_wages_usd: '$58,097',
      local_currency: 'NZD',
      average_annual_hours_per_person: '1,751.0',
      estimated_hourly_rate_gbp: 26.31,
      estimated_hourly_rate_usd: '$33.29'
    },
    {
      country: 'Sweden',
      average_annual_wage: '45988',
      average_annual_wages_usd: '$57,996',
      local_currency: 'SEK',
      average_annual_hours_per_person: '1,437.0',
      estimated_hourly_rate_gbp: 32,
      estimated_hourly_rate_usd: '$40.49'
    },
    {
      country: 'Finland',
      average_annual_wage: '45880',
      average_annual_wages_usd: '$57,860',
      local_currency: 'EUR',
      average_annual_hours_per_person: '1,499.0',
      estimated_hourly_rate_gbp: 30.61,
      estimated_hourly_rate_usd: '30.61'
    },
    {
      country: 'Ireland',
      average_annual_wage: '45046',
      average_annual_wages_usd: '$56,809',
      local_currency: 'EUR',
      average_annual_hours_per_person: '1,633.0',
      estimated_hourly_rate_gbp: 27.59,
      estimated_hourly_rate_usd: '$34.91'
    },
    {
      country: 'Slovenia',
      average_annual_wage: '44136',
      average_annual_wages_usd: '$55,660',
      local_currency: 'EUR',
      average_annual_hours_per_person: '1,616.0',
      estimated_hourly_rate_gbp: 27.31,
      estimated_hourly_rate_usd: '$34.55'
    },
    {
      country: 'Spain',
      average_annual_wage: '40707',
      average_annual_wages_usd: '$51,336',
      local_currency: 'EUR',
      average_annual_hours_per_person: '1,632.3',
      estimated_hourly_rate_gbp: 24.94,
      estimated_hourly_rate_usd: '$31.55'
    },
    {
      country: 'Israel',
      average_annual_wage: '40412',
      average_annual_wages_usd: '$50,964',
      local_currency: 'ILS',
      average_annual_hours_per_person: '1,880.0',
      estimated_hourly_rate_gbp: 21.5,
      estimated_hourly_rate_usd: '$27.20'
    },
    {
      country: 'Korea',
      average_annual_wage: '38904',
      average_annual_wages_usd: '$49,062',
      local_currency: 'KRW',
      average_annual_hours_per_person: '1,872.0',
      estimated_hourly_rate_gbp: 20.78,
      estimated_hourly_rate_usd: '$27.20'
    },
    {
      country: 'Italy',
      average_annual_wage: '38755',
      average_annual_wages_usd: '$48,874',
      local_currency: 'EUR',
      average_annual_hours_per_person: '1,734.0',
      estimated_hourly_rate_gbp: 22.35,
      estimated_hourly_rate_usd: '$26.28'
    },
    {
      country: 'Lithuania',
      average_annual_wage: '38747',
      average_annual_wages_usd: '$48,864',
      local_currency: 'EUR',
      average_annual_hours_per_person: '1,641.0',
      estimated_hourly_rate_gbp: 23.61,
      estimated_hourly_rate_usd: '$29.86'
    },
    {
      country: 'Japan',
      average_annual_wage: '37104',
      average_annual_wages_usd: '$46,792',
      local_currency: 'JPY',
      average_annual_hours_per_person: '1,611.0',
      estimated_hourly_rate_gbp: 23.03,
      estimated_hourly_rate_usd: '$29.13'
    },
    {
      country: 'Poland',
      average_annual_wage: '32550',
      average_annual_wages_usd: '$41,050',
      local_currency: 'PLN',
      average_annual_hours_per_person: '1,803.0',
      estimated_hourly_rate_gbp: 18.05,
      estimated_hourly_rate_usd: '$22.83'
    },
    {
      country: 'Latvia',
      average_annual_wage: '30719',
      average_annual_wages_usd: '$38,740',
      local_currency: 'EUR',
      average_annual_hours_per_person: '1,548.0',
      estimated_hourly_rate_gbp: 19.84,
      estimated_hourly_rate_usd: '$25.09'
    },
    {
      country: 'Portugal',
      average_annual_wage: '29735',
      average_annual_wages_usd: '$37,500',
      local_currency: 'EUR',
      average_annual_hours_per_person: '1,631.0',
      estimated_hourly_rate_gbp: 18.23,
      estimated_hourly_rate_usd: '$23.06'
    },
    {
      country: 'Estonia',
      average_annual_wage: '29659',
      average_annual_wages_usd: '$37,404',
      local_currency: 'EUR',
      average_annual_hours_per_person: '1,742.0',
      estimated_hourly_rate_gbp: 17.03,
      estimated_hourly_rate_usd: '$21.53'
    },
    {
      country: 'Czech Republic',
      average_annual_wage: '29629',
      average_annual_wages_usd: '$37,366',
      local_currency: 'CZK',
      average_annual_hours_per_person: '1,766.0',
      estimated_hourly_rate_gbp: 16.78,
      estimated_hourly_rate_usd: '$21.21'
    },
    {
      country: 'Slovakia',
      average_annual_wage: '25162',
      average_annual_wages_usd: '$31,733',
      local_currency: 'EUR',
      average_annual_hours_per_person: '1,631.0',
      estimated_hourly_rate_gbp: 15.43,
      estimated_hourly_rate_usd: '$19.51'
    },
    {
      country: 'Hungary',
      average_annual_wage: '25144',
      average_annual_wages_usd: '$31,709',
      local_currency: 'HUF',
      average_annual_hours_per_person: '1,679.0',
      estimated_hourly_rate_gbp: 14.98,
      estimated_hourly_rate_usd: '$18.94'
    },
    {
      country: 'Greece',
      average_annual_wage: '23977',
      average_annual_wages_usd: '$30,238',
      local_currency: 'EUR',
      average_annual_hours_per_person: '1,897.0',
      estimated_hourly_rate_gbp: 12.64,
      estimated_hourly_rate_usd: '$15.98'
    },
    {
      country: 'Mexico',
      average_annual_wage: '16235',
      average_annual_wages_usd: '$20,474',
      local_currency: 'MXN',
      average_annual_hours_per_person: '2,207.0',
      estimated_hourly_rate_gbp: 7.36,
      estimated_hourly_rate_usd: '$9.30'
    }
  ]
]

const jsonData2 = [
  {
    rank: 1,
    country: 'Mexico',
    rstimated_hourly_rate: '£7.36',
    hours_uk: '6,211',
    difference_to_uk: '+4,686.83'
  },
  {
    rank: 2,
    country: 'Greece',
    rstimated_hourly_rate: '£12.64',
    hours_uk: '3,615',
    difference_to_uk: '+2,090.68'
  },
  {
    rank: 3,
    country: 'Hungary',
    rstimated_hourly_rate: '£14.98',
    hours_uk: '3,051',
    difference_to_uk: '+1,526.80'
  },
  {
    rank: 4,
    country: 'Slovakia',
    rstimated_hourly_rate: '£15.43',
    hours_uk: '2,961',
    difference_to_uk: '+1,437.40'
  },
  {
    rank: 5,
    country: 'Czech Republic',
    rstimated_hourly_rate: '£16.78',
    hours_uk: '2,723',
    difference_to_uk: '+1,199.14'
  },
  {
    rank: 6,
    country: 'Estonia',
    rstimated_hourly_rate: '£17.03',
    hours_uk: '2,683',
    difference_to_uk: '+1,159.39'
  },
  {
    rank: 7,
    country: 'Poland',
    rstimated_hourly_rate: '£18.05',
    hours_uk: '2,531',
    difference_to_uk: '+1,006.68'
  },
  {
    rank: 8,
    country: 'Portugal',
    rstimated_hourly_rate: '£18.23',
    hours_uk: '2,506',
    difference_to_uk: '981.99'
  },
  {
    rank: 9,
    country: 'Latvia',
    rstimated_hourly_rate: '£19.84',
    hours_uk: '2,302',
    difference_to_uk: '778.31'
  },
  {
    rank: 10,
    country: 'Korea',
    rstimated_hourly_rate: '£20.78',
    hours_uk: '2,198',
    difference_to_uk: '674.41'
  },
  {
    rank: 11,
    country: 'Israel',
    rstimated_hourly_rate: '£21.50',
    hours_uk: '2,125',
    difference_to_uk: '601.44'
  },
  {
    rank: 12,
    country: 'Italy',
    rstimated_hourly_rate: '£22.35',
    hours_uk: '2,044',
    difference_to_uk: '520.18'
  },
  {
    rank: 13,
    country: 'Japan',
    rstimated_hourly_rate: '£23.03',
    hours_uk: '1,984',
    difference_to_uk: '459.69'
  },
  {
    rank: 14,
    country: 'Lithuania',
    rstimated_hourly_rate: '£23.61',
    hours_uk: '1,935',
    difference_to_uk: '410.94'
  },
  {
    rank: 15,
    country: 'Spain',
    rstimated_hourly_rate: '£24.94',
    hours_uk: '1,832',
    difference_to_uk: '308.01'
  },
  {
    rank: 16,
    country: 'New Zealand',
    rstimated_hourly_rate: '£26.31',
    hours_uk: '1,737',
    difference_to_uk: '212.53'
  },
  {
    rank: 17,
    country: 'Slovenia',
    rstimated_hourly_rate: '£27.31',
    hours_uk: '1,673',
    difference_to_uk: '148.82'
  },
  {
    rank: 18,
    country: 'Ireland',
    rstimated_hourly_rate: '£27.59',
    hours_uk: '1,656',
    difference_to_uk: '132.24'
  },
  {
    rank: 19,
    country: 'Luxembourg',
    rstimated_hourly_rate: '£48.69',
    hours_uk: '938',
    difference_to_uk: '-585.61'
  },
  {
    rank: 20,
    country: 'Iceland',
    rstimated_hourly_rate: '£47.87',
    hours_uk: '954',
    difference_to_uk: '-569.66'
  },
  {
    rank: 21,
    country: 'Norway',
    rstimated_hourly_rate: '£40.25',
    hours_uk: '1,135',
    difference_to_uk: '-389'
  },
  {
    rank: 22,
    country: 'Denmark',
    rstimated_hourly_rate: '£39.95',
    hours_uk: '1,144',
    difference_to_uk: '-380.36'
  },
  {
    rank: 23,
    country: 'Netherlands',
    rstimated_hourly_rate: '£39.39',
    hours_uk: '1,160',
    difference_to_uk: '-364.03'
  },
  {
    rank: 24,
    country: 'Austria',
    rstimated_hourly_rate: '£39.33',
    hours_uk: '1,162',
    difference_to_uk: '-362.21'
  },
  {
    rank: 25,
    country: 'Germany',
    rstimated_hourly_rate: '£38.81',
    hours_uk: '1,177',
    difference_to_uk: '-346.92'
  },
  {
    rank: 26,
    country: 'United States',
    rstimated_hourly_rate: '£35.31',
    hours_uk: '1,294',
    difference_to_uk: '-230.20'
  },
  {
    rank: 27,
    country: 'Australia',
    rstimated_hourly_rate: '£32.23',
    hours_uk: '1,418',
    difference_to_uk: '-106.35'
  },
  {
    rank: 28,
    country: 'Sweden',
    rstimated_hourly_rate: '£32.00',
    hours_uk: '1,428',
    difference_to_uk: '-96.39'
  },
  {
    rank: 29,
    country: 'France',
    rstimated_hourly_rate: '£31.24',
    hours_uk: '1,463',
    difference_to_uk: '-61.31'
  },
  {
    rank: 30,
    country: 'Canada',
    rstimated_hourly_rate: '£31.16',
    hours_uk: '1,466',
    difference_to_uk: '-57.71'
  },
  {
    rank: 31,
    country: 'Finland',
    rstimated_hourly_rate: '£30.61',
    hours_uk: '1,493',
    difference_to_uk: '-31.29'
  }
]

$(function () {
  let total
  let dataTable
  let column
  let order
  let rank_asc
  let rank_desc
  let sort_case
  let max
  let index

  landingOptions.scrollToSections()
  landingOptions.controlLength()
  landingOptions.currency()

  $(document).on('click', '.Navigation_c-nav-toggle_3tn8u', function () {
    $('.Navigation_c-nav-container_1git3').toggleClass(
      'Navigation_is-visible_2o2sb'
    )
    $('.Navigation_c-nav-trigger_RtFMy').toggleClass('Navigation_is-open_2oLxG')
  })

  SocialShareKit.init()

  $(document).ready(function () {
    $('#currency-select').select2({
      templateResult: formatOption,
      templateSelection: formatOption
    })

    function formatOption(option) {
      if (!option.id) {
        return option.text
      }

      // Map for country and region codes to flags
      const flags = {
        gb: 'images/flags/uk.svg', // UK
        eu: 'images/flags/eu.svg', // EU
        us: 'images/flags/usa.svg' // USA
      }

      let flagIcons = ''
      // console.log(option.id)
      // Add multiple flags as needed
      if (option.id === 'GBP') {
        flagIcons = `<img src="${flags.gb}" style="width: 40px;" />`
      } else if (option.id === 'EUR') {
        flagIcons = `<img src="${flags.eu}" style="width: 40px;" />`
      } else if (option.id === 'USD') {
        flagIcons = `<img src="${flags.us}" style="width: 40px;" />`
      }

      return $(
        `<span class="flex gap-4 p-2 text-sm lg:text-base items-center">${flagIcons} ${option.text}</span>`
      )
    }
  })

  total = jsonData2.length
  // console.log(total)

  dataTable = $('#data').DataTable({
    processing: true,
    data: jsonData2,
    paging: true,
    pageLength: 10,
    searching: true,
    info: false,
    columns: [
      {
        data: null,
        orderable: true,
        render: {
          _: function (data) {
            return data.rank
          },
          display: function (data) {
            return (
              '<span data-toggle="tooltip" data-rank="' +
              data.rank +
              '" data-placement="bottom"  class="td-simulate tooltip rank " data-tooltip="Rank"><span class="">' +
              data.rank +
              '</span></span>'
            )
          }
        }
      },
      {
        data: null,
        orderable: true,
        render: {
          _: function (data) {
            return data.country
          },
          display: function (data) {
            return (
              '<span data-toggle="tooltip" data-placement="bottom" class="td-simulate tooltip font-weight-bold text-left pl-3 items-center gap-4" data-tooltip="Country" style="display: flex !important;">' +
              '<img class="table-img lazy" src="images/flags/' +
              data.country.toLowerCase().replace(/ /g, '-') +
              '.svg" alt="">' +
              '<span class="country-text">' +
              data.country +
              '</span>' +
              '</span>'
            )
          }
        }
      },
      {
        data: null,
        orderable: true,
        orderSequence: ['desc', 'asc'],
        render: {
          _: function (data) {
            return data.rstimated_hourly_rate
          },
          display: function (data) {
            return (
              '<span data-toggle="tooltip" data-placement="bottom" class="td-simulate tooltip px-3" data-tooltip="Estimated hourly rate (£) ">' +
              data.rstimated_hourly_rate +
              '</span>'
            )
          }
        }
      },
      {
        data: null,
        orderable: true,
        orderSequence: ['desc', 'asc'],
        render: {
          _: function (data) {
            return data.hours_uk
          },
          display: function (data) {
            return (
              '<span data-toggle="tooltip" data-placement="bottom" class="td-simulate tooltip px-3" data-tooltip="Annual number of hours needed to work to earn UK salary">' +
              data.hours_uk +
              '</span>'
            )
          }
        }
      },
      {
        data: null,
        orderable: true,
        orderSequence: ['asc', 'desc'],
        render: {
          _: function (data) {
            return data.rank
          },
          display: function (data) {
            return (
              `<span data-toggle="tooltip" data-placement="bottom" class="td-simulate tooltip px-3 ${
                data.difference_to_uk < 0
                  ? '!text-[#B3C066]'
                  : '!text-[#E97657]'
              }" data-tooltip="Difference to the average annual hours in the UK">` +
              `${data.difference_to_uk >= 0 ? '+' : ''}${data.difference_to_uk}` +
              '</span>'
            )
          }
        }
      }
    ],
    order: [[4, 'asc']]
  })

  dataTable.on('order.dt', function () {
    var table = dataTable.order()
    column = table[0][0]
    order = table[0][1]
    rank_asc = []
    rank_desc = [2, 3]

    if (rank_asc.includes(column)) sort_case = order
    else if (rank_desc.includes(column) && order == 'desc') sort_case = 'asc'
    else if (rank_desc.includes(column) && order == 'asc') sort_case = 'desc'
    else sort_case = false

    $('#data').removeClass('table_asc table_desc')

    if (column == 0) $('#data').addClass('table_' + order)
    if (sort_case != false) $('#data').addClass('table_' + sort_case)

    if (sort_case == 'asc')
      $('#data .rank').each(function (i) {
        $(this).html('<span class="">' + (i + 1) + '</span>')
      })
    else if (sort_case == 'desc') {
      max = total + 1
      $('#data .rank').each(function () {
        max -= 1
        $(this).html('<span class="">' + max + '</span>')
      })
    } else
      $('#data .rank').each(function () {
        $(this).find('span').html($(this).data('rank'))
      })
  })

  $('table').on('mouseover', 'td', function () {
    $('table td').removeClass('highlighted')
    $(this)
      .parents('table')
      .find('th:eq(' + $(this).index() + ')')
      .tooltip('show')

    index = parseInt($(this).index()) + 1

    $(this)
      .parents('table')
      .find('tr td:nth-child(' + index + ')')
      .addClass('highlighted')
  })

  $('table').on('mouseout', 'td', function () {
    $('table td').removeClass('highlighted')
  })

  new ScrollHint('.js-scrollable')

  $('.small.search').on('click', function (e) {
    e.preventDefault()

    var currentFilter = $('#data_filter input').val()

    if (currentFilter == $(this).data('term')) dataTable.search('').draw()
    else dataTable.search($(this).data('term')).draw()
  })

  $('.close-menu').on('click', function (e) {
    e.preventDefault()
    $('.navbar-mobile').addClass('hidden')
  })

  $('.mobile-menu').on('click', function (e) {
    e.preventDefault()
    $('.navbar').removeClass('hidden')
    $('.mobile-menu').addClass('hidden')
    $('#close_nav').toggleClass('hidden')
  })

  $('#close_nav').on('click', function (e) {
    e.preventDefault()
    $('.navbar').toggleClass('hidden')
    $('.mobile-menu').removeClass('hidden')
    $('#close_nav').addClass('hidden')
  })

  $('.section-link').on('click', function (e) {
    e.preventDefault()
    $('.navbar').addClass('hidden')
    $('.mobile-menu').removeClass('hidden')
    $('#close_nav').addClass('hidden')
  })

  const tooltips = document.querySelectorAll('.tooltip')

  tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseover', showTooltip)
    tooltip.addEventListener('mouseout', hideTooltip)
  })

  function showTooltip(event) {
    const tooltip = event.target.getAttribute('data-tooltip')
    event.target.setAttribute('title', tooltip)
  }

  function hideTooltip(event) {
    event.target.removeAttribute('title')
  }
})

export { jsonData, jsonData2 }
