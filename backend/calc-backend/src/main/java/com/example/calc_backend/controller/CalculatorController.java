package com.example.calc_backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/calculator")
@CrossOrigin(origins = "*")
public class CalculatorController {

    @GetMapping("/add")
    public ResponseEntity<?> add(
        @RequestParam String a, 
        @RequestParam String b
    ) {
        try {
            double num1 = parseNumber(a);
            double num2 = parseNumber(b);
            return ResponseEntity.ok(num1 + num2);
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().body("Error: Invalid number format");
        }
    }

    @GetMapping("/subtract")
    public ResponseEntity<?> subtract(
        @RequestParam String a, 
        @RequestParam String b
    ) {
        try {
            double num1 = parseNumber(a);
            double num2 = parseNumber(b);
            return ResponseEntity.ok(num1 - num2);
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().body("Error: Invalid number format");
        }
    }

    @GetMapping("/multiply")
    public ResponseEntity<?> multiply(
        @RequestParam String a, 
        @RequestParam String b
    ) {
        try {
            double num1 = parseNumber(a);
            double num2 = parseNumber(b);
            return ResponseEntity.ok(num1 * num2);
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().body("Error: Invalid number format");
        }
    }

    @GetMapping("/divide")
    public ResponseEntity<?> divide(
        @RequestParam String a, 
        @RequestParam String b
    ) {
        try {
            double num1 = parseNumber(a);
            double num2 = parseNumber(b);
            
            if (num2 == 0) {
                return ResponseEntity.badRequest().body("Error: Cannot divide by zero");
            }
            
            return ResponseEntity.ok(num1 / num2);
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().body("Error: Invalid number format");
        }
    }

    private double parseNumber(String input) throws NumberFormatException {
        if (input == null || input.trim().isEmpty()) {
            throw new NumberFormatException("Empty input");
        }
        try {
            return Double.parseDouble(input);
        } catch (NumberFormatException e) {
            throw new NumberFormatException("Invalid number: " + input);
        }
    }
}