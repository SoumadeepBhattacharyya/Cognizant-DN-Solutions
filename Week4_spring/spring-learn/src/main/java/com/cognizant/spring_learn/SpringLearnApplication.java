package com.cognizant.spring_learn;

import org.slf4j.Logger; // ✅ Add this line
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cognizant.spring_learn.model.Country;

@SpringBootApplication
public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(SpringLearnApplication.class, args);
        displayCountry();
        displayCountryScope();
    }

    public static void displayCountry() {
        LOGGER.debug("START - displayCountry()");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = (Country) context.getBean("country");
        LOGGER.debug("Country: {}", country);
        LOGGER.debug("END - displayCountry()");
    }

    private static void displayCountryScope() {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

        Country country1A = (Country) context.getBean("country1");
        Country country1B = (Country) context.getBean("country1");

        Country country2A = (Country) context.getBean("country2");
        Country country2B = (Country) context.getBean("country2");

        LOGGER.debug("country1A == country1B : {}", country1A == country1B); // true (singleton)
        LOGGER.debug("country2A == country2B : {}", country2A == country2B); // false (prototype)
    }
}
