<%@ page language="java" contentType="text/html; ISO-8859-1" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Tour Banner Builder</title>
    <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous"
    />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<br/><br/>
<hr class="divider">
<div class="w3-container">
    <h2>Save Big on Cheap Travel - Banner</h2>
    <div class="row">
        <div class="col-sm-3 col-md-6">
            <br/>
            ${link1}
        </div>
        <div class="col-sm-9 col-md-6">
            <h5><i>Your Code (Copy It)</i></h5>
            <textarea id="w3review" name="w3review" rows="4" cols="50">
                ${link1}
            </textarea>
        </div>
    </div>
</div>
<hr class="divider">
<div class="w3-container ">
    <h2>Make Your Deal - Banner</h2>
    <div class="row">
        <div class="col-sm-3 col-md-6">
            <br/>
            ${link2}
        </div>
        <div class="col-sm-9 col-md-6">
            <h5><i>Your Code (Copy It)</i></h5>
            <textarea id="w3review2" name="w3review2" rows="4" cols="50">
                ${link2}
            </textarea>
        </div>
    </div>
</div>
<hr class="divider">
<div class="w3-container">
    <h2>Hurry Up It's Limited - Banner</h2>
    <div class="row">
        <div class="col-sm-3 col-md-6">
            <br/>
            ${link3}
        </div>
        <div class="col-sm-9 col-md-6">
            <h5><i>Your Code (Copy It)</i></h5>
            <textarea id="w3review3" name="w3review3" rows="4" cols="50">
                ${link3}
            </textarea>
        </div>
    </div>
</div>
<hr class="divider">
<script type="text/JavaScript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script async src="/js/banner-builder.js"></script>
</body>
</html>
