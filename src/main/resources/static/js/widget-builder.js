var site_url = 'http://localhost:8080';
let widgetId = $('#widgetId').data('widget-id');
let tourUrls=[];
let destinationUrl='';
let noOfTour=10;
let language='en';
let currency='USD';
const maxField = 10;
const addButton = document.getElementById('add_button');
const wrapper = document.getElementById('field_wrapper');

$.ajax({
    type: "GET",
    url: site_url + "/currency",
    contentType: "application/json",
    // headers: { "X-CSRF-TOKEN": token },
    beforeSend: function () {
    },
    success: function (json) {
        const selectElement = document.getElementById("currency");
        for (let key in json) {
            let selectHtml="<option value='"+key+"'>"+json[key]+"</option>";
            $(selectElement).append(selectHtml);
        }
    },
    error: function () {
    },
});
$.ajax({
    type: "GET",
    url: site_url + "/language",
    contentType: "application/json",
    // headers: { "X-CSRF-TOKEN": token },
    beforeSend: function () {
    },
    success: function (json) {
        const selectElement = document.getElementById("language");
        for (let key in json) {
            let selectHtml="<option value='"+key+"'>"+json[key]+"</option>";
            $(selectElement).append(selectHtml);
        }
    },
    error: function () {
    },
});

function paintWidget(json){
    var file = document.createElement("link");
    file.setAttribute("rel", "stylesheet");
    file.setAttribute("type", "text/css");
    file.setAttribute("href", "/css/triplocator-widget.min.css");
    document.head.appendChild(file);
    let widgetHtml = '<ul class="triplocator-widget-product-list" id="triplocator-widgets">';
    json.forEach(data=>{
        widgetHtml+='<li class="triplocator-widget-col">' +
            '<div class="triplocator-widget-item-wrap" >' +
            '<div class="triplocator-widget-img">';
        widgetHtml+='<a href="'+data.url+'">';
        widgetHtml+='<img src="'+data.image+'" class="triplocator-widget-img-fill" alt="'+data.imageAlt+'">';
        widgetHtml+='</a>';
        widgetHtml+='<span class="triplocator-widget-tour-duration cap-text"><strong><i class="fa fa-clock-o"></i> '+data.duration+' '+data.durationType+'</strong></span>'
        if(data.discount != null && data.discount != 0){
            widgetHtml+='<div class="triplocator-widget-ribbon danger"> <span>'+data.discount+'% Discount</span> </div>';
        }
        widgetHtml+='</div><div class="triplocator-widget-caption"><h4>';
        widgetHtml+='<a href="'+data.url+'">'+data.tourName+'</a></h4>';
        widgetHtml+='<span class="triplocator-widget-destination"><a>'+data.locationName+'</a>,<a> '+data.countryName+'</a></span>'
        widgetHtml+='<hr><div class="triplocator-widget-fact"><span class="triplocator-widget-tour-review">';
        for(let i=1 ;i<=5;i++){
            if(i<=data.ratingStar){
                widgetHtml+='<i class="fa fa-star"></i>'
            }else {
                widgetHtml+='<i class="fa fa-star-o"></i>'
            }
        }
        widgetHtml+='<sub>' + data.review+' reviews</sub></span><span class="triplocator-widget-tour-cost"><sub>From</sub>';
        if(data.oldAmount !=null && data.oldAmount != ""){
            widgetHtml+='<s>'+data.oldAmount+'</s>';
        }

        widgetHtml+='<span>'+data.minAmount+'</span></span></div></div></div></li>';
    })

    widgetHtml+='</ul>';
    const widgetElement = document.getElementById("triplocator-widget");
    $(widgetElement).html(widgetHtml);
}

function widgetCode() {
    let widgetPreviewCode = '<div id="triplocator-widget" data-partner-id="'+widgetId+'" data-currency="USD" data-language="en" data-total-products=""></div>';
    $(document.getElementById("triplocator-widget-preview")).append(widgetPreviewCode);
    widgetPreviewCode+='\n\n<script async src="/js/widget.js"></script>';
    $('#textarea').text(widgetPreviewCode);
}

function fetchTourData(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/tours",
        contentType: "application/json",
        // headers: { "X-CSRF-TOKEN": token },
        success: function (json) {
            paintWidget(json);
        },
        error: function () {
        }
    });
}
function fetchFilterTourData(){
    dataObj = {
        tourUrls: tourUrls,
        destinationUrl: destinationUrl,
        language: language,
        currency: currency,
        tourNumber: noOfTour
    }
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/tours",
        contentType: "application/json",
        // headers: { "X-CSRF-TOKEN": token },
        data: dataObj,
        success: function (json) {
            paintWidget(json);
        },
        error: function () {
        }
    });
}

$(document).ready(function(){
    let fieldHTML = '<div class="row"><input type="text" name="tour_link[]" placeholder="eg: https://www.triplocator.com/tour/nepal/kathmandu/langtang-gosainkunda-trekking.html" class="col-10" onChange="tourLinkChange()"><a href="javascript:void(0);" class="remove_button">remove</a></div>';
    let x = 1;
    $("#destination-tour").show();
    $("#specific-tour").hide();
    let tourNumber = document.getElementById("destination_tour_number");
    tourNumber.value = noOfTour;
    widgetCode();
    fetchTourData();
});
$(addButton).click(function(){
    if(x < maxField){
        x++;
        $(wrapper).append(fieldHTML);
    }
});
$(wrapper).on('click', '.remove_button', function(e){
    e.preventDefault();
    $(this).parent('div').remove();
    x--;
});

$("input[name$='tour-url']").click(function() {
    let test = $(this).val();
    if(test === "0"){
        $("#destination-tour").show();
        $("#specific-tour").hide();
        let tourNumber = document.getElementById("destination_tour_number");
        tourNumber.value = noOfTour;
        destinationUrl="https://www.triplocator.com/tours/nepal/bagmati/kathmandu";
    }
    if(test === "1"){
        $("#destination-tour").hide();
        $("#specific-tour").show();
    }
});

function tourLinkChange() {
    let tourlink = document.getElementsByName("tour_link[]");
    tourlink.forEach(tour =>{
        console.log(tourUrls);
        tourUrls.push(tour.value);
        destinationUrl='';
    });
}

function destinationLinkChange(){
    let tourlink = document.getElementById("destination_link");
    destinationUrl = tourlink.value;
    tourUrls = [];
    noOfTour = 0;
}
function numberOfToursSelected(){
    let tourNumber = document.getElementById("destination_tour_number");
    noOfTour = tourNumber.value;
}
function languageSelected(){
    let languageE = document.getElementById("language");
    language = languageE.value;
}
function currencySelected(){
    let currencyE = document.getElementById("currency");
    currency = currencyE.value;
}
