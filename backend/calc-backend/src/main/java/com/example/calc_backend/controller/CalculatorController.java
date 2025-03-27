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
            double num1 = Double.parseDouble(a);
            double num2 = Double.parseDouble(b);
            return ResponseEntity.ok(num1 + num2);
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().body("Invalid number format");
        }
    }

    @GetMapping("/subtract")
    public ResponseEntity<?> subtract(
        @RequestParam String a, 
        @RequestParam String b
    ) {
        try {
            double num1 = Double.parseDouble(a);
            double num2 = Double.parseDouble(b);
            return ResponseEntity.ok(num1 - num2);
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().body("Invalid number format");
        }
    }

    @GetMapping("/multiply")
    public ResponseEntity<?> multiply(
        @RequestParam String a, 
        @RequestParam String b
    ) {
        try {
            double num1 = Double.parseDouble(a);
            double num2 = Double.parseDouble(b);
            return ResponseEntity.ok(num1 * num2);
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().body("Invalid number format");
        }
    }

    @GetMapping("/divide")
    public ResponseEntity<?> divide(
        @RequestParam String a, 
        @RequestParam String b
    ) {
        try {
            double num1 = Double.parseDouble(a);
            double num2 = Double.parseDouble(b);
            
            if (num2 == 0) {
                return ResponseEntity.badRequest().body("Cannot divide by zero");
            }
            
            return ResponseEntity.ok(num1 / num2);
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().body("Invalid number format");
        }
    }
}