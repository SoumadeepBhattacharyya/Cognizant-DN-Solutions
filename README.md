# Cognizant Digital Nurture – Week 1 Solutions

This repository contains my hands-on solutions for Week 1 of the Cognizant Digital Nurture Program. The exercises are based on Design Patterns and Algorithms in Java.

##  Folder Structure
Week1_DesignPatternsAndAlgorithms/
├── 1_SingletonPattern/
│ ├── Code/ // Java implementation of Singleton Pattern
│ └── Output/ // Screenshot of program output
├── 2_FactoryMethodPattern/
│ ├── Code/ // Factory Method Pattern with multiple document classes
│ └── Output/ // Screenshot of output
├── 3_EcommerceSearch/
│ ├── Code/ // Linear & Binary Search implementations
│ └── Output/ // Screenshot of output comparison
└── 4_FinancialForecasting/
├── Code/ // Recursive forecast function implementation
└── Output/ // Screenshot of result 


## ✅ Topics Covered
- Singleton Design Pattern
- Factory Method Pattern
- Searching Algorithms (Linear & Binary Search)
- Recursive Financial Forecasting

## 📌 Notes
- All code is written in Java.
- Output screenshots are included in each respective folder.
- Folder naming follows the format: `[Week Number]_[Skill/Topic]`



# Week 2 – PL/SQL and Java Testing (JUnit, Mockito, SLF4J)

## 🔹 1. Control Structures
- PL/SQL blocks to apply interest discounts, promote VIPs, and send loan reminders.
- ✅ Output screenshots attached.

## 🔹 2. Stored Procedures
- Procedures:
  - `ProcessMonthlyInterest`
  - `UpdateEmployeeBonus`
  - `TransferFunds`

## 🔹 3. JUnit Testing
- Setup of Maven project with JUnit
- Usage of assertions: `assertEquals`, `assertTrue`, `assertNull`, etc.

## 🔹 4. Mockito
- Mocking and verifying external API calls.
- Used `when()`, `verify()` for test interactions.

## 🔹 5. SLF4J Logging
- Logged warning and error messages using SLF4J + Logback.
- Output confirms log levels.

---

### 📂 Structure
Organized using:  
`[SerialNumber]_[TaskName]/Code + Output`

Happy Coding! 🚀


---

Feel free to explore the code and reach out if you have any questions!

---

📚 Week 3 – Spring Framework
This week covers the basics of setting up and using the Spring Framework in a Java application using Maven.

✅ Exercise 1: Configuring a Basic Spring Application
Created a Maven project: LibraryManagement

Added Spring Core dependency in pom.xml

Configured applicationContext.xml to define BookService and BookRepository beans

Created Java classes in appropriate packages:

com.library.service.BookService

com.library.repository.BookRepository

Verified output using a main class: "Spring in action"

📎 Output: Output/1_ConfiguringSpring_Output.png

✅ Exercise 2: Implementing Dependency Injection
Updated applicationContext.xml to inject BookRepository into BookService using setter-based DI

Modified BookService class to include a setter method

Successfully tested bean wiring and execution

📎 Output: Output/2_DependencyInjection_Output.png

✅ Exercise 4: Creating and Configuring Maven Project
Configured Maven Compiler Plugin for Java 1.8

Added Spring dependencies: spring-context, spring-aop, spring-webmvc

Verified successful Maven build

📎 Output: Output/4_MavenProjectSetup_Output.png
