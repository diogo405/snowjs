const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "25",
        firefox: "60",
        chrome: "60",
        safari: "10",
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };