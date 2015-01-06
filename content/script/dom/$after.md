---
name: $after
heading: Insert specified element after specified element
variables:
  - { var: "sel", desc: "Source element", type: "selector, element", req: true }
  - { var: "pos", desc: "Target element", type: "selector, element", req: true }
  - { var: "rem", desc: "Remove target after target insertion", type: "boolean", default: "false" }
---