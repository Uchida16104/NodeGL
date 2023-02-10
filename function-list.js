function glslAxis(perspective) {
  if (perspective === "x") {
    return "st.x";
  } else if (perspective === "y") {
    return "st.y";
  } else if (perspective === "2x") {
    return "st.x*2.0";
  } else if (perspective === "pow(x,2)") {
    return "pow(st.x,2.0)";
  } else if (perspective === "x+y") {
    return "st.x+st.y";
  } else if (perspective === "x-y") {
    return "st.x-st.y";
  } else if (perspective === "x*y") {
    return "st.x*st.y";
  } else if (perspective === "x/y") {
    return "st.x/st.y";
  } else if (perspective === "y-x") {
    return "st.y-st.x";
  } else if (perspective === "y/x") {
    return "st.y/st.x";
  } else if (perspective === "2y") {
    return "st.y*2.0";
  } else if (perspective === "pow(y,2)") {
    return "pow(st.y,2.0)";
  } else {
    return perspective;
  }
}
function flash(fast0, fast1, fast2) {
  return solid(glslAxis("x"), glslAxis("y"), () => time * fast0)
    .diff(gradient(fast1))
    .colorama(fast2);
}
function list(s, t) {
  let sin = () => Math.sin(time * t);
  let cos = () => Math.cos(time * t);
  let tan = () => Math.tan(time * t);
  let asin = () => Math.asin(time * t);
  let acos = () => Math.acos(time * t);
  let atan = () => Math.atan(time * t);
  const ar = [sin(), cos(), tan(), asin(), acos(), atan()];
  return ar[s];
}
function easeInOut(k) {
  const linear = "linear";
  const sine = "sine";
  const easeInOut = "easeInOut";
  const easeInOutHalf = "easeInOutHalf";
  const easeInOutQuad = "easeInOutQuad";
  const easeInOutCubic = "easeInOutCubic";
  const easeInOutQuart = "easeInOutQuart";
  const easeInOutQuint = "easeInOutQuint";
  const easeInOutExpo = "easeInOutExpo";
  const easeInOutCirc = "easeInOutCirc";
  const easeInOutBack = "easeInOutBack";
  const easeInOutElastic = "easeInOutElastic";
  const easeInOutBounce = "easeInOutBounce";
  const array = [
    linear,
    sine,
    easeInOut,
    easeInOutHalf,
    easeInOutQuad,
    easeInOutCubic,
    easeInOutQuart,
    easeInOutQuint,
    easeInOutExpo,
    easeInOutCirc,
    easeInOutBack,
    easeInOutElastic,
    easeInOutBounce,
  ];
  return array[k];
}
function varDef(func2, func3, v) {
  func2 = [...Array(v).keys()];
  for (let u = 0; u <= v; u++) {
    func2[v] = func3(v);
  }
  return func2[v];
}
function funcAry(init, r, term, step0, step1, func0, func1) {
  let ary = [];
  for (let i = init; i <= r; i += step0) {
    ary.push(func0(i));
  }
  for (let j = r; j <= term; j += step1) {
    ary.push(func1(j));
  }
  return ary;
}
function randAry(m, mag) {
  let ay = [];
  for (let l = 0; l <= m; l++) {
    ay.push(l);
  }
  return ay[Math.floor(Math.random() * ay.length)] * mag;
}
function genAry(m, mag, rep) {
  let xy = [];
  for (let z = 0; z <= rep; z++) {
    xy.push(randAry(m, mag));
  }
  return xy;
}
function setLoop(speed0, speed1, speed2, speed3, ms) {
  let count = 0;
  let sf = [speed0, speed1, speed2, speed3];
  let o = [o0, o1, o2, o3];
  const countUp = () => {
    count++;
  };
  const intervalId = setInterval(() => {
    countUp();
    for (let i = 0; i < o.length; i++) {
      if (count % o.length == i) {
        speed = sf[i];
        render(o[i]);
      }
    }
  }, ms);
}
function pad(amount, output, form, inside, outside, breath) {
  return solid().diff(
    src(output)
      .pixelate(amount, amount)
      .mult(shape(form, inside, outside).repeat(amount, amount).invert())
      .diff(
        src(output)
          .scale(breath)
          .diff(src(output).scale(2 - breath))
      )
  );
}
function particle(output, breath) {
  return solid().diff(
    src(output)
      .scale(breath)
      .diff(src(output).scale(2 - breath))
  );
}
function rgba(output, red, green, blue, alpha) {
  return src(output).r(red).g(green).b(blue).a(alpha);
}
function hsb(output, hue, saturation, bright) {
  return src(output).hue(hue).saturate(saturation).brightness(bright);
}
function zebra(video, timesY, timesX, func4, speed4) {
  synth = () => video;
  return synth().modulateRepeatY(shape(2).repeatY(timesY), timesX, () =>
    func4(time * speed4)
  );
}
