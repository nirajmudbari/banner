package com.example.tourwidget;

import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.*;

@Controller
public class HomeController {

    @GetMapping("/")
    public String homePage() {
        return "index";
    }

    @GetMapping("/widget")
    public String widgetBuilderPage(Model model) {
        model.addAttribute("widgetId", "TL-XXXXXXXX-test");
        return "widgetbuilder";
    }

    @GetMapping("/banner")
    public String BannerBuilderPage(Model model) {
        String generatedString = RandomStringUtils.random(7, true, true).toUpperCase();
//        String generatedString = RandomStringUtils.randomAlphanumeric(7);
        //check this alpha numeric value in database whether it exists before along with user id
        String link1 = "<a href=\"https://www.triplocator.com/?ref="+generatedString+"\">  <img src=\"https://www.triplocator.com/image/banner/tourunverified/ghorepani-poon-hill-trekking1/ghorepani-poon-hill-trek.jpg\"\n" +
                "         alt=\"\" width=\"120\" height=\"60\"/></a>";
        String link2 = "<a href=\"https://www.triplocator.com/?ref="+generatedString+"\">  <img src=\"https://www.triplocator.com/image/medium/utility/imagevideoslider/image-gallery/image-gallery1.jpg\"\n" +
                "         alt=\"\" width=\"600\" height=\"100\"/></a>";
        String link3 = "<a href=\"https://www.triplocator.com/?ref="+generatedString+"\">  <img src=\"https://www.triplocator.com/image/medium/tour/best-of-bhutan-tour/gangtey-gompa.jpg\"\n" +
                "         alt=\"\" width=\"300\" height=\"250\"/></a>";
        model.addAttribute("link1", link1);
        model.addAttribute("link2", link2);
        model.addAttribute("link3", link3   );
        return "bannerbuilder";
    }

    @GetMapping("/currency")
    public ResponseEntity<Map> getCurrency() {
        Map<String, String> currency = new LinkedHashMap<>();
        currency.put("USD", "$USD");
        currency.put("AUD", "$AUD");
        return new ResponseEntity<>(currency, HttpStatus.OK);
    }

    @GetMapping("/language")
    public ResponseEntity<Map> getLanguage() {
        Map<String, String> currency = new LinkedHashMap<>();
        currency.put("en", "English");
        currency.put("np", "Nepali");
        return new ResponseEntity<>(currency, HttpStatus.OK);
    }
}
