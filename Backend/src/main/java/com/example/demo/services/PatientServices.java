package com.example.demo.services;

/* Author : pasindu
 place: ACPT student*/

import com.example.demo.Repositories.PatientRepository;
import com.example.demo.entities.PatientEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientServices {

    @Autowired
    private PatientRepository patientRepository;

    public PatientEntity add(PatientEntity patient) {
        return patientRepository.save(patient);
    }

    public Iterable<PatientEntity> findAll() {
        return patientRepository.findAll();
    }

    public PatientEntity findById(Integer id) {
        return patientRepository.findById(id).orElse(null);
    }

    public void delete(PatientEntity patient) {
        patientRepository.delete(patient);
    }
}
