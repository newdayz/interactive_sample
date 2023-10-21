'use strict';

// geolocation
function success(pos) {
  ajaxRequest(pos.coords.latitude, pos.coords.longitude);
}

function fail(error) {
  alert('位置情報の取得に失敗しました。エラーコード:' + error.code);
}

navigator.geolocation.getCurrentPosition(success, fail);

//データ取得
function ajaxRequest(lat, long) {
  const url = 'https://api.openweathermap.org/data/2.5/forecast';
  const appId = '0bb133ba5702f56e6dd6513bee02c94e';
  // 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={0bb133ba5702f56e6dd6513bee02c94e}';

  $.ajax({
    url: url,
    data: {
      appid: appId,
      lat: lat,
      lon: long,
      units: 'metric',
      lang: 'ja'
    }
  })
    .done(function (data) {
      console.log(data);
    })
    .fail(function () {
      console.log('$.ajax failed!');
    })
}