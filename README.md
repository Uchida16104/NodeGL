# NodeGL
<p>It'll be convenience for <a href="https://hydra.ojack.xyz">hydra</a> used by Node.js.</p>
<br>
<ul><h1>Usage</h1></ul>
<h3>First, please use the following code to read.</h3>
<code>await loadScript("https://nodegl.glitch.me/function-list.js");</code>
<ol><h5>When you'd like to change the canvas axis to "y" perspective.</h5>
  <li><code>osc().scale(glslAxis("y")).out();</code></li>
  <li><code>voronoi(20,1,5).scale(glslAxis("2y")).out();</code></li>
</ol>
<ol><h5>It can be modulated using the difference between "solid" and "gradient" color changes.</h5>
  <li><code>speed=1/4;<br>
 flash(1,2,1).diff(osc(30,1/8,300).diff(osc(30,1/8,300).rotate(Math.PI/2))).scale([1/4,1/2].smooth()).out();</code></li>
  </ol>
