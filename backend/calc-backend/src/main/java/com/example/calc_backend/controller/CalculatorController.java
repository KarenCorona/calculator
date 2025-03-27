
package com.example.calc_backend.controller;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/calculator")
@CrossOrigin(origins = "*")

public class CalculatorController {

    @GetMapping("/add")
    public ResponseEntity<?> add(@RequestParam String a, @RequestParam String b) {
        try {
            double num1 = Double.parseDouble(a);
            double num2 = Double.parseDouble(b);
            return ResponseEntity.ok(num1 + num2);
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().body("Invalid number format");
        }
    }

    @GetMapping("/subtract")
    public double subtract(@RequestParam double a, @RequestParam double b) {
        return a - b;
    }

    @GetMapping("/multiply")
    public double multiply(@RequestParam double a, @RequestParam double b) {
        return a * b;
    }

    @GetMapping("/divide")
    public double divide(@RequestParam double a, @RequestParam double b) {
        if (b == 0) {
            throw new IllegalArgumentException("Divisor cannot be zero");
        }
        return a / b;
    }
}