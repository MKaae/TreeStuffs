The server inside this folder is for testing purpose so you can try and read through something located here.
First cd your way into the folder where tree.js is located and run this command:

node tree.js "server" -format:drawing

I have chosen to make it skip node_modules because it contains a shitton of files if you npm install the package.json.
If you want to see the folder structure of node_modules run the command with nodetrue in the end.

node tree.js "server" -format:drawing nodetrue

To use this you can stand inside the folder where tree.js is located and call and call any folder in your system:

node tree.js "C:/folder" -format:drawing

node tree.js "C:/folder" -format:markdown

node tree.js "C:/folder" -format:html

Or you can use it directly in node with calling the location of the tree.js file and call any folder in your system:

node ./locationWhereTreeJsIsPlaced/tree.js "C:/folder" -format:drawing

node ./locationWhereTreeJsIsPlaced/tree.js "C:/folder" -format:markdown

node ./locationWhereTreeJsIsPlaced/tree.js "C:/folder" -format:html
