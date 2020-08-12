<%@ page language="java" contentType="text/html; ISO-8859-1" pageEncoding="UTF-8" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Tour Widget Builder</title>
    <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<div class="row">
    <div class="col-5">
        <input id="widgetId" hidden data-widget-id="${widgetId}">
        <h2>Code Builder</h2>
        <h3>Step 1: Customize your widget</h3>
        <h5 class="text-muted">Select tours based on</h5>
        <input type="radio" name="tour-url" value="0" checked> Destination<br>
        <div id="destination-tour">
        <p>Add a <a href="https://www.triplocator.com">Triplocator.com</a> destination page URL below</p>
        <input type="text" id="destination_link" class="form-control" placeholder="eg: https://www.triplocator.com/tours/nepal/bagmati/kathmandu" onchange="destinationLinkChange()">
        <p>Select the number of tours you’d like to show</p>
            <select class="form-control" id="destination_tour_number" onchange="numberOfToursSelected()">
                <option disabled >Select no of tours</option>
                <c:forEach var = "i" begin = "1" end = "10">
                    <option value="${i}"> <c:out value = "${i}"/> </option>
                </c:forEach>
            </select>
        </div>
        <input type="radio" name="tour-url" value="1"> Specific tours
        <div id="specific-tour">
            <p>Add tours URLS from <a href="https://www.triplocator.com">Triplocator.com</a> into field below, one at a time (Up to 10)</p>
            <div id="field_wrapper" >
                <div class="row">
                <input type="text" name="tour_link[]" placeholder="eg: https://www.triplocator.com/tour/nepal/kathmandu/langtang-gosainkunda-trekking.html" class="col-10" onChange="tourLinkChange()">
                <a href="javascript:void(0);" id="add_button" title="Add field">Add</a>
                </div>
            </div>
        </div>
        <h5 class="text-muted">Select language</h5>
        <p>This is the language your widget will display</p>
        <select id="language" class="form-control">
        </select>
        <h5 class="text-muted">Select Currency</h5>
        <p>This is the currency your widget will display</p>
        <select id="currency" class="form-control">
        </select>
        <h3>Step 2: Copy the code for your site</h3>
        <h5 class="text-muted">Copy and paste this code into the HTML of your website where you want the widget to appear.</h5>
        <textarea class="form-control" id="textarea" rows="5" disabled></textarea>
    </div>
    <div class="col-7">
        <h3>Widget Preview</h3>
        <h5 class="text-muted">This is a live preview of your widget. Use the code generator to make changes.</h5>
        <div id="triplocator-widget-preview">
        </div>
    </div>
</div>
<script type="text/JavaScript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script async src="/js/widget-builder.js"></script>
</body>
</html>
