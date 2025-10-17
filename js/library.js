function doSearch(urlSearch) {
    var sURL = '';
    var keyword = $('#keyword').val();
    if (keyword.length < 2) {
        Alert('Thông báo !', 'Từ khóa phải nhiều hơn 1 ký tự.');
        return;
    }
    else sURL += (sURL == '' ? '?' : '&') + 'keyword=' + $('#keyword').val();

    location.href = urlSearch + sURL;
}
function getTimeVideoFromUrl(p_url, p_object, p_html_add = '') {
    var aud = new Audio(p_url);
    aud.onloadedmetadata = function () {
        var duration = aud.duration;
        $(p_object).html(p_html_add + '' + duration.toFixed(2).toString().replace('.', ':'));
    };
}
$(document).ready(function () {
    $('.duration-video').each(function (index, item) {
        var url = $(item).data('url');
        var id = $(item).attr('id');
        if (url != '') {
            getTimeVideoFromUrl(url, ('#' + id), '');
        }
    });
    $('.duration_time').each(function (index, item) {
        var url = $(item).data('url');
        var id = $(item).attr('id');
        if (url != '') {
            getTimeVideoFromUrl(url, ('#' + id), '<i class="fa fa-clock-o"></i> ');
        }
    });
    $('#video_zone').each(function (index, item) {
        var file = $(item).data('file');
        var image = $(item).data('image');
        play_video('video_zone', file, image, false);
    });
});
function popup(url, title, w, h) {
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
}
function change_captcha() { $('#imgValidCode').attr('src', '/ajax/Security.html?Code=' + Math.floor(Math.random() * 999999)) }
function changeAvartar(input, p_control) {
    if (input.files && input.files[0]) {
        var filerdr = new FileReader();
        filerdr.onload = function (e) {
            $(p_control).attr('src', e.target.result);
            $(p_control).show();
        }
        filerdr.readAsDataURL(input.files[0]);
    }
}
function CopyText(p_control) {
    var copyText = document.getElementById(p_control);
    copyText.readOnly = true;
    copyText.type = 'text';
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    copyText.type = 'hidden';
    //document.execCommand("copy");
    Success('Thông báo!', 'Đã copy thành công', '');
}
function GiaVangFunction() {
    $('.GiaVangVietNam-Shared-Widget-widget-header').hide();
    $('.GiaVangVietNam-Shared-Widget-copyright').hide();
    $('.GiaVangVietNam-Shared-Widget-price-up').hide();
    $('.GiaVangVietNam-Shared-Widget-price-down').hide();
    $('.GiaVangVietNam-Shared-Widget-sjc table th').each(function (index, item) {
        if (index == 0) {
            var html = $(item).html();
            $(item).html('<strong>Giá vàng</strong>');
        }
    });
    $('.GiaVangVietNam-Shared-Widget-sjc table td').each(function (index, item) {
        var html = $(item).html();
        if (index == 0) {           
            $(item).html('Vàng SJC (VNĐ)');
        }
        if (html.indexOf('<br>') > -1) {
            html = html.split('<br>')[0];
        }
        //else
        //    var html = $(item).html();
        //if (html.indexOf('<br>') > -1) {
        //    html = html.replace('<br>', ' VND<br>');
        //} else {
        //    html = html + ' VND';
        //}
        ////console.log(html);
        //$(item).html(html);
        //}
    });
    var nameXauUsd = $('.GiaVangVietNam-Shared-Widget-xau-usd-type').html();
    var descriptionXauUsd = $('.GiaVangVietNam-Shared-Widget-xau-usd-description').html();
    var priceXauUsd = $('.GiaVangVietNam-Shared-Widget-xau-usd-price').html();
    var changeXauUsd = $('.GiaVangVietNam-Shared-Widget-xau-usd-change').html();
    var classChangeXauUsd = $('.GiaVangVietNam-Shared-Widget-xau-usd-change').attr('class');
    var s = '';
    s += '<tr>';
    s += '<td>Thế giới (USD)</td>';
    s += '<td colspan="2">' + priceXauUsd + '</td>';
    //s += '<td colspan="2">' + priceXauUsd + ' USD' + '<br/><span class="' + (classChangeXauUsd) + '">(' + changeXauUsd + ')</span></td>';

    s += '</tr>';
    $('.GiaVangVietNam-Shared-Widget-sjc table tbody').append(s);
    $('.GiaVangVietNam-Shared-Widget-xauusd').hide();
}
$(document).ready(function () {
    const myTimeout = setTimeout(GiaVangFunction, 2000);
});
