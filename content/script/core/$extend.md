---
name: $extend
heading: Extend specified object with specified source object
variables:
  - { var: "obj", desc: "Target object", type: "object", req: true }
  - { var: "src", desc: "Source object", type: "object", req: true }
  - { var: "deep", desc: "Deep nesting", type: "boolean", default: "false" }
---