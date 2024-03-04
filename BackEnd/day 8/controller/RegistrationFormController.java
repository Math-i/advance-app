package com.example.springapp.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.springapp.entity.RegistrationFormEntity;
import com.example.springapp.service.RegistrationFormService;

import java.util.List;

@RestController

@RequestMapping("/registration-forms")

@CrossOrigin(origins="*")
public class RegistrationFormController {
    private final RegistrationFormService registrationFormService;
    @Autowired
    public RegistrationFormController(RegistrationFormService registrationFormService) {
        this.registrationFormService = registrationFormService;
    }
    @PostMapping("/submit")
    public ResponseEntity<RegistrationFormEntity> saveRegistrationForm(@RequestBody RegistrationFormEntity registrationFormEntity) {
        RegistrationFormEntity savedEntity = registrationFormService.saveRegistrationForm(registrationFormEntity);
        return ResponseEntity.ok(savedEntity);
    }
    @GetMapping("/all")
    public ResponseEntity<List<RegistrationFormEntity>> getAllRegistrationForms() {
        List<RegistrationFormEntity> registrationForms = registrationFormService.getAllRegistrationForms();
        return ResponseEntity.ok(registrationForms);
    }

    // Add other controller methods as needed
}