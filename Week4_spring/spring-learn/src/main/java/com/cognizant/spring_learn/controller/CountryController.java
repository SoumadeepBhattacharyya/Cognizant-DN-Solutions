package com.cognizant.spring_learn.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.cognizant.spring_learn.model.Country;

@RestController
public class CountryController {

    @GetMapping("/country")
    public Country getCountryIndia() {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = (Country) context.getBean("country");
        return country;
    }

    // ✅ New method for Task 4
   @GetMapping("/countries/{code}")
public Country getCountryByCode(@PathVariable String code) {
    ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
    try {
        return (Country) context.getBean(code);
    } catch (Exception e) {
        throw new ResponseStatusException(
            HttpStatus.NOT_FOUND, "Country with code '" + code + "' not found", e);
    }
}

@GetMapping("/countries")
public List<Country> getAllCountries() {
    List<Country> countryList = new ArrayList<>();
    try {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        countryList = (List<Country>) context.getBean("countryList");
    } catch (Exception e) {
        System.err.println("Error while loading country list: " + e.getMessage());
        e.printStackTrace();
    }
    return countryList;
}



}
