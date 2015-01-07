---
name: $not
heading: Return a subset of elements based on a specified exclusion filter from a specified element
variables:
  - { var: "sel", type: "selector, element", req: true }
  - { var: "filter", type: "selector, callback", req: true }
  - { var: "opt", type: "object" }
---