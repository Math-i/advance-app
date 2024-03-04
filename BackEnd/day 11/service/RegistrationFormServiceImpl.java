package com.example.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.entity.RegistrationFormEntity;
import com.example.springapp.repository.RegistrationFormRepository;

import java.util.List;

@Service
public class RegistrationFormServiceImpl implements RegistrationFormService {

    private final RegistrationFormRepository registrationFormRepository;

    @Autowired
    public RegistrationFormServiceImpl(RegistrationFormRepository registrationFormRepository) {
        this.registrationFormRepository = registrationFormRepository;
    }

    @Override
    public RegistrationFormEntity saveRegistrationForm(RegistrationFormEntity registrationFormEntity) {
        // Add any business logic if needed
        return registrationFormRepository.save(registrationFormEntity);
    }

    @Override
    public List<RegistrationFormEntity> getAllRegistrationForms() {
        return registrationFormRepository.findAll();
    }

    // Add other service methods as needed
}