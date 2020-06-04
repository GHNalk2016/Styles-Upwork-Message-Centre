# Important;
In the long run you may replace "main.user.js" with "main.meta.js" for the @updateURL key.

# How @downloadURL and @updateURL work:
@downloadURL merely overrides the default internal "download URL" location.
@updateURL merely overrides the default internal "update URL" (or check) location.
In most cases, there is no need to do this. See, below.

1. When you install a userscript, Greasemonkey automatically records the install location. No meta directive is needed. By default, this is where Greasemonkey will both check for updates and download any updates.
2. But, if @downloadURL is specified, then Greasemonkey will both check and download from the specified location rather than the stored location.
3. But, if @updateURL is specified, then Greasemonkey will check (not download) from the "update" location given.

So: @updateURL overrides both @downloadURL and the default location for checking operations only.
While: @downloadURL overrides the default location for both checking and downloading (unless @updateURL is present).
