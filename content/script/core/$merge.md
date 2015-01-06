---
name: $merge
heading: Merge specified array with specified source array
variables:
  - { var: "arr", desc: "Target array", type: "array", req: true }
  - { var: "arr2", desc: "Source array", type: "array", req: true }
  - { var: "dup", desc: "Remove duplicates", type: "boolean", default: "false" }
---