package com.example.calc_backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class CalculatorControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    // Test successful addition
    @Test
    public void testAdd_Success() {
        ResponseEntity<Double> response = restTemplate.getForEntity(
            "/api/calculator/add?a=5&b=3", 
            Double.class
        );
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(8.0, response.getBody(), 0.001);
    }

    // Test invalid input (non-number)
    @Test
    public void testAdd_InvalidInput() {
        ResponseEntity<String> response = restTemplate.getForEntity(
            "/api/calculator/add?a=5&b=abc", 
            String.class
        );
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertTrue(response.getBody().contains("Invalid number"));
    }

    // Test subtraction
    @Test
    public void testSubtract_Success() {
        ResponseEntity<Double> response = restTemplate.getForEntity(
            "/api/calculator/subtract?a=5&b=3", 
            Double.class
        );
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(2.0, response.getBody(), 0.001);
    }

    // Test multiplication
    @Test
    public void testMultiply_Success() {
        ResponseEntity<Double> response = restTemplate.getForEntity(
            "/api/calculator/multiply?a=5&b=3", 
            Double.class
        );
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(15.0, response.getBody(), 0.001);
    }

    // Test division success
    @Test
    public void testDivide_Success() {
        ResponseEntity<Double> response = restTemplate.getForEntity(
            "/api/calculator/divide?a=10&b=2", 
            Double.class
        );
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(5.0, response.getBody(), 0.001);
    }

    // Test division by zero
    @Test
    public void testDivide_ByZero() {
        ResponseEntity<String> response = restTemplate.getForEntity(
            "/api/calculator/divide?a=10&b=0", 
            String.class
        );
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertTrue(response.getBody().contains("Cannot divide by zero"));
    }

    // Test missing parameters
    @Test
    public void testAdd_MissingParams() {
        ResponseEntity<String> response = restTemplate.getForEntity(
            "/api/calculator/add", 
            String.class
        );
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
    }
}