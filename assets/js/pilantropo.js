anime({
  targets: '#one .lines path',
  translateX: [-23, 0], // from 100 to 250
  delay: 200,
  direction: 'normal',
  loop: false
});

anime({
  targets: "#two .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 2000,
  delay: function(e, a) {
    return 250 * a
  },
  direction: "normal",
  delay: "500"
}), anime({
  targets: "#three .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 2000,
  delay: function(e, a) {
    return 250 * a
  },
  direction: "normal",
  delay: "1000"
}),

anime({
  targets: "#two .lines path",
  fill: ["#fe0067", "#fff"],
  direction: "reverse",
  duration: 2500
})

anime({
  targets: "#three .lines path",
  fill: ["#fe0067", "#fff"],
  direction: "reverse",
  duration: 3000
})

anime({
  targets: "#ilantropo .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 2000,
  delay: function(e, a) {
    return 250 * a
  },
  direction: "normal",
  delay: "1500"
}),

anime({
  targets: "#ilantropo .lines path",
  fill: ["#fe0067", "#fff"],
  direction: "reverse",
  duration: 3000
})
