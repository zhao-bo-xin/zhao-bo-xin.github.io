(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0b70":function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("ul",t._l(t.hotSongs,(function(n,s){return e("MusicListItem",{key:n.id,attrs:{item:n,index:s},on:{"change-current-play-song":function(n){return t.$emit("change-current-play-song",n)}}})})),1)])},i=[],o=e("d2d0"),c={components:{MusicListItem:o["a"]},data:function(){return{hotSongs:[]}},created:function(){var t=this;this.axios.get("https://music.kele8.cn/top/list?idx=1").then((function(n){t.hotSongs=n.data.playlist.tracks}))}},u=c,a=e("2877"),r=Object(a["a"])(u,s,i,!1,null,null,null);n["default"]=r.exports}}]);
//# sourceMappingURL=about.e44c385c.js.map