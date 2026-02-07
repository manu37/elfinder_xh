/*
* @author  Emanuel Marinelo
* @link    https://www.cmsimple.ch
* @version 2.0.1
* for TinyMCE 7x & elFinder
* https://github.com/manu37/elfinder_xh
*/

function elFinderBrowser (callback, value, meta) {
    var cmsURL = '%ELFINCERURL%connectors/for_tinymce7_elfinder_html.php';
    var type = meta.filetype;

    if (type == "file") {
        type = "downloads"
    };

    if (cmsURL.indexOf("?") < 0) {
        cmsURL = cmsURL + "?type="+ type;
    } else {
        cmsURL = cmsURL + "&type=" + type;
    }

    // FIXME: avoid the following two global variables!
    filebrowsercallback = callback;
    filebrowserwindow = tinymce.activeEditor.windowManager.openUrl({
        title: "elFinder_xh %ELFINCER_TITLE%r",
        width: 900,
        height: 550,
        url: cmsURL
    });
    return false;
}
