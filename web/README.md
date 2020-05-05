## The JavaScript Engine
- Memory Heap — this is where the memory allocation happens
- Call Stack — this is where your stack frames are as your code executes


https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf




## How Webpage gets rendered
![How Webpage gets rendered](https://i.stack.imgur.com/PWEik.png)
![Render Tree](https://miro.medium.com/max/2000/1*8HnhiojSoPaJAWkruPhDwA.png)
>When a web page is loaded, the browser first reads the TEXT HTML and constructs DOM Tree from it. Then it processes the CSS whether that is inline, embedded or external CSS and constructs the CSSOM Tree from it. After these trees are constructed, then it constructs the Render-Tree from it. Once the Render-Tree is constructed, then the browser starts the printing individual elements on the screen.