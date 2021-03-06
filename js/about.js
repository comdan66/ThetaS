/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */
 
$(function () {
  $('<div />').addClass ('about').append (
    $('<h2 />').text ("關於 OA's Theta S 全景相簿")).append (
    $('<div />').html ("作者名稱 - <a href='http://www.ioa.tw/' target='_blank'>OA Wu</a>")).append (
    $('<div />').html ("E-mail - <a href='mailto:comdan66@gmail.com'>comdan66@gmail.com</a>")).append (
    $('<div />').html ("作品名稱 - <a href='http://works.ioa.tw/ThetaS/' target='_blank'>OA's Theta S</a>")).append (
    $('<div />').html ("最新版本 - 1.1")).append (
    $('<div />').html ("GitHub - <a href='https://github.com/comdan66/ThetaS' target='_blank'>OA's Theta S</a>")).append (
    $('<div />').html ("ThetaS - <a href='https://theta360.com/ct/about/theta/s.html' target='_blank'>官方網站</a>")).append (
    $('<div />').html ("相關資源 - <a href='https://github.com/shokai/theta-viewer.js' target='_blank'>theta-viewer.js</a>")).append (
    $('<div />').html ("更新日期 - 2015/12/18")).prependTo (window.container);

  window.closeLoading ();
});