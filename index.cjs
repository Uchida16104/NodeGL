function glslAxis(perspective = "1.0") {
  if (perspective === "x") {
    return "st.x";
  } else if (perspective === "y") {
    return "st.y";
  } else if (perspective === "2x") {
    return "st.x*2.0";
  } else if (perspective === "x/2") {
    return "st.x/2.0";
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
  } else if (perspective === "y/2") {
    return "st.y/2.0";
  } else if (perspective === "pow(y,2)") {
    return "pow(st.y,2.0)";
  } else {
    return perspective;
  }
}
function flash(fast0 = 1, fast1 = 1, fast2 = 0.01) {
  return solid(glslAxis("x"), glslAxis("y"), () => time * fast0)
    .diff(gradient(fast1))
    .colorama(fast2);
}
function list(s = 0, t = 1) {
  let sin = () => Math.sin(time * t);
  let cos = () => Math.cos(time * t);
  let tan = () => Math.tan(time * t);
  let asin = () => Math.asin(time * t);
  let acos = () => Math.acos(time * t);
  let atan = () => Math.atan(time * t);
  const ar = [sin(), cos(), tan(), asin(), acos(), atan()];
  return ar[s];
}
function easeInOut(k = 0) {
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
function varDef(func2 = "hydra", func3 = Math.sin, v = 10) {
  func2 = [...Array(v).keys()];
  for (let u = 0; u <= v; u++) {
    func2[v] = func3(v);
  }
  return func2[v];
}
function funcAry(
  init = 0,
  r = 0.5,
  term = 1,
  step0 = 0.01,
  step1 = 0.1,
  func0 = Math.sin,
  func1 = Math.cos
) {
  let ary = [];
  for (let i = init; i <= r; i += step0) {
    ary.push(func0(i));
  }
  for (let j = r; j <= term; j += step1) {
    ary.push(func1(j));
  }
  return ary;
}
function randAry(m = 100, mag = 0.01) {
  let ay = [];
  for (let l = 0; l <= m; l++) {
    ay.push(l);
  }
  return ay[Math.floor(Math.random() * ay.length)] * mag;
}
function genAry(m = 100, mag = 0.01, rep = 10) {
  let xy = [];
  for (let z = 0; z <= rep; z++) {
    xy.push(randAry(m, mag));
  }
  return xy;
}
function setLoop(speed0 = 1, speed1 = 1, speed2 = 1, speed3 = 1, ms = 1000) {
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
function pad(
  amount = 10,
  output = o0,
  form = 4,
  inside = 0,
  outside = 1,
  breath = 0.99
) {
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
function particle(output = o0, breath = 0.99) {
  return solid().diff(
    src(output)
      .scale(breath)
      .diff(src(output).scale(2 - breath))
  );
}
function rgba(output = o0, red = 0, green = 0, blue = 0, alpha = 1) {
  return src(output).r(red).g(green).b(blue).a(alpha);
}
function hsb(output = o0, hue = 0.5, saturation = 0.5, bright = 0.5) {
  return src(output).hue(hue).saturate(saturation).brightness(bright);
}
function zebra(
  video = src(o0),
  timesY = 1,
  timesX = 1,
  func4 = Math.sin,
  speed4 = 0.1
) {
  synth = () => video;
  return synth().modulateRepeatY(shape(2).repeatY(timesY), timesX, () =>
    func4(time * speed4)
  );
}
function form(n = 4, k = 2, n0 = 0, n1 = 1, o = 60, p = 1 / 8, q = 300) {
  if (n % 2 === 1) {
    return osc(o, p, q)
      .kaleid(n)
      .rotate(Math.PI / 2)
      .mult(shape(n, n0, n1));
  } else if (n % Math.pow(2, k) === 0) {
    return osc(o, p, q)
      .kaleid(Math.pow(2, k))
      .rotate(Math.PI / Math.pow(2, k))
      .mult(shape(Math.pow(2, k)));
  } else if (n % 2 === 0) {
    return osc().kaleid(n).rotate(Math.PI).mult(shape(n, n0, n1));
  }
}
function rainbow(spectrum = 0) {
  red = () => solid(1, 0, 0);
  orange = () => solid(1, 0.5, 0);
  yellow = () => solid(1, 1, 0);
  green = () => solid(0, 1, 0);
  blue = () => solid(0, 0, 1);
  indigo = () => solid(75 / 255, 0, 130 / 255);
  violet = () => solid(238 / 255, 130 / 255, 238 / 255);
  let filter = [red(), orange(), yellow(), green(), blue(), indigo(), violet()];
  return filter[spectrum];
}
setFunction({
  name: "chroma",
  type: "color",
  inputs: [],
  glsl: `
    float maxrb = max(_c0.r, _c0.b);
    float k = smoothstep(0.0, 1.0, (_c0.g - maxrb) * 5.0);
    _c0.g = mix(_c0.g, maxrb * 0.8, k);
    return vec4(_c0.rgb, 1.0 - k);
  `,
});
setFunction({
  name: "swirl",
  type: "coord",
  inputs: [
    {
      name: "strength",
      type: "float",
      default: 1.0,
    },
  ],
  glsl: `
    vec2 pos = _st - vec2(0.5);
    float angle = strength * length(pos);
    float sinA = sin(angle);
    float cosA = cos(angle);
    return mat2(cosA, -sinA, sinA, cosA) * pos + vec2(0.5);
  `,
});
setFunction({
  name: "modulateGlitch",
  type: "combineCoord",
  inputs: [
    {
      name: "amount",
      type: "float",
      default: 0.05,
    },
  ],
  glsl: `
    vec2 offset = vec2(
      (fract(sin(dot(_st, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * amount,
      (fract(cos(dot(_st, vec2(93.9898, 67.233))) * 35758.5453) - 0.5) * amount
    );
    return _st + offset;
  `,
});
setFunction({
  name: "modulateWarp",
  type: "combineCoord",
  inputs: [
    {
      name: "intensity",
      type: "float",
      default: 0.3,
    },
  ],
  glsl: `
    vec2 uv = _st - 0.5;
    float distortion = sin(uv.x * 10.0) * sin(uv.y * 10.0) * intensity;
    return _st + vec2(distortion, distortion * 0.5);
  `,
});
setFunction({
  name: "polar",
  type: "coord",
  inputs: [],
  glsl: `
    vec2 uv = _st - 0.5;
    float r = length(uv);
    float a = atan(uv.y, uv.x);
    return vec2(r, a / 6.2831 + 0.5);
  `,
});
setFunction({
  name: "modulateSpiral",
  type: "combineCoord",
  inputs: [
    {
      name: "twist",
      type: "float",
      default: 5.0,
    },
  ],
  glsl: `
    vec2 uv = _st - 0.5;
    float angle = length(uv) * twist;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    return rot * uv + 0.5;
  `,
});
setFunction({
  name: "modulateShear",
  type: "combineCoord",
  inputs: [
    {
      name: "strength",
      type: "float",
      default: 0.2,
    },
  ],
  glsl: ` 
    return vec2(_st.x + _st.y * strength, _st.y);
  `,
});
setFunction({
  name: "modulateRandomNoise",
  type: "combineCoord",
  inputs: [
    {
      name: "scale",
      type: "float",
      default: 1.0,
    },
  ],
  glsl: `
    float noise = fract(sin(dot(_st, vec2(12.9898, 78.233))) * 43758.5453);
    return _st + vec2(noise * scale, noise * scale * 0.5);
  `,
});
setFunction({
  name: "visual",
  type: "src",
  inputs: [],
  glsl: `
    vec3 col = vec3(0.5 + 0.5 * cos(_st.x * 6.28318 + vec3(0.0, 2.0, 4.0)));
    return vec4(col, 1.0);
  `,
});
setFunction({
  name: "huecircle",
  type: "src",
  inputs: [],
  glsl: `
    vec2 pos = _st * 2.0 - 1.0;
    float angle = atan(pos.y, pos.x) / 6.28318 + 0.5;
    vec3 col = vec3(0.5 + 0.5 * cos(angle * 6.28318 + vec3(0.0, 2.0, 4.0)));
    return vec4(col, 1.0);
  `,
});
setFunction({
  name: "lightning",
  type: "src",
  inputs: [{ name: "scale", type: "float", default: 10.0 }],
  glsl: `
    float noise = fract(sin(dot(_st * scale, vec2(12.9898, 78.233))) * 43758.5453);
    float lightning = smoothstep(0.4, 0.41, noise) - smoothstep(0.41, 0.42, noise);
    return vec4(vec3(lightning), 1.0);
  `,
});
setFunction({
  name: "shake",
  type: "coord",
  inputs: [],
  glsl: `
    return vec2(_st.x + 0.5 * sin(time), _st.y);
  `,
});
setFunction({
  name: "modulateRainbow",
  type: "combineCoord",
  inputs: [],
  glsl: `
    return _st + 0.1 * sin(6.28318 * _st.y + time);
  `,
});
setFunction({
  name: "beam",
  type: "src",
  inputs: [],
  glsl: `
    float beam = abs(sin(time * 5.0)) * 0.05;
    float line = smoothstep(beam, beam + 0.01, abs(_st.x - 0.5));
    return vec4(vec3(line * 10.0, line * 0.2, line * 0.1), 1.0);
  `,
});
setFunction({
  name: "crystal",
  type: "coord",
  inputs: [],
  glsl: `
    vec2 p = _st * 2.0 - 1.0;
    float r = length(p);
    return _st + 0.1 * normalize(p) * sin(r * 10.0 - time);
  `,
});
setFunction({
  name: "fisheye",
  type: "coord",
  inputs: [],
  glsl: `
    vec2 p = _st * 2.0 - 1.0;
    float r = length(p);
    return _st * (1.0 + 0.5 * r);
  `,
});
setFunction({
  name: "echo",
  type: "coord",
  inputs: [],
  glsl: `
    return _st + 0.02 * sin(time * 2.0);
  `,
});
setFunction({
  name: "chorus",
  type: "coord",
  inputs: [],
  glsl: `
    return _st + vec2(0.02 * sin(time * 3.0), 0.02 * cos(time * 3.0));
  `,
});
setFunction({
  name: "vibrato",
  type: "coord",
  inputs: [],
  glsl: `
    return _st + 0.01 * sin(time * 6.0);
  `,
});
setFunction({
  name: "ringModulator",
  type: "src",
  inputs: [],
  glsl: `
    float baseFreq = 2.0;
    float harmonics[9];
    for (int i = 0; i < 8; i++) {
      harmonics[i] = baseFreq * float(i + 1);
    }
    harmonics[8] = baseFreq * sqrt(2.0); // トライトーン
    float mod = 0.0;
    for (int i = 0; i < 9; i++) {
      mod += sin(_st.x * harmonics[i] * 6.28318);
    }
    mod /= 9.0;
    return vec4(vec3(0.5 + 0.5 * mod), 1.0);
  `,
});
setFunction({
  name: "ringModulate",
  type: "coord",
  inputs: [],
  glsl: `
    float baseFreq = 2.0;
    float harmonics[9];
    for (int i = 0; i < 8; i++) {
      harmonics[i] = baseFreq * float(i + 1);
    }
    harmonics[8] = baseFreq * sqrt(2.0);
    float mod = 0.0;
    for (int i = 0; i < 9; i++) {
      mod += sin(time * harmonics[i] * 6.28318);
    }
    mod /= 9.0;
    return _st + vec2(0.01 * mod, 0.01 * mod);
  `,
});
setFunction({
  name: "modulateRingModulator",
  type: "combineCoord",
  inputs: [],
  glsl: `
    float baseFreq = 2.0;
    float harmonics[9];
    for (int i = 0; i < 8; i++) {
      harmonics[i] = baseFreq * float(i + 1);
    }
    harmonics[8] = baseFreq * sqrt(2.0);
    float mod = 0.0;
    for (int i = 0; i < 9; i++) {
      mod += sin(time * harmonics[i] * 6.28318);
    }
    mod /= 9.0;
    return _st + vec2(0.02 * sin(time * 3.0 + mod), 0.02 * cos(time * 3.0 + mod));
  `,
});
setFunction({
  name: "sine",
  type: "src",
  inputs: [
    { name: "frequency", type: "float", default: 2.0 },
    { name: "amplitude", type: "float", default: 0.5 },
  ],
  glsl: `
    float wave = amplitude * sin(_st.x * frequency * 6.28318 + time);
    return vec4(vec3(0.5 + 0.5 * wave), 1.0);
  `,
});
setFunction({
  name: "saw",
  type: "src",
  inputs: [
    { name: "frequency", type: "float", default: 2.0 },
    { name: "amplitude", type: "float", default: 0.5 },
  ],
  glsl: `
    float wave = amplitude * (fract(_st.x * frequency + time) * 2.0 - 1.0);
    return vec4(vec3(0.5 + 0.5 * wave), 1.0);
  `,
});
setFunction({
  name: "triangle",
  type: "src",
  inputs: [
    { name: "frequency", type: "float", default: 2.0 },
    { name: "amplitude", type: "float", default: 0.5 },
  ],
  glsl: `
    float wave = amplitude * abs(mod(_st.x * frequency + time, 2.0) - 1.0) * 2.0 - 1.0;
    return vec4(vec3(0.5 + 0.5 * wave), 1.0);
  `,
});
setFunction({
  name: "pulse",
  type: "src",
  inputs: [
    { name: "frequency", type: "float", default: 2.0 },
    { name: "amplitude", type: "float", default: 0.5 },
  ],
  glsl: `
    float wave = amplitude * (mod(_st.x * frequency + time, 1.0) < 0.5 ? 1.0 : -1.0);
    return vec4(vec3(0.5 + 0.5 * wave), 1.0);
  `,
});
setFunction({
  name: "square",
  type: "src",
  inputs: [
    { name: "frequency", type: "float", default: 2.0 },
    { name: "amplitude", type: "float", default: 0.5 },
  ],
  glsl: `
    float wave = amplitude * sign(sin(_st.x * frequency * 6.28318 + time));
    return vec4(vec3(0.5 + 0.5 * wave), 1.0);
  `,
});
setFunction({
  name: "sand",
  type: "src",
  inputs: [{ name: "density", type: "float", default: 10.0 }],
  glsl: `
    float noise = fract(sin(dot(_st * density, vec2(12.9898, 78.233))) * 43758.5453);
    return vec4(vec3(noise), 1.0);
  `,
});
setFunction({
  name: "chaos",
  type: "src",
  inputs: [
    {
      name: "branches",
      type: "float",
      default: 8.0,
    },
  ],
  glsl: `
    vec2 uv = _st * 2.0 - 1.0;
    float angle = atan(uv.y, uv.x);
    float radius = length(uv);
    float chaos = sin(angle * branches + sin(radius * 10.0 + cos(time)) * 3.0 - sin(time)) * 0.5 + 0.5;
    vec3 color = vec3(chaos*cos(time), chaos * 0.7*sin(time), chaos * 0.4*time);
    return vec4(color, 1.0);
  `,
});
setFunction({
  name: "lissajous",
  type: "src",
  inputs: [],
  glsl: `float x = sin(time * 2.0) * 0.5 + 0.5; float y = cos(time * 3.0) * 0.5 + 0.5; return vec4(x, y, 1.0 - x * y, 1.0);`,
});
setFunction({
  name: "laser",
  type: "color",
  inputs: [],
  glsl: `vec3 laser = vec3(cos(time), sin(time), cos(time/10.0)) * sin(time * 10.0); return vec4(laser, 1.0);`,
});
setFunction({
  name: "lissajouslaser",
  type: "src",
  inputs: [],
  glsl: `
    vec2 uv = _st * 2.0 - 1.0;
    float lissajousX = sin(3.0 * uv.y + time * 1.5);
    float lissajousY = cos(4.0 * uv.x + time * 1.2);
    float beam = exp(-abs(lissajousX - lissajousY) * 10.0);
    return vec4(vec3(beam, 0.0, 1.0), 1.0);
  `,
});
setFunction({
  name: "sphere",
  type: "src",
  inputs: [],
  glsl: `
  vec2 uv = (gl_FragCoord.xy / resolution.xy) * 2.0 - 1.0;
  uv.x *= resolution.x / resolution.y;
  float r = length(uv);
  float mask = smoothstep(1.0, 0.98, r);
  float clamped = clamp(r, 0.0, 1.0);
  float z = sqrt(1.0 - clamped * clamped);
  vec3 normal = normalize(vec3(uv, z));
  vec3 light = normalize(vec3(0.5, 0.8, 1.0));
  float diff = max(dot(normal, light), 0.0);
  vec3 col = mix(vec3(0.1, 0.1, 0.1), vec3(1.0, 1.0, 1.0), diff);
  return vec4(col * mask, 1.0);
  `,
});
setFunction({
  name: "flower",
  type: "src",
  inputs: [],
  glsl: `
  vec2 uv = (gl_FragCoord.xy / resolution.xy) * 2.0 - 1.0;
  uv.x *= resolution.x / resolution.y;
  float t = time;
  float r = length(uv);
  float angle = atan(uv.y, uv.x);
  float burst = abs(sin(10.0 * angle + t * 5.0));
  float intensity = smoothstep(0.2, 0.0, r) * burst;
  vec3 col = vec3(sin(t * 3.0 + angle * 2.0) * 0.5 + 0.5, sin(t * 2.0 + angle * 3.0) * 0.5 + 0.5, sin(t + angle) * 0.5 + 0.5);
  return vec4(col * intensity, 1.0);
  `,
});
setFunction({
  name: "oil",
  type: "color",
  inputs: [],
  glsl: `
    vec3 col = _c0.rgb;
    float noise = fract(sin(dot(col, vec3(12.9898,78.233,37.719)))*43758.5453);
    vec3 tone = pow(col, vec3(1.2));
    vec3 result = mix(tone, tone * noise, 0.3);
    return vec4(result, _c0.a);
    `,
});
setFunction({
  name: "watercolor",
  type: "color",
  inputs: [],
  glsl: `
  vec3 col = _c0.rgb;
    float noise = fract(sin(dot(col, vec3(12.9898,78.233,37.719)))*43758.5453);
    vec3 soft = smoothstep(0.0, 1.0, col);
    vec3 result = mix(soft, mix(soft, vec3(1.0) - soft, noise * 0.2), 0.5);
    return vec4(result, _c0.a);
    `,
});
setFunction({
  name: "ink",
  type: "color",
  inputs: [],
  glsl: `
  float gray = dot(_c0.rgb, vec3(0.299,0.587,0.114));
    float noise = fract(sin(gray * 12.9898) * 43758.5453);
    gray = smoothstep(0.3, 0.7, gray + noise * 0.2);
    return vec4(vec3(gray), _c0.a);
    `,
});
setFunction({
  name: "parametriclaser",
  type: "src",
  inputs: [
    {
      name: "x",
      type: "float",
      default: "sqrt(0.5)*cos(time)",
    },
    {
      name: "y",
      type: "float",
      default: "sqrt(0.5)*sin(time)",
    },
    {
      name: "thinness",
      type: "float",
      default: 100.0,
    },
    {
      name: "intensity",
      type: "float",
      default: 0.125,
    },
    {
      name: "r",
      type: "float",
      default: 1.0,
    },
    {
      name: "g",
      type: "float",
      default: 1.0,
    },
    {
      name: "b",
      type: "float",
      default: 1.0,
    },
  ],
  glsl: `
    vec2 uv = _st * 2.0 - 1.0;
    float d = length(uv - vec2(x, y));
    float beam = exp(-1.0 * thinness * d) * intensity;
    vec3 color = vec3(beam * r, beam * g, beam * b);
    return vec4(color, 1.0);
  `,
});
function repeatoperator(operator, parameterFn, count, stream) {
  for (let i = 0; i < count; i++) {
    stream = stream[operator](parameterFn());
  }
  return stream;
}
function delay(wait, synth, ms, output) {
  output = typeof output !== "undefined" ? output : o0;
  const fallback = synth.inputs && synth.inputs[0] ? synth.inputs[0] : wait;
  return {
    out: function () {
      setTimeout(() => {
        synth.out(output);
      }, ms);
      return fallback.out(output);
    },
  };
}
setFunction({
  name: "disassemble",
  type: "color",
  inputs: [
    {
      type: "float",
      name: "depthFactor",
      default: 0.5,
    },
    {
      type: "float",
      name: "timeSpeed",
      default: 1.0,
    },
  ],
  glsl: `
    vec2 uv = _st;
    float depth = texture2D(_c0, uv).r;
    float offset = sin(time * timeSpeed + depth * depthFactor) * 0.05;
    uv.x += offset;
    uv.y += offset;
    vec4 color = texture2D(_c0, uv);
    return color;
  `,
});
setFunction({
  name: "split",
  type: "coord",
  inputs: [
    {
      type: "float",
      name: "splitIntensity",
      default: 0.3,
    },
    {
      type: "float",
      name: "timeSpeed",
      default: 1.0,
    },
  ],
  glsl: `
    vec2 uv = _st;
    float depth = texture2D(_c0, uv).r;
    float angle = time * timeSpeed + depth * 3.1415;
    float offsetX = cos(angle) * splitIntensity;
    float offsetY = sin(angle) * splitIntensity;
    if (mod(gl_FragCoord.y, 2.0) < 1.0) {
      uv.x += offsetX;
    } else {
      uv.y += offsetY;
    }
    return uv;
  `,
});
setFunction({
  name: "painting",
  type: "color",
  inputs: [
    { type: "float", name: "romanesque_textureScale", default: 4.0 },
    { type: "float", name: "romanesque_darkness", default: 0.5 },
    { type: "float", name: "renaissance_shadowIntensity", default: 0.7 },
    { type: "float", name: "renaissance_lightDirectionX", default: 0.5 },
    { type: "float", name: "renaissance_lightDirectionY", default: 0.5 },
    { type: "float", name: "baroque_contrast", default: 1.5 },
    { type: "float", name: "baroque_spotlightX", default: 0.5 },
    { type: "float", name: "baroque_spotlightY", default: 0.5 },
    { type: "float", name: "romanticism_lightIntensity", default: 1.2 },
    { type: "float", name: "romanticism_saturation", default: 1.3 },
    { type: "float", name: "barbizon_warmth", default: 0.2 },
    { type: "float", name: "barbizon_softFocus", default: 0.1 },
    { type: "float", name: "metaphysical_shadowIntensity", default: 0.7 },
    { type: "float", name: "metaphysical_desaturation", default: 0.5 },
  ],
  glsl: `
    vec2 uv = gl_FragCoord.xy / resolution.xy * romanesque_textureScale;
    float stonePattern = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
    vec3 stoneColor = vec3(0.6, 0.5, 0.4) * (1.0 - romanesque_darkness * stonePattern);
    vec4 res = vec4(stoneColor * _c0.rgb, _c0.a);
    uv = gl_FragCoord.xy / resolution.xy;
    vec2 lightDir = normalize(vec2(renaissance_lightDirectionX, renaissance_lightDirectionY));
    float lighting = dot(uv, lightDir) * 0.5 + 0.5;
    vec3 shadedColor = mix(res.rgb * renaissance_shadowIntensity, res.rgb, lighting);
    res = vec4(shadedColor, res.a);
    float dist = distance(uv, vec2(baroque_spotlightX, baroque_spotlightY));
    float spotlight = smoothstep(0.5, 0.2, dist);
    vec3 contrasted = (res.rgb - 0.5) * baroque_contrast + 0.5;
    vec3 finalColor = mix(contrasted, res.rgb, spotlight);
    res = vec4(finalColor, res.a);
    vec3 color = res.rgb;
    vec3 light = vec3(0.5, 0.5, 0.5) * romanticism_lightIntensity;
    color = mix(color, light, 0.5);
    float gray = dot(color, vec3(0.299, 0.587, 0.114));
    color = mix(vec3(gray), color, romanticism_saturation);
    res = vec4(color, res.a);
    color = res.rgb + vec3(barbizon_warmth, barbizon_warmth * 0.5, 0.0);
    color = mix(color, vec3(0.5), barbizon_softFocus);
    res = vec4(color, res.a);
    color = res.rgb;
    float lum = dot(color, vec3(0.299, 0.587, 0.114));
    if (lum < 0.5) { color *= metaphysical_shadowIntensity; }
    color = mix(color, vec3(lum), metaphysical_desaturation);
    res = vec4(color, res.a);
    return res;
  `,
});
setFunction({
  name: "over",
  type: "color",
  inputs: [
    { type: "float", name: "noiseScale", default: 1.0 },
    { type: "float", name: "grainIntensity", default: 0.3 },
    { type: "float", name: "edgeStrength", default: 1.0 },
    { type: "float", name: "shade", default: 0.6 },
  ],
  glsl: `
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec3 col = _c0.rgb;
    float lum = dot(col, vec3(0.299, 0.587, 0.114));
    float dx = 1.0 / resolution.x;
    float dy = 1.0 / resolution.y;
    float lumLeft = dot(texture2D(tex0, uv + vec2(-dx, 0.0)).rgb, vec3(0.299, 0.587, 0.114));
    float lumRight = dot(texture2D(tex0, uv + vec2(dx, 0.0)).rgb, vec3(0.299, 0.587, 0.114));
    float lumUp = dot(texture2D(tex0, uv + vec2(0.0, dy)).rgb, vec3(0.299, 0.587, 0.114));
    float lumDown = dot(texture2D(tex0, uv + vec2(0.0, -dy)).rgb, vec3(0.299, 0.587, 0.114));
    float edge = abs(lumLeft - lumRight) + abs(lumUp - lumDown);
    edge = clamp(edge * edgeStrength, 0.0, 1.0);
    float noise = fract(sin(dot(uv * noiseScale + time, vec2(12.9898, 78.233))) * 43758.5453);
    float grain = (noise - 0.5) * grainIntensity;
    float finalLum = lum * (1.0 - edge) + grain;
    finalLum = mix(finalLum, lum, shade);
    return vec4(vec3(finalLum), _c0.a);
  `,
});
setFunction({
  name: "sketch",
  type: "color",
  inputs: [
    {
      type: "float",
      name: "edgeStrength",
      default: 1.0,
    },
    {
      type: "float",
      name: "noiseScale",
      default: 1.0,
    },
    {
      type: "float",
      name: "noiseIntensity",
      default: 0.5,
    },
    {
      type: "float",
      name: "paperTexture",
      default: 0.3,
    },
  ],
  glsl: `
    vec3 color = _c0.rgb;
    float lum = dot(color, vec3(0.299, 0.587, 0.114));
    float edge = smoothstep(0.2, 0.8, abs(lum - 0.5)) * edgeStrength;
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    float noise = fract(sin(dot(uv * noiseScale + time, vec2(12.9898,78.233))) * 43758.5453);
    float paper = fract(sin(dot(uv * 100.0, vec2(12.9898,78.233))) * 43758.5453);
    vec3 sketch = mix(vec3(1.0 - edge), vec3(noise), noiseIntensity);
    sketch = mix(sketch, vec3(paper), paperTexture);
    return vec4(sketch, _c0.a);
  `,
});
setFunction({
	name: 'fractal',
	type: 'src',
	inputs: [{
			type: 'float',
			name: 'len',
			default: 0.5
		},
		{
			type: 'float',
			name: 'lr',
			default: 0.7
		},
		{
			type: 'float',
			name: 'rr',
			default: 0.7
		},
		{
			type: 'float',
			name: 'th',
			default: 0.5
		},
		{
			type: 'float',
			name: 'n',
			default: 6
		},
		{
			type: 'float',
			name: 'k',
			default: 10
		},
	],
	glsl: `
    vec2 uv = (gl_FragCoord.xy / resolution.xy) * 2.0 - 1.0;
    uv.x *= resolution.x / resolution.y;
    vec3 col = vec3(0.0);
    for(int b = 0; b < 2; b++){
      vec2 p     = uv;
      float sc   = len;
      float ag   = (b == 0 ?  th : -th) * sin(time);
      float rat  = (b == 0 ?  lr :  rr);
      for(int i = 0; i < 1000000000; i++){
        if(i >= int(n)) break;
        float d = length(vec2(p.x, p.y - sc * 0.5)) - 0.01;
        col += vec3(smoothstep(0.01, 0.0, d));
        p = mat2(cos(ag), -sin(ag),
                 sin(ag),  cos(ag))
            * (p - vec2(0.0, sc));
        sc    *= rat;
        ag    *= 0.9;
      }
    }
    return vec4(col, 1.0);
  `
});
setFunction({
	name: 'jigsawPauseShift',
	type: 'combineCoord',
	inputs: [{
			type: 'float',
			name: 'tilesX',
			default: 4
		},
		{
			type: 'float',
			name: 'tilesY',
			default: 4
		},
		{
			type: 'float',
			name: 'amplitude',
			default: 0.2
		},
		{
			type: 'float',
			name: 'pauseDuration',
			default: 1.0
		},
		{
			type: 'float',
			name: 'speed',
			default: 0.1
		}
	],
	glsl: `
    vec2 st = _st;
    vec2 tile = floor(st * vec2(tilesX, tilesY));
    vec2 tileSize = vec2(1.0 / tilesX, 1.0 / tilesY);
    float seedX = fract(sin(dot(tile, vec2(12.9898,78.233))) * 43758.5453);
    float seedY = fract(sin(dot(tile, vec2(93.9898,67.345))) * 43758.5453);
    vec2 randDir = vec2(seedX*2.0-1.0, seedY*2.0-1.0);
    float phase = fract((time + (tile.x + tile.y)) / pauseDuration);
    float active = step(phase, 0.5);
    vec2 offset = randDir * amplitude * active;
    float t = clamp(1.0 - (time * speed), 0.0, 1.0);
    st += offset * t;
    return st;
  `
});
setFunction({
	name: 'gestalt',
	type: 'combineCoord',
	inputs: [{
			type: 'float',
			name: 'multiple',
			default: 1.0
		},
		{
			type: 'float',
			name: 'offset',
			default: 1.0
		},
		{
			type: 'float',
			name: 'rotateMultiple',
			default: 1.0
		},
		{
			type: 'float',
			name: 'rotateOffset',
			default: 0.0
		},
		{
			type: 'float',
			name: 'tilesX',
			default: 6.0
		},
		{
			type: 'float',
			name: 'tilesY',
			default: 6.0
		},
		{
			type: 'float',
			name: 'jitter',
			default: 0.12
		},
		{
			type: 'float',
			name: 'warp',
			default: 0.30
		},
		{
			type: 'float',
			name: 'phaseSpeed',
			default: 0.6
		},
		{
			type: 'float',
			name: 'pauseDuration',
			default: 1.0
		}
	],
	glsl: `
    vec2 st = _st - vec2(0.5);

    float safeTilesX = max(1.0, tilesX);
    float safeTilesY = max(1.0, tilesY);
    float safePause = max(0.0001, pauseDuration);
    float safeMultiple = max(0.0001, multiple);
    float safeOffset = max(0.0001, offset);

    float angle = rotateOffset + (_c0.z * rotateMultiple) + sin(time * max(0.0001, phaseSpeed)) * 0.5;
    mat2 R = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    st = R * st;

    vec2 scale = vec2(safeOffset + safeMultiple * _c0.r, safeOffset + safeMultiple * _c0.g);

    vec2 uv = st + vec2(0.5);
    vec2 tilePos = floor(uv * vec2(safeTilesX, safeTilesY));
    vec2 tileFrac = fract(uv * vec2(safeTilesX, safeTilesY)) - vec2(0.5);

    float seed1 = fract(sin(dot(tilePos , vec2(12.9898,78.233))) * 43758.5453);
    float seed2 = fract(sin(dot(tilePos , vec2(93.9898,67.345))) * 24634.6345);
    vec2 randDir = vec2(seed1 * 2.0 - 1.0, seed2 * 2.0 - 1.0);

    float phase = fract((time + (tilePos.x + tilePos.y)) / safePause);
    float hold = step(phase, 0.5); // 1.0 when in hold, else 0.0

    vec2 jitterOff = randDir * jitter * hold;

    float lumin = dot(_c0.rgb, vec3(0.2126, 0.7152, 0.0722));
    float localWarp = (lumin * 2.0 - 1.0); // -1 .. 1

    st += jitterOff + tileFrac * warp * localWarp;

    st = st / scale;

    st += vec2(0.5);
    st = fract(st);

    float mx = mod(tilePos.x, 2.0);
    float my = mod(tilePos.y, 2.0);
    if (mx > 0.5) st.x = 1.0 - st.x;
    if (my > 0.5) st.y = 1.0 - st.y;

    return st;
  `
});
setFunction({
  name: 'chaosDistort',
  type: 'combineCoord',
  inputs: [
    {
      type: 'float',
      name: 'fadeAmount',
      default: 0.3
    },
    {
      type: 'float',
      name: 'distortStrength',
      default: 0.5
    },
    {
      type: 'float',
      name: 'chromaShift',
      default: 0.02
    },
    {
      type: 'float',
      name: 'decayRate',
      default: 0.8
    },
    {
      type: 'float',
      name: 'glitchIntensity',
      default: 0.4
    },
    {
      type: 'float',
      name: 'illusionSpeed',
      default: 1.0
    }
  ],
  glsl: `
    vec2 st = _st;
    vec2 center = vec2(0.5);
    vec2 toCenter = st - center;
    float dist = length(toCenter);
    float angle = atan(toCenter.y, toCenter.x);
    
    float t = time * illusionSpeed;
    float glitchTrigger = step(0.97, fract(sin(floor(t * 10.0) * 43758.5453)));
    
    float blockY = floor(st.y * 20.0);
    float blockSeed = fract(sin(blockY * 78.233 + floor(t)) * 43758.5453);
    float horizontalShift = (blockSeed - 0.5) * glitchIntensity * glitchTrigger;
    st.x += horizontalShift;
    
    float noise1 = fract(sin(dot(st * 10.0 + t, vec2(12.9898, 78.233))) * 43758.5453);
    float noise2 = fract(sin(dot(st * 15.0 - t * 0.5, vec2(93.9898, 67.345))) * 43758.5453);
    
    vec2 waveDistort = vec2(
      sin(st.y * 10.0 + t * 2.0) * distortStrength * 0.05,
      cos(st.x * 10.0 + t * 1.5) * distortStrength * 0.05
    );
    st += waveDistort;
    
    float spiralAngle = angle + dist * 5.0 + t;
    vec2 spiralOffset = vec2(
      cos(spiralAngle) * dist * distortStrength * 0.1,
      sin(spiralAngle) * dist * distortStrength * 0.1
    );
    st += spiralOffset;
    
    float turbulence = (noise1 - 0.5) * distortStrength * 0.1;
    st += vec2(turbulence, turbulence * 0.7);
    
    float pixelDecay = pow(decayRate, t * 0.5);
    float decayNoise = fract(sin(dot(floor(st * 50.0), vec2(12.9898, 78.233))) * 43758.5453);
    float decayMask = step(pixelDecay, decayNoise);
    st = mix(st, center + (st - center) * 0.9, decayMask * 0.3);
    
    float chromaAngle = t * 2.0;
    vec2 rgShift = vec2(cos(chromaAngle), sin(chromaAngle)) * chromaShift;
    vec2 baShift = vec2(cos(chromaAngle + 2.094), sin(chromaAngle + 2.094)) * chromaShift;
    
    float colorShift = _c0.r * 0.299 + _c0.g * 0.587 + _c0.b * 0.114;
    st += rgShift * colorShift;
    
    float scanline = sin(st.y * 200.0 + t * 5.0) * 0.5 + 0.5;
    float scanlineGlitch = mix(1.0, scanline, glitchIntensity * 0.3);
    
    vec2 uvR = st + rgShift;
    vec2 uvB = st - baShift;
    
    float moirePattern = sin(st.x * 100.0 + t) * sin(st.y * 100.0 - t);
    st += vec2(moirePattern * 0.002);
    
    float kaleidoSeg = 6.0;
    float kaleidoAngle = mod(atan(toCenter.y, toCenter.x), 6.28318 / kaleidoSeg);
    if(mod(floor(atan(toCenter.y, toCenter.x) / (6.28318 / kaleidoSeg)), 2.0) > 0.5) {
      kaleidoAngle = (6.28318 / kaleidoSeg) - kaleidoAngle;
    }
    vec2 kaleidoOffset = vec2(cos(kaleidoAngle), sin(kaleidoAngle)) * dist * illusionSpeed * 0.05;
    st += kaleidoOffset * sin(t);
    
    float feedback = fract(sin(dot(st, vec2(12.9898, 78.233)) + t) * 43758.5453);
    st = mix(st, st + (feedback - 0.5) * 0.02, glitchIntensity);
    
    st = clamp(st, vec2(0.0), vec2(1.0));
    
    return st;
  `
});
setFunction({
  name: 'physicalGlitchIllusion',
  type: 'combineCoord',
  inputs: [
    {
      type: 'float',
      name: 'displacementIntensity',
      default: 0.3
    },
    {
      type: 'float',
      name: 'glitchFrequency',
      default: 2.0
    },
    {
      type: 'float',
      name: 'glitchAmount',
      default: 0.15
    },
    {
      type: 'float',
      name: 'rotationSpeed',
      default: 0.1
    },
    {
      type: 'float',
      name: 'scaleOscillation',
      default: 0.2
    },
    {
      type: 'float',
      name: 'chromaticAberration',
      default: 0.02
    },
    {
      type: 'float',
      name: 'warpIntensity',
      default: 0.5
    }
  ],
  glsl: `
    vec2 st = _st;
    vec2 center = vec2(0.5);
    
    float glitchTrigger = step(0.95, fract(sin(floor(time * glitchFrequency) * 12.9898) * 43758.5453));
    float glitchLine = floor(st.y * 20.0 + time * 5.0);
    float glitchOffset = fract(sin(glitchLine * 78.233) * 43758.5453) * 2.0 - 1.0;
    st.x += glitchOffset * glitchAmount * glitchTrigger;
    
    float displacementAngle = _c0.r * 6.28318;
    float displacementRadius = _c0.g * displacementIntensity;
    vec2 displacement = vec2(cos(displacementAngle), sin(displacementAngle)) * displacementRadius;
    st += displacement;
    
    vec2 centered = st - center;
    float angle = time * rotationSpeed + _c0.b * 3.14159;
    mat2 rotation = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    centered = rotation * centered;
    
    float scaleWave = 1.0 + sin(time * 2.0 + _c0.r * 6.28318) * scaleOscillation;
    centered *= scaleWave;
    
    float warpPhase = time * 0.5;
    float warpX = sin(centered.y * 10.0 + warpPhase) * warpIntensity * _c0.g;
    float warpY = cos(centered.x * 10.0 + warpPhase) * warpIntensity * _c0.b;
    centered += vec2(warpX, warpY) * 0.1;
    
    st = centered + center;
    
    float pixelBreak = step(0.98, fract(sin(dot(floor(st * 50.0), vec2(12.9898, 78.233))) * 43758.5453));
    st += vec2(pixelBreak * 0.1);
    
    return st;
  `
});
setFunction({
  name: 'collapseGlitchIllusion',
  type: 'combineCoord',
  inputs: [
    { type: 'float', name: 'tiles', default: 6 },
    { type: 'float', name: 'rotateAmp', default: 2.0 },
    { type: 'float', name: 'scaleAmp', default: 1.2 },
    { type: 'float', name: 'pauseRate', default: 0.5 },
    { type: 'float', name: 'glitchAmp', default: 0.08 }
  ],
  glsl: `
    vec2 st = _st;

    /* --- tile split --- */
    vec2 grid = vec2(tiles);
    vec2 tile = floor(st * grid);
    vec2 tileUV = fract(st * grid);

    /* --- stable random per tile --- */
    float rnd = fract(
      sin(dot(tile, vec2(127.1, 311.7))) * 43758.5453
    );

    /* --- pause illusion (time quantization) --- */
    float t = floor(time * pauseRate) / pauseRate;

    /* --- safe noise input --- */
    vec3 n = clamp(_c0.rgb, 0.0, 1.0);

    /* --- rotation --- */
    float angle = (rnd - 0.5) * rotateAmp
                + n.r * rotateAmp * sin(t);

    mat2 rot = mat2(
      cos(angle), -sin(angle),
      sin(angle),  cos(angle)
    );

    /* --- scale collapse --- */
    float scale = 1.0 / max(
      1.0 + (n.g - 0.5) * scaleAmp,
      0.0001
    );

    /* --- glitch offset --- */
    vec2 glitch = vec2(
      (n.r - 0.5),
      (n.b - 0.5)
    ) * glitchAmp * step(0.6, rnd);

    /* --- apply transform --- */
    tileUV -= 0.5;
    tileUV = rot * tileUV;
    tileUV *= scale;
    tileUV += 0.5 + glitch;

    /* --- reassemble --- */
    st = (tile + tileUV) / grid;

    return st;
  `
});
setFunction({
  name: 'totalVisualChaos',
  type: 'combineCoord',
  inputs: [
    { type: 'float', name: 'tiles', default: 8 },
    { type: 'float', name: 'glitchIntensity', default: 0.3 },
    { type: 'float', name: 'distortAmount', default: 0.15 },
    { type: 'float', name: 'chromaShift', default: 0.02 },
    { type: 'float', name: 'fadeAmount', default: 0.5 },
    { type: 'float', name: 'speed', default: 0.2 }
  ],
  glsl: `
    vec2 st = _st;
    vec2 center = vec2(0.5);
    
    vec2 tile = floor(st * tiles);
    float tileHash = fract(sin(dot(tile, vec2(12.9898, 78.233))) * 43758.5453);
    float timeHash = fract(time * speed + tileHash * 10.0);
    
    float glitchTrigger = step(0.95, fract(timeHash * 3.0));
    vec2 glitchOffset = vec2(
      (fract(sin(tile.x * 127.1) * 43758.5) - 0.5) * glitchIntensity * glitchTrigger,
      (fract(sin(tile.y * 269.5) * 43758.5) - 0.5) * glitchIntensity * glitchTrigger
    );
    
    float angle = sin(time * speed + tileHash * 6.28) * distortAmount;
    float dist = length(st - center);
    vec2 distortOffset = (st - center) * sin(dist * 10.0 - time * speed) * distortAmount;
    
    float swapTrigger = step(0.8, tileHash + sin(time * speed * 2.0) * 0.3);
    vec2 swapTile = tile + vec2(
      floor((fract(sin(tile.y * 93.9) * 43758.5) - 0.5) * 2.0),
      floor((fract(sin(tile.x * 67.3) * 43758.5) - 0.5) * 2.0)
    ) * swapTrigger;
    vec2 tilePos = fract(st * tiles);
    st = (swapTile + tilePos) / tiles;
    
    st += glitchOffset + distortOffset;
    
    float decay = 1.0 - fadeAmount * (1.0 - cos(time * speed)) * 0.5;
    st = mix(st, center, (1.0 - decay) * 0.3);
    
    vec2 chromaDir = normalize(st - center);
    st += chromaDir * chromaShift * sin(time * speed + dist * 5.0);
    
    float breakdown = step(0.98, fract(tileHash + time * speed * 0.5));
    st += vec2(
      (fract(sin(time * 91.3) * 43758.5) - 0.5) * breakdown * 0.5,
      (fract(sin(time * 71.7) * 43758.5) - 0.5) * breakdown * 0.5
    );
    
    return st;
  `
});
setFunction({
  name: 'totalDestruction',
  type: 'combineCoord',
  inputs: [
    {
      type: 'float',
      name: 'glitchIntensity',
      default: 0.5
    },
    {
      type: 'float',
      name: 'colorShift',
      default: 0.3
    },
    {
      type: 'float',
      name: 'distortAmount',
      default: 0.2
    },
    {
      type: 'float',
      name: 'fadeLevel',
      default: 0.3
    },
    {
      type: 'float',
      name: 'tilesX',
      default: 8
    },
    {
      type: 'float',
      name: 'tilesY',
      default: 8
    },
    {
      type: 'float',
      name: 'speed',
      default: 0.5
    }
  ],
  glsl: `
    vec2 st = _st;
    vec2 originalSt = st;
    
    float t = time * speed;
    
    vec2 tile = floor(st * vec2(tilesX, tilesY));
    float tileHash = fract(sin(dot(tile, vec2(12.9898, 78.233))) * 43758.5453);
    float tileHash2 = fract(sin(dot(tile, vec2(93.9898, 67.345))) * 43758.5453);
    
    float glitchTrigger = step(0.95, fract(tileHash + t * 0.1));
    vec2 glitchOffset = vec2(
      fract(sin(t * 10.0 + tileHash * 100.0)) * 2.0 - 1.0,
      fract(cos(t * 10.0 + tileHash2 * 100.0)) * 2.0 - 1.0
    ) * glitchIntensity * glitchTrigger;
    
    st += glitchOffset;
    
    float distortPhase = t + tileHash * 6.28318;
    vec2 center = st - vec2(0.5);
    float dist = length(center);
    float angle = atan(center.y, center.x);
    
    angle += sin(distortPhase) * distortAmount * (1.0 + tileHash);
    dist += sin(distortPhase * 2.0 + tileHash * 10.0) * distortAmount * 0.1;
    
    st = vec2(cos(angle), sin(angle)) * dist + vec2(0.5);
    
    float swapTrigger = step(0.8, fract(tileHash2 * 2.0 + t * 0.05));
    vec2 tileSize = vec2(1.0 / tilesX, 1.0 / tilesY);
    vec2 tileCenter = (tile + vec2(0.5)) * tileSize;
    vec2 targetTile = floor(vec2(
      fract(tileHash * 7.0) * tilesX,
      fract(tileHash2 * 7.0) * tilesY
    ));
    vec2 targetCenter = (targetTile + vec2(0.5)) * tileSize;
    
    vec2 localPos = fract(st * vec2(tilesX, tilesY));
    st = mix(st, targetCenter + (localPos - vec2(0.5)) * tileSize, swapTrigger);
    
    float wavePhase = t + st.x * 10.0 + st.y * 10.0;
    st.x += sin(wavePhase * 3.0) * colorShift * 0.05;
    st.y += cos(wavePhase * 3.0) * colorShift * 0.05;
    
    float breakPattern = step(0.9, fract(sin(dot(floor(st * 50.0), vec2(12.9898, 78.233))) * 43758.5453 + t * 0.1));
    st += (vec2(
      fract(sin(st.x * 100.0 + t)),
      fract(cos(st.y * 100.0 + t))
    ) - vec2(0.5)) * fadeLevel * breakPattern;
    
    float illusionPhase = sin(t + st.x * 6.28318) * cos(t * 0.7 + st.y * 6.28318);
    st += vec2(sin(illusionPhase * 5.0), cos(illusionPhase * 5.0)) * 0.02 * fadeLevel;
    
    return st;
  `
});
setFunction({
  name: 'complexGlitchFX',
  type: 'combineCoord',
  inputs: [
    {
      type: 'float',
      name: 'intensity',
      default: 1.0
    },
    {
      type: 'float',
      name: 'speed',
      default: 0.5
    },
    {
      type: 'float',
      name: 'tilesX',
      default: 8
    },
    {
      type: 'float',
      name: 'tilesY',
      default: 8
    },
    {
      type: 'float',
      name: 'chromaShift',
      default: 0.02
    },
    {
      type: 'float',
      name: 'distortAmount',
      default: 0.3
    },
    {
      type: 'float',
      name: 'glitchFreq',
      default: 5.0
    },
    {
      type: 'float',
      name: 'rotationSpeed',
      default: 0.1
    }
  ],
  glsl: `
    vec2 st = _st;
    vec2 center = vec2(0.5);
    
    float t = time * speed;
    
    vec2 tile = floor(st * vec2(tilesX, tilesY));
    vec2 tileUV = fract(st * vec2(tilesX, tilesY));
    
    float hash1 = fract(sin(dot(tile, vec2(12.9898, 78.233))) * 43758.5453);
    float hash2 = fract(sin(dot(tile, vec2(39.3467, 11.135))) * 22578.1459);
    float hash3 = fract(sin(dot(tile, vec2(73.1264, 94.673))) * 31415.9265);
    
    float glitchTrigger = step(0.95, fract(hash1 * 10.0 + t * glitchFreq));
    
    vec2 randomOffset = vec2(
      hash2 * 2.0 - 1.0,
      hash3 * 2.0 - 1.0
    ) * glitchTrigger * intensity * 0.5;
    
    float scanlineGlitch = step(0.98, fract(st.y * 100.0 + t * 20.0)) * intensity;
    randomOffset.x += scanlineGlitch * (hash1 - 0.5) * 0.3;
    
    vec2 toCenter = st - center;
    float dist = length(toCenter);
    float angle = atan(toCenter.y, toCenter.x);
    
    float warpAngle = angle + sin(dist * 10.0 - t * 2.0) * distortAmount * intensity;
    float warpDist = dist + sin(angle * 3.0 + t) * 0.05 * distortAmount * intensity;
    
    vec2 warped = center + vec2(
      cos(warpAngle) * warpDist,
      sin(warpAngle) * warpDist
    );
    
    float tileRotation = hash1 * 6.28318 + t * rotationSpeed;
    vec2 tileCentered = tileUV - vec2(0.5);
    mat2 rotMat = mat2(
      cos(tileRotation), -sin(tileRotation),
      sin(tileRotation), cos(tileRotation)
    );
    tileCentered = rotMat * tileCentered;
    tileUV = tileCentered + vec2(0.5);
    
    vec2 shuffleOffset = vec2(
      fract(hash2 * 7.0 + floor(t * 2.0)),
      fract(hash3 * 5.0 + floor(t * 2.0))
    );
    shuffleOffset = (shuffleOffset - vec2(0.5)) * step(0.7, hash1) * intensity * 0.4;
    
    st = (tile + tileUV) / vec2(tilesX, tilesY);
    
    float pixelBreak = step(0.9, hash1 + sin(t * 10.0) * 0.1);
    st += vec2(
      sin(st.y * 50.0 + t * 15.0) * pixelBreak,
      cos(st.x * 50.0 + t * 15.0) * pixelBreak
    ) * intensity * 0.05;
    
    st = mix(st, warped, 0.3 * intensity);
    st += randomOffset;
    st += shuffleOffset;
    
    float chromaWave = sin(t * 3.0 + st.x * 10.0) * chromaShift * intensity;
    st.x += chromaWave;
    
    vec2 kaleidoST = st - center;
    float ka = atan(kaleidoST.y, kaleidoST.x);
    float kr = length(kaleidoST);
    ka = mod(ka, 3.14159 / 3.0);
    kaleidoST = vec2(cos(ka), sin(ka)) * kr + center;
    st = mix(st, kaleidoST, 0.2 * intensity * step(0.5, fract(t * 0.3)));
    
    float decay = 1.0 - (dist * 0.3 * intensity);
    st = mix(st, st * decay, 0.3 * intensity);
    
    return st;
  `
});
setFunction({
  name: "rotateX",
  type: "coord",
  inputs: [{ name: "angle", type: "float", default: 0.0 }],
  glsl: `
  vec2 p = _st * 2.0 - 1.0;
  float aspect = resolution.x / resolution.y;
  p.x *= aspect;
  float r2 = dot(p, p);
  if (r2 > 1.0) return _st;
  float z = sqrt(1.0 - r2);
  float c = cos(angle);
  float s = sin(angle);
  vec3 v = vec3(p.x, p.y, z);
  vec3 vr = vec3(
    v.x,
    v.y * c - v.z * s,
    v.y * s + v.z * c
  );
  vec2 q = vec2(vr.x / aspect, vr.y);
  return q * 0.5 + 0.5;
  `,
});
setFunction({
  name: "rotateY",
  type: "coord",
  inputs: [{ name: "angle", type: "float", default: 0.0 }],
  glsl: `
  vec2 p = _st * 2.0 - 1.0;
  float aspect = resolution.x / resolution.y;
  p.x *= aspect;
  float r2 = dot(p, p);
  if (r2 > 1.0) return _st;
  float z = sqrt(1.0 - r2);
  float c = cos(angle);
  float s = sin(angle);
  vec3 v = vec3(p.x, p.y, z);
  vec3 vr = vec3(
    v.x * c + v.z * s,
    v.y,
    -v.x * s + v.z * c
  );
  vec2 q = vec2(vr.x / aspect, vr.y);
  return q * 0.5 + 0.5;
  `,
});
setFunction({
  name: "rotateZ",
  type: "coord",
  inputs: [{ name: "angle", type: "float", default: 0.0 }],
  glsl: `
  vec2 p = _st * 2.0 - 1.0;
  float aspect = resolution.x / resolution.y;
  p.x *= aspect;
  float r2 = dot(p, p);
  if (r2 > 1.0) return _st;
  float z = sqrt(1.0 - r2);
  float c = cos(angle);
  float s = sin(angle);
  vec3 v = vec3(p.x, p.y, z);
  vec3 vr = vec3(
    v.x * c - v.y * s,
    v.x * s + v.y * c,
    v.z
  );
  vec2 q = vec2(vr.x / aspect, vr.y);
  return q * 0.5 + 0.5;
  `,
});
function videocap(target = o0, durationMs = 5000, options = {}) {
  const {
    filename = `hydra-${Date.now()}.webm`,
    renderTarget = true,
    restore = null,
  } = options;
  if (renderTarget) {
    render(target);
  }
  if (typeof vidRecorder === "undefined") {
    throw new Error("vidRecorder is not available in this Hydra environment.");
  }
  vidRecorder.start();
  setTimeout(() => {
    try {
      vidRecorder.stop();
    } finally {
      if (typeof restore === "function") {
        restore();
      }
    }
  }, durationMs);
  return {
    filename,
    target,
    durationMs,
  };
}