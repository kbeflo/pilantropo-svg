anime({
  targets: "#one .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1000,
  delay: function(e, a) {
    return 250 * a
  },
  direction: "normal"
}), anime({
  targets: "#two .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1000,
  delay: function(e, a) {
    return 250 * a
  },
  direction: "normal",
  delay: "500"
}), anime({
  targets: "#three .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1000,
  delay: function(e, a) {
    return 250 * a
  },
  direction: "normal",
  delay: "1000"
})
