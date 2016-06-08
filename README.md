## Invisibles
Toggles visibility of invisible characters on webpages.

##### Usage
Host invisibles.css and invisibles.js within your site.
Include both files on the pages with invisibles to be shown.
Call nodeShowInvis(node) on any node to show its invisible characters.
Call nodeHideInvis(node) on any node to reverse the change.

Alternatively, use showInvisibles(text) directly on any string to show invisible characters.
However, the resulting text must be rendered with the ShowInvisibles font-face.
Use hideInvisibles(text) to restore the string.

##### Details
Both of the show functions alter some of the characters in the string!
Be sure to reverse these changes with the corresponding hide function when using the text data directly

Both of the node functions operate on the given node and all its children recursively.
In addition, they automatically add the show-invisibles class to all non-text nodes to use the show-invisibles font-face.
