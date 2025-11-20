/* global $, ScrollHint */

const landingOptions = {
  scrollHint() {
    new ScrollHint('.js-scrollable', {})
  },
  scrollToSections() {
    let offset
    let section
    let anchor

    function sectionsMedia() {
      if ($(window).width() < 992) {
        offset = 375
      } else if ($(window).width() < 1200) {
        offset = 80
      } else offset = 100

      $('html,body').animate(
        { scrollTop: $('#' + section).offset().top - offset },
        'slow'
      )
    }

    $('[data-anchor]').on('click', function (e) {
      e.preventDefault()
      anchor = $(this).data('anchor')
      $('[data-anchor],[data-section]').removeClass('open active')
      $(this).addClass('active')
      $('html,body').animate(
        { scrollTop: $('#' + anchor).offset().top - 0 },
        'slow'
      )
    })
    $('[data-section-primary]').on('click', function (e) {
      e.preventDefault()
      section = $(this).data('section-primary')
      $('.section_primary, [data-section-primary]').removeClass('open active')
      $('#' + section).addClass('open')
      $(this).addClass('active ')
      sectionsMedia(section)
    })
    $('[data-section-secondary]').on('click', function (e) {
      e.preventDefault()
      section = $(this).data('section-secondary')
      $('.section_secondary, [data-section-secondary]').removeClass(
        'open active'
      )
      $('#' + section).addClass('open')
      $(this).addClass('active ')
      sectionsMedia(section)
    })
    $('[data-section-third]').on('click', function (e) {
      e.preventDefault()
      section = $(this).data('section-third')
      $('.section_third, [data-section-third]').removeClass('open active')
      $('#' + section).addClass('open')
      $(this).addClass('active ')
      sectionsMedia(section)
    })
    $('[data-section]').on('click', function (e) {
      e.preventDefault()
      section = $(this).data('section')
      $('.section_primary, [data-anchor], [data-section]').removeClass(
        'open active'
      )
      $('#' + section).addClass('open')
      $(this).addClass('active ')
      sectionsMedia(section)
    })
  },
  currency() {
    let symbol = '£'
    let rate = 1

    $('.change-currency').on('click update', function (e) {
      e.preventDefault()

      $('.change-currency').removeClass('active')
      $(this).addClass('active')

      symbol = $(this).data('symbol')
      rate = $(this).data('rate')

      $('[data-amount]').each(function (i, el) {
        let amount = $(this).data('amount')
        let toFixed = 2

        if (amount == 'Free') $(el).html('Free')
        else if (amount == 'N/A') $(el).html('N/A*')
        else {
          if (amount > 100) toFixed = 0

          amount = parseFloat(amount * rate).toFixed(toFixed)
          amount = numberWithCommas(amount)
          let string = symbol + amount
          $(el).html(string)
        }
      })
      if (symbol == '$') {
        $('[data-symbol="$"]').addClass('active')
      } else if (symbol == '€') {
        $('[data-symbol="€"]').addClass('active')
      } else if (symbol == '£') {
        $('[data-symbol="£"]').addClass('active')
      }
    })
  },
  controlLength() {
    $('.control_length').on('click', function (e) {
      e.preventDefault()
      let get_table_id = $(this)
        .closest('.table-block')
        .find('table')
        .attr('id')
      let table_instance = $('#' + get_table_id).DataTable()
      if ($(this).hasClass('active')) {
        $(this).removeClass('active')
        $(this).html('Show more +')
        table_instance.page.len(10).draw()
        $('html,body').animate(
          { scrollTop: $('#' + get_table_id).offset().top - 100 },
          'slow'
        )
      } else {
        $(this).addClass('active')
        $(this).html('Show less -')
        table_instance.page.len(-1).draw()
      }
    })
  }
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function convertToSlugUppercase(Text) {
  return Text.replace(/[^\w ]+/g, '').replace(/ +/g, '-')
}

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

function abbreviateNumber(number) {
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(1).replace(/\.0$/, '') + 'bn'
  }
  if (number >= 1000000) {
    return (number / 1000000).toFixed(0).replace(/\.$/, '') + 'm'
  }

  if (number >= 1000) {
    return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  }

  if (number <= -1000000000) {
    return (number / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B'
  }

  if (number <= -1000000) {
    return (number / 1000000).toFixed(0).replace(/\.0$/, '') + 'm'
  }

  if (number <= -1000) {
    return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  }

  return number
}

function convert(amount) {
  let rate = 1
  let symbol = '£'

  if (amount == 0) {
    return 'Free'
  } else {
    amount = numberWithCommas((amount * rate).toFixed(2))

    return symbol + amount
  }
}

export {
  landingOptions,
  numberWithCommas,
  convertToSlugUppercase,
  convertToSlug,
  abbreviateNumber,
  convert
}
