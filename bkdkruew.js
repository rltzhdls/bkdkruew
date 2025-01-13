$(document).ready(function () {
	if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    var vds = document.getElementById('vds');
    
    if (vds) {
        vds.src = "https://vod.plaync.com/lineage2/update/230412/L2_deathkinght2_index_bg.mp4";
        document.getElementById('vd').load();
    }
	}
});

