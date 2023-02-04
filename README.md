# NodeGL
<p>It'll be convenience for <a href="https://hydra.ojack.xyz">hydra</a> used by Node.js.</p>
<br>
<ul><h1>Usage</h1></ul>
<h3>First, please use the following code to read.</h3>
<code>await loadScript("https://nodegl.glitch.me/function-list.js");</code>
<ul>
<ol><h5>When you'd like to change the canvas axis to "y" perspective.</h5>
  <li><code><a href="https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGbm9kZWdsLmdsaXRjaC5tZSUyRmZ1bmN0aW9uLWxpc3QuanMlMjIpJTNCJTBBb3NjKCkuc2NhbGUoZ2xzbEF4aXMoJTIyeSUyMikpLm91dCgpJTNC">osc().scale(glslAxis("y")).out();</a></code></li>
  <li><code><a href="https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGbm9kZWdsLmdsaXRjaC5tZSUyRmZ1bmN0aW9uLWxpc3QuanMlMjIpJTNCJTBBdm9yb25vaSgyMCUyQzElMkM1KS5zY2FsZShnbHNsQXhpcyglMjIyeSUyMikpLm91dCgpJTNC">voronoi(20,1,5).scale(glslAxis("2y")).out();</a></code></li>
</ol>
<ol><h5>It can be modulated using the difference between "solid" and "gradient" color changes.</h5>
  <li><code><a href="https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGbm9kZWdsLmdsaXRjaC5tZSUyRmZ1bmN0aW9uLWxpc3QuanMlMjIpJTNCJTBBc3BlZWQlM0QxJTJGNCUzQiUwQWZsYXNoKDElMkMyJTJDMSkuZGlmZihvc2MoMzAlMkMxJTJGOCUyQzMwMCkuZGlmZihvc2MoMzAlMkMxJTJGOCUyQzMwMCkucm90YXRlKE1hdGguUEklMkYyKSkpLnNjYWxlKCU1QjElMkY0JTJDMSUyRjIlNUQuc21vb3RoKCkpLm91dCgpJTNC">speed=1/4;<br>
flash(1,2,1).diff(osc(30,1/8,300).diff(osc(30,1/8,300).rotate(Math.PI/2))).scale([1/4,1/2].smooth()).out();</a></code></li>
</ol>
<ol><h5>You can also use functions that store trigonometric and inverse trigonometric functions to change the video.</h5>
  <li><code><a href="https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGbm9kZWdsLmdsaXRjaC5tZSUyRmZ1bmN0aW9uLWxpc3QuanMlMjIpJTNCJTBBbm9pc2UoKS5yb3RhdGUoKCklM0QlM0VsaXN0KDElMkMyKSkub3V0KCklM0I%3D">noise().rotate(()=>list(1,2)).out();</a></code></li>
</ol>
<ol><h5>The options available within hydra's "ease" function can also be easily specified.</h5>
  <li><code><a href="https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGbm9kZWdsLmdsaXRjaC5tZSUyRmZ1bmN0aW9uLWxpc3QuanMlMjIpJTNCJTBBZ3JhZGllbnQoMSkuaHVlKCU1QjAlMkMxJTVELmVhc2UoZWFzZUluT3V0KDUpKSkub3V0KCklM0I%3D">gradient(1).hue([0,1].ease(easeInOut(5))).out();</a></code></li>
</ol>
<ol><h5>Variables can be defined sequentially and the last variable among them can be used. (It can also be used outside of hydra.)</h5>
  <li><code><a href="https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGbm9kZWdsLmdsaXRjaC5tZSUyRmZ1bmN0aW9uLWxpc3QuanMlMjIpJTNCJTBBb3NjKCkucm90YXRlKHZhckRlZiglMjJoeWRyYSUyMiUyQ01hdGguYXRhbiUyQzEwKSkub3V0KCklM0I%3D">osc().rotate(varDef("hydra",Math.atan,10)).out();</a></code></li>
</ol>
<ol><h5>Two different functions can be entered, each increasing in a different step, and the results put into an array and modulated.</h5>
  <li><code><a href="https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGbm9kZWdsLmdsaXRjaC5tZSUyRmZ1bmN0aW9uLWxpc3QuanMlMjIpJTNCJTBBc2hhcGUoZnVuY0FyeSg0JTJDNSUyQzYlMkMwLjA1JTJDMC4xJTJDTWF0aC50YW4lMkNNYXRoLnNpbikuc21vb3RoKCkpLm91dCgpJTNC">shape(funcAry(4,5,6,0.05,0.1,Math.tan,Math.sin).smooth()).out();</a></code></li>
</ol>
<ol><h5>It can generate an array from 0 to a specified number and output a random value.</a></h5>
  <li><code><a href="https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGbm9kZWdsLmdsaXRjaC5tZSUyRmZ1bmN0aW9uLWxpc3QuanMlMjIpJTNCJTBBc2hhcGUocmFuZEFyeSgxMDAlMkMwLjEpKS5vdXQoKSUzQg%3D%3D">shape(randAry(100,0.1)).out();</a></code></li>
</ol>
<ol><h5>It can generate an array from 0 to a specified number, repeatedly output a random value, and store it in the array again.</h5>
  <li><code><a href="https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGbm9kZWdsLmdsaXRjaC5tZSUyRmZ1bmN0aW9uLWxpc3QuanMlMjIpJTNCJTBBc2hhcGUoZ2VuQXJ5KDEwMCUyQzAuMSUyQzEwKS5zbW9vdGgoKSkub3V0KCklM0I%3D">shape(genAry(100,0.1,10).smooth()).out();</a></code></li>
</ol>
</ul>
