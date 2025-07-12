let hydra, hydraCanvas;
hydraCanvas = document.createElement("canvas");
hydraCanvas.width = 512;
hydraCanvas.height = 512;
hydraCanvas.id = "hydraCanvas";

hydra = new Hydra({
  canvas: hydraCanvas,
  detectAudio: false,
  enableStreamCapture: false,
  width: 512,
  height: 512,
});

const codeblocks = document.getElementsByClassName("codeblock");

for (const cb of codeblocks) {
  const cd = cb.querySelector("div");
  cd.style.width = "512px";
  cd.style.height = "512px";
  cd.style.left = "50%";
  cd.style.position = "relative";
  cd.style.transform = "translate(-50%, 0%)";

  var observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting === true) {
      hush();
      solid(0,0,0,0).out(o0);
      solid(0,0,0,0).out(o1);
      solid(0,0,0,0).out(o2);
      solid(0,0,0,0).out(o3);
      render(o0);
      setTimeout(() => {
        eval(cb.querySelector("code").textContent);
      }, 60);
      cd.appendChild(hydraCanvas);
    }
  }, { threshold: [0.7] });

  observer.observe(cb);
}

document.addEventListener('DOMContentLoaded', function() {
  const readyEls = Array.from(document.getElementsByClassName('ready'));
  const codeEls = Array.from(document.getElementsByClassName('codeblock'));
  const allEls = readyEls.concat(codeEls);

  allEls.forEach(el => {
    let codeText;
    const codeChild = el.querySelector('code');
    if (codeChild) {
      codeText = codeChild.textContent;
    } else {
      codeText = el.textContent;
    }

    const snippet = document.createElement('div');
    snippet.className = 'qiita-snippet';

    const pre = document.createElement('pre');
    const codeNode = document.createElement('code');
    codeNode.textContent = codeText.trim();
    pre.appendChild(codeNode);
    snippet.appendChild(pre);

    const btn = document.createElement('button');
    btn.className = 'copy-button';
    btn.textContent = 'Copy';
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(codeNode.textContent)
        .then(() => {
          btn.textContent = 'Copied';
          setTimeout(() => btn.textContent = 'Copy', 2000);
        })
        .catch(err => console.error('Copy failed', err));
    });
    snippet.appendChild(btn);

    if (codeChild) {
      el.replaceChild(snippet, codeChild);
    } else {
      el.innerHTML = '';
      el.appendChild(snippet);
    }
  });

  const accordionHeader = document.querySelector('.accordion-header');
  const accordionContent = document.querySelector('.accordion-content');
  accordionHeader.addEventListener('click', function() {
    const isVisible = accordionContent.style.display === 'block';
    accordionContent.style.display = isVisible ? 'none' : 'block';
  });
});
