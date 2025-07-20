package com.account.controller;

import org.springframework.web.bind.annotation.*;

import com.account.model.Account;


@RestController
@RequestMapping("/accounts")

public class AccountController {

     @GetMapping("/{number}")
    public Account getAccountDetails(@PathVariable String number) {
        return new Account(number, "savings", 234343);
    }
    
}
