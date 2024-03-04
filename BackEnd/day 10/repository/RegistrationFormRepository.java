package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springapp.entity.RegistrationFormEntity;

@Repository
public interface RegistrationFormRepository extends JpaRepository<RegistrationFormEntity, Long> {
    // You can add custom queries if needed
}