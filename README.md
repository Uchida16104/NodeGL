# NodeGL
<p>It'll be convenience for <a href="https://hydra.ojack.xyz">hydra</a> used by Node.js.</p>
<img src="https://cdn.glitch.me/project-avatar/efd0d1ad-4977-47ea-a2d9-9ce05d4c70fa.png?2023-02-10T14:36:52.526Z"/>
<br>
<ul><h1>Usage</h1></ul>
<h3>First, please use the following code to read on hydra.</h3>
<code>await loadScript("<a href="https://nodegl.glitch.me/function-list.js">https://nodegl.glitch.me/function-list.js</a>");</code>
<ol><li><h5>When you'd like to change the canvas axis to "y" perspective.</h5></li>
<ul><li><code><a href="https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGbm9kZWdsLmdsaXRjaC5tZSUyRmZ1bmN0aW9uLWxpc3QuanMlMjIpJTNCJTBBb3NjKCkuc2NhbGUoZ2xzbEF4aXMoJTIyeSUyMikpLm91dCgpJTNC">osc().scale(glslAxis("y")).out();</a></code></li></ul>
<ul><li><code><a href="https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGbm9kZWdsLmdsaXRjaC5tZSUyRmZ1bmN0aW9uLWxpc3QuanMlMjIpJTNCJTBBdm9yb25vaSgyMCUyQzElMkM1KS5zY2FsZShnbHNsQXhpcyglMjIyeSUyMikpLm91dCgpJTNC">voronoi(20,1,5).scale(glslAxis("2y")).out();</a></code></li></ul>
<li><h5>It can be modulated using the difference between "solid" and "gradient" color changes.</h5></li>
<ul><li><code><a href="https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGbm9kZWdsLmdsaXRjaC5tZSUyRmZ1bmN0aW9uLWxpc3QuanMlMjIpJTNCJTBBc3BlZWQlM0QxJTJGNCUzQiUwQWZsYXNoKDElMkMyJTJDMSkuZGlmZihvc2MoMzAlMkMxJTJGOCUyQzMwMCkuZGlmZihvc2MoMzAlMkMxJTJGOCUyQzMwMCkucm90YXRlKE1hdGguUEklMkYyKSkpLnNjYWxlKCU1QjElMkY0JTJDMSUyRjIlNUQuc21vb3RoKCkpLm91dCgpJTNC">speed=1/4;
<br>flash(1,2,1).diff(osc(30,1/8,300).diff(osc(30,1/8,300).rotate(Math.PI/2))).scale([1/4,1/2].smooth()).out();</a></code></li></ul>
<li><h5>You can also use functions that store trigonometric and inverse trigonometric functions to change the video.</h5></li>
<ul><li><code><a href="https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGbm9kZWdsLmdsaXRjaC5tZSUyRmZ1bmN0aW9uLWxpc3QuanMlMjIpJTNCJTBBbm9pc2UoKS5yb3RhdGUoKCklM0QlM0VsaXN0KDElMkMyKSkub3V0KCklM0I%3D">noise().rotate(()=>list(1,2)).out();</a></code></li></ul>
<li><h5>The options available within hydra's "ease" function can also be easily specified.</h5></li>
<ul><li><code><a href="https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGbm9kZWdsLmdsaXRjaC5tZSUyRmZ1bmN0aW9uLWxpc3QuanMlMjIpJTNCJTBBZ3JhZGllbnQoMSkuaHVlKCU1QjAlMkMxJTVELmVhc2UoZWFzZUluT3V0KDUpKSkub3V0KCklM0I%3D">gradient(1).hue([0,1].ease(easeInOut(5))).out();</a></code></li></ul>
<li><h5>Variables can be defined sequentially and the last variable among them can be used. (It can also be used outside of hydra.)</h5></li>
<ul><li><code><a href="https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGbm9kZWdsLmdsaXRjaC5tZSUyRmZ1bmN0aW9uLWxpc3QuanMlMjIpJTNCJTBBb3NjKCkucm90YXRlKHZhckRlZiglMjJoeWRyYSUyMiUyQ01hdGguYXRhbiUyQzEwKSkub3V0KCklM0I%3D">osc().rotate(varDef("hydra",Math.atan,10)).out();</a></code></li></ul>
<li><h5>Two different functions can be entered, each increasing in a different step, and the results put into an array and modulated.</h5></li>
<ul><li><code><a href="https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGbm9kZWdsLmdsaXRjaC5tZSUyRmZ1bmN0aW9uLWxpc3QuanMlMjIpJTNCJTBBc2hhcGUoZnVuY0FyeSg0JTJDNSUyQzYlMkMwLjA1JTJDMC4xJTJDTWF0aC50YW4lMkNNYXRoLnNpbikuc21vb3RoKCkpLm91dCgpJTNC">shape(funcAry(4,5,6,0.05,0.1,Math.tan,Math.sin).smooth()).out();</a></code></li></ul>
<li><h5>It can generate an array from 0 to a specified number and output a random value.</h5></li>
<ul><li><code><a href="https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGbm9kZWdsLmdsaXRjaC5tZSUyRmZ1bmN0aW9uLWxpc3QuanMlMjIpJTNCJTBBc2hhcGUocmFuZEFyeSgxMDAlMkMwLjEpKS5vdXQoKSUzQg%3D%3D">shape(randAry(100,0.1)).out();</a></code></li></ul>
<li><h5>It can generate an array from 0 to a specified number, repeatedly output a random value, and store it in the array again.</h5></li>
<ul><li><code><a href="https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGbm9kZWdsLmdsaXRjaC5tZSUyRmZ1bmN0aW9uLWxpc3QuanMlMjIpJTNCJTBBc2hhcGUoZ2VuQXJ5KDEwMCUyQzAuMSUyQzEwKS5zbW9vdGgoKSkub3V0KCklM0I%3D">shape(genAry(100,0.1,10).smooth()).out();</a></code></li></ul>
<li><h5>Four output videos can be looped and switched every specified number of seconds at specified speeds.</h5></li>
<ul><li><code><a href="https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGbm9kZWdsLmdsaXRjaC5tZSUyRmZ1bmN0aW9uLWxpc3QuanMlMjIpJTNCJTBBc2V0TG9vcCgxJTJGMiUyQy0xJTJGNCUyQy0xJTJGMiUyQzElMkY0JTJDMTAwMCklM0IlMEFvc2MoKS5vdXQoKSUzQiUwQW5vaXNlKCkub3V0KG8xKSUzQiUwQWdyYWRpZW50KDEpLm91dChvMiklM0IlMEF2b3Jvbm9pKCkub3V0KG8zKSUzQg%3D%3D">setLoop(1/2,-1/4,-1/2,1/4,1000);
<br>osc().out();
<br>noise().out(o1);
<br>gradient(1).out(o2);
<br>voronoi().out(o3);</a></code></li></ul>
<li><h5>Others(pad,particle,rbga,hsb,and zebra)</h5></li>
<ul><li><code><a href="https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGbm9kZWdsLmdsaXRjaC5tZSUyRmZ1bmN0aW9uLWxpc3QuanMlMjIpJTBBcGFkKDEwJTJDbzAlMkM0JTJDMCUyQzElMkMuOTkpLmRpZmYob3NjKDElMkMyJTJDMzAwKS5kaWZmKGdyYWRpZW50KDEpKS5zY2FsZSguMSkpLmRpZmYocmdiYShvMCUyQzElMkMxJTJDMSUyQzEpKS5kaWZmKGhzYihvMCUyQzElMkMxJTJDMSUyRjQpKS5pbnZlcnQoKS5vdXQoKSUzQg%3D%3D">pad(10,o0,4,0,1,.99).diff(osc(1,2,300).diff(gradient(1)).scale(.1)).diff(rgba(o0,1,1,1,1)).diff(hsb(o0,1,1,1/4)).invert().out();</a></code></li>
<li><code><a href="https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGbm9kZWdsLmdsaXRjaC5tZSUyRmZ1bmN0aW9uLWxpc3QuanMlMjIpJTBBb3NjKDElMkMyJTJDMzAwKS5kaWZmKGdyYWRpZW50KDEpKS5zY2FsZSguMSkuZGlmZihwYXJ0aWNsZShvMCUyQy45OSkpLmludmVydCgpLm91dCgpJTNC">osc(1,2,300).diff(gradient(1)).scale(.1).diff(particle(o0,.99)).invert().out();</a></code></li>
<li><code><a href="https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGbm9kZWdsLmdsaXRjaC5tZSUyRmZ1bmN0aW9uLWxpc3QuanMlMjIpJTBBczAuaW5pdENhbSgpJTNCJTBBc29saWQoKS5hZGQoemVicmEoc3JjKHMwKSUyQyUyMDIlMkMlMjA0JTJDJTIwTWF0aC5zaW4lMkMlMjAwLjEpKS5vdXQoKSUzQg%3D%3D">s0.initCam();
<br>solid().add(zebra(src(s0), 2, 4, Math.sin, 0.1)).out();</a></code></li></ul>
</ol>
<br>
<p>Click <a href="https://nodegl.glitch.me/function-list.js">here</a> for more information.</p>
<p>I appreciate all hydra users or developers on <a href="https://github.com/hydra-synth">GitHub</a>, <a href="https://www.facebook.com/groups/1084288351771117/">FB</a>, <a href="https://twitter.com/hydra_patterns">Twitter</a> or <a href="https://discord.gg/Mv9kXwtwVH">Discord</a>, etc...</p>
<p>By Hirotoshi Uchida<br><a href="https://hearthis.at/hirotoshi-uchida-2nd/">hearthis.at</a><br><a href="https://www.instagram.com/hirotoshiuchida/">IG</a></p>
<details><summary><h1>Log</h1></summary>
<h2>First commited as "NodeBook"</h2>
<p>on Jan 19th, 2023.</p>
<h2>Released the newest</h2>
<p>on Feb 12th, 2023.</p>
<h6><a href="https://github.com/Uchida16104/NodeGL/commits/main/README.md">Show more</a></h6></details>
