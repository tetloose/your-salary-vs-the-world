export default function (...items) {
  // Remove the last item (Handlebars options object)
  items.pop()
  return items
}
