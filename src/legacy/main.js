/* global $ */
import { numberWithCommas } from './landing-lib.js'
import { jsonData } from './page.js'

// Main script
document.addEventListener('DOMContentLoaded', () => {
  // Get the form element
  const form = document.getElementById('form')
  const wageInput = document.getElementById('wage')

  // Format initial value of the input field
  wageInput.value = numberWithCommas(wageInput.value)

  // Add input event listener for real-time formatting
  wageInput.addEventListener('input', (event) => {
    // Remove commas to parse the numeric value
    const rawValue = event.target.value.replace(/,/g, '')

    // Update the input field by re-formatting with commas if valid number
    if (!isNaN(rawValue) && rawValue.trim() !== '') {
      event.target.value = numberWithCommas(rawValue)
    } else {
      event.target.value = '' // Clear invalid input
    }
  })

  // Attach the form's submit event listener
  form.addEventListener('submit', function (event) {
    // Prevent the form's default behavior (page refresh)
    event.preventDefault()

    // Clear the containers before appending new results
    $('#more').empty()
    $('#less').empty()

    // Get the input value (remove commas for calculations)
    const salary = parseFloat(wageInput.value.replace(/,/g, ''))
    const selectElement = document.getElementById('currency-select')
    const selectedValue = selectElement.value

    // Calculate salary based on the selected currency
    let count_salary
    if (selectedValue === 'GBP') {
      count_salary = salary * 1
    } else if (selectedValue === 'EUR') {
      count_salary = salary / 1.2
    } else if (selectedValue === 'USD') {
      count_salary = salary / 1.3
    }

    // console.log('Calculated Salary:', count_salary)

    for (let i = 0; i < jsonData[0].length; i++) {
      const hours_in_uk = parseInt(count_salary / 29.98)

      const country_hours = parseInt(
        count_salary / jsonData[0][i].estimated_hourly_rate_gbp
      )
      const compare_hours = hours_in_uk - country_hours
      const country = jsonData[0][i].country

      let result_html = ''
      if (
        compare_hours < 0 &&
        !(selectedValue === 'USD' && jsonData[0][i].isHidden)
      ) {
        result_html = `
          <div class="country-item rounded-lg bg-white p-2 flex gap-2 items-center hover:bg-[#E97657] hover:text-white group">
            <img src="images/flags/${country.toLowerCase().replace(/ /g, '-')}.svg" alt="" class="w-8 h-8">
            <p class="font-semibold hidden group-hover:block">+${numberWithCommas(compare_hours * -1)} hours</p>
            <p class="font-semibold block group-hover:hidden">${country}</p>
          </div>
        `
        $('#more').append(result_html)
      } else if (
        compare_hours > 0 &&
        !(selectedValue === 'USD' && jsonData[0][i].isHidden)
      ) {
        result_html = `
          <div class="country-item rounded-lg bg-white p-2 flex gap-2 items-center hover:bg-[#B3C066] hover:text-white group">
            <img src="images/flags/${country.toLowerCase().replace(/ /g, '-')}.svg" alt="" class="w-8 h-8">
            <p class="font-semibold hidden group-hover:block">-${numberWithCommas(compare_hours)} hours</p>
            <p class="font-semibold block group-hover:hidden">${country}</p>
          </div>
        `
        $('#less').append(result_html)
      }
    }

    // Hide all but the first 5 items in each container
    const configureShowMoreButton = (containerId, buttonId) => {
      const container = document.getElementById(containerId)
      let children = Array.from(container.children) // Convert to an array

      if (containerId === 'more') {
        children.reverse()
        container.innerHTML = ''
        children.forEach((child) => container.appendChild(child))
      }

      if (window.innerWidth < 1024) {
        const maxToShow = 5

        if (children.length > maxToShow) {
          children.forEach((child, index) => {
            if (index >= maxToShow) {
              child.classList.add('hidden') // Add hidden class
            }
          })

          const showMoreBtn = document.createElement('button')
          showMoreBtn.id = buttonId
          showMoreBtn.className =
            'mt-4 px-4 py-2 bg-transparent text-white flex items-center justify-end'
          showMoreBtn.textContent = 'Show More +'
          container.after(showMoreBtn)

          let isExpanded = false

          showMoreBtn.addEventListener('click', () => {
            if (isExpanded) {
              children.forEach((child, index) => {
                if (index >= maxToShow) {
                  child.classList.add('hidden')
                }
              })
              showMoreBtn.textContent = 'Show More +'
            } else {
              children.forEach((child, index) => {
                if (index >= maxToShow) {
                  child.classList.remove('hidden')
                }
              })
              showMoreBtn.textContent = 'Show Less -'
            }
            isExpanded = !isExpanded
          })
        }
      }
    }

    configureShowMoreButton('more', 'show-more-btn-more')
    configureShowMoreButton('less', 'show-more-btn-less')

    $('#result').removeClass('hidden')
  })
})
