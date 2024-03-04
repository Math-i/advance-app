package com.example.springapp.service;

import java.util.List;

import com.example.springapp.entity.RegistrationFormEntity;

public interface RegistrationFormService {

    RegistrationFormEntity saveRegistrationForm(RegistrationFormEntity registrationFormEntity);

    List<RegistrationFormEntity> getAllRegistrationForms();

    // Add other service methods as needed
}